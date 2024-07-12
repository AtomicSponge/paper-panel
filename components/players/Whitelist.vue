<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onUpdate } from './Whitelist.telefunc'
import type { ModelRef } from 'vue'

const data:ModelRef<any> = defineModel({ required: true })

/** Update the Banned IPs */
const updateConfig = async ():Promise<void> => {
  const res = await onUpdate(data.value)
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Whitelist updated!')
}
</script>

<template>
  <section class="subbox">
    <div>
      <h2>Whitelist</h2>
    </div>
    <div>
      <button @click="updateConfig">Update</button>
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
  text-align: center;
  padding: 0.4em;
}
</style>
