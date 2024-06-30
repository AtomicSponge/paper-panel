<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'

const username = ref()
const password = ref()

const handleLogin = () => {
  if (username.value === 'matt' && password.value === 'matt') {
    //
  } else {
    username.value = ''
    password.value = ''
    alert('Incorrect username or password!')
  }
}
</script>

<template>
<span>
  <header>
    <h3>Paper Panel Login</h3>
  </header>
  <section>
    <div class="row">
      <div class="col">
        <label for="username">Username: </label>
      </div>
      <div class="col">
        <input id="username" v-model="username" type="text" @keydown.enter="handleLogin"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="userpwd" type="userpwd">Password: </label>
      </div>
      <div class="col">
        <input id="userpwd" v-model="password" type="password" @keydown.enter="handleLogin"/>
      </div>
    </div>
  </section>
  <button @click="handleLogin">Login</button>
</span>
</template>

<style scoped>
span {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 84vh;
}
header {
  text-align: center;
}
section {
  display: table;
  margin-left: auto;
  margin-right: auto;
}
div .row {
  display: table-row;
}
div .col {
  display: table-cell;
  padding: 4px;
}
button {
  margin: 12px;
}
</style>
