<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onUpdate } from './Operators.telefunc'

/** Update the Banned IPs */
const updateConfig = async ():Promise<void> => {
  try {
    await onUpdate()
    window.alert('Operators updated!')
  } catch (error:any) {
    window.alert(error.message)
  }
}
</script>

<template>
  <section class="subbox">
    <div>
      <h2>Operators</h2>
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
