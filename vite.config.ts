import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 以下三项引入是为配置Element-plus自动按需导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// 引入svg 所需要用到的插件
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { UserConfigExport, ConfigEnv } from "vite";
//mock插件提供方法
import { viteMockServe } from "vite-plugin-mock";
export default defineConfig(({ command, mode }) => {
  // 获取.env文件中的变量
  let env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      // 配置了一系列的插件
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      viteMockServe({
        enable: command === "serve",
      }),
      // 以下两项是为配置Element-plus自动按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    //scss全局变量的配置项
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    // 代理跨域
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          // 获取服务器的地址设置
          target: env.VITE_SERVE,
          // 是否代理跨域
          changeOrigin: true,
          // 重写路径:去掉路径中开头的/api
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
