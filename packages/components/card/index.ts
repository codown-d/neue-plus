import { withInstall } from '@neue-plus/utils'
import Card from './src/card.vue'
import type { SFCWithInstall } from '@neue-plus/utils'

export const NeCard: SFCWithInstall<typeof Card> = withInstall(Card)
export default NeCard
