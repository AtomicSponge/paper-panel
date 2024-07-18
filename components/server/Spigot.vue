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
        <div class="tab">
          whitelist<br/>
          <textarea v-model="data['messages']['whitelist']"></textarea>
        </div>
        <div class="tab">
          unknown-command<br/>
          <textarea v-model="data['messages']['unknown-command']"></textarea>
        </div>
        <div class="tab">
          server-full<br/>
          <textarea v-model="data['messages']['server-full']"></textarea>
        </div>
        <div class="tab">
          outdated-client<br/>
          <textarea v-model="data['messages']['outdated-client']"></textarea>
        </div>
        <div class="tab">
          outdated-server<br/>
          <textarea v-model="data['messages']['outdated-server']"></textarea>
        </div>
        <div class="tab">
          restart<br/>
          <textarea v-model="data['messages']['restart']"></textarea>
        </div>
      </div>

      <div>
        <div>advancements</div>
        <div class="tab">
          disable-saving
          <input type="checkbox" v-model="data['advancements']['disable-saving']"/>
        </div>
        <div class="tab">
          disabled (seperated by commas)<br/>
          <textarea v-model="data['advancements']['disabled']"></textarea>
        </div>
      </div>

      <div>
        <div>settings</div>
        <div class="tab">
          save-user-cache-on-stop-only
          <input type="checkbox" v-model="data['settings']['save-user-cache-on-stop-only']"/>
        </div>
        <div class="tab">
          sample-count
          <input type="number" v-model="data['settings']['sample-count']"/>
        </div>
        <div class="tab">
          bungeecord
          <input type="checkbox" v-model="data['settings']['bungeecord']"/>
        </div>
        <div class="tab">
          player-shuffle
          <input type="number" v-model="data['settings']['player-shuffle']"/>
        </div>
        <div class="tab">
          user-cache-size
          <input type="number" v-model="data['settings']['user-cache-size']"/>
        </div>
        <div class="tab">
          moved-wrongly-threshold
          <input type="number" v-model="data['settings']['moved-wrongly-threshold']"/>
        </div>
        <div class="tab">
          moved-too-quickly-multiplier
          <input type="number" v-model="data['settings']['moved-too-quickly-multiplier']"/>
        </div>
        <div class="tab">
          timeout-time
          <input type="number" v-model="data['settings']['timeout-time']"/>
        </div>
        <div class="tab">
          restart-on-crash
          <input type="checkbox" v-model="data['settings']['restart-on-crash']"/>
        </div>
        <div class="tab">
          restart-script
          <input type="text" v-model="data['settings']['restart-script']"/>
        </div>
        <div class="tab">
          netty-threads
          <input type="number" v-model="data['settings']['netty-threads']"/>
        </div>
        <div class="tab">
          attribute
          <div class="tab">
            maxHealth
            <div class="tab">
              max
              <input type="number" v-model="data['settings']['attribute']['maxHealth']['max']"/>
            </div>
          </div>
          <div class="tab">
            movementSpeed
            <div class="tab">
              max
              <input type="number" v-model="data['settings']['attribute']['movementSpeed']['max']"/>
            </div>
          </div>
          <div class="tab">
            attackDamage
            <div class="tab">
              max
              <input type="number" v-model="data['settings']['attribute']['attackDamage']['max']"/>
            </div>
          </div>
        </div>
        <div class="tab">
          log-villager-deaths
          <input type="checkbox" v-model="data['settings']['log-villager-deaths']"/>
        </div>
        <div class="tab">
          log-named-deaths
          <input type="checkbox" v-model="data['settings']['log-named-deaths']"/>
        </div>
        <div class="tab">
          debug
          <input type="checkbox" v-model="data['settings']['debug']"/>
        </div>
      </div>

      <div>
        <div>commands</div>
        <div class="tab">
          tab-complete
          <input type="number" v-model="data['commands']['tab-complete']"/>
        </div>
        <div class="tab">
          send-namespaced
          <input type="checkbox" v-model="data['commands']['send-namespaced']"/>
        </div>
        <div class="tab">
          log
          <input type="checkbox" v-model="data['commands']['log']"/>
        </div>
        <div class="tab">
          spam-exclusions (seperate with commas)<br/>
          <textarea v-model="data['commands']['spam-exclusions']"></textarea>
        </div>
        <div class="tab">
          silent-commandblock-console
          <input type="checkbox" v-model="data['commands']['silent-commandblock-console']"/>
        </div>
        <div class="tab">
          replace-commands (seperate with commas)<br/>
          <textarea v-model="data['commands']['replace-commands']"></textarea>
        </div>
      </div>

      <div>
        <div>world-settings</div>
      </div>

      <div>
        <div>players</div>
        <div class="tab">
          disable-saving
          <input type="checkbox" v-model="data['players']['disable-saving']"/>
        </div>
      </div>

      <div>
        <div>
          config-version
          <input type="number" v-model="data['config-version']"/>
        </div>
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
