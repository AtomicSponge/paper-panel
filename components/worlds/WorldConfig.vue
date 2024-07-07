<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onSave } from './WorldConfig.telefunc'

defineProps<{
  id:number
}>()

const configWindow = ref('Config window')

const saveConfig = async () => {
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
    <textarea v-model="configWindow"></textarea>
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
