<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import PaperWorldConfig from '@/components/worlds/PaperWorldConfig.vue'
import PaperNetherConfig from './PaperNetherConfig.vue'
import PaperTheEndConfig from './PaperTheEndConfig.vue'
import { onExport } from './World.telefunc'

defineProps<{
  /** World ID */
  id:number
  /** World name */
  name:string
}>()

/** Reference for displaying the export wait message */
const showExportMsg = ref(false)

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
      <h2>{{ name }}</h2>
    </div>
    <hr/>
    <div>
      <PaperWorldConfig :id/>
    </div>
    <hr/>
    <div>
      <PaperNetherConfig :id/>
    </div>
    <hr/>
    <div>
      <PaperTheEndConfig :id/>
    </div>
    <hr/>
    <div>
      <button @click="doExport">Export World</button>
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
hr {
  width: 100%;
}
</style>
