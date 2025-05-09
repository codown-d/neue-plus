import { withInstall } from '@neue-plus/utils'
import type { SFCWithInstall } from '@neue-plus/utils'
import Button from './src/button.vue'

export const NeButton: SFCWithInstall<typeof Button> = withInstall(Button)
export default NeButton
