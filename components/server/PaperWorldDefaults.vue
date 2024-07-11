<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onSave } from './PaperWorldDefaults.telefunc'

const props = defineProps<{
  /** Data loaded from file */
  data:any
}>()

/** Label for the toggle button */
const label = ref('Edit')
/** Reference for showing the config display */
const showConfig = ref(false)

/** Reference for config data */
const config = ref(props.data)

/** Toggle showing the config display */
const toggleConfig = ():void => {
  showConfig.value = showConfig.value ? false : true
  label.value = showConfig.value ? 'Hide' : 'Edit'
}

/** Save the World Defaults configuration */
const saveConfig = async ():Promise<void> => {
  const res = await onSave(config.value)
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Paper World Defaults saved!')
}
</script>

<template>
  <section class="subbox">
    <header>
      <div><h2>Paper World Defaults</h2></div>
      <div>
        <a href=" https://docs.papermc.io/paper/reference/world-configuration">
          https://docs.papermc.io/paper/reference/world-configuration
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
  width: 5em;
}
input[type=number] {
  width: 5em;
}
.tab {
  margin-left: 2em;
}
</style>
