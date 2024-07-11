<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onPasswordUpdate } from './UpdatePassword.telefunc'

const props = defineProps<{
  /** User ID */
  id:number
}>()

/** Reference to the username input field */
const oldPassword = ref()
const newPassword = ref()
const newPasswordConf = ref()

/** Update the user's name */
const updatePassword = async ():Promise<void> => {
  const res = await onPasswordUpdate()
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Name updated')
}
</script>

<template>
  <section class="subbox">
    <div class="table">
      <div class="row">
        <div class="cell">
          <label for="oldPassword">Old Password:</label>
        </div>
        <div class="cell">
          <input id="oldPassword" type="password" v-model="oldPassword"/>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <label for="newPassword">New Password:</label>
        </div>
        <div class="cell">
          <input id="newPassword" type="password" v-model="newPassword"/>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <label for="newPasswordConf">Confirm Password:</label>
        </div>
        <div class="cell">
          <input id="newPasswordConf" type="password" v-model="newPasswordConf"/>
        </div>
      </div>
    </div>
    <footer>
      <button @click="updatePassword()">Update</button>
    </footer>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2em;
  margin: 1em;
}
div .table {
  display: table;
  border-spacing: 0.8em;
}
div .row {
  display: table-row;
}
div .cell {
  display: table-cell;
}
label {
  margin-right: 1em;
}
input {
  margin-right: 2em;
}
footer {
  margin-top: 0.4em;
}
</style>
