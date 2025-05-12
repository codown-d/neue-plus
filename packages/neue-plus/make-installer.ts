import { INSTALLED_KEY } from '@neue-plus/constants'
import { version } from './version'

import type { Plugin } from '@vue/runtime-core'
// import type { ConfigProviderContext } from '@neue-plus/components/config-provider'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: any, ) => {//options?: ConfigProviderContext
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))
    // if (options) provideGlobalConfig(options, app, true)
  }

  return {
    version,
    install,
  }
}