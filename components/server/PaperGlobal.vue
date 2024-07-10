<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onSave } from './PaperGlobal.telefunc'

const props = defineProps<{
  data:Object
}>()

/** Save the server configuration */
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
      <h2>Paper Global Config</h2>
      <a href="https://docs.papermc.io/paper/reference/global-configuration">
        https://docs.papermc.io/paper/reference/global-configuration
      </a>
    </div>
    <div class="unsupported">
      <h3>Unsupported Settings</h3>
      ...
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
.unsupported {
  border-radius: 16px;
  background-color: rgb(178,34,34);
}
</style>
