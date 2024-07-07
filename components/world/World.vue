<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import WorldConfig from '@/components/world/WorldConfig.vue'
import { runBackup } from './World.telefunc'

defineProps<{
  id:number
  name:string
}>()

const showConfig = ref(false)

/** Toggle showing the config window */
const toggleConfig = () => {
  showConfig.value = showConfig.value ? false : true
}

/** Backup world files */
const doBackup = () => {
  runBackup()
}
</script>

<template>
  <section>
    <div>
      <h2><a :href="`/world/${id}`">{{ name }}</a></h2>
    </div>
    <div>
      <button @click="toggleConfig()">Edit Config</button>
    </div>
    <div v-show="showConfig">
      <WorldConfig :id/>
    </div>
    <div>
      <button @click="doBackup">Backup</button>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  align-items: stretch;
  margin: 1em;
  padding: 1em;
  border: 3px solid rgb(85, 85, 85);
  border-radius: 32px;
  background-color: rgb(55, 55, 55);
}
div {
  padding: 0.4em;
}

@media (prefers-color-scheme: light) {
  section {
    border: 3px solid rgb(255, 239, 213);
    background-color: rgb(253, 245, 230);
  }
}
</style>
