<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onWorldImport } from './WorldImport.telefunc'

const filePicker = ref<HTMLInputElement | null>(null)

const importWorld = async () => {
  if (filePicker.value !== null &&
      filePicker.value.files !== null &&
      window.confirm('Import world?')) {
    try {
      await onWorldImport({ file: filePicker.value.files[0] })
      window.alert('World imported!')
    } catch (error:any) {
      window.alert(error.message)
    }
  }
}
</script>

<template>
  <label for="worldimport">Import world:</label>
  <input id="worldimport" type="file" accept=".zip" ref="filePicker" @change="importWorld()"/>
</template>
