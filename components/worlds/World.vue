<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { navigate } from 'vike/client/router'
import { onAbort } from 'telefunc/client'

import PaperWorldConfig from '@/components/worlds/PaperWorldConfig.vue'
import PaperNetherConfig from './PaperNetherConfig.vue'
import PaperTheEndConfig from './PaperTheEndConfig.vue'
import { onExport } from './World.telefunc'

onAbort(async (error:any) => {
  if (error.abortValue.notLoggedIn) {
    const navigationPromise = navigate('/login')
    await navigationPromise
  }
})

const props = defineProps<{
  /** World name */
  name:string
  /** World folder */
  folder:string
}>()

/** Data for World config */
const worldData = defineModel('world', { required: true })
/** Data for Nether config */
const netherData = defineModel('nether', { required: true })
/** Data for The End config */
const theEndData = defineModel('end', { required: true })

/** Reference for displaying the export wait message */
const showExportMsg = ref(false)

/** Export world files */
const doExport = async ():Promise<void> => {
  if(window.confirm(`Export world '${props.name}'?`)) {
    showExportMsg.value = true
    const res = await onExport()
    if(res?.errorMessage) window.alert(res.errorMessage)
    else window.alert(res.data)
    showExportMsg.value = false
  }
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
  min-width: 90vw;
}
div {
  padding: 0.4em;
}
hr {
  width: 100%;
}
</style>
