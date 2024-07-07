<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onSaveNewWorld } from './AddWorldForm.telefunc'

const saveNewWorld = async () => {
  try {
    await onSaveNewWorld()
    window.alert('World added!')
  } catch (error:any) {
    window.alert(error.message)
  }
}
</script>

<template>
  Form for adding a new world
  <button @click="saveNewWorld">Save</button>
</template>

<style scoped>
</style>
