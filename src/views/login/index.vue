<template>
  <div class="login_container">
    <particles number="59" />
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24" class="register">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>脆脆鲨</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_button"
              type="primary"
              size="default"
              @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
// 引入用户相关的仓库
import useLoginStore from "@/store/modules/user";
let userStore = useLoginStore();
// 收集表单数组
import { reactive, ref } from "vue";
// 消息提示
import { ElNotification } from "element-plus";
// 引入路由
import { useRouter, useRoute } from "vue-router";
// 获取路由对象
let $route = useRoute();
// 引入获取当前时间的函数``````````````
import { getTime } from "@/utils/time";
// 获取le-from元素
let loginForms = ref();
// 获取路由组件
let $router = useRouter();
// 定义一个加载效果
let loading = ref(false);

let loginForm = reactive({
  username: "admin",
  password: "111111",
});

// 登录功能实现
const login = async () => {
  // 验证表单是否通过验证，如果通过验证，则执行登录操作，否则不执行登录操作。
  await loginForms.value.validate();
  // 开启加载效果
  loading.value = true;
  try {
    // 登陆成功
    await userStore.userLogin(loginForm);
    // 编程式导航跳转到展示数据首页
    // 判断是否包含redirect参数，如果包含，则跳转到redirect参数指定的页面，否则跳转到首页
    let redirect: any = $route.query.redirect as string;
    $router.push({ path: redirect ? redirect : "/" });
    // 弹出提示信息
    ElNotification({
      type: "success",
      message: "欢迎回来",
      title: `Hi,${getTime()}`,
    });
    // 关闭加载效果
    loading.value = false;
  } catch (error) {
    // 关闭加载效果
    loading.value = false;
    //登陆失败的提示信息
    ElNotification({
      type: "error",
      message: (error as Error).message,
    });
  }
};

const validatorUsername = (_rule: any, value: any, callback: any) => {
  // rules表示当前的校验规则对象
  // value表示当前要校验的字段值，即本框中的内容
  // 函数：如果校验通过，则调用callback()，如果校验不通过，则调用callback()并传入错误提示信息
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error("用户名长度至少为5位"));
  }
};

const validatorPassword = (_rule: any, value: any, callback: any) => {
  // rules表示当前的校验规则对象
  // value表示当前要校验的字段值，即本框中的内容
  // 函数：如果校验通过，则调用callback()，如果校验不通过，则调用callback()并传入错误提示信息
  if (value.length >= 6) {
    callback();
  } else {
    callback(new Error("密码长度至少为6位"));
  }
};

// 定义表单校验需要的配置对象
const rules = {
  username: [
    // {required:true,message:'用户名不能为空',trigger:'blur'},
    { trigger: "change", validator: validatorUsername },
  ],
  password: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
    { trigger: "change", validator: validatorPassword },
  ],
};
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  // background: url('@/assets/images/img_denglu_bj.jpg') no-repeat center center;
  background-size: cover;
  background-color: #2b2f4b;
  .register {
    position: relative;
    width: 80%;
    top: 0vh;
    background-color: rgb(194, 32, 94);
    background-size: rover;
    margin: 20%;
    padding: 1%;
    left: 25%;
    .login_form {
      position: relative;
      width: 60%;
      background-color: rgb(75, 123, 5);
      background-size: rover;
      padding: 1%;
      h1 {
        color: white;
        font-size: 40px;
      }
      h2 {
        font-size: 20px;
        color: white;
        margin: 20px 0px;
      }
      .login_button {
        width: 100%;
      }
    }
  }
}
</style>
