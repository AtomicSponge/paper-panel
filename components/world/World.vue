<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import WorldConfig from '@/components/world/WorldConfig.vue'

defineProps<{
  id:number
  name:string
}>()

const showConfig = ref(false)

const toggleConfig = () => {
  showConfig.value = showConfig.value ? false : true
}
</script>

<template>
  <section>
    <div class="row">
      <div class="cell">
        <h2><a :href="`/world/${id}`">{{ name }}</a></h2>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <button @click="toggleConfig()">Edit Config</button>
      </div>
    </div>
    <div class="row" v-show="showConfig">
      <div class="cell">
        <WorldConfig/>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: table;
  margin: 1em;
  padding: 1em;
  border: 3px solid rgb(85, 85, 85);
  border-radius: 32px;
  background-color: rgb(55, 55, 55);
}
div .row {
  display: table-row
}
div .cell {
  display: table-cell;
  text-align: center;
  padding: 0.8em;
}

@media (prefers-color-scheme: light) {
  section {
    border: 3px solid rgb(255, 239, 213);
    background-color: rgb(253, 245, 230);
  }
}
</style>
