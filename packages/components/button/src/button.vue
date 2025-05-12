<template>
  <el-button v-bind="props">
  </el-button>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { neButtonProps } from './type'
const props = defineProps(neButtonProps)
defineOptions({
  name: 'NeButton',
})
</script>
