<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script setup lang="ts">

</script>

<template>
<span>
  <header>
    <h3>Paper Panel Login</h3>
  </header>
  <section>
    <div class="row">
      <div class="col">
        <label for="username">Username: </label>
      </div>
      <div class="col">
        <input id="username" type="text"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="userpwd" type="userpwd">Password: </label>
      </div>
      <div class="col">
        <input id="userpwd" type="password"/>
      </div>
    </div>
  </section>
  <button>Login</button>
</span>
</template>

<style scoped>
span {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 84vh;
}
header {
  text-align: center;
}
section {
  display: table;
  margin-left: auto;
  margin-right: auto;
}
div .row {
  display: table-row;
}
div .col {
  display: table-cell;
  padding: 4px;
}
button {
  margin: 12px;
}
</style>
