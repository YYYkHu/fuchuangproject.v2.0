<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Breadcrumb />
    </div>
    <div class="tabbar_right">
      <Setting />
    </div>
    <!-- 内容 -->
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "./breadcrumb/index.vue";

import Setting from "./setting/index.vue";
</script>

<script lang="ts">
export default {
  name: "Tabbar",
};
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  // 弹性盒子
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, #fdfbf8, #f1f0ed, #eaf0f4);
  .tabbar_left {
    display: flex;
    // 垂直居中
    align-items: center;
    margin-left: 20px;
  }
  .tabbar_right {
    display: flex;
    // 垂直居中
    align-items: center;
    margin-right: 20px;
    .el-button {
      margin-left: 20px;
    }
    .el-dropdown {
      margin-left: 20px;
    }
    img {
      margin-left: 20px;
    }
    .el-icon--right {
      margin-left: 5px;
    }
  }
}
</style>
