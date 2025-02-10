import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MinSub-Portpolio/", // GitHub Pages용 설정
  build: {
    outDir: "dist", // 빌드된 파일이 저장될 폴더
  }
});
