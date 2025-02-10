import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MinSub-Portpolio/", // GitHub Pages에 맞게 설정
});
