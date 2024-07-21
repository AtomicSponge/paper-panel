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
        <div class="tab">
          delay-chunk-unloads-by
          <input type="text" v-model="data['chunks']['delay-chunk-unloads-by']"/>
        </div>
        <div class="tab">
          entity-per-chunk-save-limit
          <div class="tab">
            arrow
            <input type="number" v-model="data['chunks']['entity-per-chunk-save-limit']['arrow']"/>
          </div>
          <div class="tab">
            ender_pearl
            <input type="number" v-model="data['chunks']['entity-per-chunk-save-limit']['ender_pearl']"/>
          </div>
          <div class="tab">
            experience_orb
            <input type="number" v-model="data['chunks']['entity-per-chunk-save-limit']['experience_orb']"/>
          </div>
          <div class="tab">
            fireball
            <input type="number" v-model="data['chunks']['entity-per-chunk-save-limit']['fireball']"/>
          </div>
          <div class="tab">
            small_fireball
            <input type="number" v-model="data['chunks']['entity-per-chunk-save-limit']['small_fireball']"/>
          </div>
          <div class="tab">
            snowball
            <input type="number" v-model="data['chunks']['entity-per-chunk-save-limit']['snowball']"/>
          </div>
        </div>
        <div class="tab">
          fixed-chunk-inhabited-time
          <input type="number" v-model="data['chunks']['fixed-chunk-inhabited-time']"/>
        </div>
        <div class="tab">
          flush-regions-on-save
          <input type="checkbox" v-model="data['chunks']['flush-regions-on-save']"/>
        </div>
        <div class="tab">
          max-auto-save-chunks-per-tick
          <input type="number" v-model="data['chunks']['max-auto-save-chunks-per-tick']"/>
        </div>
        <div class="tab">
          prevent-moving-into-unloaded-chunks
          <input type="checkbox" v-model="data['chunks']['prevent-moving-into-unloaded-chunks']"/>
        </div>
      </div>

      <div>
        <div><h3>collisions</h3></div>
        <div class="tab">
          allow-player-cramming-damage
          <input type="checkbox" v-model="data['collisions']['allow-player-cramming-damage']"/>
        </div>
        <div class="tab">
          allow-vehicle-collisions
          <input type="checkbox" v-model="data['collisions']['allow-vehicle-collisions']"/>
        </div>
        <div class="tab">
          fix-climbing-bypassing-cramming-rule
          <input type="checkbox" v-model="data['collisions']['fix-climbing-bypassing-cramming-rule']"/>
        </div>
        <div class="tab">
          max-entity-collisions
          <input type="number" v-model="data['collisions']['max-entity-collisions']"/>
        </div>
        <div class="tab">
          only-players-collide
          <input type="checkbox" v-model="data['collisions']['only-players-collide']"/>
        </div>
      </div>

      <div>
        <div><h3>command-blocks</h3></div>
        <div class="tab">
          force-follow-perm-level
          <input type="checkbox" v-model="data['command-blocks']['force-follow-perm-level']"/>
        </div>
        <div class="tab">
          permissions-level
          <input type="number" v-model="data['command-blocks']['permissions-level']"/>
        </div>
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
