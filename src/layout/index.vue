<template>
  <div class="layout_container">
    <div
      class="layout_slider"
      :class="{ fold: LayOutSettingStore.fold ? true : false }"
    >
      <Logo></Logo>
      <!-- 展示 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu
          :default-active="$route.path"
          background-color="#304156"
          text-color="white"
          active-text-color="red"
          :collapse="LayOutSettingStore.fold"
        >
          <!-- <el-menu-item index="1">首页 </el-menu-item>
                    <el-menu-item index="2">数据大屏</el-menu-item> -->
          <!-- 折叠菜单 -->
          <!-- <el-sub-menu index="3">
                            <template #title>
                                <span>权限管理</span>
                            </template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-sub-menu>  -->

          <!--根据路由动态生成菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div
      class="layout_tabbar"
      :class="{ fold: LayOutSettingStore.fold ? true : false }"
    >
      <!-- layout顶部组件tabbar  -->
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区域 -->
    <div
      class="layout_main"
      :class="{ fold: LayOutSettingStore.fold ? true : false }"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入logo组件
import Logo from "./logo/index.vue";
// 引入菜单子组件
import Menu from "./menu/index.vue";
// 引入右侧菜单展示区域
// import Main from "./main/index.vue";
// 获取路由对象
import { useRoute } from "vue-router";
// 引入tabbar 组件
import Tabbar from "./tabbar/index.vue";
//引入main
// import Main from "./main/index.vue";
// 获取用户相关的小仓库
import useUserStore from "@/store/modules/user";
import useLayOutSettingStore from "@/store/modules/setting";
let userStore = useUserStore();
// 获取layout配置仓库
let LayOutSettingStore = useLayOutSettingStore();

// 获取路由对象
let $route = useRoute();
console.log($route.path);
</script>

<script lang="ts">
export default {
  name: "layout",
};
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  // background: #f0f2f5;

  .layout_slider {
    width: $base-menu-width;
    height: 100%;
    background: $base-menu-background;
    transition: all 0.3s ease 0s;
    .scrollbar {
      width: 100%;
      height: calc(100% - $base-tabbar-height);
      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: $base-menu-min-width;
    }
  }
  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    // background: cyan;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s ease 0s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    // background: yellow;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px; //边框
    overflow-y: auto; //滚动自适应
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
