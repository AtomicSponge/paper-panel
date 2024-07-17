<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onResetSettings } from './ResetSettings.telefunc'

const resetSettings = async () => {
  if(window.confirm('Warning!  This will wipe all settings!  Do you want to continue?')) {
    if(window.prompt('Enter RESET to reset settings:') === 'RESET') {
      const res = await onResetSettings()
      if(res?.errorMessage) window.alert(res.errorMessage)
      else window.alert('Settings Reset!')
    }
  }
}
</script>

<template>
  <button @click="resetSettings()">Reset Settings</button>
</template>

<style scoped>
</style>
