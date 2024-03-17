import request from "@/utils/request";
import { LogResponseData } from "./type";
enum API {
  // 获取用户日志
  GetLOG_URL = "/log/list/",
}

// 获取用户日志
export const reqLogInfo = (page: number) =>
  request.get<any, LogResponseData>(API.GetLOG_URL + `${page}`);
