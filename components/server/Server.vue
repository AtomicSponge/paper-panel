<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onUpdate } from './Server.telefunc'

defineProps<{
  /** Server name */
  name:string
  /** Server address */
  address:string
  /** Server port */
  port:number
}>()

/** Reference for showing the config edit box */
const showConfig = ref(false)
/** Reference for displaying the update message */
const showUpdate = ref(false)

/** Toggle displaying the config edit box */
const toggleConfig = ():void => {
  showConfig.value = showConfig.value ? false : true
}

/** Check for updates */
const checkUpdates = async ():Promise<void> => {
  if(window.confirm('This will restart the server!  Are you sure you want to continue?')) {
    try {
      showUpdate.value = true
      await onUpdate()
      window.alert('Update complete!')
    } catch (error:any) {
      window.alert(error.message)
    } finally {
      showUpdate.value = false
    }
  }
}
</script>

<template>
  <section class="subbox">
    <div>
      <h2><a href="/worlds">{{ name }}</a></h2>
      {{ address }}:{{ port }}
    </div>
    <div>
      <h3>Version: 1.21</h3>
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
}
div {
  padding: 0.4em;
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
