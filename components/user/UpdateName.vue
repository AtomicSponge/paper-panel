<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onNameUpdate } from './UpdateName.telefunc'

const props = defineProps<{
  /** User name */
  name:string
}>()

const updateName = async ():Promise<void> => {
  try {
    await onNameUpdate()
    window.alert('Name updated')
  } catch (error:any) {
    window.alert(error.message)
  }
}
</script>

<template>
  <div class="subbox">
    <label for="username"><h3>Name:</h3></label>
    <input id="username" type="text" :defaultValue="props.name"/>
    <button @click="updateName()">Update</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 2em;
}
label {
  margin-right: 1em;
}
input {
  margin-right: 2em;
}
</style>
