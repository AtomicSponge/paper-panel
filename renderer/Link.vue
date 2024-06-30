<script lang="ts" setup>
import { useAttrs, computed } from 'vue'
import { usePageContext } from './usePageContext'

const pageContext = usePageContext()
const { href } = useAttrs() as { href: string }
const isActive = computed(() => {
  const { urlPathname } = pageContext.value
  return href === '/' ? urlPathname === href : urlPathname.startsWith(href)
})
</script>

<template>
  <a :class="{ active: isActive }"><slot></slot></a>
</template>

<style scoped>
a.active {
  background-color: #eee;
}
</style>
