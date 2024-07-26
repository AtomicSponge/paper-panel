<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onSave } from './Bukkit.telefunc'
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

/** Save the Bukkit configuration */
const saveConfig = async ():Promise<void> => {
  const res = await onSave({ data: data.value })
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Bukkit Configuration saved!')
}
</script>

<template>
  <section class="subbox">
    <header>
      <div><h2>Bukkit Configuration</h2></div>
      <div>
        <a href="https://docs.papermc.io/paper/reference/bukkit-configuration">
          https://docs.papermc.io/paper/reference/bukkit-configuration
        </a>
      </div>
      <div><button @click="toggleConfig">{{ label }}</button></div>
    </header>
    <main v-show="showConfig">
      <div>
        <div>settings</div>
        <div class="tab">
          allow-end
          <input type="checkbox" v-model="data['settings']['allow-end']"/>
        </div>
        <div class="tab">
          warn-on-overload
          <input type="checkbox" v-model="data['settings']['warn-on-overload']"/>
        </div>
        <div class="tab">
          permissions-file
          <input type="text" v-model="data['settings']['permissions-file']"/>
        </div>
        <div class="tab">
          update-folder
          <input type="text" v-model="data['settings']['update-folder']"/>
        </div>
        <div class="tab">
          plugin-profiling
          <input type="checkbox" v-model="data['settings']['plugin-profiling']"/>
        </div>
        <div class="tab">
          connection-throttle
          <input type="number" v-model="data['settings']['connection-throttle']"/>
        </div>
        <div class="tab">
          query-plugins
          <input type="checkbox" v-model="data['settings']['query-plugins']"/>
        </div>
        <div class="tab">
          deprecated-verbose
          <input type="text" v-model="data['settings']['deprecated-verbose']"/>
        </div>
        <div class="tab">
          shutdown-message
          <input type="text" v-model="data['settings']['shutdown-message']"/>
        </div>
        <div class="tab">
          minimum-api
          <input type="text" v-model="data['settings']['minimum-api']"/>
        </div>
        <div class="tab">
          use-map-color-cache
          <input type="checkbox" v-model="data['settings']['use-map-color-cache']"/>
        </div>
      </div>

      <div>
        <div>spawn-limits</div>
        <div class="tab">
          monsters
          <input type="number" v-model="data['spawn-limits']['monsters']"/>
        </div>
        <div class="tab">
          animals
          <input type="number" v-model="data['spawn-limits']['animals']"/>
        </div>
        <div class="tab">
          water-animals
          <input type="number" v-model="data['spawn-limits']['water-animals']"/>
        </div>
        <div class="tab">
          water-ambient
          <input type="number" v-model="data['spawn-limits']['water-ambient']"/>
        </div>
        <div class="tab">
          water-underground-creature
          <input type="number" v-model="data['spawn-limits']['water-underground-creature']"/>
        </div>
        <div class="tab">
          axolotls
          <input type="number" v-model="data['spawn-limits']['axolotls']"/>
        </div>
        <div class="tab">
          ambient
          <input type="number" v-model="data['spawn-limits']['ambient']"/>
        </div>
      </div>

      <div>
        <div>chunk-gc</div>
        <div class="tab">
          period-in-ticks
          <input type="number" v-model="data['chunk-gc']['period-in-ticks']"/>
        </div>
      </div>

      <div>
        <div>ticks-per</div>
        <div class="tab">
          animal-spawns
          <input type="number" v-model="data['ticks-per']['animal-spawns']"/>
        </div>

        <div class="tab">
          monster-spawns
          <input type="number" v-model="data['ticks-per']['monster-spawns']"/>
        </div>
        <div class="tab">
          water-spawns
          <input type="number" v-model="data['ticks-per']['water-spawns']"/>
        </div>
        <div class="tab">
          water-ambient-spawns
          <input type="number" v-model="data['ticks-per']['water-ambient-spawns']"/>
        </div>
        <div class="tab">
          water-underground-creature-spawns
          <input type="number" v-model="data['ticks-per']['water-underground-creature-spawns']"/>
        </div>
        <div class="tab">
          axolotl-spawns
          <input type="number" v-model="data['ticks-per']['axolotl-spawns']"/>
        </div>
        <div class="tab">
          ambient-spawns
          <input type="number" v-model="data['ticks-per']['ambient-spawns']"/>
        </div>
        <div class="tab">
          autosave
          <input type="number" v-model="data['ticks-per']['autosave']"/>
        </div>
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
