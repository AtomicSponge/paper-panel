<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script setup lang="ts">
import type { ModelRef } from 'vue'

const data:ModelRef<ServerSetupData> = defineModel({ required: true })
</script>

<template>
  <section class="subbox">
    <header>
      <h2>Server config</h2>
    </header>
    <main>
      <div>
        <label for="path">Path:</label>
        <input type="text" id="path" v-model="data.path">
      </div>
    </main>
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
input {
  width: 20em;
}
</style>
