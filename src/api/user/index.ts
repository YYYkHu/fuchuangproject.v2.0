// // 统一管理项目的用户相关接口
// import request from "@/utils/request";
// import type { loginFrom, loginResponseData, userResponseData } from "./type";

// // 统一管理接口
// enum API {
//   LOGIN_URL = "/user/login",
//   USERINFO_URL = "/user/info",
// }

// // 登录接口方法
// export const reqLogin = (data: loginFrom) =>
//   request.post<any, loginResponseData>(API.LOGIN_URL, data);
// // 获取用户信息接口方法
// export const reqUserInfo = () =>
//   request.get<any, userResponseData>(API.USERINFO_URL);

// ---------------上面为mock接口-----------------

// 统一管理项目的用户相关接口
import request from "@/utils/request";
import type {
  loginFormData,
  loginResponseData,
  registerFormData,
  registerResponseData,
  userInfoResponseData,
} from "./type";
// 项目用户请求的地址
enum API {
  LOGIN_URL = "/login",
  USERINFO_URL = "/admin/acl/index/info",
  REGISTER_URL = "/register",
  LOGOUT_URL = "/admin/acl/index/logout",
}

// 登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
// 获取用户信息
export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL);
// 退出登录`
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL);
//注册
export const reqRegister = (data: registerFormData) =>
  request.post<any, registerResponseData>(API.REGISTER_URL, data);