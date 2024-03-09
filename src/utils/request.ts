// 进行二次封装：使用请求与响应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";
// 引入用户相关的仓库
import useUserStore from "@/store/modules/user";
// 第一步  用axios对象的create方法来创建axios实例（基础路径，超时的时间）
let request = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_SERVE, //基础路径
  // 超时时间
  timeout: 5 * 1000,
});

//第二步 添加请求与相应拦截器
request.interceptors.request.use((config) => {
  // 获取用户相关的小仓库:获取仓库内部token,登录成功之后携带参数给服务器
  let userStore = useUserStore();

  // 带入token
  if (userStore.token) {
    // 给请求头添加token
    console.log("token:" + userStore.token)
    config.headers.Authorization = userStore.token;
  }
  // config配置对象，header属性请求头，经常给服务器端携带公共参数
  // 返回配置对象
  console.log(config);
  return config;
});

// 第三步 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 响应成功，将响应结果返回
    return response.data;
  },
  (error) => {
    // 响应失败，返回错误信息
    // 失败回调：存储网络错误信息
    let message = "";
    let status = error.response.status;
    // 判断状态码
    //    http 状态码
    switch (status) {
      case 401:
        message = "token过期,请重新登录";
        break;
      case 403:
        message = "没有权限，请联系管理员";
        break;
      case 404:
        message = "请求地址错误";
        break;
      case 500:
        message = "服务器内部错误";
        break;
      default:
        message = "网络连接错误";
        break;
    }
    // 提示错误信息
    //@ts-ignore
    ElMessage({
      type: "error",
      message: message,
    });

    return Promise.reject(error);
    // 返回错误信息
  }
);

// 第四步  对外暴露端口
export default request;
