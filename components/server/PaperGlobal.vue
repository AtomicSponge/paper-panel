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
        <div class="tab">
          disable-noteblock-updates
          <input type="checkbox" v-model="config['block-updates']['disable-noteblock-updates']">
        </div>
        <div class="tab">
          disable-tripwire-updates
          <input type="checkbox" v-model="config['block-updates']['disable-tripwire-updates']">
        </div>
      </div>

      <div>
        <div>chunk-loading-advanced</div>
        <div class="tab">
          auto-config-send-distance
          <input type="checkbox" v-model="config['chunk-loading-advanced']['auto-config-send-distance']">
        </div>
        <div class="tab">
          player-max-concurrent-chunk-generates
          <input type="text" v-model="config['chunk-loading-advanced']['player-max-concurrent-chunk-generates']">
        </div>
        <div class="tab">
          player-max-concurrent-chunk-loads
          <input type="text" v-model="config['chunk-loading-advanced']['player-max-concurrent-chunk-loads']">
        </div>
      </div>

      <div>
        <div>chunk-loading-basic</div>
        <div class="tab">
          player-max-chunk-generate-rate
          <input type="text" v-model="config['chunk-loading-basic']['player-max-chunk-generate-rate']">
        </div>
        <div class="tab">
          player-max-chunk-load-rate
          <input type="text" v-model="config['chunk-loading-basic']['player-max-chunk-load-rate']">
        </div>
        <div class="tab">
          player-max-chunk-send-rate
          <input type="text" v-model="config['chunk-loading-basic']['player-max-chunk-send-rate']">
        </div>
      </div>

      <div class="unsupported">
        <h3>Unsupported Settings</h3>
        <div class="tab">
          allow-headless-pistons
          <input type="checkbox" v-model="config['unsupported-settings']['allow-headless-pistons']">
        </div>
        <div class="tab">
          allow-permanent-block-break-exploits
          <input type="checkbox" v-model="config['unsupported-settings']['allow-permanent-block-break-exploits']">
        </div>
        <div class="tab">
          allow-piston-duplication
          <input type="checkbox" v-model="config['unsupported-settings']['allow-piston-duplication']">
        </div>
        <div class="tab">
          allow-tripwire-disarming-exploits
          <input type="checkbox" v-model="config['unsupported-settings']['allow-tripwire-disarming-exploits']">
        </div>
        <div class="tab">
          allow-unsafe-end-portal-teleportation
          <input type="checkbox" v-model="config['unsupported-settings']['allow-unsafe-end-portal-teleportation']">
        </div>

        <div class="tab">
          compression-format
        </div>

        <div class="tab">
          perform-username-validation
          <input type="checkbox" v-model="config['unsupported-settings']['perform-username-validation']">
        </div>
        <div class="tab">
          skip-vanilla-damage-tick-when-shield-blocked
          <input type="checkbox" v-model="config['unsupported-settings']['skip-vanilla-damage-tick-when-shield-blocked']">
        </div>
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
input[type=text] {
  width: 5em;
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
