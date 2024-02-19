export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}
// 已有品牌的ts类型
export interface TradeMark {
  id?: number; //加？表示可有可无
  tmName: string;
  logoUrl: string;
}
// 包含全部品牌数据的ts类型
export type Records = TradeMark[];

// 获取全部品牌数据的ts类型
export interface TradeMarkResponseData extends ResponseData {
  data: {
    total: number;
    records: Records;
    size: number;
    current: number;
    pages: number;
  };
}
