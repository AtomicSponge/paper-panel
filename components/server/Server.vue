<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import ServerConfig from '@/components/server/ServerConfig.vue'
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
const toggleConfig = () => {
  showConfig.value = showConfig.value ? false : true
}

/** Check for updates */
const checkUpdates = async () => {
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
  <section>
    <div>
      <h2><a :href="`/worlds`">{{ name }}</a></h2>
      {{ address }}:{{ port }}
    </div>
    <div>
      <h3>Version: 1.21</h3>
      <button @click="checkUpdates()">Check for updates</button>
    </div>
    <div v-show="showUpdate">
      Checking for updates, please wait...
    </div>
    <div>      
      <button @click="toggleConfig()">Edit Config</button>
    </div>
    <div v-show="showConfig">
      <ServerConfig/>
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
  border: 3px solid rgb(85, 85, 85);
  border-radius: 32px;
  background-color: rgb(55, 55, 55);
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

@media (prefers-color-scheme: light) {
  section {
    border: 3px solid rgb(255, 239, 213);
    background-color: rgb(253, 245, 230);
  }
}
</style>
