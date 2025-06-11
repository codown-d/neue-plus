declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ElCard: typeof import('neue-plus')['ElCard']
  }

  interface ComponentCustomProperties {}
}

export {}
