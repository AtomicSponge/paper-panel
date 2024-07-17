<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onSave } from './Spigot.telefunc'
import type { ModelRef } from 'vue'

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

/** Save the Spigot configuration */
const saveConfig = async ():Promise<void> => {
  const res = await onSave(data.value)
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Spigot Configuration saved!')
}
</script>

<template>
  <section class="subbox">
    <header>
      <div><h2>Spigot Configuration</h2></div>
      <div>
        <a href="https://docs.papermc.io/paper/reference/spigot-configuration">
          https://docs.papermc.io/paper/reference/spigot-configuration
        </a>
      </div>
      <div><button @click="toggleConfig">{{ label }}</button></div>
    </header>
    <main v-show="showConfig">
      <div>
        <div>messages</div>
      </div>

      <div>
        <div>advancements</div>
      </div>

      <div>
        <div>settings</div>
      </div>

      <div>
        <div>commands</div>
      </div>

      <div>
        <div>world-settings</div>
      </div>

      <div>
        <div>players</div>
      </div>

      <div>
        <div>config-version</div>
      </div>

      <div>
        <div>stats</div>
      </div>
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
