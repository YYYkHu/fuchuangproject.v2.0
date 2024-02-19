<template>
  <!-- 顶部右侧静态 -->
  <el-button type="primary" size="small" icon="Refresh" circle></el-button>
  <el-button type="primary" size="small" icon="FullScreen" circle></el-button>

  <el-button type="primary" size="small" icon="Setting" circle></el-button>
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px"
    margin="0px 10px"
    border-radius="50%"
  />
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
</script>

<script lang="ts">
export default {
  name: "Setting",
};
</script>

<style scoped></style>
