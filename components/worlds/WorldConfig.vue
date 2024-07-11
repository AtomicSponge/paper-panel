<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onSave } from './WorldConfig.telefunc'

defineProps<{
  /** World ID */
  id:number
}>()

/** Reference to the config text area */
const configTextArea = ref('Config window')

/** Save the world configuration */
const saveConfig = async ():Promise<void> => {
  const res = await onSave()
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Config saved')
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
