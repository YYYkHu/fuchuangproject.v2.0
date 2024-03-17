// 引入项目中的全局组件
import SvgIcon from "./SvgIcon/index.vue";
import ColorLabel from "./ColorLabel/index.vue";
// 引入element-plus的全部的图标组件
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
console.log(ElementPlusIconsVue);
//全局对象
const allGlobalComponents: any = { SvgIcon, ColorLabel };
console.log(allGlobalComponents);

//对外暴露一个插件对象
export default {
  install(app: any) {
    // 插件的逻辑代码
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key]);
    });
    // 将element-plus提供的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
