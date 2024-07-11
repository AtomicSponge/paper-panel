<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script setup lang="ts">
import type { ModelRef } from 'vue'
import { onSave } from './SaveSetup.telefunc'

const adminData:ModelRef<AdminSetupData> = defineModel('admin', { required: true })
const serverConfig:ModelRef<ServerSetupData> = defineModel('server', { required: true })

const saveConfig = async () => {
  const res = await onSave({
    adminData: adminData.value,
    serverConfig: serverConfig.value
  })
  if(res?.errorMessage) window.alert(res.errorMessage)
}
</script>

<template>
  <button @click="saveConfig">Save</button>
</template>
