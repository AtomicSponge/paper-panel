<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onSave } from './PaperGlobal.telefunc'

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

/** Save the server configuration */
const saveConfig = async ():Promise<void> => {
  const res = await onSave(config.value)
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Paper Global Configuration saved!')
}
</script>

<template>
  <section class="subbox">
    <header>
      <div><h2>Paper Global Configuration</h2></div>
      <div>
        <a href="https://docs.papermc.io/paper/reference/global-configuration">
          https://docs.papermc.io/paper/reference/global-configuration
        </a>
      </div>
      <div><button @click="toggleConfig">{{ label }}</button></div>
    </header>

    <main v-show="showConfig">
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
          <input type="number" v-model.number="config['chunk-loading-advanced']['player-max-concurrent-chunk-generates']">
        </div>
        <div class="tab">
          player-max-concurrent-chunk-loads
          <input type="number" v-model.number="config['chunk-loading-advanced']['player-max-concurrent-chunk-loads']">
        </div>
      </div>

      <div>
        <div>chunk-loading-basic</div>
        <div class="tab">
          player-max-chunk-generate-rate
          <input type="number" v-model.number="config['chunk-loading-basic']['player-max-chunk-generate-rate']">
        </div>
        <div class="tab">
          player-max-chunk-load-rate
          <input type="number" v-model.number="config['chunk-loading-basic']['player-max-chunk-load-rate']">
        </div>
        <div class="tab">
          player-max-chunk-send-rate
          <input type="number" v-model.number="config['chunk-loading-basic']['player-max-chunk-send-rate']">
        </div>
      </div>

      <div>
        <div>chunk-system</div>
        <div class="tab">
          gen-parallelism
          <select v-model="config['chunk-system']['gen-parallelism']">
            <option>on</option>
            <option>off</option>
            <option>default</option>
          </select>
        </div>
        <div class="tab">
          player-max-chunk-send-rate
          <input type="number" v-model.number="config['chunk-system']['io-threads']">
        </div>
        <div class="tab">
          player-max-chunk-send-rate
          <input type="number" v-model.number="config['chunk-system']['worker-threads']">
        </div>
      </div>

      <div>
        <div>collisions</div>
        <div class="tab">
          enable-player-collisions
          <input type="checkbox" v-model="config['collisions']['enable-player-collisions']">
        </div>
        <div class="tab">
          send-full-pos-for-hard-colliding-entities
          <input type="checkbox" v-model="config['collisions']['send-full-pos-for-hard-colliding-entities']">
        </div>
      </div>

      <div>
        <div>commands</div>
        <div class="tab">
          fix-target-selector-tag-completion
          <input type="checkbox" v-model="config['commands']['fix-target-selector-tag-completion']">
        </div>
        <div class="tab">
          suggest-player-names-when-null-tab-completions
          <input type="checkbox" v-model="config['commands']['suggest-player-names-when-null-tab-completions']">
        </div>
        <div class="tab">
          time-command-affects-all-worlds
          <input type="checkbox" v-model="config['commands']['time-command-affects-all-worlds']">
        </div>
      </div>

      <div>
        <div>console</div>
        <div class="tab">
          enable-brigadier-completions
          <input type="checkbox" v-model="config['console']['enable-brigadier-completions']">
        </div>
        <div class="tab">
          enable-brigadier-highlighting
          <input type="checkbox" v-model="config['console']['enable-brigadier-highlighting']">
        </div>
        <div class="tab">
          has-all-permissions
          <input type="checkbox" v-model="config['console']['has-all-permissions']">
        </div>
      </div>

      <div>
        <div>item-validation</div>
        <div class="tab">
          book
          <div class="tab">
            author
            <input type="number" v-model.number="config['item-validation']['book']['author']">
          </div>
          <div class="tab">
            page
            <input type="number" v-model.number="config['item-validation']['book']['page']">
          </div>
          <div class="tab">
            title
            <input type="number" v-model.number="config['item-validation']['book']['title']">
          </div>
        </div>
        <div class="tab">
          book-size
          <div class="tab">
            page-max
            <input type="number" v-model.number="config['item-validation']['book-size']['page-max']">
          </div>
          <div class="tab">
            total-multiplier
            <input type="number" v-model.number="config['item-validation']['book-size']['total-multiplier']">
          </div>
        </div>
        <div class="tab">
          display-name
            <input type="number" v-model.number="config['item-validation']['display-name']">
        </div>
        <div class="tab">
          lore-line
            <input type="number" v-model.number="config['item-validation']['lore-line']">
        </div>
        <div class="tab">
          resolve-selectors-in-books
          <input type="checkbox" v-model="config['item-validation']['resolve-selectors-in-books']">
        </div>
      </div>

      <div>
        <div>logging</div>
        <div class="tab">
          deobfuscate-stacktraces
          <input type="checkbox" v-model="config['logging']['deobfuscate-stacktraces']">
        </div>
      </div>

      <div>
        <div>messages</div>
        <div class="tab">
          kick
          <div class="tab">
            authentication-servers-down<br/>
            <textarea v-model="config['messages']['kick']['authentication-servers-down']"></textarea>
          </div>
          <div class="tab">
            connection-throttle<br/>
            <textarea v-model="config['messages']['kick']['connection-throttle']"></textarea>
          </div>

          <div class="tab">
            flying-player<br/>
            <textarea v-model="config['messages']['kick']['flying-player']"></textarea>
          </div>
          <div class="tab">
            flying-vehicle<br/>
            <textarea v-model="config['messages']['kick']['flying-vehicle']"></textarea>
          </div>
          <div>
            no-permission<br/>
            <textarea v-model="config['messages']['no-permission']"></textarea>
          </div>
          <div>
            use-display-name-in-quit-message
            <input type="checkbox" v-model="config['messages']['use-display-name-in-quit-message']">
          </div>
        </div>
      </div>

      <div>
        <div>misc</div>
        <div class="tab">
          chat-threads
          <div class="tab">
            chat-executor-core-size
            <input type="number" v-model.number="config['misc']['chat-threads']['chat-executor-core-size']">
          </div>
          <div class="tab">
            chat-executor-max-size
            <input type="number" v-model.number="config['misc']['chat-threads']['chat-executor-max-size']">
          </div>
        </div>
        <div class="tab">
          compression-level
          <input type="text" v-model="config['misc']['compression-level']">
        </div>
        <div class="tab">
          fix-entity-position-desync
          <input type="checkbox" v-model="config['misc']['fix-entity-position-desync']">
        </div>
        <div class="tab">
          load-permissions-yml-before-plugins
          <input type="checkbox" v-model="config['misc']['load-permissions-yml-before-plugins']">
        </div>
        <div class="tab">
          max-joins-per-tick
          <input type="number" v-model.number="config['misc']['max-joins-per-tick']">
        </div>
        <div class="tab">
          region-file-cache-size
          <input type="number" v-model.number="config['misc']['region-file-cache-size']">
        </div>
        <div class="tab">
          strict-advancement-dimension-check
          <input type="checkbox" v-model="config['misc']['strict-advancement-dimension-check']">
        </div>
        <div class="tab">
          use-alternative-luck-formula
          <input type="checkbox" v-model="config['misc']['use-alternative-luck-formula']">
        </div>
        <div class="tab">
          use-dimension-type-for-custom-spawners
          <input type="checkbox" v-model="config['misc']['use-dimension-type-for-custom-spawners']">
        </div>
      </div>

      <div>
        <div>packet-limiter</div>
      </div>

      <div>
        <div>player-auto-save</div>
      </div>

      <div>
        <div>proxies</div>
      </div>

      <div>
        <div>scoreboards</div>
      </div>

      <div>
        <div>spam-limiter</div>
      </div>

      <div>
        <div>timings</div>
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
          <select v-model="config['unsupported-settings']['compression-format']">
            <option>ZLIB</option>
            <option>GZIP</option>
            <option>NONE</option>
          </select>
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

      <div>
        <div>watchdog</div>
        <div class="tab">
          early-warning-delay
          <input type="number" v-model.number="config['watchdog']['early-warning-delay']">
        </div>
        <div class="tab">
          early-warning-every
          <input type="number" v-model.number="config['watchdog']['early-warning-every']">
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
  width: 5em;
}
input[type=number] {
  width: 5em;
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
  background-color: rgb(178,34,34);
}
</style>
