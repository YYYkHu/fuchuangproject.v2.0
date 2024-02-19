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
  },
  {
    // 数据大屏路由
    path: "/screen",
    component: () => import("@/views/screen/index.vue"),
    name: "Screen",
    meta: {
      hidden: false,
      title: "数据大屏",
      icon: "Platform",
    },
  },
  {
    // 权限路由
    path: "/acl",
    component: () => import("@/layout/index.vue"),
    name: "Acl",
    meta: {
      title: "权限管理",
      hidden: false,
      icon: "Lock",
    },
    redirect: "/acl/role",
    children: [
      {
        path: "/acl/user",
        component: () => import("@/views/acl/user/index.vue"),
        name: "User",
        meta: {
          title: "用户管理",
          hidden: false,
          icon: "User",
        },
      },
      {
        path: "/acl/role",
        component: () => import("@/views/acl/role/index.vue"),
        name: "Role",
        meta: {
          title: "角色管理",
          hidden: false,
          icon: "UserFilled",
        },
      },
      {
        path: "/acl/permission",
        component: () => import("@/views/acl/permission/index.vue"),
        name: "Permission",
        meta: {
          title: "菜单管理",
          hidden: false,
          icon: "Monitor",
        },
      },
    ],
  },
  {
    // 商品管理
    path: "/product",
    component: () => import("@/layout/index.vue"),
    name: "Product",
    meta: {
      title: "商品管理",
      hidden: false,
      icon: "ShoppingBag",
    },
    children: [
      {
        path: "/product/trademark",
        component: () => import("@/views/product/trademark/index.vue"),
        name: "Trademark",
        meta: {
          title: "品牌管理",
          hidden: false,
          icon: "ShoppingCartFull",
        },
      },
      {
        path: "/product/spu",
        component: () => import("@/views/product/spu/index.vue"),
        name: "Spu",
        meta: {
          title: "SPU管理",
          hidden: false,
          icon: "Calendar",
        },
      },
      {
        path: "/product/sku",
        component: () => import("@/views/product/sku/index.vue"),
        name: "Sku",
        meta: {
          title: "SKU管理",
          hidden: false,
          icon: "Orange",
        },
      },
      {
        path: "/product/attr",
        component: () => import("@/views/product/attr/index.vue"),
        name: "Attr",
        meta: {
          title: "属性管理",
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
          title: "日志管理",
          hidden: false,
          icon: "ShoppingBag",
        },
      },
    ],
  },
];
