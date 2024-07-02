<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
const saveConfig = () => {
  window.alert('Config saved')
}
</script>

<template>
  <div>
    <textarea>Config window</textarea>
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
