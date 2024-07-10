<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onSave } from './PaperWorldDefaults.telefunc'

const props = defineProps<{
  data:Object
}>()

/** Save the World Defaults configuration */
const saveConfig = async ():Promise<void> => {
  try {
    await onSave(props.data)
    window.alert('Config saved')
  } catch (error:any) {
    window.alert(error.message)
  }
}
</script>

<template>
  <section class="subbox">
    <div>
      <h2>Paper World Defaults</h2>
      <a href=" https://docs.papermc.io/paper/reference/world-configuration">
        https://docs.papermc.io/paper/reference/world-configuration
      </a>
    </div>
    <div>
      <button @click="saveConfig">Save Configuration</button>
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
