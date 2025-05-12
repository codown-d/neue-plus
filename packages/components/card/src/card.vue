<template>
  <el-card v-bind="props">
    <slot />
  </el-card>
</template>

<script setup lang="ts">
import { ElCard } from 'element-plus'
import { neCardProps } from './type'
// 定义 props
const props = defineProps(neCardProps)
defineOptions({
  name: 'NeCard',
})
</script>

