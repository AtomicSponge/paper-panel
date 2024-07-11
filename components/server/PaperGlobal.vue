<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onSave } from './PaperGlobal.telefunc'

const props = defineProps<{
  data:any
}>()

const config = ref(props.data)

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
    <header>
      <h2>Paper Global Config</h2>
      <a href="https://docs.papermc.io/paper/reference/global-configuration">
        https://docs.papermc.io/paper/reference/global-configuration
      </a>
    </header>

    <main>
      <div>
        <div>block-updates</div>
        <div class="tab">
          disable-chorus-plant-updates
          <input type="checkbox" v-model="config['block-updates']['disable-chorus-plant-updates']">
        </div>
        <div class="tab">
          disable-mushroom-block-updates
          <input type="checkbox" v-model="config['block-updates']['disable-mushroom-block-updates']">
        </div>
      </div>

      <div class="unsupported">
        <h3>Unsupported Settings</h3>
      </div>
    </main>

    <footer>
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
.tab {
  margin-left: 2em;
}
.unsupported {
  margin: 0.4em;
  border-radius: 16px;
  background-color: rgb(178,34,34);
}
</style>
