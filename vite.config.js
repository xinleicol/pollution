import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //生产模式打包配置
  build: {
    outDir: 'docs', //Specify the output directory (relative to project root).
  },
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  }
})