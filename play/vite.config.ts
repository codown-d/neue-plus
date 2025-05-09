import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Inspect from 'vite-plugin-inspect'
import VueMacros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vite'
import { NeuePlusResolver } from '@neue-plus/resolver'
export default defineConfig({
  
  build: {
    sourcemap: true,
  },
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    Components({
      include: `${__dirname}/**`,
      resolvers: [NeuePlusResolver({
        version: '1.0.0',
        importStyle: 'sass',
      })],
      dts: false,
    }),
    Inspect(),
  ],
  // resolve: {
  //   alias: [
  //     {
  //       find: /^neue-plus(\/(es|lib))?$/,
  //       replacement: path.resolve(epRoot, 'index.ts'),
  //     },
  //     {
  //       find: /^neue-plus\/(es|lib)\/(.*)$/,
  //       replacement: `${pkgRoot}/$2`,
  //     },
  //   ],
  // },
})
