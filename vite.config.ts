import {defineConfig} from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),
	],
	server: {
		host: true,
		port: 3000,
		proxy: {
			"/trpc": "http://localhost:4000",
			"/auth": "http://localhost:4000",
		},
	},

})
