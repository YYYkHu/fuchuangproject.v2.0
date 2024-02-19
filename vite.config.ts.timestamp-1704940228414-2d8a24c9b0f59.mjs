// vite.config.ts
import { defineConfig } from "file:///D:/%E6%A1%8C%E9%9D%A2/vue3-admin-template/fuChuangProject/node_modules/.pnpm/vite@5.0.11/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E6%A1%8C%E9%9D%A2/vue3-admin-template/fuChuangProject/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.11_vue@3.4.7/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { createSvgIconsPlugin } from "file:///D:/%E6%A1%8C%E9%9D%A2/vue3-admin-template/fuChuangProject/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.0.11/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src")
      // 相对路径别名配置，使用 @ 代替 src
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTY4NENcdTk3NjJcXFxcdnVlMy1hZG1pbi10ZW1wbGF0ZVxcXFxmdUNodWFuZ1Byb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1Njg0Q1x1OTc2MlxcXFx2dWUzLWFkbWluLXRlbXBsYXRlXFxcXGZ1Q2h1YW5nUHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU2JUExJThDJUU5JTlEJUEyL3Z1ZTMtYWRtaW4tdGVtcGxhdGUvZnVDaHVhbmdQcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuLy8gXHU1RjE1XHU1MTY1c3ZnIFx1NjI0MFx1OTcwMFx1ODk4MVx1NzUyOFx1NTIzMFx1NzY4NFx1NjNEMlx1NEVGNlxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgXCJzcmMvYXNzZXRzL2ljb25zXCIpXSxcbiAgICAgIHN5bWJvbElkOiBcImljb24tW2Rpcl0tW25hbWVdXCIsXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShcIi4vc3JjXCIpLCAvLyBcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcdTUyMkJcdTU0MERcdTkxNERcdTdGNkVcdUZGMENcdTRGN0ZcdTc1MjggQCBcdTRFRTNcdTY2RkYgc3JjXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVSxTQUFTLG9CQUFvQjtBQUNsVyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBR2pCLFNBQVMsNEJBQTRCO0FBQ3JDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLHFCQUFxQjtBQUFBLE1BQ25CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFBQSxNQUMxRCxVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsT0FBTztBQUFBO0FBQUEsSUFDM0I7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
