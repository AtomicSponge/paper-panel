<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import type { Data } from './+data'
import { useData } from 'vike-vue/useData'
const data = useData<Data>()

import World from '@/components/worlds/World.vue'
</script>

<template>
  <section>
    <header>
      <h1>Worlds</h1>
    </header>
    <main>
      <div v-for="world in data.worlds">
        <World
          :id="world.id"
          :name="world.name"/>
      </div>
    </main>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  align-items: center;
}
header {
  text-align: center;
}
</style>
