<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import WorldConfig from '@/components/worlds/WorldConfig.vue'
import { onExport } from './World.telefunc'

defineProps<{
  /** World ID */
  id:number
  /** World name */
  name:string
}>()

/** Reference for showing the config edit box */
const showConfig = ref(false)
/** Reference for displaying the export wait message */
const showExportMsg = ref(false)

/** Toggle showing the config window */
const toggleConfig = ():void => {
  showConfig.value = showConfig.value ? false : true
}

/** Export world files */
const doExport = async ():Promise<void> => {
  showExportMsg.value = true
  const res = await onExport()
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert(res.data)
  showExportMsg.value = false
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
      <button @click="doExport">Export</button>
    </div>
    <div v-show="showExportMsg">
      Running export, please wait...
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
