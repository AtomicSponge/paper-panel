<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script setup lang="ts">
import type { ModelRef } from 'vue'

const data:ModelRef<AdminSetupData> = defineModel({ required: true })
</script>

<template>
  <section class="subbox">
    <header>
      <h2>Paper Panel Administrator Account</h2>
    </header>
    <main>
      <div class="table">
        <div class="row">
          <div class="cell">
            <label for="username">Username:</label>
          </div>
          <div class="cell">
            <input type="text" id="username" v-model="data.username">
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label for="username">Display Name:</label>
          </div>
          <div class="cell">
            <input type="text" id="username" v-model="data.display">
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label for="password">Password:</label>
          </div>
          <div class="cell">
            <input type="password" id="password" v-model="data.password">
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label for="cpassword">Confirm Password:</label>
          </div>
          <div class="cell">
            <input type="password" id="cpassword" v-model="data.confirm">
          </div>
        </div>
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
div .table {
  display: table;
}
div .row {
  display: table-row;
}
div .cell {
  display: table-cell;
}
</style>
