<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import type { Data } from './+data'
import { useData } from 'vike-vue/useData'
const data = useData<Data>()
</script>

<template>
  <section>
    <header>
      <h1>{{ data.world.name }}</h1>
    </header>
  </section>
  <main>
    ...
  </main>
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
