import { componentSizeMap } from '@neue-plus/constants'

import type { ComponentSize } from '@neue-plus/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
