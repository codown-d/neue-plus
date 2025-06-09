// English
export { default as en } from './lang/en'

// Chinese (Simplified)
export { default as zhCn } from './lang/zh-cn'

// Chinese (Traditional - Taiwan)
export { default as zhTw } from './lang/zh-tw'

// Chinese (Traditional - Hong Kong)
export { default as zhHk } from './lang/zh-hk'

// Chinese (Traditional - Macao)
export { default as zhMo } from './lang/zh-mo'

export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair
}

export type Language = {
  name: string
  el: TranslatePair
}
