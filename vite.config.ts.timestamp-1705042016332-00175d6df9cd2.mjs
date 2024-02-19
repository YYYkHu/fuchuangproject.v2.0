// vite.config.ts
import { defineConfig } from "file:///D:/%E6%A1%8C%E9%9D%A2/vue3-admin-template/fuChuangProject/node_modules/.pnpm/vite@5.0.11_sass@1.69.7/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E6%A1%8C%E9%9D%A2/vue3-admin-template/fuChuangProject/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.11_vue@3.4.7/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import AutoImport from "file:///D:/%E6%A1%8C%E9%9D%A2/vue3-admin-template/fuChuangProject/node_modules/.pnpm/unplugin-auto-import@0.17.3/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/%E6%A1%8C%E9%9D%A2/vue3-admin-template/fuChuangProject/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.7/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/%E6%A1%8C%E9%9D%A2/vue3-admin-template/fuChuangProject/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.7/node_modules/unplugin-vue-components/dist/resolvers.js";
import { createSvgIconsPlugin } from "file:///D:/%E6%A1%8C%E9%9D%A2/vue3-admin-template/fuChuangProject/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.0.11/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { viteMockServe } from "file:///D:/%E6%A1%8C%E9%9D%A2/vue3-admin-template/fuChuangProject/node_modules/.pnpm/vite-plugin-mock@3.0.1_esbuild@0.19.11_mockjs@1.1.0_vite@5.0.11/node_modules/vite-plugin-mock/dist/index.mjs";
var vite_config_default = defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteMockServe({
        enable: command === "serve"
      }),
      // 以下两项是为配置Element-plus自动按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src")
        // 相对路径别名配置，使用 @ 代替 src
      }
    },
    //scss全局变量的配置项
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTY4NENcdTk3NjJcXFxcdnVlMy1hZG1pbi10ZW1wbGF0ZVxcXFxmdUNodWFuZ1Byb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1Njg0Q1x1OTc2MlxcXFx2dWUzLWFkbWluLXRlbXBsYXRlXFxcXGZ1Q2h1YW5nUHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU2JUExJThDJUU5JTlEJUEyL3Z1ZTMtYWRtaW4tdGVtcGxhdGUvZnVDaHVhbmdQcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbi8vIFx1NEVFNVx1NEUwQlx1NEUwOVx1OTg3OVx1NUYxNVx1NTE2NVx1NjYyRlx1NEUzQVx1OTE0RFx1N0Y2RUVsZW1lbnQtcGx1c1x1ODFFQVx1NTJBOFx1NjMwOVx1OTcwMFx1NUJGQ1x1NTE2NVxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVyc1wiO1xuXG4vLyBcdTVGMTVcdTUxNjVzdmcgXHU2MjQwXHU5NzAwXHU4OTgxXHU3NTI4XHU1MjMwXHU3Njg0XHU2M0QyXHU0RUY2XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdmctaWNvbnNcIjtcblxuLy9tb2NrXHU2M0QyXHU0RUY2XHU2M0QwXHU0RjlCXHU2NUI5XHU2Q0Q1XG5pbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoe2NvbW1hbmR9KT0+IHtcbiByZXR1cm4ge1xuICAgcGx1Z2luczogW1xuICAgICB2dWUoKSxcbiAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwic3JjL2Fzc2V0cy9pY29uc1wiKV0sXG4gICAgICAgc3ltYm9sSWQ6IFwiaWNvbi1bZGlyXS1bbmFtZV1cIixcbiAgICAgfSksXG4gICAgIHZpdGVNb2NrU2VydmUoe1xuICAgICAgIGVuYWJsZTogY29tbWFuZCA9PT0gXCJzZXJ2ZVwiLFxuICAgICB9KSxcbiAgICAgLy8gXHU0RUU1XHU0RTBCXHU0RTI0XHU5ODc5XHU2NjJGXHU0RTNBXHU5MTREXHU3RjZFRWxlbWVudC1wbHVzXHU4MUVBXHU1MkE4XHU2MzA5XHU5NzAwXHU1QkZDXHU1MTY1XG4gICAgIEF1dG9JbXBvcnQoe1xuICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgIH0pLFxuICAgICBDb21wb25lbnRzKHtcbiAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgICB9KSxcbiAgIF0sXG4gICByZXNvbHZlOiB7XG4gICAgIGFsaWFzOiB7XG4gICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShcIi4vc3JjXCIpLCAvLyBcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcdTUyMkJcdTU0MERcdTkxNERcdTdGNkVcdUZGMENcdTRGN0ZcdTc1MjggQCBcdTRFRTNcdTY2RkYgc3JjXG4gICAgIH0sXG4gICB9LFxuICAgLy9zY3NzXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHU3Njg0XHU5MTREXHU3RjZFXHU5ODc5XG4gICBjc3M6IHtcbiAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgIHNjc3M6IHtcbiAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICAgYWRkaXRpb25hbERhdGE6ICdAaW1wb3J0IFwiLi9zcmMvc3R5bGVzL3ZhcmlhYmxlLnNjc3NcIjsnLFxuICAgICAgIH0sXG4gICAgIH0sXG4gICB9LFxuIH07XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVSxTQUFTLG9CQUFvQjtBQUNsVyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBRWpCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBR3BDLFNBQVMsNEJBQTRCO0FBR3JDLFNBQVMscUJBQXFCO0FBQzlCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUMsUUFBTyxNQUFLO0FBQ3pDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLHFCQUFxQjtBQUFBLFFBQ25CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFBQSxRQUMxRCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsTUFDRCxjQUFjO0FBQUEsUUFDWixRQUFRLFlBQVk7QUFBQSxNQUN0QixDQUFDO0FBQUE7QUFBQSxNQUVELFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxPQUFPO0FBQUE7QUFBQSxNQUMzQjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osbUJBQW1CO0FBQUEsVUFDbkIsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
