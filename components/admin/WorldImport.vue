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
    const res = await onWorldImport({ file: filePicker.value.files[0] })
    if(res?.errorMessage) window.alert(res.errorMessage)
    else window.alert('World imported!')
  }
}
</script>

<template>
  <label for="worldimport">Import world:</label>
  <input id="worldimport" type="file" accept=".zip" ref="filePicker" @change="importWorld()"/>
</template>
