import type { RouteRecordRaw } from "vue-router";
// 引入路由对象的类型
// 定义小仓库数据state类型
export interface UserState {
  token: string | null;
  //路由配置数据
  menuRoutes: RouteRecordRaw[];
  //用户信息
  username: string;
  avatar: string;
}
