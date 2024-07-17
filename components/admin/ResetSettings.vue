<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { navigate } from 'vike/client/router'
import { onResetSettings } from './ResetSettings.telefunc'

const resetSettings = async () => {
  if(window.confirm('Warning!  This will wipe all settings!  Do you want to continue?')) {
    if(window.prompt('Enter RESET to reset settings:') === 'RESET') {
      const res = await onResetSettings()
      if(res?.errorMessage) window.alert(res.errorMessage)
      else window.alert('Settings Reset!')
      const navigationPromise = navigate('/logout')
      await navigationPromise
    }
  }
}
</script>

<template>
  <button @click="resetSettings()">Reset Settings</button>
</template>

<style scoped>
</style>
