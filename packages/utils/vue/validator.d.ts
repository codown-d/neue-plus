import type { ComponentSize, DatePickType } from 'neue-plus/es/constants'

export declare const isValidComponentSize: (
  val: string
) => val is ComponentSize | ''
export declare const isValidDatePickType: (val: string) => val is DatePickType
