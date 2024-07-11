<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onScan } from './WorldScan.telefunc'

const doWorldScan = async ():Promise<void> => {
  const res = await onScan()
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Scan complete')
}
</script>

<template>
  <button @click="doWorldScan()">Scan for worlds</button>
</template>
