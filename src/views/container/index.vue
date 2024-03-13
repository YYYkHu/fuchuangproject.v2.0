<template>
  <el-card class="tutorial-bar">
    <div>
      <div class="boxleft">
        <img
          src="@\assets\images\yindao2.png"
          alt=""
          style="border-radius: 15px"
        />
      </div>
      <div class="boxright" style=""></div>
    </div>
  </el-card>
  <!-- table展示数据 -->
  <div class="graghthree">
    <el-card style="height: 260px">
      <div style="height: 240px">
        <div class="cardTop">
          <h1 class="h1">默认桌面名</h1>
          <img
            src="@/assets/icons/shutdown.svg"
            alt=""
            class="svg"
            @click="visible = true"
          />
        </div>
        <div class="introduce">
          <!-- 插图 -->
          <img
            src="@/assets/icons/deskCard-1.svg"
            alt=""
            class="img"
            style="width: 200px; height: 200px"
          />
          <div class="p">
            <p>桌面ID:{{ desktopId }}</p>
            <br />
            <p>桌面配置:{{ desktopId }}</p>
            <br />
            <p>桌面网络:{{ desktopId }}</p>
            <br />
          </div>
        </div>
        <div class="card-footer">
          <el-button @click="visible = true"> 开机 </el-button>
        </div>
        <!-- 动态显示距上次开关机时间 -->
        <el-dialog title="提示" :visible.sync="visible" width="30%">
          <template #footer>
            <span slot="footer" class="dialog-footer">
              <el-button @click="visible = false">取 消</el-button>
              <el-button type="primary" @click="save">确 定</el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </el-card>

    <el-card style="height: 260px">
      <div style="height: 240px">
        <div class="cardTop">
          <h1 class="h1">默认桌面名</h1>
          <!-- 关机图标，绑定关机事件 -->
          <img src="@/assets/icons/shutdown.svg" alt="" class="svg" />
          <!-- 插图 -->
        </div>
        <div class="introduce">
          <img
            src="@/assets/icons/deskCard-1.svg"
            alt=""
            class="img"
            style="width: 200px; height: 200px"
          />
          <div class="p">
            <p>桌面ID:{{ desktopId }}</p>
            <br />
            <p>桌面配置:{{ desktopId }}</p>
            <br />
            <p>桌面网络:{{ desktopId }}</p>
            <br />
          </div>
        </div>
        <div class="card-footer">
          <el-button> 开机 </el-button>
        </div>
        <!-- 动态显示距上次开关机时间 -->
      </div>
    </el-card>
    <el-card style="height: 260px">
      <div style="height: 240px"></div>
    </el-card>
  </div>

  <div class="graghthree">
    <el-card style="height: 260px">
      <div ref="usechart" style="height: 240px"></div>
    </el-card>
    <el-card style="height: 260px">
      <div ref="userchartone" style="height: 240px"></div>
    </el-card>
    <el-card style="height: 260px">
      <div ref="userchartbrokenline" style="height: 240px"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, nextTick } from "vue";
// 引入接口信息
import {
  reqUserInfo,
  reqDeleteUser,
  reqAddUpdateUser,
} from "@/api/acl/user/index";
import { UserResponseData, Records, User } from "@/api/acl/user/type";
import { ElMessage } from "element-plus";
import useLayOutSettingStore from "@/store/modules/setting";
// 默认页数
let pageNo = ref(1);
// 每页显示条数
let pageSize = ref(7);
// 总条数
let total = ref<number>(0);
// 存储的数组
let userAll = ref<Records>([]);
// 存储已有品牌的数组
let ContainerArr = ref<Records>([]);
// 对话框
let centerDialogVisible = ref<boolean>(false);
// 获取form实例对象
let form = ref<any>(null);
// 搜索用户名称信息
const usernamekeyword = ref<string>("");
// 搜索用户昵称信息
const nicknamekeyword = ref<string>("");
// 获取用户信息
let settingStore = useLayOutSettingStore();

// 桌面ID
let desktopId = ref<string>("");

// 展示关机按钮
const visible = ref<boolean>(false);

const showDialog = () => {
  visible.value = true;
};

// 挂载
onMounted(() => {
  getUserInfo();
});

// 获取用户信息
const getUserInfo = async (pager = 1) => {
  pageNo.value = pager;
  const result: UserResponseData = await reqUserInfo(
    pageNo.value,
    pageSize.value,
    usernamekeyword.value,
    nicknamekeyword.value
  );

  if (result.code === 200) {
    userAll.value = result.data.records;
    total.value = result.data.total;
  }
};
// 删除用户
const removeContainer = async (id: number) => {
  let result = await reqDeleteUser(id);
  if (result.code == 200) {
    // 剔除成功的提示
    ElMessage({
      type: "success",
      message: "删除成功",
    });
    // 删除成功后重新获取数据
    let newPageNo = pageNo.value;
    ContainerArr.value = ContainerArr.value.filter(
      (trademark) => trademark.id !== id
    );
    // 如果还有剩余的品牌数据，则保持在当前页；否则判断是否为第一页，如果是第一页则保持在第一页，否则退回到上一页
    if (ContainerArr.value.length === 0) {
      newPageNo = Math.max(1, newPageNo - 1);
    }
    // 重新获取数据
    getUserInfo(newPageNo);
  } else {
    ElMessage({
      type: "error",
      message: "删除失败",
    });
  }
};
// 修改用户信息 括号中绑定对象row:类型
const updateContainer = (row: User) => {
  // 弹出对话框
  centerDialogVisible.value = true;
  // 修改用户信息时，将当前行的数据赋值给表单
  Object.assign(RoleParam, row);
};
// 收集修改的表单数据
let RoleParam = reactive({});
//  自定义校验规则
const validatorName = (rule: any, value: any, callback: any) => {
  if (value.trim().length >= 2) {
    callback();
  } else {
    callback(new Error("用户名不能小于2位"));
  }
};
// 校验规则
const rules = {
  containerName: [
    { required: true, trigger: "blur", validator: validatorName },
  ],
};
// 确定按钮的回调
const save = async () => {
  // 表单校验通过，才调用接口函数
  await form.value.validate();
  // 添加更新请求
  let result = await reqAddUpdateUser(RoleParam);
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: "修改成功",
    });
    // 关闭弹窗
    centerDialogVisible.value = false;
    // 重新获取数据
    getUserInfo(pageNo.value);
  } else {
    ElMessage({
      type: "error",
      message: "修改失败",
    });
  }
};

// 添加用户的方法
const addContainer = () => {
  centerDialogVisible.value = true;
  // 清空数据
  Object.assign(RoleParam, {
    roleName: "",
  });
  // 清空上一次表单的错误结果,roleName为校验字段
  nextTick(() => {
    form.value.clearValidate("roleName");
  });
};

// 搜索方法
const search = () => {
  getUserInfo();
  // 清空
  usernamekeyword.value = "";
  nicknamekeyword.value = "";
};
//重置的方法
const reset = () => {
  // 获取存储在仓库中的数据
  settingStore.reflash != settingStore.reflash;
};

// 终端类型

// 登陆时间
</script>

<style scoped>
.tutorial-bar {
  height: 300px;
  margin: 10px 10px;
  padding: 0 0;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  justify-content: space-between;
  /* background-image: url("../src/assets/images/yindao2.png"); */
  background-color: rgba(255, 255, 255, 0.8);

  .boxright {
    float: right;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 20px;
    }

    .title {
      font-size: 25px;
      margin-bottom: 30px;
    }
    .bottom {
      font-size: italic;
      color: rgb(193, 208, 246);
    }
  }
  .boxleft {
    float: left;
  }
}
.graghthree {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 48%;
    margin: 0 10px;
    padding: 5px 7px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.8);

    .cardTop {
      .h1 {
        font-size: 40px;
        margin-bottom: 10px;
        color: rgb(36, 39, 45);
        font-weight: 700;
        float: left;
        /* 居中 */
        /* text-align: center; */
      }
      .svg {
        width: 18%;
        height: 24px;
        float: right;
        /* 固定位置 */
        position: relative;
      }
    }
    .introduce {
      justify-content: space-between;
      height: 1px;
      /* 居中 */
      /* text-align: center; */
      .p {
        font-size: 20px;
        color: rgb(36, 39, 45);
        font-weight: 700;
        float: left;
      }
      .img {
        float: right;

        margin: 0px 5px;
      }
    }

    .card-footer {
      /* 指定按钮位于第三行 */
      bottom: 100px;
      margin-top: 180px;
      margin-left: 100px;
      width: 100%;
    }
  }
}
</style>
