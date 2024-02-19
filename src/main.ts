import { createApp } from "vue";
import App from "@/App.vue";
// 引入element-plus插件与样式
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
// 配置element-plus 国际化的配置
import zhCn from "element-plus/es/locale/lang/zh-cn.mjs";
// svg插件需要的配置代码
import "virtual:svg-icons-register";
// 引入自定义插件对象：注册整个项目的全局组件
import globalComponent from "@/components";
// 获取应用实例对象
// 引入模板的全局样式
import "@/styles/index.scss";
// 引入路由
import router from "./router";
// 引入仓库
import pinia from "./store";
// 引入particles.js库
// import particles from "particles.js";

// // 测试接口
// import axios from "axios";
// axios({
//   url: "/api/user/login",
//   method: "post",
//   data: {
//     username: "admin",
//     password: "111111",
//   },
// });

const app = createApp(App);
// 安装element-plus 插件
app.use(ElementPlus, {
  locale: zhCn, //国际化的配置
});
// 安装自定义插件
app.use(globalComponent);
// 注册路由
app.use(router);
// 安装仓库pinia
app.use(pinia);
//安装粒子库
// app.use(particles);
// 引入路由鉴权文件
import "@/permisstion.ts";
//将应用挂载到挂载点上
app.mount("#app");
