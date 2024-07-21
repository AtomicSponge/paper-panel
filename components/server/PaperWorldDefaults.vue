<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onSave } from './PaperWorldDefaults.telefunc'
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

/** Save the World Defaults configuration */
const saveConfig = async ():Promise<void> => {
  const res = await onSave(data.value)
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Paper World Defaults saved!')
}
</script>

<template>
  <section class="subbox">
    <header>
      <div><h2>Paper World Defaults</h2></div>
      <div>
        <a href="https://docs.papermc.io/paper/reference/world-configuration">
          https://docs.papermc.io/paper/reference/world-configuration
        </a>
      </div>
      <div><button @click="toggleConfig">{{ label }}</button></div>
    </header>
    <main v-show="showConfig">
      <div>
        <div><h3>anticheat</h3></div>
        <div class="tab">
          anti-xray
          <div class="tab">
            enabled
            <input type="checkbox" v-model="data['anticheat']['anti-xray']['enabled']"/>
          </div>
          <div class="tab">
            engine-mode
            <input type="number" v-model="data['anticheat']['anti-xray']['engine-mode']"/>
          </div>
          <div class="tab">
            hidden-blocks (seperate with commas)<br/>
            <textarea v-model="data['anticheat']['anti-xray']['hidden-blocks']"></textarea>
          </div>
          <div class="tab">
            lava-obscures
            <input type="checkbox" v-model="data['anticheat']['anti-xray']['lava-obscures']"/>
          </div>
          <div class="tab">
            max-block-height
            <input type="number" v-model="data['anticheat']['anti-xray']['max-block-height']"/>
          </div>
          <div class="tab">
            replacement-blocks (seperate with commas)<br/>
            <textarea v-model="data['anticheat']['anti-xray']['replacement-blocks']"></textarea>
          </div>
          <div class="tab">
            update-radius
            <input type="number" v-model="data['anticheat']['anti-xray']['update-radius']"/>
          </div>
          <div class="tab">
            use-permission
            <input type="checkbox" v-model="data['anticheat']['anti-xray']['use-permission']"/>
          </div>
        </div>
        <div class="tab">
          obfuscation
          <div class="tab">
            items
            <div class="tab">
              hide-durability
              <input type="checkbox" v-model="data['anticheat']['obfuscation']['items']['hide-durability']"/>
            </div>
            <div class="tab">
              hide-itemmeta
              <input type="checkbox" v-model="data['anticheat']['obfuscation']['items']['hide-itemmeta']"/>
            </div>
            <div class="tab">
              hide-itemmeta-with-visual-effects
              <input type="checkbox" v-model="data['anticheat']['obfuscation']['items']['hide-itemmeta-with-visual-effects']"/>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div><h3>chunks</h3></div>
        <div class="tab">
          auto-save-interval
          <input type="text" v-model="data['chunks']['auto-save-interval']"/>
        </div>
      </div>

      <div>
        <div><h3>collisions</h3></div>
      </div>

      <div>
        <div><h3>command-blocks</h3></div>
      </div>

      <div>
        <div><h3>entities</h3></div>
      </div>

      <div>
        <div><h3>environment</h3></div>
      </div>

      <div>
        <div><h3>feature-seeds</h3></div>
      </div>

      <div>
        <div><h3>fishing-time-range</h3></div>
      </div>

      <div>
        <div><h3>fixes</h3></div>
      </div>

      <div>
        <div><h3>hopper</h3></div>
      </div>

      <div>
        <div><h3>lootables</h3></div>
      </div>

      <div>
        <div><h3>maps</h3></div>
      </div>

      <div>
        <div><h3>max-growth-height</h3></div>
      </div>

      <div>
        <div><h3>misc</h3></div>
      </div>

      <div>
        <div><h3>scoreboards</h3></div>
      </div>

      <div>
        <div><h3>spawn</h3></div>
      </div>

      <div>
        <div><h3>tick-rates</h3></div>
      </div>

      <div class="unsupported">
        <div><h3>unsupported-settings</h3></div>
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
.unsupported {
  margin: 0.4em;
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(178, 34, 34);
}
</style>
