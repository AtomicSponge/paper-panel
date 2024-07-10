<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  /** Path to server */
  path:string
}>()

const serverPath = ref(props.path)

const updatePath = async () => {
  //
}
</script>

<template>
  <label for="serverpath">Server path:</label>
  <input id="serverpath" type="text" v-model="serverPath"/>
  <button @click="updatePath">Update</button>
</template>

<style scoped>
label {
  margin-right: 1em;
}
input {
  margin-right: 3em;
  width: 14em;
}
</style>
