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
      <div><h1>Worlds</h1></div>
      <div>
        <h3>Per World Override Settings</h3>
      </div>
      <div>
        <a href="https://docs.papermc.io/paper/reference/configuration#per-world-values">
          https://docs.papermc.io/paper/reference/configuration#per-world-values
        </a>
      </div>
    </header>
    <main>
      <div v-for="(name, idx) in data.nameRef">
        <World
          :name="name"
          :folder="data.folderRef.at(idx)!"
          :world="data.worldConfig.at(idx)"
          :nether="data.netherConfig.at(idx)"
          :end="data.theEndConfig.at(idx)"/>
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
div {
  margin: 0.4em;
}
</style>
