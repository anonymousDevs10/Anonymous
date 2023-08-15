import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import SvgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), SvgLoader()],
});
