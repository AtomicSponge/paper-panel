<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script setup lang="ts">
import { onSave } from './SaveSetup.telefunc'

const data  = defineModel()

const saveConfig = async () => {
  try {
    await onSave()
  } catch (error:any) {
    window.alert(error.message)
  }
}
</script>

<template>
  <button @click="saveConfig">Save</button>
</template>
