import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { adorableCSS } from "adorable-css/vite";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [
      adorableCSS(),
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            kakaoAppKey: env.VITE_KAKAO_MAP_APP_KEY,
          },
        },
      }),
    ],
    server: {
      host: true,
      port: 3000,
    },
  });
};
