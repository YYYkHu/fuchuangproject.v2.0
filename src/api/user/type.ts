// // 登录接口需要携带的参数类型
// export interface loginFrom {
//   username: string;
//   password: string;
//   // 其他可能需要的参数
// }

// interface dataType {
//   token?: string;
//   message?: string;
// }
// // 登录接口可能方辉的数据类型
// export interface loginResponseData {
//   code: number;
//   data: dataType;
// }

// interface user {
//   checkUser: userInfo;
// }

// interface userInfo {
//   userId: number;
//   avatar: string;
//   username: string;
//   password: string;
//   desc: string;
//   roles: string[];
//   buttons: string[];
//   routes: string[];
//   token: string;
// }

// // 服务器返回用户信息的相关数据类型
// export interface userResponseData {
//   code: number;
//   data: user;
// }

//-----------上面的为mock接口类型-------------

// 定义用户ts类型
// 用户登录接口携带参数的用户类型

export interface loginFormData {
  username: string;
  password: string;
}
export interface registerFormData {
  username: string;
  password: string;
}
// 定义全部接口返回数据都拥有的ts类型
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

// 定义登录接口返回类型
export interface loginResponseData extends ResponseData {
  data: string;
}

// 定义注册接口返回类型
export interface registerResponseData extends ResponseData {
  data: string;
}
// 定义获取用户信息返回类型
export interface userInfoResponseData extends ResponseData {
  data: {
    routers: string[];
    buttons: string[];
    roles: string[];
    name: string;
  };
}
