// // ts类型
export interface ResponseData {
  code: number;
  message: string;
}

// 一个rows中的数据类型
export interface Container {
  podControllerId: number;
  podControllerName: "string";
  networkName: "string";
  userId: number;
  ipAddress: "string";
  containerState: "string";
  podControllerVersion: "string";
  podControllerCpu: number;
  podControllerMemory: number;
  podControllerSystemDisk: number;
  podControllerDataDisk: number;
  createTime: "string";
  updateTime: "string";
}

export type Records = Container[];

// admin查询用户桌面容器信息
export interface AllUserContainerResponseData extends ResponseData {
  data: {
    total: number;
    rows: Records;
  };
}
// 用户查询桌面容器信息
export interface ContainerResponseData extends ResponseData {
  data: Records;
}
