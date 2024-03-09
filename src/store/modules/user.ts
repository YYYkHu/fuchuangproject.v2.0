// 创建用户相关的小仓库
import { defineStore } from "pinia";
// 引入接口
import { reqLogin, reqUserInfo, reqLogout, reqRegister } from "@/api/user";
// 引入数据类型
import type {
  loginFormData,
  loginResponseData,
  registerFormData,
  registerResponseData,
  userInfoResponseData,
} from "@/api/user/type";

import type { UserState } from "@/store/modules/types/type";
// 引入本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from "@/utils/token";
// 引入常量路由
import { constantRoutes } from "@/router/routes";
// import { messageConfig } from "element-plus/lib/components/index.js";

let useUserStore = defineStore("User", {
  // 创建用户小仓库
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户的唯一标识
      menuRoutes: constantRoutes, // 仓库生成菜单需要的数组（路由）
      username: "", //用户姓名
    };
  },
  //   发送异步逻辑的地方
  actions: {
    // 登录方法
    async userLogin(data: loginFormData) {
      //  登录请求
      let result: loginResponseData = await reqLogin(data);
      // 登陆成功200 ->
      console.log(result);
      // 登陆失败:201 提示错误信息
      if (result.code === 0) {
        //由于pinia存储数据利用的是js对象
        // console.log(result.data);
        this.token = result.data as string; //仓库中存储token
        console.log("token:" + this.token);
        // 本地存储持久化
        SET_TOKEN(result.data as string);
        // 返回一个成功的primise
        return "ok";
      } else {
        return Promise.reject(new Error(result.data));
      }
    },
    // 获取用户信息方法
    async userInfo() {
      // 获取存储到仓库中
      let result: userInfoResponseData = await reqUserInfo();
      if (result.code === 0) {
        this.username = result.data.name;
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    async userRegist(data: registerFormData) {
      //  登录请求
      let result: registerResponseData = await reqRegister(data);
      // 登陆成功200 ->
      console.log(result);
      // 登陆失败:201 提示错误信息
      if (result.code === 0) {
        return "ok";
      } else {
        return Promise.reject(new Error(result.data));
      }
    },
    // 退出登陆的方法
    async userLogout() {
      let result: any = await reqLogout();
      if (result.code === 0) {
        // 退出成功
        // 清除仓库中的数据
        this.token = "";
        this.username = "";
        REMOVE_TOKEN();
        console.log("logout");
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
  },
  //   获取状态的地方
  getters: {},
});

// 对外暴露用户仓库
export default useUserStore;
