<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { navigate } from 'vike/client/router'
import { onAbort } from 'telefunc/client'

import { onSave } from './PaperNetherConfig.telefunc'

import type { ModelRef } from 'vue'

onAbort(async (error:any) => {
  if (error.abortValue.notLoggedIn) {
    const navigationPromise = navigate('/login')
    await navigationPromise
  }
})

const data:ModelRef<string> = defineModel({ required: true })

const props = defineProps<{
  /** World folder */
  folder:string
}>()

/** Label for the toggle button */
const label = ref('Edit Nether Configuration')
/** Reference for showing the config edit box */
const showConfig = ref(false)

/** Toggle showing the config window */
const toggleConfig = ():void => {
  showConfig.value = showConfig.value ? false : true
  label.value = showConfig.value ? 'Hide' : 'Edit Nether Configuration'
}

/** Save the world configuration */
const saveConfig = async ():Promise<void> => {
  const res = await onSave({ folder: props.folder, data: data.value })
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Nether configuration saved!')
}
</script>

<template>
  <div>
    <button @click="toggleConfig">{{ label }}</button>
  </div>
  <div v-show="showConfig">
    <h3>Editing Nether Configuration</h3>
  </div>
  <div v-show="showConfig">
    <textarea v-model="data"></textarea>
  </div>
  <div v-show="showConfig">
    <button @click="saveConfig">Save Configuration</button>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  padding: 2px;
}
textarea {
  width: 86vw;
  height: 56vh;
}
</style>
