<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onSave } from './PaperTheEndConfig.telefunc'

defineProps<{
  /** World ID */
  id:number
}>()

/** Label for the toggle button */
const label = ref('Edit The End Config')
/** Reference for showing the config edit box */
const showConfig = ref(false)
/** Reference to the config text area */
const configTextArea = ref('The End Config window')

/** Toggle showing the config window */
const toggleConfig = ():void => {
  showConfig.value = showConfig.value ? false : true
  label.value = showConfig.value ? 'Hide' : 'Edit The End Config'
}

/** Save the world configuration */
const saveConfig = async ():Promise<void> => {
  const res = await onSave()
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Config saved')
}
</script>

<template>
  <div>
    <button @click="toggleConfig">{{ label }}</button>
  </div>
  <div v-show="showConfig">
    <textarea v-model="configTextArea"></textarea>
  </div>
  <div v-show="showConfig">
    <button @click="saveConfig">Save Config</button>
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
