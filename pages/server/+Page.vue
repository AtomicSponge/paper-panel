<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import type { Data } from './+data'
import { useData } from 'vike-vue/useData'
const data = useData<Data>()

import Server from '@/components/server/Server.vue'
</script>

<template>
  <section>
    <header>
      <h1>Server</h1>
    </header>
    <main>
      <Server
        :id="data.server.id"
        :name="data.server.name"
        :address="data.server.address"
        :port="data.server.port"/>
    </main>
  </section>
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
</style>
