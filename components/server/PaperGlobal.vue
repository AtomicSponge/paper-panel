<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onSave } from './PaperGlobal.telefunc'

/** Reference to the config text area */
const configTextArea = ref('Config window')

/** Save the server configuration */
const saveConfig = async ():Promise<void> => {
  try {
    await onSave()
    window.alert('Config saved')
  } catch (error:any) {
    window.alert(error.message)
  }
}
</script>

<template>
  <div>
    <textarea v-model="configTextArea"></textarea>
  </div>
  <div>
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
