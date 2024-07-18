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
        <div class="tab">
          default
          <div class="tab">
            below-zero-generation-in-existing-chunks
            <input type="checkbox" v-model="data['world-settings']['default']['below-zero-generation-in-existing-chunks']"/>
          </div>
          <div class="tab">
            view-distance
            <select v-model="data['world-settings']['default']['view-distance']">
              <option>-1</option>
              <option>default</option>
            </select>
          </div>
          <div class="tab">
            simulation-distance
            <select v-model="data['world-settings']['default']['simulation-distance']">
              <option>-1</option>
              <option>default</option>
            </select>
          </div>
          <div class="tab">
            thunder-chance
            <input type="number" v-model="data['world-settings']['default']['thunder-chance']"/>
          </div>
          <div class="tab">
            merge-radius
            <div class="tab">
              item
              <input type="number" v-model="data['world-settings']['default']['merge-radius']['item']"/>
            </div>
            <div class="tab">
              exp
              <input type="number" v-model="data['world-settings']['default']['merge-radius']['exp']"/>
            </div>
          </div>
          <div class="tab">
            mob-spawn-range
            <input type="number" v-model="data['world-settings']['default']['mob-spawn-range']"/>
          </div>
          <div class="tab">
            item-despawn-rate
            <input type="number" v-model="data['world-settings']['default']['item-despawn-rate']"/>
          </div>
          <div class="tab">
            arrow-despawn-rate
            <input type="number" v-model="data['world-settings']['default']['arrow-despawn-rate']"/>
          </div>
          <div class="tab">
            trident-despawn-rate
            <input type="number" v-model="data['world-settings']['default']['trident-despawn-rate']"/>
          </div>
          <div class="tab">
            zombie-aggressive-towards-villager
            <input type="checkbox" v-model="data['world-settings']['default']['zombie-aggressive-towards-villager']"/>
          </div>
          <div class="tab">
            nerf-spawner-mobs
            <input type="checkbox" v-model="data['world-settings']['default']['nerf-spawner-mobs']"/>
          </div>
          <div class="tab">
            enable-zombie-pigmen-portal-spawns
            <input type="checkbox" v-model="data['world-settings']['default']['enable-zombie-pigmen-portal-spawns']"/>
          </div>
          <div class="tab">
            wither-spawn-sound-radius
            <input type="number" v-model="data['world-settings']['default']['wither-spawn-sound-radius']"/>
          </div>
          <div class="tab">
            end-portal-sound-radius
            <input type="number" v-model="data['world-settings']['default']['end-portal-sound-radius']"/>
          </div>
          <div class="tab">
            hanging-tick-frequency
            <input type="number" v-model="data['world-settings']['default']['hanging-tick-frequency']"/>
          </div>
          <div class="tab">
            unload-frozen-chunks
            <input type="checkbox" v-model="data['world-settings']['default']['unload-frozen-chunks']"/>
          </div>
          <div class="tab">
            growth
            <div class="tab">
              cactus-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['cactus-modifier']"/>
            </div>
            <div class="tab">
              cane-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['cane-modifier']"/>
            </div>
            <div class="tab">
              melon-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['melon-modifier']"/>
            </div>
            <div class="tab">
              mushroom-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['mushroom-modifier']"/>
            </div>
            <div class="tab">
              pumpkin-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['pumpkin-modifier']"/>
            </div>
            <div class="tab">
              sapling-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['sapling-modifier']"/>
            </div>
            <div class="tab">
              beetroot-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['beetroot-modifier']"/>
            </div>
            <div class="tab">
              carrot-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['carrot-modifier']"/>
            </div>
            <div class="tab">
              potato-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['potato-modifier']"/>
            </div>
            <div class="tab">
              torchflower-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['torchflower-modifier']"/>
            </div>
            <div class="tab">
              wheat-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['wheat-modifier']"/>
            </div>
            <div class="tab">
              netherwart-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['netherwart-modifier']"/>
            </div>
            <div class="tab">
              vine-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['vine-modifier']"/>
            </div>
            <div class="tab">
              cocoa-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['cocoa-modifier']"/>
            </div>
            <div class="tab">
              bamboo-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['bamboo-modifier']"/>
            </div>
            <div class="tab">
              sweetberry-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['sweetberry-modifier']"/>
            </div>
            <div class="tab">
              kelp-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['kelp-modifier']"/>
            </div>
            <div class="tab">
              twistingvines-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['twistingvines-modifier']"/>
            </div>
            <div class="tab">
              weepingvines-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['weepingvines-modifier']"/>
            </div>
            <div class="tab">
              cavevines-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['cavevines-modifier']"/>
            </div>
            <div class="tab">
              glowberry-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['glowberry-modifier']"/>
            </div>
            <div class="tab">
              pitcherplant-modifier
              <input type="number" v-model="data['world-settings']['default']['growth']['pitcherplant-modifier']"/>
            </div>
          </div>

          <div class="tab">
            entity-activation-range
            <div class="tab">
              animals
              <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['animals']"/>
            </div>
            <div class="tab">
              monsters
              <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['monsters']"/>
            </div>
            <div class="tab">
              raiders
              <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['raiders']"/>
            </div>
            <div class="tab">
              misc
              <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['misc']"/>
            </div>
            <div class="tab">
              water
              <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['water']"/>
            </div>
            <div class="tab">
              villagers
              <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['villagers']"/>
            </div>
            <div class="tab">
              flying-monsters
              <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['flying-monsters']"/>
            </div>
            <div class="tab">
              wake-up-inactive
              <div class="tab">
                animals-max-per-tick
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['animals-max-per-tick']"/>
              </div>
              <div class="tab">
                animals-every
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['animals-every']"/>
              </div>
              <div class="tab">
                animals-for
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['animals-for']"/>
              </div>
              <div class="tab">
                monsters-max-per-tick
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['monsters-max-per-tick']"/>
              </div>
              <div class="tab">
                monsters-every
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['monsters-every']"/>
              </div>
              <div class="tab">
                monsters-for
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['monsters-for']"/>
              </div>
              <div class="tab">
                villagers-max-per-tick
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['villagers-max-per-tick']"/>
              </div>
              <div class="tab">
                villagers-every
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['villagers-every']"/>
              </div>
              <div class="tab">
                villagers-for
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['villagers-for']"/>
              </div>
              <div class="tab">
                flying-monsters-max-per-tick
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['flying-monsters-max-per-tick']"/>
              </div>
              <div class="tab">
                flying-monsters-every
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['flying-monsters-every']"/>
              </div>
              <div class="tab">
                flying-monsters-for
                <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['wake-up-inactive']['flying-monsters-for']"/>
              </div>
            </div>
            <div class="tab">
              villagers-work-immunity-after
              <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['villagers-work-immunity-after']"/>
            </div>
            <div class="tab">
              villagers-work-immunity-for
              <input type="number" v-model="data['world-settings']['default']['entity-activation-range']['villagers-work-immunity-for']"/>
            </div>
            <div class="tab">
              villagers-active-for-panic
              <input type="checkbox" v-model="data['world-settings']['default']['entity-activation-range']['villagers-active-for-panic']"/>
            </div>
            <div class="tab">
              tick-inactive-villagers
              <input type="checkbox" v-model="data['world-settings']['default']['entity-activation-range']['tick-inactive-villagers']"/>
            </div>
            <div class="tab">
              ignore-spectators
              <input type="checkbox" v-model="data['world-settings']['default']['entity-activation-range']['ignore-spectators']"/>
            </div>
          </div>
          <div class="tab">
            entity-tracking-range
            <div class="tab">
              players
              <input type="number" v-model="data['world-settings']['default']['entity-tracking-range']['players']"/>
            </div>
            <div class="tab">
              animals
              <input type="number" v-model="data['world-settings']['default']['entity-tracking-range']['animals']"/>
            </div>
            <div class="tab">
              monsters
              <input type="number" v-model="data['world-settings']['default']['entity-tracking-range']['monsters']"/>
            </div>
            <div class="tab">
              misc
              <input type="number" v-model="data['world-settings']['default']['entity-tracking-range']['misc']"/>
            </div>
            <div class="tab">
              display
              <input type="number" v-model="data['world-settings']['default']['entity-tracking-range']['display']"/>
            </div>
            <div class="tab">
              other
              <input type="number" v-model="data['world-settings']['default']['entity-tracking-range']['other']"/>
            </div>
          </div>
        </div>
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
