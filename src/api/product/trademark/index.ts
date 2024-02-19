import request from "@/utils/request";
import type { TradeMarkResponseData } from "./type";
// 品牌接口地址
enum API {
  // 获取已有的品牌接口地址
  TRADEMARK_URL = "/admin/product/baseTrademark/",
  DELETE_URL = "/admin/product/baseTrademark/remove/",
}

// 获取接口方法
// page:获取第几页  limit ：已有的品牌的数据
export const reqHasTradeMark = (page: number, limit: number) =>
  request.get<any, TradeMarkResponseData>(
    API.TRADEMARK_URL + `${page}/${limit}`
  );

export const reqDeleteTradeMark = (id: number) =>
  request.delete<any, any>(API.DELETE_URL + id);
