<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import WorldScan from '@/components/admin/WorldScan.vue'
</script>

<template>
  <section>
    <header>
      <h1>Admin Panel</h1>
    </header>
    <main>
      <span class="right">
        <WorldScan/>
      </span>
      <span>
        <label for="serverpath">Server path:</label>
        <input id="serverpath" type="text"/>
      </span>
    </main>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  align-items: stretch;
}
header {
  text-align: center;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>
