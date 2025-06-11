import installer from './defaults'

export * from '@neue-plus/components'
export * from '@neue-plus/constants'
export * from '@neue-plus/directives'
export * from '@neue-plus/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
