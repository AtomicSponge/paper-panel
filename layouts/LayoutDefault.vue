<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import Navigation from './Navigation.vue'
import AdminLink from './AdminLink.vue'

const appURL = 'https://github.com/AtomicSponge/paper-panel#readme'
const version = 'v0.0.1'
</script>

<template>
  <section>
    <header>
      <nav class="left">
        <Navigation />
      </nav>
      <nav class="right">
        <a :href="appURL">Paper Panel</a>
        {{ version }}
      </nav>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <nav class="right">
        <AdminLink />
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
