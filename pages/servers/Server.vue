<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
defineProps<{
  name:string
  address:string
  port:number
}>()
</script>

<template>
  <section>
    <div>{{ name }}</div>
    <div>{{ address }}: {{ port }}</div>
  </section>
</template>

<style scoped>

@media (prefers-color-scheme: light) {
  /** */
}
</style>
