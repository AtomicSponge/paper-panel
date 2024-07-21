<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onCheckUpdate, onDoUpdate } from './Server.telefunc'

defineProps<{
  /** Server address */
  hostname:string
  /** Server port */
  port:string
}>()

/** Reference for displaying the update message */
const showUpdate = ref(false)

const updateMessage = ref('')

/** Check for updates */
const checkUpdates = async ():Promise<void> => {
  showUpdate.value = true
  updateMessage.value = 'Checking for updates, please wait...'
  const updateAvailable = await onCheckUpdate()
  if(updateAvailable.errorMessage) {
    window.alert(updateAvailable.errorMessage)
    return
  }
  if(updateAvailable.status && window.confirm('Update available!  This will restart the server!  Are you sure you want to continue?')) {
    updateMessage.value = 'Performing server update, please wait...'
    const res = await onDoUpdate()
  } else {
    window.alert('Server is on the latest version!')
  }
  showUpdate.value = false
}
</script>

<template>
  <section class="subbox">
    <div>
      <h2>{{ hostname }}:{{ port }}</h2>
    </div>
    <div>
      <h3>Version: 1.20</h3>
      <button @click="checkUpdates()">Check for updates</button>
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
h2 {
  display: inline-block;
  padding-right: 1em;
}
h3 {
  display: inline-block;
  padding-right: 1em;
}
</style>
