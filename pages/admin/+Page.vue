<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import type { Data } from './+data'
import { useData } from 'vike-vue/useData'
const data = useData<Data>()

import ServerPath from '@/components/admin/ServerPath.vue'
import AddWorld from '@/components/admin/AddWorld.vue'
import EditWorld from '@/components/admin/EditWorld.vue'
import ResetSettings from '@/components/admin/ResetSettings.vue'
</script>

<template>
  <section>
    <header>
      <h1>Admin Panel</h1>
    </header>
    <main>

      <div class="subbox">
        <span class="center">
          <h2>User Management</h2>
        </span>
        <hr/>
        <span>
          ...
        </span>
      </div>

      <div class="subbox">
        <span class="center">
          <h2>Server Management</h2>
        </span>
        <hr/>
        <span>
          <ServerPath :path="data.server!.path"/>
        </span>
      </div>

      <div class="subbox">
        <span class="center">
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

      <div class="subbox">
        <span class="center">
          <ResetSettings/>
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
.center {
  display: table;
  margin: 0 auto;
}
</style>
