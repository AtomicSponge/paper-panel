<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onScan } from './WorldScan.telefunc'

const doWorldScan = async ():Promise<void> => {
  try {
    await onScan()
    window.alert('Scan complete')
  } catch (error:any) {
    window.alert(error.message)
  }
}
</script>

<template>
  <button @click="doWorldScan">Scan for worlds</button>
</template>
