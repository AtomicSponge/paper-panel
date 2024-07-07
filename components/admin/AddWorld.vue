<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import AddWorldForm from '@/components/admin/AddWorldForm.vue'

/** Reference to the count of new worlds being added */
const newWorldCount = ref(0)
/** Reference to the new world form array */
const newWorlds:Ref<number[]> = ref([])

/** Add a new world form */
const addNewWorld = ():void => {
  newWorlds.value.push(newWorldCount.value)
  ++newWorldCount.value
}

/** Remove a new world form after successful submission */
const removeWorldForm = (id:number):void => {
  newWorlds.value.splice(newWorlds.value.indexOf(id), 1)
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
