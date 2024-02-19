// ts类型
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

// 一个账户信息的ts类型
export interface User {
  id?: number; //加？表示可有可无
  username?: string;
  updateTime: string;
  createTime: string;
  password?: string;
  name?: string;
  phone: string;
  roleName: string;
}

export type Records = User[];
// 全部的用户信息
export interface UserResponseData extends ResponseData {
  data: {
    records: Records;
    total: number;
    size: number;
    current: number;
    pages: number;
  };
}
