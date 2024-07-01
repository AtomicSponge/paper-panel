<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
defineProps<{
  id:number
  name:string
}>()
</script>

<template>
  <section>
    <a :href="`/world/${id}`">{{ name }}</a>
  </section>
</template>

<style scoped>
section {
  display: table;
  margin: 1em;
  padding: 1em;
  border: 3px solid rgb(85, 85, 85);
  border-radius: 32px;
  background-color: rgb(55, 55, 55);
}
div .row {
  display: table-row
}
div .cell {
  display: table-cell;
  text-align: start;
  padding: 1em;
}

@media (prefers-color-scheme: light) {
  section {
    border: 3px solid rgb(255, 239, 213);
    background-color: rgb(253, 245, 230);
  }
}
</style>
