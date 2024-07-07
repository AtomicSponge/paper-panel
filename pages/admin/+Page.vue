<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import AddWorld from '@/components/admin/AddWorld.vue'
import EditWorld from '@/components/admin/EditWorld.vue'
</script>

<template>
  <section>
    <header>
      <h1>Admin Panel</h1>
    </header>
    <main>
      <div class="subbox">
        <span>
          <h2>Server Management</h2>
        </span>
        <hr/>
        <span>
          <label for="serverpath">Server path:</label>
          <input id="serverpath" type="text"/>
        </span>
      </div>
      <div class="subbox">
        <span>
          <h2>World Management</h2>
        </span>
        <hr/>
        <span>
          <AddWorld/>
        </span>
        <hr/>
        <span>
          <EditWorld/>
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
  margin: 1em 0;
}
</style>
