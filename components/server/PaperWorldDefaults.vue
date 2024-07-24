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
        <div class="tab">
          armor-stands
          <div class="tab">
            do-collision-entity-lookups
            <input type="checkbox" v-model="data['entities']['armor-stands']['do-collision-entity-lookups']"/>
          </div>
          <div class="tab">
            tick
            <input type="checkbox" v-model="data['entities']['armor-stands']['tick']"/>
          </div>
        </div>
        <div class="tab">
          behavior
          <div class="tab">
            allow-spider-world-border-climbing
            <input type="checkbox" v-model="data['entities']['behavior']['allow-spider-world-border-climbing']"/>
          </div>
          <div class="tab">
            baby-zombie-movement-modifier
            <input type="number" v-model="data['entities']['behavior']['baby-zombie-movement-modifier']"/>
          </div>
          <div class="tab">
            disable-chest-cat-detection
            <input type="checkbox" v-model="data['entities']['behavior']['disable-chest-cat-detection']"/>
          </div>
          <div class="tab">
            disable-creeper-lingering-effect
            <input type="checkbox" v-model="data['entities']['behavior']['disable-creeper-lingering-effect']"/>
          </div>
          <div class="tab">
            disable-player-crits
            <input type="checkbox" v-model="data['entities']['behavior']['disable-player-crits']"/>
          </div>
          <div class="tab">
            door-breaking-difficulty
            <div class="tab">
              <h4>husk</h4>
              <select multiple v-model="data['entities']['behavior']['door-breaking-difficulty']['husk']">
                <option>PEACEFUL</option>
                <option>EASY</option>
                <option>NORMAL</option>
                <option>HARD</option>
              </select>
            </div>
            <div class="tab">
              <h4>vindicator</h4>
              <select multiple v-model="data['entities']['behavior']['door-breaking-difficulty']['vindicator']">
                <option>PEACEFUL</option>
                <option>EASY</option>
                <option>NORMAL</option>
                <option>HARD</option>
              </select>
            </div>
            <div class="tab">
              <h4>zombie</h4>
              <select multiple v-model="data['entities']['behavior']['door-breaking-difficulty']['zombie']">
                <option>PEACEFUL</option>
                <option>EASY</option>
                <option>NORMAL</option>
                <option>HARD</option>
              </select>
            </div>
            <div class="tab">
              <h4>zombie-villager</h4>
              <select multiple v-model="data['entities']['behavior']['door-breaking-difficulty']['zombie_villager']">
                <option>PEACEFUL</option>
                <option>EASY</option>
                <option>NORMAL</option>
                <option>HARD</option>
              </select>
            </div>
            <div class="tab">
              <h4>zombified-piglin</h4>
              <select multiple v-model="data['entities']['behavior']['door-breaking-difficulty']['zombified_piglin']">
                <option>PEACEFUL</option>
                <option>EASY</option>
                <option>NORMAL</option>
                <option>HARD</option>
              </select>
            </div>
          </div>
          <div class="tab">
            ender-dragons-death-always-places-dragon-egg
            <input type="checkbox" v-model="data['entities']['behavior']['ender-dragons-death-always-places-dragon-egg']"/>
          </div>
          <div class="tab">
            experience-merge-max-value
            <input type="number" v-model="data['entities']['behavior']['experience-merge-max-value']"/>
          </div>
          <div class="tab">
            mobs-can-always-pick-up-loot
            <div class="tab">
              skeletons
              <input type="checkbox" v-model="data['entities']['behavior']['mobs-can-always-pick-up-loot']['skeletons']"/>
            </div>
            <div class="tab">
              zombies
              <input type="checkbox" v-model="data['entities']['behavior']['mobs-can-always-pick-up-loot']['zombies']"/>
            </div>
          </div>
          <div class="tab">
            nerf-pigmen-from-nether-portals
            <input type="checkbox" v-model="data['entities']['behavior']['nerf-pigmen-from-nether-portals']"/>
          </div>
          <div class="tab">
            parrots-are-unaffected-by-player-movement
            <input type="checkbox" v-model="data['entities']['behavior']['parrots-are-unaffected-by-player-movement']"/>
          </div>
          <div class="tab">
            phantoms-do-not-spawn-on-creative-players
            <input type="checkbox" v-model="data['entities']['behavior']['phantoms-do-not-spawn-on-creative-players']"/>
          </div>
          <div class="tab">
            phantoms-only-attack-insomniacs
            <input type="checkbox" v-model="data['entities']['behavior']['phantoms-only-attack-insomniacs']"/>
          </div>
          <div class="tab">
            phantoms-spawn-attempt-max-seconds
            <input type="number" v-model="data['entities']['behavior']['phantoms-spawn-attempt-max-seconds']"/>
          </div>
          <div class="tab">
            phantoms-spawn-attempt-min-seconds
            <input type="number" v-model="data['entities']['behavior']['phantoms-spawn-attempt-min-seconds']"/>
          </div>
          <div class="tab">
            piglins-guard-chests
            <input type="checkbox" v-model="data['entities']['behavior']['piglins-guard-chests']"/>
          </div>
          <div class="tab">
            pillager-patrols
            <div class="tab">
              disable
              <input type="checkbox" v-model="data['entities']['behavior']['pillager-patrols']['disable']"/>
            </div>
            <div class="tab">
              spawn-chance
              <input type="number" v-model="data['entities']['behavior']['pillager-patrols']['spawn-chance']"/>
            </div>
            <div class="tab">
              spawn-delay
              <div class="tab">
                per-player
                <input type="checkbox" v-model="data['entities']['behavior']['pillager-patrols']['spawn-delay']['per-player']"/>
              </div>
              <div class="tab">
                ticks
                <input type="number" v-model="data['entities']['behavior']['pillager-patrols']['spawn-delay']['ticks']"/>
              </div>
            </div>
            <div class="tab">
              start
              <div class="tab">
                day
                <input type="number" v-model="data['entities']['behavior']['pillager-patrols']['start']['day']"/>
              </div>
              <div class="tab">
                per-player
                <input type="checkbox" v-model="data['entities']['behavior']['pillager-patrols']['start']['per-player']"/>
              </div>
            </div>
          </div>
          <div class="tab">
            player-insomnia-start-ticks
            <input type="number" v-model="data['entities']['behavior']['player-insomnia-start-ticks']"/>
          </div>
          <div class="tab">
            should-remove-dragon
            <input type="checkbox" v-model="data['entities']['behavior']['should-remove-dragon']"/>
          </div>
          <div class="tab">
            spawner-nerfed-mobs-should-jump
            <input type="checkbox" v-model="data['entities']['behavior']['spawner-nerfed-mobs-should-jump']"/>
          </div>
          <div class="tab">
            zombie-villager-infection-chance
            <input type="text" v-model="data['entities']['behavior']['zombie-villager-infection-chance']"/>
          </div>
          <div class="tab">
            zombies-target-turtle-eggs
            <input type="checkbox" v-model="data['entities']['behavior']['zombies-target-turtle-eggs']"/>
          </div>
        </div>
        <div class="tab">
          entities-target-with-follow-range
          <input type="checkbox" v-model="data['entities']['entities-target-with-follow-range']"/>
        </div>
        <div class="tab">
          markers
          <div class="tab">
            tick
            <input type="checkbox" v-model="data['entities']['markers']['tick']"/>
          </div>
        </div>
        <div class="tab">
          mob-effects
          <div class="tab">
            immune-to-wither-effect
            <div class="tab">
              wither
              <input type="checkbox" v-model="data['entities']['mob-effects']['immune-to-wither-effect']['wither']"/>
            </div>
            <div class="tab">
              wither-skeleton
              <input type="checkbox" v-model="data['entities']['mob-effects']['immune-to-wither-effect']['wither-skeleton']"/>
            </div>
          </div>
          <div class="tab">
            spiders-immune-to-poison-effect
            <input type="checkbox" v-model="data['entities']['mob-effects']['spiders-immune-to-poison-effect']"/>
          </div>
        </div>
        <div class="tab">
          sniffer
          <div class="tab">
            boosted-hatch-time
            <input type="text" v-model="data['entities']['sniffer']['boosted-hatch-time']"/>
          </div>
          <div class="tab">
            hatch-time
            <input type="text" v-model="data['entities']['sniffer']['hatch-time']"/>
          </div>
        </div>
        <div class="tab">
          spawning
          <div class="tab">
            all-chunks-are-slime-chunks
            <input type="checkbox" v-model="data['entities']['spawning']['all-chunks-are-slime-chunks']"/>
          </div>
          <div class="tab">
            alt-item-despawn-rate
            <div class="tab">
              enabled
              <input type="checkbox" v-model="data['entities']['spawning']['alt-item-despawn-rate']['enabled']"/>
            </div>
            <div class="tab">
              items
              <div class="tab">
                cobblestone
                <input type="number" v-model="data['entities']['spawning']['alt-item-despawn-rate']['items']['cobblestone']"/>
              </div>
            </div>
          </div>
          <div class="tab">
            count-all-mobs-for-spawning
            <input type="checkbox" v-model="data['entities']['spawning']['count-all-mobs-for-spawning']"/>
          </div>
          <div class="tab">
            creative-arrow-despawn-rate
            <input type="text" v-model="data['entities']['spawning']['creative-arrow-despawn-rate']"/>
          </div>
          <div class="tab">
            despawn-ranges
            <div class="tab">
              ambient
              <div class="tab">
                hard
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['ambient']['hard']"/>
              </div>
              <div class="tab">
                soft
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['ambient']['soft']"/>
              </div>
            </div>
            <div class="tab">
              axolotls
              <div class="tab">
                hard
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['axolotls']['hard']"/>
              </div>
              <div class="tab">
                soft
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['axolotls']['soft']"/>
              </div>
            </div>
            <div class="tab">
              creature
              <div class="tab">
                hard
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['creature']['hard']"/>
              </div>
              <div class="tab">
                soft
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['creature']['soft']"/>
              </div>
            </div>
            <div class="tab">
              misc
              <div class="tab">
                hard
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['misc']['hard']"/>
              </div>
              <div class="tab">
                soft
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['misc']['soft']"/>
              </div>
            </div>
            <div class="tab">
              monster
              <div class="tab">
                hard
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['monster']['hard']"/>
              </div>
              <div class="tab">
                soft
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['monster']['soft']"/>
              </div>
            </div>
            <div class="tab">
              underground-water-creature
              <div class="tab">
                hard
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['underground_water_creature']['hard']"/>
              </div>
              <div class="tab">
                soft
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['underground_water_creature']['soft']"/>
              </div>
            </div>
            <div class="tab">
              water-ambient
              <div class="tab">
                hard
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['water_ambient']['hard']"/>
              </div>
              <div class="tab">
                soft
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['water_ambient']['soft']"/>
              </div>
            </div>
            <div class="tab">
              water-creature
              <div class="tab">
                hard
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['water_creature']['hard']"/>
              </div>
              <div class="tab">
                soft
                <input type="number" v-model="data['entities']['spawning']['despawn-ranges']['water_creature']['soft']"/>
              </div>
            </div>
          </div>
          <div class="tab">
            disable-mob-spawner-spawn-egg-transformation
            <!-- here -->
          </div>
        </div>

        <div class="tab">
          tracking-range-y
          <div class="tab">
            enabled
            <input type="checkbox" v-model="data['entities']['tracking-range-y']['enabled']"/>
          </div>
          <div class="tab">
            animal
            <input type="text" v-model="data['entities']['tracking-range-y']['animal']"/>
          </div>
          <div class="tab">
            display
            <input type="text" v-model="data['entities']['tracking-range-y']['display']"/>
          </div>
          <div class="tab">
            misc
            <input type="text" v-model="data['entities']['tracking-range-y']['misc']"/>
          </div>
          <div class="tab">
            monster
            <input type="text" v-model="data['entities']['tracking-range-y']['monster']"/>
          </div>
          <div class="tab">
            other
            <input type="text" v-model="data['entities']['tracking-range-y']['other']"/>
          </div>
          <div class="tab">
            player
            <input type="text" v-model="data['entities']['tracking-range-y']['player']"/>
          </div>
        </div>
      </div>

      <div>
        <div><h3>environment</h3></div>
        <div class="tab">
          disable-explosion-knockback
          <input type="checkbox" v-model="data['environment']['disable-explosion-knockback']"/>
        </div>
        <div class="tab">
          disable-ice-and-snow
          <input type="checkbox" v-model="data['environment']['disable-ice-and-snow']"/>
        </div>
        <div class="tab">
          disable-teleportation-suffocation-check
          <input type="checkbox" v-model="data['environment']['disable-teleportation-suffocation-check']"/>
        </div>
        <div class="tab">
          disable-thunder
          <input type="checkbox" v-model="data['environment']['disable-thunder']"/>
        </div>
        <div class="tab">
          fire-tick-delay
          <input type="number" v-model="data['environment']['fire-tick-delay']"/>
        </div>
        <div class="tab">
          frosted-ice
          <div class="tab">
            delay
            <div class="tab">
              max
              <input type="number" v-model="data['environment']['frosted-ice']['delay']['max']"/>
            </div>
            <div class="tab">
              min
              <input type="number" v-model="data['environment']['frosted-ice']['delay']['min']"/>
            </div>
          </div>
          <div class="tab">
            enabled
            <input type="checkbox" v-model="data['environment']['frosted-ice']['enabled']"/>
          </div>
        </div>
        <div class="tab">
          generate-flat-bedrock
          <input type="checkbox" v-model="data['environment']['generate-flat-bedrock']"/>
        </div>
        <div class="tab">
          locate-structures-outside-world-border
          <input type="checkbox" v-model="data['environment']['locate-structures-outside-world-border']"/>
        </div>
        <div class="tab">
          max-block-ticks
          <input type="number" v-model="data['environment']['max-block-ticks']"/>
        </div>
        <div class="tab">
          max-fluid-ticks
          <input type="number" v-model="data['environment']['max-fluid-ticks']"/>
        </div>
        <div class="tab">
          nether-ceiling-void-damage-height
          <input type="text" v-model="data['environment']['nether-ceiling-void-damage-height']"/>
        </div>
        <div class="tab">
          optimize-explosions
          <input type="checkbox" v-model="data['environment']['optimize-explosions']"/>
        </div>
        <div class="tab">
          portal-create-radius
          <input type="number" v-model="data['environment']['portal-create-radius']"/>
        </div>
        <div class="tab">
          portal-search-radius
          <input type="number" v-model="data['environment']['portal-search-radius']"/>
        </div>
        <div class="tab">
          portal-search-vanilla-dimension-scaling
          <input type="checkbox" v-model="data['environment']['portal-search-vanilla-dimension-scaling']"/>
        </div>
        <div class="tab">
          treasure-maps
          <div class="tab">
            enabled
            <input type="checkbox" v-model="data['environment']['treasure-maps']['enabled']"/>
          </div>
          <div class="tab">
            find-already-discovered
            <div class="tab">
              loot-tables
              <select v-model="data['environment']['treasure-maps']['find-already-discovered']['loot-tables']">
                <option>default</option>
                <option>false</option>
              </select>
            </div>
            <div class="tab">
              villager-trade
              <input type="checkbox" v-model="data['environment']['treasure-maps']['find-already-discovered']['villager-trade']"/>
            </div>
          </div>
        </div>
        <div class="tab">
          water-over-lava-flow-speed
          <input type="number" v-model="data['environment']['water-over-lava-flow-speed']"/>
        </div>
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
