<template>
  <!-- 顶部右侧静态 -->
  <!-- <el-button type="primary" size="small" icon="Refresh" circle></el-button>
  <el-button type="primary" size="small" icon="FullScreen" circle></el-button>

  <el-button type="primary" size="small" icon="Setting" circle></el-button> -->
  <img
    :src="userStore.avatar"
    style="width: 40px; height: 40px; margin: 0px 20px; border-radius: 100%"
    border-radius="50%"
  />
  <!-- <el-tooltip placement="top">
    <div slot="content">多行信息<br />第二行信息</div>
    <el-button>Top center</el-button>
  </el-tooltip> -->
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
// 获取用户相关的小仓库
import useUserStore from "@/store/modules/user";

// 获取路由对象
let userStore = useUserStore();
let $router = useRouter();
let $route = useRoute();
// 退出登录
const logout = async () => {
  // 1、回调，发送退出请求，本次token无效：
  // 2、仓库中关于用户相关的信息清除
  // 3、跳转到login登陆页面
  await userStore.userLogout();
  // 获取了路由器对象
  $router.push({ path: "/login", query: { redirect: $route.path } });
};

// 返回用户信息
const getUserThing = () => {
  return userStore.username;
};
</script>

<script lang="ts">
export default {
  name: "Setting",
};
</script>

<style scoped>
.el-dropdown-link {
  display: block;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  margin: 20px 0 30px;
  color: black;
  font-family: "Nunito", sans-serif;
}
</style>
