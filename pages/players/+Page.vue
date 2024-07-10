<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import type { Data } from './+data'
import { useData } from 'vike-vue/useData'
const data = useData<Data>()

import Operators from '@/components/server/Operators.vue'
import BannedIps from '@/components/server/BannedIps.vue'
import BannedPlayers from '@/components/server/BannedPlayers.vue'
import Whitelist from '@/components/server/Whitelist.vue'
</script>

<template>
  <section>
    <header>
      <h1>Players</h1>
    </header>
    <main>
      <Operators/>
      <BannedIps/>
      <BannedPlayers/>
      <Whitelist/>
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
