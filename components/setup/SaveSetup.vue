<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script setup lang="ts">
import { navigate } from 'vike/client/router'
import { onSave } from './SaveSetup.telefunc'
import { onAbort } from 'telefunc/client'

import type { ModelRef } from 'vue'

const adminData:ModelRef<AdminSetupData> = defineModel('admin', { required: true })
const serverData:ModelRef<ServerSetupData> = defineModel('server', { required: true })

/** Save configuration */
const saveConfig = async ():Promise<void> => {
  const res = await onSave({
    adminData: adminData.value,
    serverData: serverData.value
  })
  if(res?.errorMessage) window.alert(res.errorMessage)
  else {
    const navigationPromise = navigate('/')
    await navigationPromise
  }
}

/** If aborted, redirect */
onAbort(async (error) => {
  if(error) {
    const navigationPromise = navigate('/login')
    await navigationPromise
  }
})
</script>

<template>
  <button @click="saveConfig">Save</button>
</template>
