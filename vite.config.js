import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MinSub-Portpolio/", // 여기에 GitHub Pages 리포지토리 이름 입력!
});
