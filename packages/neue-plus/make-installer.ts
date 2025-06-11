import { INSTALLED_KEY } from '@neue-plus/constants'
import { version } from './version'

import type { App, Plugin } from 'vue'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: any) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    // Simplified version - no global config provider
    if (options) {
      console.warn(
        'Global config options are not supported in this simplified version'
      )
    }
  }

  return {
    version,
    install,
  }
}
