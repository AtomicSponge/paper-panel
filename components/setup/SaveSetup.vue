<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script setup lang="ts">
import { onSave } from './SaveSetup.telefunc'

const adminConfig = defineModel('admin', { required: true })
const serverConfig = defineModel('server', { required: true })

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
