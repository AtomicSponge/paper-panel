<script setup lang="ts">

</script>

<template>
  <section>
    <header>
      username > server > menu
    </header>
    <main>
      <RouterView/>
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
  padding: 2px;
  padding-bottom: 6px;
}
main {
  flex: auto;
  overflow: auto;
}
</style>
