<template>
  <div>
    <el-card style="height: 280px">
      <div ref="echarts" style="height: 280px"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
// import { ref, onMounted } from "vue";
// import * as echarts from "echarts/core";

// const echartsRef = ref<HTMLElement | null>(null);

// const xOptions = {
//   xAxis: {
//     type: "category",
//     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//   },
//   yAxis: {
//     type: "value",
//   },
//   series: [
//     {
//       data: [120, 200, 150, 80, 70, 110, 130],
//       type: "bar",
//     },
//   ],
// };

// onMounted(() => {
//   if (echartsRef.value) {
//     const myChart = echarts.init(echartsRef.value);
//     myChart.setOption(xOptions);
//   }
// });
</script>

<style scoped></style>
