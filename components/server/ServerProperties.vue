<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { navigate } from 'vike/client/router'
import { onAbort } from 'telefunc/client'

import type { ModelRef } from 'vue'

import { onSave } from './ServerProperties.telefunc'

onAbort(async (error:any) => {
  if (error.abortValue.notLoggedIn) {
    const navigationPromise = navigate('/login')
    await navigationPromise
  }
})

const data:ModelRef<any> = defineModel({ required: true })

/** Label for the toggle button */
const label = ref('Edit')
/** Reference for showing the config display */
const showConfig = ref(false)

/** Toggle showing the config display */
const toggleConfig = ():void => {
  showConfig.value = showConfig.value ? false : true
  label.value = showConfig.value ? 'Hide' : 'Edit'
}

/** Save the World Defaults configuration */
const saveConfig = async ():Promise<void> => {
  const res = await onSave({ data: data.value })
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Paper Server Properties saved!')
}
</script>

<template>
  <section class="subbox">
    <header>
      <div><h2>Server Properties</h2></div>
      <div>
        <a href="https://docs.papermc.io/paper/reference/server-properties">
          https://docs.papermc.io/paper/reference/server-properties
        </a>
      </div>
      <div><button @click="toggleConfig">{{ label }}</button></div>
    </header>
    <main v-show="showConfig">
      ...
    </main>
    <footer v-show="showConfig">
      <button @click="saveConfig">Save Configuration</button>
    </footer>
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
header {
  text-align: center;
}
main {
  padding: 0.4em;
}
div {
  padding: 0.4em;
}
input[type=text] {
  width: 12em;
}
input[type=number] {
  width: 6em;
}
select {
  width: 8em;
}
textarea {
  width: 46vw;
  height: 2.8em;
  margin-top: 3px;
}
.tab {
  margin-left: 2em;
}
</style>
