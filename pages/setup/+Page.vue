<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'

import AdminConfig from '@/components/setup/AdminSetup.vue'
import ServerConfig from '@/components/setup/ServerSetup.vue'
import SaveSetup from '@/components/setup/SaveSetup.vue'

const adminData = ref({
  username: 'admin',
  display: 'Administrator',
  password: '',
  confirm: ''
})
const serverData = ref({ path: '/home/minecraft/paper' })
</script>

<template>
  <section>
    <h1>Paper Panel Setup</h1>
  </section>
  <main>
    <AdminConfig v-model="adminData"/>
    <ServerConfig v-model="serverData"/>
  </main>
  <footer>
    <SaveSetup
      v-model:admin="adminData"
      v-model:server="serverData"/>
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
