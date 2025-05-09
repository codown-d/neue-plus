// utils/element-plus-resolver.ts
import type { ComponentResolver } from 'unplugin-vue-components'

export function NeuePlusResolver(options?: {
    version?: string
    importStyle?: 'css' | 'sass'
  }): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Ne')) {
        const partialName = name.slice(2)
        const kebabName = partialName
          .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
          .toLowerCase()
        return {
          name,
          from: 'neue-plus',
          sideEffects: `neue-pulus/es/components/${kebabName}/style/css`, // 或 style/index 如果用的是 sass
        }
      }
    },
  }
}
