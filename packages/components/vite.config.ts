import { resolve } from "path";
import { defineConfig, mergeConfig } from "vite";
import baseConfig from "../../vite.config.base";

// https://vitejs.dev/config/
export default mergeConfig(
  baseConfig,
  defineConfig({
    build: {
      lib: {
        entry: resolve(__dirname, "./index.ts"), // 打包入口文件
        name: "slime-ui",
        fileName: () => "index.js", // 输出的包文件名
      },
      rollupOptions: {
        external: ["react", "react/jsx-runtime"], // 确保外部化处理那些你不想打包进库的依赖
        output: [
          {
            dir: "./dist/es",
            format: "es",
            preserveModules: true,
          },
          {
            dir: "./dist/umd",
            format: "umd",
            globals: {
              react: "react",
              "react-dom": "react-dom",
            },
          },
        ],
        // preserveModules: true // 让打包目录和目录对应 https://rollupjs.org/guide/en/#outputpreservemodules
      },
    },
  })
);
