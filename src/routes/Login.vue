<script setup lang="ts">

</script>

<template>
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
section {
  display: table
}
div .row {
  display: table-row;
}
div .col {
  display: table-cell;
}
</style>
