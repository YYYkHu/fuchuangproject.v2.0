<template>
  <div class="container">
    <div class="content head">
        <div class="head-pic-box">
          <div class="head-img"></div>
          <div class="head-username" style="font-size: 15pt;">Hi,<span>{{ userData.username }}</span></div>
        </div>
        <div class="head-infor-box">
          <div class="head-infor-id" style="color: rgb(191,191,191);">id：<span style="color: rgb(216,197,239);">{{ userData.userId }}</span></div>
          <div class="head-infor-date">注册日期：{{ userData.recordDate }}</div>
        </div>
        <div class="head-ico">
          <div class="user-ico"></div>
        </div>
    </div>
    <div class="content basic-infor">
        <div class="basic-title">基本信息</div>
        <div class="basic-detail">
          <div>
            <div>用户名：{{ userData.username }}</div>
            <div>用户类型：{{ userData.usertype }}</div>
            <div>ID：{{ userData.userId }}</div>
            <div>性别：<input type="checkbox">{{ userData.sex }}</div>
            <div>年龄：{{ userData.age }}</div>
            <div>电话：{{ userData.phone }}</div>
            <div>邮箱：{{ userData.email }}</div>
            <div>职业：{{ userData.profession }}</div>
            <div>应用场景：{{ userData.application }}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/views/user/style.css'
import { ref, onMounted, reactive } from "vue";
let username=ref('Tom')
let userId=ref('1893746197410')
let recordDate=ref('2023年5月1日')
let userData=reactive({
  username:"Tom",
  usertype:"普通用户",
  userId:"1893746197410",
  sex:"男",
  age:"27",
  phone:"10086",
  email:"222234988@qq.com",
  profession:"程序员",
  application:"xxxxx", 
  recordDate:"2023年5月1日"
})
// import { reqUserInfo, reqAddUpdateUser } from "@/api/acl/user/index";
// import { UserResponseData, Records, User } from "@/api/acl/user/type";
// import { ElMessage } from "element-plus";
// // 默认页数
// let pageNo = ref(1);
// // 每页显示条数
// let pageSize = ref(7);
// // 总条数
// let total = ref<number>(0);
// // 存储的数组
// let userAll = ref<Records>([]);
// // 对话框的显示与隐藏
// let centerDialogVisible = ref<boolean>(false);
// // 收集用户的参数
// let userParams = reactive<User>({
//   username: "",
//   name: "",
//   password: "",
// });

// // 挂载
// onMounted(() => {
//   getUserInfo();
// });

// // 获取用户信息
// const getUserInfo = async (pager = 1) => {
//   pageNo.value = pager;
//   const result: UserResponseData = await reqUserInfo(
//     pageNo.value,
//     pageSize.value
//   );
//   if (result.code === 200) {
//     userAll.value = result.data.records;
//     total.value = result.data.total;
//   }
// };
// // 添加用户信息
// const addUser = () => {
//   centerDialogVisible.value = true;

//   // 重置表单
//   Object.assign(userParams, {
//     username: "",
//     name: "",
//     password: "",
//   });
// };
// // 更新用户信息
// const updateUser = (row: User) => {
//   centerDialogVisible.value = true;
// };
// // 定义确定按钮的事件回调
// const save = async () => {
//   // 点击保存,判断是更新还是添加
//   let result: any = await reqAddUpdateUser(userParams);
//   if (result.code === 200) {
//     centerDialogVisible.value = false;
//     // 提示消息
//     ElMessage({
//       message: userParams.id ? "更新成功" : "添加成功",
//       type: "success",
//     });
//     // 重新获取数据
//     getUserInfo();
//   } else {
//     ElMessage({
//       message: "操作失败",
//       type: "error",
//     });
//   }
// };

// // 校验函数
// const validatorUsername = (rule: any, value: any, callback: any) => {
//   if (value.trim().length >= 5) {
//     callback();
//   } else {
//     callback(new Error("用户名长度不能小于5"));
//   }
// };
// const validatorname = (rule: any, value: any, callback: any) => {
//   if (value.trim().length >= 5) {
//     callback();
//   } else {
//     callback(new Error("用户名长度不能小于5"));
//   }
// };
// const validatorpassword = (rule: any, value: any, callback: any) => {
//   if (value.trim().length >= 5) {
//     callback();
//   } else {
//     callback(new Error("用户名长度不能小于5"));
//   }
// };

// // 自定义校验规则
// const rules = {
//   username: [
//     {
//       required: true,
//       message: "用户名不能为空",
//       trigger: "blur",
//       validator: validatorUsername,
//     },
//   ],
//   name: [
//     {
//       required: true,
//       message: "姓名不能为空",
//       trigger: "blur",
//       validator: validatorname,
//     },
//   ],
//   password: [
//     {
//       required: true,
//       message: "密码不能为空",
//       trigger: "blur",
//       validator: validatorpassword,
//     },
//   ],
// };
</script>

<style scoped></style>
