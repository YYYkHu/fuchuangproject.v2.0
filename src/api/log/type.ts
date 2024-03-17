export interface ResponseData {
  code: number;
  message: string;
}

export interface Log {
  logId: number;
  logTypeName: string;
  localTime: string;
  logContent: string;
}

export type Records = Log[];

// 全部的用户信息
export interface LogResponseData extends ResponseData {
  data: {
    records: Records;
  };
}
