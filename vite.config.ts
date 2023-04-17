import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import trpcServerPlugin from './server/vitePlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      trpcServerPlugin()
  ],
})
