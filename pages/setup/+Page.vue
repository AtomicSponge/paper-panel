<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import AdminConfig from '@/components/setup/AdminConfig.vue'
import ServerConfig from '@/components/setup/ServerConfig.vue'
import SaveSetup from '@/components/setup/SaveSetup.vue'
</script>

<template>
  <section>
    <h1>Paper Panel Setup</h1>
  </section>
  <main>
    <AdminConfig/>
    <ServerConfig/>
  </main>
  <footer>
    <SaveSetup/>
  </footer>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  align-items: center;
}
header {
  text-align: center;
}
footer {
  text-align: right;
  margin-right: 3em;
}
</style>
