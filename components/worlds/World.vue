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

import type { ModelRef } from 'vue'

defineProps<{
  /** World name */
  name:string
  /** World folder */
  folder:string
}>()

const worldData:ModelRef<any> = defineModel('world', { required: true })
const netherData:ModelRef<any> = defineModel('nether', { required: true })
const theEndData:ModelRef<any> = defineModel('end', { required: true })

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
      <PaperWorldConfig :folder="folder" v-model="worldData"/>
    </div>
    <hr/>
    <div>
      <PaperNetherConfig :folder="folder" v-model="netherData"/>
    </div>
    <hr/>
    <div>
      <PaperTheEndConfig :folder="folder" v-model="theEndData"/>
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
