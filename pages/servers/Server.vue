<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
defineProps<{
  name:string
  address:string
  port:number
}>()
</script>

<template>
  <section>
    <div class="row">
      <div class="cell">
        {{ name }}
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
  border: 1px solid rgb(84, 90, 44);
  border-radius: 32px;
  background-color: rgb(84, 90, 44);
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
