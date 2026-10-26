import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the site works on GitHub Pages
// (https://sunilkjt.github.io/akami-sushi-redesign/)
// and unchanged when migrated to https://akamisushi.pt/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: { target: "es2020" },
});
