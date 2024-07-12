<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script setup lang="ts">
import { navigate } from 'vike/client/router'
import { onSave } from './SaveSetup.telefunc'

import type { ModelRef } from 'vue'

const adminData:ModelRef<AdminSetupData> = defineModel('admin', { required: true })
const serverConfig:ModelRef<ServerSetupData> = defineModel('server', { required: true })

const saveConfig = async () => {
  const res = await onSave({
    adminData: adminData.value,
    serverConfig: serverConfig.value
  })
  if(res?.errorMessage) window.alert(res.errorMessage)
  else {
    const navigationPromise = navigate('/')
    await navigationPromise
  }
}
</script>

<template>
  <button @click="saveConfig">Save</button>
</template>
