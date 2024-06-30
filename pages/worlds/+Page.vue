<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import World from './World.vue'
</script>

<template>
  <section>
    <header>
      <h1>Worlds</h1>
    </header>
    <main>
      <World/>
    </main>
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
