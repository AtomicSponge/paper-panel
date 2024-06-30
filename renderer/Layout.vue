<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import Link from './Link.vue'
import './css/index.css'
</script>

<template>
  <section>
    <header>
      <!--<span class="left" v-show="auth.isAuthenticated">-->
      <nav class="left">
        <!--<a href ="/user">{{ auth.user }}</a> >-->
        <a href ="/user">user</a> >
        <a href ="/servers">Servers</a> >
        <a href ="/worlds">Worlds</a> >
        World name
      </nav>
      <nav class="right">
        <a href="https://github.com/AtomicSponge/paper-panel">Paper Panel</a> v0.0.1
      </nav>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <!--<span class="right" v-show="auth.isAuthenticated">-->
      <span class="right">
        Some text here
      </span>
    </footer>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  align-items: stretch;
  height: 100vh;
  padding-left: 4px;
  padding-right: 4px;
}
header {
  padding-bottom: 6px;
}
main {
  flex: auto;
  overflow: auto;
}
footer {
  padding-top: 4px;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>
