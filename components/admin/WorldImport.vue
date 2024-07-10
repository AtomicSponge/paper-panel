<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'

const filePicker = ref()

const importWorld = async (event:any) => {
  window.alert('changed')
}
</script>

<template>
  <label for="worldimport">Import world:</label>
  <input id="worldimport" type="file" accept="text/plain" :onchange="importWorld"/>
</template>
