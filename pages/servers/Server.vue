<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
defineProps<{
  id:number
  name:string
  address:string
  port:number
}>()
</script>

<template>
  <section>
    <div class="row">
      <div class="cell">
        <a :href="`/world/${id}`">{{ name }}</a>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        {{ address }}:{{ port }}
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: table;
  margin: 1em;
  padding: 1em;
  border: 1px solid rgb(65, 74, 76);
  border-radius: 32px;
  background-color: rgb(65, 74, 76);
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
  /** */
}
</style>
