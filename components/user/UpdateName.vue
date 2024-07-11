<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { onNameUpdate } from './UpdateName.telefunc'

const props = defineProps<{
  /** User ID */
  id:number
  /** User name */
  name:string
}>()

/** Reference to the username input field */
const uernameInput = ref(props.name)

/** Update the user's name */
const updateName = async ():Promise<void> => {
  const res = await onNameUpdate({
    id: props.id,
    name: uernameInput.value
  })
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Name updated')
}
</script>

<template>
  <div class="subbox">
    <label for="username"><h3>Name:</h3></label>
    <input id="username" type="text" v-model="uernameInput"/>
    <button @click="updateName()">Update</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 2em;
  margin: 1em;
}
label {
  margin-right: 1em;
}
input {
  margin-right: 2em;
}
</style>
