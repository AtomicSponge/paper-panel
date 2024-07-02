<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import AppInfo from '@/components/layout/AppInfo.vue'
</script>

<template>
  <section>
    <header>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <nav class="left">
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
