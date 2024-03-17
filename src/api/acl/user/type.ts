// ts类型
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

// 一个账户信息的ts类型
export interface User {
  "userId": number,
  "username": string,
  "userHead": string|null|undefined,
  "email": string|null|undefined,
  "phone": string|null|undefined,
  "occupationId": number|null|undefined,
  "occupationName": string|null|undefined,
  "roleId": number,
  "roleName": string,
  "createTime": string,
  "numberOfDesktops": number
}
export interface Personalise{
  "personaliseId": number,
  "personaliseName": string,
  "personaliseType":string,
  "occupationId":string,
}
export interface Occupation{
  "occupationId":number,
  "occupationName":string,
}
export type PersonaliseList = Personalise;
export type Records = User;
// 全部的用户信息
export interface UserResponseData extends ResponseData {
  data: {
    records: Records;
  };
}
// 定义获取用户信息返回类型
export interface personaliseResponseData extends ResponseData {
  data: {
    records:Array<PersonaliseList>;
  };
}
export interface OccupationResponseData extends ResponseData {
  data: {
    records:Array<Occupation>;
  };
}