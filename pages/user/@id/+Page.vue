<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import type { Data } from './+data'
import { useData } from 'vike-vue/useData'
const data = useData<Data>()

import UpdateName from '@/components/user/UpdateName.vue'
import UpdatePassword from '@/components/user/UpdatePassword.vue'
</script>

<template>
  <section>
    <header>
      <h1>Edit User Profile</h1>
    </header>
    <main>
      <UpdateName
        :id="data.user.id"
        :name="data.user.name"/>
      <UpdatePassword :id="data.user.id"/>
    </main>
    <footer>
    </footer>
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
.right {
  float: right;
}
</style>
