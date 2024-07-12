<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onUpdate } from './Server.telefunc'

defineProps<{
  /** Server address */
  address:string
  /** Server port */
  port:number
}>()

/** Reference for displaying the update message */
const showUpdate = ref(false)

/** Check for updates */
const checkUpdates = async ():Promise<void> => {
  if(window.confirm('This will restart the server!  Are you sure you want to continue?')) {
    showUpdate.value = true
    const res = await onUpdate()
    if(res?.errorMessage) window.alert(res.errorMessage)
    else window.alert('Update complete!')
    showUpdate.value = false
  }
}
</script>

<template>
  <section class="subbox">
    <div>
      <h2>{{ address }}:{{ port }}</h2>
    </div>
    <div>
      <h3>Version: 1.20</h3>
      <button @click="checkUpdates()">Check for updates</button>
    </div>
    <div v-show="showUpdate">
      Checking for updates, please wait...
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
