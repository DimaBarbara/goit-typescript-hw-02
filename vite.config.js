import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    assetsInlineLimit: 0, // Устанавливаем ограничение для встраивания медиафайлов
  },
  // Опционально, если нужно настроить обработку медиафайлов через Vite
  optimizeDeps: {
    include: ["video.js"], // Если используете библиотеки для работы с видео
  },
  css: {
    modules: {
      localsConvention: "dashes", // Конвенция для именования классов CSS-модулей
    },
  },
});
