<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import './css/index.css'
</script>

<template>
  <section>
    <header>
      <!--<span class="left" v-show="auth.isAuthenticated">-->
      <nav class="left">
        <a href="/user/matt/">user</a> >
        <a href="/servers">Servers</a> >
        <a href="/worlds">Worlds</a> >
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
        <a href="/admin">Admin Panel</a>
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
