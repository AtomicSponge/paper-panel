<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
</script>

<template>
  <section class="subbox">
    <div>
      <h2>Bukkit Config</h2>
      <a href="https://docs.papermc.io/paper/reference/bukkit-configuration">
        https://docs.papermc.io/paper/reference/bukkit-configuration
      </a>
    </div>
    <div>
      <button @click="saveConfig">Save Configuration</button>
    </div>
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
div {
  text-align: center;
  padding: 0.4em;
}
</style>
