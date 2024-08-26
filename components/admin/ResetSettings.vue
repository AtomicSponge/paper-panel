<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { navigate } from 'vike/client/router'
import { onAbort } from 'telefunc/client'

import { onResetSettings } from './ResetSettings.telefunc'

onAbort(async (err) => {
  if (err.abortValue.notLoggedIn) {
    const navigationPromise = navigate('/login')
    await navigationPromise
  }
})

const resetSettings = async ():Promise<void> => {
  if(window.confirm('Warning!  This will wipe all settings!  Do you want to continue?')) {
    if(window.prompt('Enter RESET to reset settings:') === 'RESET') {
      const res = await onResetSettings()
      if(res?.errorMessage) {
        window.alert(res.errorMessage)
      } else {
        window.alert('Settings Reset!')
        const navigationPromise = navigate('/logout')
        await navigationPromise
      }
    }
  }
}
</script>

<template>
  <button @click="resetSettings()">Reset Settings</button>
</template>

<style scoped>
button {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(178, 34, 34);
}
</style>
