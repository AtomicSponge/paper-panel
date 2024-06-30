<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import Server from './Server.vue'
</script>

<template>
  <section>
    <header>
      <h1>Servers</h1>
    </header>
    <Server/>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
header {
  text-align: center;
}
</style>
