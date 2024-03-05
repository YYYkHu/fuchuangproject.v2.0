<template>
  <div>
    <!-- <p>{{ menuList }}</p> -->
    <template v-for="(item, index) in menuList" :key="item.path">
      <template v-if="!item.meta.hidden">
        <!-- 没有子路由 -->
        <el-menu-item
          v-if="!item.children"
          :index="item.path"
          @click="goRoute"
          :router="true"
        >
          <!-- 添加一个插槽 -->
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>

        <!-- 有一个子路由 -->
        <!-- <el-menu-item
        v-if="item.children && item.children.length == 1"
        :index="item.path"
      >
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item> -->
        <!-- 有多于一个的子路由 -->
        <el-sub-menu
          :index="item.path"
          v-if="item.children && item.children.length > 0"
        >
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
// 获取父组件传递过来的全部路由数组
defineProps(["menuList"]);
// 获取路由器对象
let $router = useRouter();

// 点击菜单的回调
const goRoute = (vc: any) => {
  // 路由跳转
  $router.push(vc.index);
  // console.log(vc.index);
  // console.log(vc);
};
</script>
<script lang="ts">
export default {
  name: "Menu",
};
</script>

<style scoped></style>
