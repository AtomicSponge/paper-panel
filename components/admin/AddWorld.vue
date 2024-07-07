<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import AddWorldForm from '@/components/admin/AddWorldForm.vue'

const newWorlds:Ref<string[]> = ref([])

const addNewWorld = () => {
  newWorlds.value.push('test')
}
</script>

<template>
  <div>
    <button @click="addNewWorld()">Add a world</button>
  </div>
  <div v-for="world in newWorlds">
    <AddWorldForm/>
  </div>
</template>

<style scoped>
div {
  padding: 0.4em 0;
}
</style>
