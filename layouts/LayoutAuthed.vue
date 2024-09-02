<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { navigate } from 'vike/client/router'

import Navigation from '@/components/layout/Navigation.vue'
import AdminLink from '@/components/layout/AdminLink.vue'
import AppInfo from '@/components/layout/AppInfo.vue'

const logOut = async ():Promise<void> => {
  if(window.confirm('Are you sure you want to log out?')) {
    const navigationPromise = navigate('/logout')
    await navigationPromise
  }
}
</script>

<template>
  <section>
    <header>
      <nav class="left">
        <Navigation/>
      </nav>
      <nav class="right">
        <AdminLink/>
        <a href="#" @click="logOut()">Log Out</a>
      </nav>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <nav class="left">
        Server Status:
      </nav>
      <nav class="right">
        <AppInfo/>
      </nav>
    </footer>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  align-items: stretch;
  height: 100vh;
  padding-left: 6px;
  padding-right: 6px;
}
header {
  padding-top: 6px;
  padding-bottom: 6px;
}
main {
  flex: auto;
  overflow: auto;
}
footer {
  padding-top: 6px;
  padding-bottom: 6px;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>
