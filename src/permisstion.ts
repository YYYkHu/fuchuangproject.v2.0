// 路由鉴权
// 在什么条件下可以访问
import router from "@/router";
import setting from "@/setting";
// import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from "@/utils/token";
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
nprogress.configure({ showSpinner: false });
// 获取用户小仓库内部的token数据
// 判断是否登陆成功
import useUserStore from "@/store/modules/user";

import pinia from "@/store"; //为什么要这么写?
let userStore = useUserStore(pinia);
console.log(userStore.token);

//  全局守卫:项目中任意路由触发的钩子
// 全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  // to:将要访问那个路由67
  // from:你从哪个路由而来
  // next:路由的放行函数
  nprogress.start();
  // 判断用户是否登录
  let token = userStore.token;
  //   获取用户姓名
  let username = userStore.username;
  if (token) {
    // 登陆成功,不能访问login
    if (to.path == "/login") {
      next({ path: "/acl/user" });
    } else {
      // 登录访问其他路由
      // 用户已经登录
      if (username) {
        next();
      } else {
        // 没有用户信息,在守卫这里发请求获取到用户信息后放行
        try {
          await userStore.userInfo();
          next();
        } catch (error) {
          // token获取不到用户信息了
          // 用户手动修改本地存储token
          // 退出登录
          await userStore.userLogout();
          next({ path: "/login", query: { redirect: to.path } });
        }
      }
    }
  } else {
    // 用户未登录
    if (to.path == "/login") {
      next();
    } else {
      next({ path: "/login", query: { redirect: to.path } });
    }
  }
});

// 全局后置守卫
router.afterEach((to: any, from: any) => {
  document.title = `${setting.title} - ${to.meta.title}`;
  nprogress.done();
});

// 任意路由的切换
// 实现进度条业务
// 全部的路由组件:登录|首页|404|任意路由|数据大屏|权限管理(三个子)|商品管理(四个子)
