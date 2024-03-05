<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p class="title">{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
// 引入设置文件
import setting from "@/setting";
</script>

<script lang="ts">
export default { name: "Logo" };
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 20px;
  img {
    width: 30px;
    height: 30px;
  }
  p {
    margin-left: 10px;
    font-size: $base-menu-title-size;
    display: block;
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
    color: black;
    font-family: "Nunito", sans-serif;
  }
}
</style>
