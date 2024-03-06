<template>
  <div class="card">
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
            class="el-menu-vertical-demo"
            :default-active="$route.path"
            text-color="black"
            text-size="1.9rm"
            active-text-color="black"
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

          <div class="img">
            <img :src="Settings" alt="" class="img-svg" />
          </div>
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
//引入svg设置图
import Settings from "/public/Settings.svg";
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
// .card {
//   padding: 10px;
// }

.layout_container {
  width: 100%; // 宽度100%,内部边框导致width减小
  height: 100vh;
  background-color: rgb(238, 236, 255);

  // 菜单栏样式

  // background: #f0f2f5;

  // 滚动条
  .layout_slider {
    width: $base-menu-width;
    height: 100%;
    // background: $base-menu-background;
    transition: all 0.3s ease 0s;
    .scrollbar {
      margin: 0 10px;
      padding: 5px 7px 9px 9px;
      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
      justify-content: space-between;
      background: $base-menu-background;
      width: 90%;
      height: calc(100% - $base-tabbar-height);

      .el-menu {
        border-right: none;
        background: $base-menu-background;
        font-weight: 540;
        font-size: 26px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      }

      .img {
        border-radius: 20px;
        width: 40px;
        height: 40px;
        margin-left: 30px;
        margin-top: 580px;
        .img-svg {
          width: 90%;
          height: 90%;
          float: left;
        }
      }
    }
    &.fold {
      width: $base-menu-min-width;
    }
  }
  // 顶部导航栏
  .layout_tabbar {
    // float: inline-end;
    background-color: #fff;
    margin: 12px 10px 5px 10px;
    padding: 5px 7px;
    border-radius: 15px;
    box-shadow: rgba(48, 12, 12, 0.16) 0px 1px 3px;
    justify-content: space-between;

    position: fixed; // 固定定位
    background: $base-menu-background;
    width: calc(99% - $base-menu-width);
    height: $base-tabbar-height;
    // background: cyan;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s ease 0s;
    &.fold {
      // 被折叠时
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    background-color: $base-menu-background;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    // background: yellow;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px; //边框
    // overflow-y: auto; //滚动自适应
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
