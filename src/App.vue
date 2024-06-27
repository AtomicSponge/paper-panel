<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>

<template>
  <section>
    <header>
      <span class="left">
        <nav>
          username >
          <RouterLink to="/worlds">Worlds</RouterLink> >
        </nav>
      </span>
      <span class="right">
        <a href="">Paper Panel</a> v0.0.1
      </span>
    </header>

    <main>
      <RouterView/>
    </main>

    <footer>
      <span class="right">
        ...
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
