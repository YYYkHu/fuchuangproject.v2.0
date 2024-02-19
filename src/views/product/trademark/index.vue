<template>
  <div>
    <el-card class="box-card">
      <!-- 添加用户 -->
      <el-button type="primary" size="default">添加用户</el-button>
      <el-table style="margin: 10px 0" border :data="trademarkArr">
        <!-- 表格列配置 -->
        <el-table-column
          label="序号"
          width="80px"
          align="center"
          type="index"
        ></el-table-column>
        <el-table-column label="姓名" width="200">
          <template #default="{ row, $index }">
            <h1>{{ row.tmName }}</h1>
          </template>
        </el-table-column>
        <el-table-column label="图片">
          <template #default="{ row, $index }">
            <img
              :src="row.logoUrl"
              alt=""
              style="width: 100px; height: 100px"
            />
          </template>
        </el-table-column>
        <el-table-column label="修改删除">
          <template #default="{ row, $index }">
            <el-button type="primary" size="" icon="Edit">修改</el-button>
            <el-button type="primary" size="" icon="Delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 
        v-model:current-page="pageNo" 当前的页码
        v-model:page-size="pageSize" 每页显示的条数
        :page-sizes="[3, 5, 7, 9]" 下拉菜单的数据
        layout:布局位置
    -->

      <el-pagination
        @current-change="getPageNo"
        page-count="9"
        v-model:current-page="pageNo"
        v-model:page-size="limit"
        :page-sizes="[3, 5, 7, 9]"
        :background="true"
        layout="prev, pager, next,jumper,->,sizes,total"
        :total="total"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
// 引入组合式api
import { ref, onMounted } from "vue";
import { reqHasTradeMark } from "@/api/product/trademark";
import { Records } from "@/api/product/trademark/type";
// 当前的页码
let pageNo = ref<number>(1);
// 每一页的展示数据
let limit = ref<number>(3);
// 存储已有的品牌的数组
let total = ref<number>(0);
// 存储已有品牌的数组
let trademarkArr = ref<Records>([]);
// 获取接口封装给函数
const getHasTrademark = async () => {
  let result = await reqHasTradeMark(pageNo.value, limit.value);
  if (result.code == 200) {
    // 已有品牌的
    total.value = result.data.total;
    console.log(result);
    // 已有品牌的数组
    trademarkArr.value = result.data.records;
  }
};
// 获取分页器当前页码的函数
// 参数：当前的页码,
const getPageNo = (page: number) => {
  pageNo.value = page;

  getHasTrademark();
};
// 组件挂载完毕
onMounted(() => {
  getHasTrademark();
});
</script>

<style scoped></style>
