<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { navigate } from 'vike/client/router'
import { onLogin } from './Login.telefunc'

const username = ref('')
const password = ref('')

const submitLogin = async () => {
  try {
    await onLogin({
      username: username.value,
      password: password.value
    })
    const navigationPromise = navigate('/worlds')
    await navigationPromise
  } catch (error:any) {
    window.alert('Incorrect username or password')
  } finally {
    username.value = ''
    password.value = ''
  }
}
</script>

<template>
<form @submit.prevent="submitLogin()">
<section>
  <header>
    <h3>Paper Panel Login</h3>
  </header>
  <main>
    <div class="row">
      <div class="col">
        <label for="username">Username: </label>
      </div>
      <div class="col">
        <input id="username" type="text" v-model="username"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="userpwd" type="userpwd">Password: </label>
      </div>
      <div class="col">
        <input id="userpwd" type="password" v-model="password"/>
      </div>
    </div>
  </main>
  <footer>
    <button type="submit">Login</button>
  </footer>
</section>
</form>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 84vh;
}
header {
  text-align: center;
}
main {
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
