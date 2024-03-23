// 用户管理api
import request from "@/utils/request";
import { UserResponseData, User,personaliseResponseData,OccupationResponseData } from "./type";

enum API {
  //获取用户信息
  ALLURERS_URL = "/user/userInfo",
  // 删除
  DELETE_URL = "/admin/acl/user/",
  // 添加用户信息
  ADDUSER_URL = "/admin/acl/user/save",
  // 更新用户信息
  UPDATEUSER_URL = "/user/userInfo",
   //获取个性化信息
  PERSONALISE_URL="/user/personaliseList",
   //获取职业信息
  OCCUPATION_URL="/user/getOccupation"
}

// 获取用户账户信息
export const reqUserInfo = (
) =>
  request.get<any, UserResponseData>(
    API.ALLURERS_URL
  );
// 获取个性化信息
export const reqPersonalise = () =>
  request.get<any, personaliseResponseData>(API.PERSONALISE_URL);
  // 获取个性化信息
export const reqOccupation = () =>
request.get<any, OccupationResponseData>(API.OCCUPATION_URL);
// 删除
export const reqDeleteUser = (id: number) =>
  request.delete<any, any>(API.DELETE_URL + id);

// 更新
export const reqUpdateUser = (data: User) => {
  return request.post<any, User>(API.UPDATEUSER_URL, data);
};
