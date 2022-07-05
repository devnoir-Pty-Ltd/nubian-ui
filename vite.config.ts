import { defineConfig } from 'vite';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';
const pathSrc = path.resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), eslintPlugin()],
	server: {
		port: 3001,
	},
	css: {
		preprocessorOptions: {
			css: { additionalData: `@import "${pathSrc}/assets/css/index.css";` },
		},
	},
});
