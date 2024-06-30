<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import type { Data } from './+data'
import { useData } from '../../renderer/useData'
const data = useData<Data>()

import Server from './Server.vue'
</script>

<template>
  <section>
    <header>
      <h1>Servers</h1>
    </header>
    <main>
      <div v-for="server in data.servers">
        <Server
          :name="server.name"
          :address="server.address"
          :port="server.port"/>
      </div>
    </main>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
header {
  text-align: center;
}
</style>
