import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic", // 👈 ensures "react-jsx" is used
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/component/index.js"),
      name: "DownloadChart",
      fileName: (format) => `downloads-chart.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "chart.js", "react-chartjs-2"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
