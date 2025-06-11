import { withInstall } from '@neue-plus/utils'

import Card from './src/card.vue'
import type { SFCWithInstall } from '@neue-plus/utils'

export const ElCard: SFCWithInstall<typeof Card> = withInstall(Card)
export default ElCard

export * from './src/card'
export type { CardInstance } from './src/instance'
