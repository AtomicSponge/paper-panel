<script setup lang="ts">

</script>

<template>
  <section>
    <header>
      <span class="left">
        username > server > <a href="">menu</a>
      </span>
      <span class="right">
        <a href="">Paper Panel</a> v0.0.1
      </span>
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
  padding-bottom: 6px;
}
main {
  flex: auto;
  overflow: auto;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>
