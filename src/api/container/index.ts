import request from "@/utils/request";
import {
  ContainerResponseData,
  AllUserContainerResponseData,
  Container,
} from "./type";

enum API {
  // admin查询所有用户桌面容器列表
  ALLUSERSCONTAINER_URL = "/container/adminList", //不确定前面是否有 ” @/ “
  // 查询桌面容器列表
  CONTAINERLIST_URL = "/container/list",
  // 桌面容器关机
  CLOSE_URL = "/container/close/1",
  // 桌面容器开机
  OPEN_URL = "/container/open/1",
  // 桌面重启
  RESTART_URL = "/container/restart/1",
  // 重装系统
  REINSTALL_URL = "/container/reinstall/1",
  // 删除桌面
  DELETE_URL = "/container/delete/1",
  // 更新桌面名称
  UPDATENAME_URL = "/container/update/1",
  // 桌面扩容
  EXPANSION_URL = "/container/expansion/1",
}
// admin查询所有用户桌面容器列表
export const reqAllUsersContainer = () =>
  request.get<any, AllUserContainerResponseData>(API.ALLUSERSCONTAINER_URL);

// 查询桌面容器列表   limit 表示列表条数
export const reqContainerList = (page: number, limit: number) =>
  request.get<any, ContainerResponseData>(
    API.CONTAINERLIST_URL + `${page}/${limit}`
  );

// 桌面容器关机
export const reqCloseContainer = () =>
  request.post<any, Container>(API.CLOSE_URL);

// 桌面开机
export const reqOpenContainer = () =>
  request.post<any, Container>(API.OPEN_URL);

// 桌面重启
export const reqRestartContainer = () =>
  request.post<any, Container>(API.RESTART_URL);

// 重装系统
export const reqReinstallContainer = () =>
  request.post<any, Container>(API.REINSTALL_URL);

// 删除桌面
export const reqDeleteContainer = () =>
  request.delete<any, Container>(API.DELETE_URL);

// 更新桌面名称
export const reqUpdateNameContainer = () =>
  request.post<any, ContainerResponseData>(API.UPDATENAME_URL);

//

// 要携带哪些参数？
