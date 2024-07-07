<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import AddWorldForm from '@/components/admin/AddWorldForm.vue'

const newWorldCount = ref(0)
/** */
const newWorlds:Ref<number[]> = ref([])

/** */
const addNewWorld = ():void => {
  newWorlds.value.push(newWorldCount.value)
  ++newWorldCount.value
}

/** */
const removeWorldForm = (id:number):void => {
  newWorlds.value.splice(id, 1)
}
</script>

<template>
  <div>
    <button @click="addNewWorld()">Add a world</button>
  </div>
  <div v-for="worldId in newWorlds">
    <AddWorldForm :id="worldId" @remove="(n) => removeWorldForm(n)"/>
  </div>
</template>

<style scoped>
div {
  padding: 0.4em 0;
}
</style>
