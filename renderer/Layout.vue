<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import './css/index.css'

const version = 'v0.0.1'
</script>

<template>
  <section>
    <header>
      <!--<nav class="left" v-show="auth.isAuthenticated">-->
      <nav class="left">
        <a href="/user/matt/">user</a> >
        <a href="/servers">Servers</a> >
        <a href="/worlds">Worlds</a> >
        <a href="/world/world">World name</a>
      </nav>
      <nav class="right">
        <a href="https://github.com/AtomicSponge/paper-panel">Paper Panel</a>
        {{ version }}
      </nav>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <!--<nav class="right" v-show="auth.isAuthenticated">-->
      <nav class="right">
        <a href="/admin">Admin Panel</a>
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
