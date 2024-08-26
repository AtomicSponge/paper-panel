<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { navigate, reload } from 'vike/client/router'
import { onAbort } from 'telefunc/client'

import { onCheckBuild, onCheckUpdate, onDoUpdate } from './Server.telefunc'

onAbort(async (err) => {
  if (err.abortValue.notLoggedIn) {
    const navigationPromise = navigate('/login')
    await navigationPromise
  }
})

defineProps<{
  /** Server address */
  hostname:string
  /** Server port */
  port:string
  /** Server version */
  version:string
  /** Build version */
  build:string
}>()

/** Reference for displaying the update message */
const showUpdate = ref(false)
/** Reference for the update message display */
const updateMessage = ref('')

/** Check for latest build */
const checkBuild = async ():Promise<void> => {
  showUpdate.value = true
  updateMessage.value = 'Checking for updates, please wait...'
  const updateAvailable = await onCheckBuild()
  if (updateAvailable.errorMessage) {
    window.alert(updateAvailable.errorMessage)
    showUpdate.value = false
    return
  }
  if (!updateAvailable.status) {
    window.alert(updateAvailable.message)
    showUpdate.value = false
    return
  }
  if (updateAvailable.status && window.confirm(updateAvailable.message)) {
    updateMessage.value = 'Performing server update, please wait...'
    const res = await onDoUpdate({
      version: <string>updateAvailable.version,
      build: updateAvailable.build
    })
    if (res?.errorMessage) {
      window.alert(res.errorMessage)
      showUpdate.value = false
    } else {
      window.alert('Server update complete!')
      showUpdate.value = false
      await reload()
    }
  } else showUpdate.value = false
}

/** Check for updates */
const checkUpdates = async ():Promise<void> => {
  showUpdate.value = true
  updateMessage.value = 'Checking for updates, please wait...'
  const updateAvailable = await onCheckUpdate()
  if (updateAvailable.errorMessage) {
    window.alert(updateAvailable.errorMessage)
    showUpdate.value = false
    return
  }
  if (!updateAvailable.status) {
    window.alert(updateAvailable.message)
    showUpdate.value = false
    return
  }
  if (updateAvailable.status && window.confirm(updateAvailable.message)) {
    updateMessage.value = 'Performing server update, please wait...'
    const res = await onDoUpdate({
      version: updateAvailable.version,
      build: updateAvailable.build
    })
    if (res?.errorMessage) {
      window.alert(res.errorMessage)
      showUpdate.value = false
    } else {
      window.alert('Server update complete!')
      showUpdate.value = false
      await reload()
    }
  } else showUpdate.value = false
}
</script>

<template>
  <section class="subbox">
    <div>
      <h2>{{ hostname }}:{{ port }}</h2>
    </div>
    <div>
      <h3>Version: {{ version }}-{{ build }}</h3>
      <button @click="checkBuild()">Update Build</button>
      &nbsp;
      <button @click="checkUpdates()">Check for Updates</button>
    </div>
    <div v-show="showUpdate">
      {{ updateMessage }}
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  align-items: stretch;
  margin: 1em;
  padding: 1em;
  min-width: 80vw;
}
div {
  padding: 0.4em;
  text-align: center;
}
h3 {
  display: inline-block;
  padding-right: 1em;
}
</style>
