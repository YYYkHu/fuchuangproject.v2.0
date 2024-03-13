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
      title: "首页",
      //表示标题在菜单中是否隐藏  true：隐藏
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
    //网络管理
    path: "/Network",
    component: () => import("@/layout/index.vue"),
    name: "Network",
    meta: {
      title: "网络管理",
      hidden: false,
      icon: "Lock",
    },
    children: [
      {
        path: "/Network/netmessage",
        component: () => import("@/views/network/index.vue"),
        name: "Networkmessage",
        meta: {
          title: "网络",
          hidden: false,
          icon: "User",
        },
      },
    ],
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
  },
  {
    // 个人主页
    path: "/acl",
    component: () => import("@/layout/index.vue"),
    name: "Acl",
    meta: {
      title: "个人主页",
      hidden: false,
      icon: "Lock",
    },
    children: [
      {
        path: "/acl/user",
        component: () => import("@/views/user/index.vue"),
        name: "User",
        meta: {
          title: "个人主页",
          hidden: false,
          icon: "User",
        },
      },
    ],
  },
  {
    // 容器管理
    path: "/container",
    component: () => import("@/layout/index.vue"),
    name: "Container",
    meta: {
      title: "桌面管理",
      hidden: false,
      icon: "Lock",
    },

    children: [
      {
        path: "/container/containermessage",
        component: () => import("@/views/container/index.vue"),
        name: "ContainerMessage",
        meta: {
          title: "桌面",
          hidden: false,
          icon: "User",
        },
      },
    ],
  },
  {
    // 镜像管理
    path: "/product",
    component: () => import("@/layout/index.vue"),
    name: "Product",
    meta: {
      title: "镜像管理",
      hidden: false,
      icon: "ShoppingBag",
    },
    children: [
      {
        path: "/product/trademark",
        component: () => import("@/views/product/official/index.vue"),
        name: "Trademark",
        meta: {
          title: "官方镜像管理",
          hidden: false,
          icon: "Orange",
        },
      },
      {
        path: "/product/spu",
        component: () => import("@/views/product/user/index.vue"),
        name: "Spu",
        meta: {
          title: "用户镜像管理",
          hidden: false,
          icon: "Calendar",
        },
      },
      {
        path: "/product/attr",
        component: () => import("@/views/product/custom/index.vue"),
        name: "Attr",
        meta: {
          title: "自定义镜像管理",
          hidden: false,
          icon: "ChromeFilled",
        },
      },
    ],
  },

  // 日志路由
  {
    path: "/setting",
    component: () => import("@/layout/index.vue"),
    name: "Setting",
    meta: {
      title: "设置",
      hidden: false,
      icon: "Lock",
    },
    children: [
      {
        path: "/setting/log",
        component: () => import("@/views/log/index.vue"),
        name: "Log",
        meta: {
          title: "日志",
          hidden: false,
          icon: "ShoppingBag",
        },
      },
    ],
  },
];
