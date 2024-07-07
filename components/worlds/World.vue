<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import WorldConfig from '@/components/worlds/WorldConfig.vue'
import { onBackup } from './World.telefunc'

defineProps<{
  /** World ID */
  id:number
  /** World name */
  name:string
}>()

/** Reference for showing the config edit box */
const showConfig = ref(false)
/** Reference for displaying the backing wait message */
const showBackup = ref(false)

/** Toggle showing the config window */
const toggleConfig = () => {
  showConfig.value = showConfig.value ? false : true
}

/** Backup world files */
const doBackup = async () => {
  try {
    showBackup.value = true
    const test = await onBackup()
    window.alert(test)
  } catch (error:any) {
    window.alert(error.message)
  } finally {
    showBackup.value = false
  }
}
</script>

<template>
  <section class="subbox">
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
    <div v-show="showBackup">
      Running backup, please wait...
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
}
div {
  padding: 0.4em;
}
</style>
