<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onSaveNewWorld } from './AddWorldForm.telefunc'

const props = defineProps<{
  /** Reference ID from parent component */
  id:number
}>()

const emit = defineEmits<{
  (e: 'remove', id:number):void
}>()

const saveNewWorld = async () => {
  try {
    await onSaveNewWorld()
    window.alert('World added!')
    emit('remove', props.id)
  } catch (error:any) {
    window.alert(error.message)
  }
}
</script>

<template>
  <hr/>
  <section>
    <div class="right">
      <button @click="saveNewWorld">Save</button>
    </div>
    <div>
      Form for adding a new world<br/>
      Stuff goes here<br/>
      More stuff
    </div>
  </section>
</template>

<style scoped>
.right {
  float: right;
}
</style>
