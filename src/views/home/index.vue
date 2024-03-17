<template>
  <div>
    <el-card class="tutorial-bar">
      <div>
        <div class="boxleft">
          <img
            src="@\assets\images\yindao2.png"
            alt=""
            style="border-radius: 15px"
          />
          <el-button
            type="primary"
            class="btn-12"
            style="
              position: absolute;
              top: 34%;
              left: 12%;
              transform: translate(-30%, -50%);
              margin-left: auto;
            "
            @click="goNetworkRouter"
          >
            <span>创建网络</span>
          </el-button>
          <el-button
            type="primary"
            class="btn-12"
            style="
              position: absolute;
              top: 34%;
              left: 26%;
              transform: translate(-30%, -50%);
              margin-left: auto;
            "
            @click="goMirrorRouter"
          >
            <span>配置镜像</span>
          </el-button>
          <el-button
            type="primary"
            class="btn-12"
            style="
              position: absolute;
              top: 34%;
              left: 40%;
              transform: translate(-30%, -50%);
              margin-left: auto;
            "
            @click="goDockRouter"
          >
            <span>进入桌面</span>
          </el-button>
          <el-button
            type="primary"
            class="btn-12"
            style="
              position: absolute;
              top: 34%;
              left: 56%;
              transform: translate(-30%, -50%);
              margin-left: auto;
            "
            @click="goUploadMirrorRouter"
          >
            <span>上传桌面</span>
          </el-button>
        </div>
        <div class="boxright" style="">
          <img :src="userStore.avatar" alt="" class="avatar" />
          <div>
            <h3 class="title">{{ getTime() }} {{ userStore.username }}</h3>
            <h1 class="bottom">国产云桌面管理系统</h1>
          </div>
        </div>
      </div>
    </el-card>
  </div>

  <div class="graghthree">
    <el-card style="height: 260px">
      <div ref="usechart" style="height: 240px"></div>
    </el-card>
    <el-card style="height: 260px">
      <div ref="userchartone" style="height: 240px"></div>
    </el-card>
    <el-card style="height: 260px">
      <div ref="userchartbrokenline" style="height: 240px"></div>
    </el-card>
  </div>

  <div class="graghtwo">
    <el-card style="height: 260px">
      <div ref="usecharthistogram" style="height: 260px"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import useUserStore from "@/store/modules/user";
import { getTime } from "@/utils/time";
// 路由跳转
import { useRouter } from "vue-router";

const $router = useRouter();
// 跳转路由到网络
const goNetworkRouter = () => {
  $router.push({ path: "/product/network" });
};
// 跳转路由到官方镜像
const goMirrorRouter = () => {
  $router.push({ path: "/Network/netmessage" });
};
// 跳转路由到桌面
const goDockRouter = () => {
  $router.push({ path: "/container/containermessage" });
};
// 跳转路由到上传镜像
const goUploadMirrorRouter = () => {
  $router.push({ path: "/product/attr" });
};

const chartRef = ref<null | HTMLDivElement>(null);
const usechart = ref<null | HTMLDivElement>(null);
const userchartone = ref<null | HTMLDivElement>(null);
const userchartbrokenline = ref<null | HTMLDivElement>(null);
const usercharthistogram = ref<null | HTMLDivElement>(null);

let userStore = useUserStore();

onMounted(() => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value);
    chart.setOption(options1);
  }
  if (userchartone.value) {
    const chart = echarts.init(userchartone.value);
    chart.setOption(options2);
  }

  if (usechart.value) {
    const chart = echarts.init(usechart.value);
    chart.setOption(options3);
  }
  if (userchartbrokenline.value) {
    const chart = echarts.init(userchartbrokenline.value);
    chart.setOption(options4);
  }
  if (usercharthistogram.value) {
    const chart = echarts.init(usercharthistogram.value);
    chart.setOption(options5);
  }
});
/** @type EChartsOption */
const options1 = {
  // echarts 配置项
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};
/** @type EChartsOption */
const options2 = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};
/** @type EChartsOption */
const options3 = {
  title: {
    text: "Referer of a Website",
    subtext: "Fake Data",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
/** @type EChartsOption */
const options4 = {
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 600, 934, 1290, 1330, 1320],
      type: "line",
      areaStyle: {},
    },
  ],
};
/** @type EChartsOption */
const options5 = {
  legend: {},
  tooltip: {},
  dataset: {
    dimensions: ["product", "2015", "2016", "2017"],
    source: [
      { product: "Matcha Latte", 2015: 43.3, 2016: 85.8, 2017: 93.7 },
      { product: "Milk Tea", 2015: 83.1, 2016: 73.4, 2017: 55.1 },
      { product: "Cheese Cocoa", 2015: 86.4, 2016: 65.2, 2017: 82.5 },
      { product: "Walnut Brownie", 2015: 72.4, 2016: 53.9, 2017: 39.1 },
    ],
  },
  xAxis: { type: "category" },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
};
</script>

<style scoped lang="scss">
.tutorial-bar {
  height: 360px;
  margin: 10px 10px;
  padding: 0 0;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  justify-content: space-between;
  // background-image: url("../src/assets/images/yindao2.png");
  background-color: rgba(255, 255, 255, 0.8);

  .boxright {
    float: right;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 20px;
    }

    .title {
      font-size: 25px;
      margin-bottom: 30px;
    }
    .bottom {
      font-size: italic;
      color: rgb(193, 208, 246);
    }
  }
  .boxleft {
    float: left;
  }
}

.graghthree {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 48%;
    margin: 0 10px;
    padding: 5px 7px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.8);
  }
}

.graghtwo {
  margin-top: 20px;
  display: flex;

  // justify-content: space-between;
  .el-card {
    width: 80%;
    margin: 0 10px;
    padding: 5px 7px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
    background-color: rgba(255, 255, 255, 0.8);
    // justify-content: space-between;
  }
}

.box {
  display: flex;
  margin-left: 20px;
}
</style>
