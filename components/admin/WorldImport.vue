<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onWorldImport } from './WorldImport.telefunc'

const filePicker = ref()

const importWorld = async (event:any) => {
  if(window.confirm('Import world?')) {
    try {
      await onWorldImport()
      window.alert('World imported!')
    } catch (error:any) {
      window.alert(error.message)
    }
  }
}
</script>

<template>
  <label for="worldimport">Import world:</label>
  <input id="worldimport" type="file" accept="text/plain" :onchange="importWorld"/>
</template>
