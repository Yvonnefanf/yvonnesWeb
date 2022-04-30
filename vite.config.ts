import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import base from './basePath'
const path = require('path')
const envStr = '-test'
// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [vue()],
    base: base,
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, './src') },
        {
          find: '@packages',
          replacement: path.resolve(__dirname, './packages')
        }
      ]
    },
    // css: {
    //   preprocessorOptions: {
    //     less: {
    //       additionalData: '@import "./src/style/params.less";'
    //     }
    //   }
    // },
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          // target: `https://www${envStr}.bimface.com/api`,
          target: loadEnv(mode, process.cwd()).VITE_APP_BASE_DOMIAN,
          changeOrigin: true,
          // rewrite: (apiPath) => apiPath.replace(/^\/api/, ''),
          cookieDomainRewrite: 'localhost'
        }
      }
      /* proxy: {
      '/api' : {
        //target: `https://www${envStr}.bimface.com/api`,
        target:  'http://10.1.64.137:8080/',
        changeOrigin: true,
        //rewrite: (apiPath) => apiPath.replace(/^\/api/, ''),
        cookieDomainRewrite: 'localhost'
      }
    }*/
    },
    build: {
      outDir: 'dist/developer',
      chunkSizeWarningLimit: 1500
    }
  })
