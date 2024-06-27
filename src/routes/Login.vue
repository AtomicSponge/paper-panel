<script setup lang="ts">

</script>

<template>
<header>
  <h2>Paper Panel Login</h2>
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
</template>

<style scoped>
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
</style>
