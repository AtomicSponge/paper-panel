<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { navigate } from 'vike/client/router'
import { onAbort } from 'telefunc/client'

import { onUpdateServerPath } from './ServerPath.telefunc'

onAbort(async (err) => {
  if (err.abortValue.notLoggedIn) {
    const navigationPromise = navigate('/login')
    await navigationPromise
  }
})

const props = defineProps<{
  /** Path to server */
  path:string
}>()

/** Reference to the server path input field */
const serverPath = ref(props.path)

/** Update the server path */
const updatePath = async () => {
    const res = await onUpdateServerPath({ path: serverPath.value })
    if(res?.errorMessage) window.alert(res.errorMessage)
    window.alert('Server path updated!')
}
</script>

<template>
  <label for="serverpath">Server path:</label>
  <input id="serverpath" type="text" v-model="serverPath"/>
  <button @click="updatePath">Update</button>
</template>

<style scoped>
label {
  margin-right: 1em;
}
input {
  margin-right: 3em;
  width: 14em;
}
</style>
