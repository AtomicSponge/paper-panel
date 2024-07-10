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
      const form = event.currentTarget
      console.log(form)
      const url = new URL(form.action)
      await onWorldImport({ url: await fetch(url) })
      window.alert('World imported!')
    } catch (error:any) {
      window.alert(error.message)
    }
  }
  event.preventDefault()
}
</script>

<template>
  <label for="worldimport">Import world:</label>
  <input id="worldimport" type="file" accept=".zip" :onchange="importWorld"/>
</template>
