import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/consultora-obregon-bello-2/",
  plugins: [reactRefresh()],
});