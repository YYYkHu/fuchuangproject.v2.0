// 小仓库layout相关的配置
import { defineStore } from "pinia";
let useLayOutSettingStore = defineStore("SettingStore", {
  state: () => {
    return {
      fold: false, // 控制菜单的折叠与展开
    };
  },
});
export default useLayOutSettingStore;
