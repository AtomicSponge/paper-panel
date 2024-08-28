<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { navigate } from 'vike/client/router'
import { onAbort } from 'telefunc/client'

import { onScan } from './WorldScan.telefunc'

onAbort(async (error:any) => {
  if (error.abortValue.notLoggedIn) {
    const navigationPromise = navigate('/login')
    await navigationPromise
  }
})

const doWorldScan = async ():Promise<void> => {
  const res = await onScan()
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Scan complete')
}
</script>

<template>
  <button @click="doWorldScan()">Scan for worlds</button>
</template>
