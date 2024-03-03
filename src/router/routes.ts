// 对外暴露配置的路由（常量路由）
export const constantRoutes = [
  {
    // 登录
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      title: "登录",
      hidden: true, //表示标题在菜单中是否隐藏  true：隐藏
    },
  },
  {
    // 首页 --一级路由
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "layout",
      hidden: false, //表示标题在菜单中是否隐藏  true：隐藏
      icon: "Avatar", //菜单左侧图标
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false, //表示标题在菜单中是否隐藏  true：隐藏
          icon: "HomeFilled", //菜单左侧图标
        },
      },
    ],
  },
  {
    // 404
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    meta: {
      title: "404",
      hidden: true, //表示标题在菜单中是否隐藏  true：隐藏
    },
  },
  {
    // 任何路由
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "任意路由",
      hidden: true, //表示标题在菜单中是否隐藏  true：隐藏
    },
  }
];
