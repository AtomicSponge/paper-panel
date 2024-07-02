<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'

const configWindow = ref('Config window')

const saveConfig = () => {
  window.alert('Config saved')
}
</script>

<template>
  <div>
    <textarea v-model="configWindow"></textarea>
  </div>
  <div>
    <button @click="saveConfig">Save Config</button>
  </div>
</template>

<style scoped>
div {
  padding: 2px;
}
textarea {
  width: 80vw;
  height: 50vh;
}
</style>
