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
</script>

<template>
  <label for="serverpath">Server path:</label>
  <input id="serverpath" type="text" v-model="serverPath"/>
</template>

<style scoped>
</style>
