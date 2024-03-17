<template>
  <el-card class="search">
    <el-form :inline="true" style="margin-top: 20px">
      <el-form-item label="设备名：">
        <el-input
          placeholder="请输入设备名"
          v-model="usernamekeyword"
          style="background: rgb(242, 242, 242, 0.5)"
        ></el-input>
      </el-form-item>
      <el-form-item label="终端类型：">
        <el-input
          placeholder="请输入终端类型"
          v-model="nicknamekeyword"
        ></el-input>
      </el-form-item>
      <el-form-item label="登陆时间：">
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="default"
          :disabled="usernamekeyword || nicknamekeyword ? false : true"
          @click="search"
          >搜索</el-button
        >
        <el-button type="primary" size="default " @click="reset()"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
  <!-- table展示数据 -->
  <el-card class="table">
    <el-table class="eltable" border :data="userAll" stripe>
      <el-table-column type="selection"></el-table-column>
      <el-table-column
        label="#"
        type="index"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="ID"
        prop="id"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="用户名"
        prop="name"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="类型"
        prop="roleName"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="URL"
        prop="roleName"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="时间"
        prop="createTime"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="文件"
        prop="updateTime"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column label="操作" width="200px" align="center">
        <template #="{ row, $index }">
          <el-button
            type="primary"
            size="small"
            icon="Edit"
            @click="updateContainer"
            >编辑</el-button
          >

          <el-popconfirm
            :title="`确定要删除${row.tmName}`"
            width="200px"
            @confirm="row.id;"
          >
            <template #reference>
              <el-button
                slot="reference"
                icon="Delete"
                color="red"
                size="small"
                margin-left="10px"
                @click="removeContainer(row)"
                >删除</el-button
              >
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      style="margin-top: 20px"
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[5, 7, 9, 11]"
      :background="true"
      layout="prev, pager, next,jumper,->,sizes,total"
      :total="total"
      @current-change="getUserInfo"
    />
  </el-card>

  <el-dialog
    title="修改容器信息"
    v-model="centerDialogVisible"
    :title="RoleParam ? '更新' : '添加'"
  >
    <el-form :model="RoleParam" :rules="rules" ref="form">
      <el-form-item label="容器名称">
        <el-input placeholder="请输入容器名称"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 分页 -->
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
.search {
  margin: 5px 10px;
  padding: 2px 7px 9px 9px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  justify-content: space-between;
  background-color: rgb(193, 208, 246, 0.7);
}

.table {
  margin: 12px 10px;
  padding: 2px 7px 9px 9px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  justify-content: space-between;
  border-radius: 20px;
  background-color: rgb(193, 208, 246, 0.7);
  .eltable {
    border-radius: 20px;
    background-color: rgb(193, 208, 246);
  }
}
</style>
