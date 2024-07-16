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
const serverConfig:ModelRef<{path:string}> = defineModel('server', { required: true })

const saveConfig = async () => {
  const res = await onSave({
    adminData: adminData.value,
    paperPath: serverConfig.value.path
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
