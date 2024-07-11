<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script setup lang="ts">
const data  = defineModel()
</script>

<template>
  <section class="subbox">
    <header>
      <h2>Admin config</h2>
    </header>
    <main>
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password">
      </div>
      <div>
        <label for="cpassword">Confirm Password:</label>
        <input type="password" id="cpassword">
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
</style>
