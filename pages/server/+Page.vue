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
import Operators from '@/components/server/Operators.vue'
import BannedIps from '@/components/server/BannedIps.vue'
import BannedPlayers from '@/components/server/BannedPlayers.vue'
import Whitelist from '@/components/server/Whitelist.vue'
import PaperGlobal from '@/components/server/PaperGlobal.vue'
import PaperWorldDefaults from '@/components/server/PaperWorldDefaults.vue'
import Bukkit from '@/components/server/Bukkit.vue'
import Spigot from '@/components/server/Spigot.vue'

</script>

<template>
  <section>
    <header>
      <h1>Server</h1>
    </header>
    <main>

      <Server
        :name="data.server!.name"
        :address="data.server!.address"
        :port="data.server!.port"/>

      <Operators/>
      
      <BannedIps/>

      <BannedPlayers/>

      <Whitelist/>

      <PaperGlobal/>

      <PaperWorldDefaults/>

      <Bukkit/>

      <Spigot/>

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
