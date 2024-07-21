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
        <div class="tab">
          generate-random-seeds-for-all
          <input type="checkbox" v-model="data['feature-seeds']['generate-random-seeds-for-all']"/>
        </div>
      </div>

      <div>
        <div><h3>fishing-time-range</h3></div>
        <div class="tab">
          maximum
          <input type="number" v-model="data['fishing-time-range']['maximum']"/>
        </div>
        <div class="tab">
          minimum
          <input type="number" v-model="data['fishing-time-range']['minimum']"/>
        </div>
      </div>

      <div>
        <div><h3>fixes</h3></div>
        <div class="tab">
          disable-unloaded-chunk-enderpearl-exploit
          <input type="checkbox" v-model="data['fixes']['disable-unloaded-chunk-enderpearl-exploit']"/>
        </div>
        <div class="tab">
          falling-block-height-nerf
          <input type="text" v-model="data['fixes']['falling-block-height-nerf']"/>
        </div>
        <div class="tab">
          fix-items-merging-through-walls
          <input type="checkbox" v-model="data['fixes']['fix-items-merging-through-walls']"/>
        </div>
        <div class="tab">
          prevent-tnt-from-moving-in-water
          <input type="checkbox" v-model="data['fixes']['prevent-tnt-from-moving-in-water']"/>
        </div>
        <div class="tab">
          split-overstacked-loot
          <input type="checkbox" v-model="data['fixes']['split-overstacked-loot']"/>
        </div>
        <div class="tab">
          tnt-entity-height-nerf
          <input type="text" v-model="data['fixes']['tnt-entity-height-nerf']"/>
        </div>
      </div>

      <div>
        <div><h3>hopper</h3></div>
        <div class="tab">
          cooldown-when-full
          <input type="checkbox" v-model="data['hopper']['cooldown-when-full']"/>
        </div>
        <div class="tab">
          disable-move-event
          <input type="checkbox" v-model="data['hopper']['disable-move-event']"/>
        </div>
        <div class="tab">
          ignore-occluding-blocks
          <input type="checkbox" v-model="data['hopper']['ignore-occluding-blocks']"/>
        </div>
      </div>

      <div>
        <div><h3>lootables</h3></div>
        <div class="tab">
          auto-replenish
          <input type="checkbox" v-model="data['lootables']['auto-replenish']"/>
        </div>
        <div class="tab">
          max-refills
          <input type="number" v-model="data['lootables']['max-refills']"/>
        </div>
        <div class="tab">
          refresh-max
          <input type="text" v-model="data['lootables']['refresh-max']"/>
        </div>
        <div class="tab">
          refresh-min
          <input type="text" v-model="data['lootables']['refresh-min']"/>
        </div>
        <div class="tab">
          reset-seed-on-fill
          <input type="checkbox" v-model="data['lootables']['reset-seed-on-fill']"/>
        </div>
        <div class="tab">
          restrict-player-reloot
          <input type="checkbox" v-model="data['lootables']['restrict-player-reloot']"/>
        </div>
        <div class="tab">
          restrict-player-reloot-time
          <input type="text" v-model="data['lootables']['restrict-player-reloot-time']"/>
        </div>
      </div>

      <div>
        <div><h3>maps</h3></div>
        <div class="tab">
          item-frame-cursor-limit
          <input type="number" v-model="data['maps']['item-frame-cursor-limit']"/>
        </div>
        <div class="tab">
          item-frame-cursor-update-interval
          <input type="number" v-model="data['maps']['item-frame-cursor-update-interval']"/>
        </div>
      </div>

      <div>
        <div><h3>max-growth-height</h3></div>
        <div class="tab">
          bamboo
          <div class="tab">
            max
            <input type="number" v-model="data['max-growth-height']['bamboo']['max']"/>
          </div>
          <div class="tab">
            min
            <input type="number" v-model="data['max-growth-height']['bamboo']['min']"/>
          </div>
        </div>
        <div class="tab">
          cactus
          <input type="number" v-model="data['max-growth-height']['cactus']"/>
        </div>
        <div class="tab">
          reeds
          <input type="number" v-model="data['max-growth-height']['reeds']"/>
        </div>
      </div>

      <div>
        <div><h3>misc</h3></div>
        <div class="tab">
          disable-end-credits
          <input type="checkbox" v-model="data['misc']['disable-end-credits']"/>
        </div>
        <div class="tab">
          disable-relative-projectile-velocity
          <input type="checkbox" v-model="data['misc']['disable-relative-projectile-velocity']"/>
        </div>
        <div class="tab">
          disable-sprint-interruption-on-attack
          <input type="checkbox" v-model="data['misc']['disable-sprint-interruption-on-attack']"/>
        </div>
        <div class="tab">
          light-queue-size
          <input type="number" v-model="data['misc']['light-queue-size']"/>
        </div>
        <div class="tab">
          max-leash-distance
          <input type="number" v-model="data['misc']['max-leash-distance']"/>
        </div>
        <div class="tab">
          redstone-implementation
          <select v-model="data['misc']['redstone-implementation']">
            <option>VANILLA</option>
            <option>EIGENCRAFT</option>
            <option>ALTERNATE-CURRENT</option>
          </select>
        </div>
        <div class="tab">
          shield-blocking-delay
          <input type="number" v-model="data['misc']['shield-blocking-delay']"/>
        </div>
        <div class="tab">
          show-sign-click-command-failure-msgs-to-player
          <input type="checkbox" v-model="data['misc']['show-sign-click-command-failure-msgs-to-player']"/>
        </div>
        <div class="tab">
          update-pathfinding-on-block-update
          <input type="checkbox" v-model="data['misc']['update-pathfinding-on-block-update']"/>
        </div>
      </div>

      <div>
        <div><h3>scoreboards</h3></div>
        <div class="tab">
          allow-non-player-entities-on-scoreboards
          <input type="checkbox" v-model="data['scoreboards']['allow-non-player-entities-on-scoreboards']"/>
        </div>
        <div class="tab">
          use-vanilla-world-scoreboard-name-coloring
          <input type="checkbox" v-model="data['scoreboards']['use-vanilla-world-scoreboard-name-coloring']"/>
        </div>
      </div>

      <div>
        <div><h3>spawn</h3></div>
        <div class="tab">
          allow-using-signs-inside-spawn-protection
          <input type="checkbox" v-model="data['spawn']['allow-using-signs-inside-spawn-protection']"/>
        </div>
      </div>

      <div>
        <div><h3>tick-rates</h3></div>
        <div class="tab">
          behavior
          <div class="tab">
            villager
            <div class="tab">
              validate-nearby-poi
              <input type="number" v-model="data['tick-rates']['behavior']['villager']['validatenearbypoi']"/>
            </div>
          </div>
        </div>
        <div class="tab">
          container-update
          <input type="number" v-model="data['tick-rates']['container-update']"/>
        </div>
        <div class="tab">
          dry-farmland
          <input type="number" v-model="data['tick-rates']['dry-farmland']"/>
        </div>
        <div class="tab">
          grass-spread
          <input type="number" v-model="data['tick-rates']['grass-spread']"/>
        </div>
        <div class="tab">
          mob-spawner
          <input type="number" v-model="data['tick-rates']['mob-spawner']"/>
        </div>
        <div class="tab">
          sensor
          <div class="tab">
            villager
            <div class="tab">
              secondary-poi-sensor
              <input type="number" v-model="data['tick-rates']['sensor']['villager']['secondarypoisensor']"/>
            </div>
          </div>
        </div>
        <div class="tab">
          wet-farmland
          <input type="number" v-model="data['tick-rates']['wet-farmland']"/>
        </div>
      </div>

      <div class="unsupported">
        <div><h3>unsupported-settings</h3></div>
        <div class="tab">
          disable-world-ticking-when-empty
          <input type="checkbox" v-model="data['unsupported-settings']['disable-world-ticking-when-empty']"/>
        </div>
        <div class="tab">
          fix-invulnerable-end-crystal-exploit
          <input type="checkbox" v-model="data['unsupported-settings']['fix-invulnerable-end-crystal-exploit']"/>
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
.unsupported {
  margin: 0.4em;
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(178, 34, 34);
}
</style>
