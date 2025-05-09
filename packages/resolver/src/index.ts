import type { ComponentResolver } from 'unplugin-vue-components'

export interface NeuePlusResolverOptions {
  version?:string
  importStyle?: boolean | 'sass' | 'css'
  prefix?: string
}

export function NeuePlusResolver(options: NeuePlusResolverOptions = {}): ComponentResolver {
  const { importStyle = 'sass', prefix = 'Ne' } = options

  return {
    type: 'component',
    resolve: (name: string) => {
      if (!name.startsWith(prefix)) return

      const partialName = name.slice(prefix.length)
      const kebabCaseName = partialName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
      const path = `@neue-plus/components/${kebabCaseName}`
      const stylePath = `@neue-plus/theme-chalk/src/${kebabCaseName}.${importStyle === 'sass' ? 'scss' : 'css'}`

      return {
        name,
        from: path,
        sideEffects: importStyle ? [stylePath] : undefined,
      }
    },
  }
}
