<template>
  <div class="body">
    <div class="cont" ref="cont">
      <div class="form sign-in" ref="loginForms">
        <h2>Sign In</h2>
        <label>
          <span>Name</span>
          <input type="name" name="name" v-model="loginForm.username" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" v-model="loginForm.password" />
        </label>
        <button class="submit" type="button" @click="login">登录</button>
        <p class="forgot-pass">Forgot Password ?</p>
      </div>

      <div class="sub-cont">
        <div class="img">
          <div class="img-text m-up">
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div class="img-text m-in">
            <h2>One of us?</h2>
            <p>
              If you already has an account, just sign in. We've missed you!
            </p>
          </div>
          <div class="img-btn" @click="switchPage()">
            <span class="m-up">Sign Up</span>
            <span class="m-in">Sign In</span>
          </div>
        </div>
        <div class="form sign-up" ref="registForms">
          <h2>Sign Up</h2>
          <label>
            <span>Name</span>
            <input type="text" v-model="registForm.username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" v-model="registForm.password" />
          </label>
          <label>
            <span>Confirm Password</span>
            <input type="password" v-model="registForm.confirmPassword" />
          </label>
          <button type="button" class="submit" @click="regist">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "@/views/login/style.css";

// 引入用户相关的仓库
import useLoginStore from "@/store/modules/user";
let userStore = useLoginStore();

// 消息提示
import { ElNotification } from "element-plus";
// 引入路由
import { useRouter, useRoute } from "vue-router";
// 获取路由对象
let $route = useRoute();
// 引入获取当前时间的函数``````````````
import { getTime } from "@/utils/time";
// 获取路由组件
let $router = useRouter();

export default {
  data() {
    return {
      loading: false,
      loginForm: {
        username: "",
        password: "",
      },
      registForm: {
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    switchPage() {
      this.$refs.cont.classList.toggle("signUp");
    },
    // 登录功能实现
    async login() {
      // 验证表单是否通过验证，如果通过验证，则执行登录操作，否则不执行登录操作。
      await this.validate();
      // 开启加载效果
      this.loading = true;
      try {
        // 登陆成功
        await userStore.userLogin(this.loginForm);
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
        this.loading = false;
      } catch (error) {
        // 关闭加载效果
        this.loading = false;
        //登陆失败的提示信息
        ElNotification({
          type: "error",
          message: (error as Error).message,
        });
      }
    },
    validate() {
      if (this.loginForm.username.length < 3) {
        ElNotification({
          type: "error",
          message: (new Error("用户名长度至少为3位") as Error).message,
        });
      } else if (this.loginForm.password.length < 6) {
        ElNotification({
          type: "error",
          message: (new Error("密码长度至少为6位") as Error).message,
        });
      } else {
        return;
      }
    },
    // 注册功能实现
    async regist() {
      // 验证表单是否通过验证，如果通过验证，则执行注册操作，否则不执行注册操作。
      await this.validateRegist();
      // 开启加载效果
      this.loading = true;
      try {
        // 登陆成功
        await userStore.userRegist(this.loginForm);
        // 弹出提示信息
        ElNotification({
          type: "success",
          message: "注册成功",
          title: `Hi,${getTime()}`,
        });
        // 关闭加载效果
        this.loading = false;
      } catch (error) {
        // 关闭加载效果
        this.loading = false;
        //登陆失败的提示信息
        ElNotification({
          type: "error",
          message: (error as Error).message,
        });
      }
    },
    validateRegist() {
      if (this.registForm.username.length < 3) {
        console.log(this.registForm.username);
        ElNotification({
          type: "error",
          message: (new Error("用户名长度至少为3位") as Error).message,
        });
      } else if (this.registForm.password.length < 6) {
        ElNotification({
          type: "error",
          message: (new Error("密码长度至少为6位") as Error).message,
        });
      } else if (this.registForm.password !== this.registForm.confirmPassword) {
        ElNotification({
          type: "error",
          message: (new Error("确认密码错误") as Error).message,
        });
      } else {
        return;
      }
    },
  },
};
</script>

<style></style>
