<template>
  <el-card class="mirrorsearch">
    <el-form :inline="true">
      <el-form-item label="镜像名">
        <el-input placeholder="请输入镜像名" v-model="keyword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="default"
          :disabled="keyword ? false : true"
          @click="searchMirror"
          >搜索</el-button
        >
        <el-button type="primary" size="default">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <!-- table展示数据 -->
  <el-card class="mirrorTable">
    <div v-for="(item, index) in getMirrorInfo" :key="index">
      <el-card class="mirrorCard">
        <div class="mirrorTitleLeft">
          <h1 style="margin-top: 40px">{{ item.name }}</h1>
        </div>

        <div class="mirrorIntroduce">
          <el-row style="margin-top: 40px">
            <el-col :span="3">
              <el-button size="large">{{ item.CPU }}</el-button>
            </el-col>
            <el-col :span="3">
              <el-button size="large">{{ item.memory }}</el-button>
            </el-col>
            <el-col :span="3">
              <el-button size="large">{{ item.dataDisk }}</el-button>
            </el-col>
          </el-row>
          <p style="margin-top: 4px">{{ item.introduce }}</p>
        </div>

        <div class="mirrorTitleRight">
          <el-popover placement="top" width="160" v-model="visible">
            <p>确添加该镜像吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="" type="text" @click="visible = false"
                >取消</el-button
              >
              <el-button type="primary" size="" @click="save()">确定</el-button>
            </div>
            <el-button
              type="primary"
              size="large"
              style="margin-top: 40px"
              @click="addMirror"
              :disabled="disabled"
              >安装</el-button
            >
          </el-popover>
        </div>
      </el-card>
    </div>
    <!-- 分页 -->
    <el-pagination
      style="margin-top: 20px; margin-left: 48%"
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[5, 7, 9, 11]"
      :background="true"
      layout="prev, pager, next,total"
      :total="total"
      @current-change="getMirrorInfo"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, nextTick } from "vue";
import { reqUserInfo, reqDeleteUser } from "@/api/acl/user/index";
import { UserResponseData, Records, User } from "@/api/acl/user/type";
import { ElMessage } from "element-plus";
import useLayOutSettingStore from "@/store/modules/setting";
// 路由跳转
import { useRouter } from "vue-router";
// 默认页数
let pageNo = ref(1);
// 每页显示条数
let pageSize = ref(7);
// 总条数
let total = ref<number>(0);
// 存储的数组v
let mirrorAll = ref<Records>([]);
// 存储已有品牌的数组
let ContainerArr = ref<Records>([]);
// 对话框
let visible = ref<boolean>(false);
// 获取form实例对象
let form = ref<any>(null);
// 收集修改的表单数据
let RoleParam = reactive({});
// 获取路由
let $router = useRouter();
// 添加按钮的属性
let disabled = ref<boolean>(false);
// 搜索关键字
let keyword = ref<string>("");
// 获取模板
let settingStore = useLayOutSettingStore();
// 挂载
onMounted(() => {
  getMirrorInfo(1);
});

// 获取镜像信息
const getMirrorInfo = async (pager: number) => {
  pageNo.value = pager;
  const result: UserResponseData = await reqUserInfo(
    pageNo.value,
    pageSize.value,
    keyword.value
  );

  if (result.code === 200) {
    userAll.value = result.data.records;
    total.value = result.data.total;
  }
};

// 添加按钮
const addMirror = () => {
  visible.value = true;
};

// 添加镜像到桌面的确定按钮
const save = async () => {
  // 关闭弹窗
  visible.value = false;
  // 添加成功接口
  const result: any = await reqAddUser(RoleParam);
  if (result.code === 0) {
    ElMessage({
      type: "success",
      message: "添加成功",
    });
    // 跳转路由到桌面
    $router.push({ path: "/container/containermessage" });
    // 设置按钮不可点击
    disabled.value = true;
    // 重新获取数据
    getUserInfo(pageNo.value);
    //
  } else {
    ElMessage({
      type: "error",
      message: "修改失败",
    });
  }
};

// 搜索按钮
const searchMirror = async () => {
  getMirrorInfo();
  // 清空
  usernamekeyword.value = "";
  nicknamekeyword.value = "";
};
//重置的方法
const reset = () => {
  // 获取存储在仓库中的数据
  settingStore.reflash != settingStore.reflash;
};
</script>

<style scoped>
.mirrorsearch {
  margin: 12px 10px;
  padding: 2px 7px 2px 30px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  justify-content: space-between;
  background-color: rgb(193, 208, 246, 0.7);
}
.mirrorTable {
  margin: 5px 10px;
  padding: 2px 3px 0px 3px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  justify-content: space-between;
  background-color: rgb(193, 208, 246, 0.7);

  .mirrorCard {
    border-radius: 5px;
    background-color: rgb(243, 246, 253);
    width: 1400px;
    height: 140px;
    padding: 2px 3px 0px 3px;

    .mirrorTitleLeft {
      width: 220px;
      height: 120px;
      background-color: rgb(176, 54, 54);
      float: left;
      padding: 5px 0px;
      h1 {
        font-size: 32px;
        font-weight: 500;
        float: left;
        text-align: center;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
      }
    }
  }
  .mirrorIntroduce {
    width: 800px;
    background-color: rgb(44, 181, 147);
    float: left;
    height: 140px;
    height: 120px;
    .el-button {
      float: left;
      width: 80px;
      height: 40px;
      .span {
        font-size: 10px;
        font-weight: 500;
      }
    }
  }
  .mirrorTitleRight {
    float: left;
    height: 140px;
    width: 300px;
    background-color: rgb(76, 44, 181);
    .el-button {
      margin: 60px 140px;
    }
  }
}
</style>
