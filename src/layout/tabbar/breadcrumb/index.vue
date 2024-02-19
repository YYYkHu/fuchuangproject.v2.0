<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    <!-- 根据folded的值来决定使用Fold还是Expand图标 -->
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">
      <!-- 图标 -->
      <el-icon vertical-align:top>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <!-- 展示匹配路由的标题 -->
      <span :style="{ margin: '0 5px' }">
        {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
// 定义一个响应式数据控制图标切换
import useLayOutSettingStore from "@/store/modules/setting";
let layoutSettingStore = useLayOutSettingStore();
// let fold = ref(false);  //控制图标是否切换的便捷变量
// 获取路由对象
let $route = useRoute();
const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold;
};
</script>

<script lang="ts">
export default {
  name: "Breadcrumb",
};
</script>

<style scoped></style>
