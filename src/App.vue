<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <header>
      <span class="left">
        <nav>
          <RouterLink to="/user">username</RouterLink> >
          <RouterLink to="/servers">Servers</RouterLink> >
          <RouterLink to="/worlds">Worlds</RouterLink> >
          World name
        </nav>
      </span>
      <span class="right">
        <a href="https://github.com/AtomicSponge">Paper Panel</a> v0.0.1
      </span>
    </header>

    <main>
      <RouterView/>
    </main>

    <footer>
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
