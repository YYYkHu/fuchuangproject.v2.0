// 用户管理api
import request from "@/utils/request";
import { UserResponseData } from "./type";

enum API {
  ALLURERS_URL = "/admin/acl/user/",
}

// 获取用户账户信息
export const reqUserInfo = (page: number, limit: number) =>
  request.get<any, UserResponseData>(API.ALLURERS_URL + `${page}/${limit}`);
