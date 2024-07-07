<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import AddWorld from '@/components/admin/AddWorld.vue'
import WorldScan from '@/components/admin/WorldScan.vue'
</script>

<template>
  <section>
    <header>
      <h1>Admin Panel</h1>
    </header>
    <main>
      <div>
        <label for="serverpath">Server path:</label>
        <input id="serverpath" type="text"/>
      </div>
      <div class="subbox">
        <span class="right">
          <WorldScan/>
        </span>
        <span>
          <h2>World Management</h2>
        </span>
        <span>
          <AddWorld/>
        </span>
      </div>
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
div {
  padding: 0.4em 0;
}
.subbox {
  padding: 1.2em;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>
