<script setup lang="ts">
// import {Plus,Edit ,Delete} from '@element-plus/icons-vue'

// import SvgIcon from '@/components/SvgIcon/index.vue'

// import { onMounted } from 'vue';
// import {reqLogin} from './api/user'

// onMounted(() =>{
//    reqLogin ({ username:'admin',password:'111111'}).then(res=>{
//     console.log(res)
//   })
// })

</script>

<template>
   <div>
  
  <!-- <el-button type="primary" size="default" :icon="Plus">主要按钮
  </el-button>
  <el-button type="success" size="small" :icon="Edit">编辑按钮
  </el-button>
   <el-button type="danger" size="small" :icon="Delete">编辑按钮
    </el-button>


    <h1>svg测试</h1>
    <svg-icon name="phone" color="pink" width="100px" height="100px"></svg-icon>
    
    <Pagination></Pagination>
  
    <h1>测试代码</h1>

    <h1>测试axios二次封装</h1> -->

    <router-view>
    </router-view>
  </div>
</template>

<style scoped lang="scss">
  div{
    h1{
      color:red;
    }
  }

</style>
