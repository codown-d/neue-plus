<template>
  <div :class="[ns.b(), ns.is(`${shadow}-shadow`)]">
    <div v-if="$slots.header || header" :class="[ns.e('header'), headerClass]">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :class="[ns.e('body'), bodyClass]" :style="bodyStyle">
      <slot />
    </div>
    <div v-if="$slots.footer || footer" :class="[ns.e('footer'), footerClass]">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@neue-plus/hooks'
import { cardProps } from './card'

defineOptions({
  name: 'ElCard',
})

defineProps(cardProps)

const ns = useNamespace('card')
</script>
