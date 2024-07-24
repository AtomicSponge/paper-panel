<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { onUpdate } from './Operators.telefunc'
import type { ModelRef } from 'vue'

const selected = ref()
const size = ref()
const data:ModelRef<Array<string>> = defineModel({ required: true })

/** Update the Banned IPs */
const updateConfig = async ():Promise<void> => {
  const res = await onUpdate(data.value)
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Operators updated!')
}

/** Set selection size on mount */
onMounted(() => {
  if(size.value.childElementCount < 5)
    size.value.setAttribute('size', 5)
  else
    size.value.setAttribute('size', size.value.childElementCount)
})
</script>

<template>
  <section class="subbox">
    <div>
      <h2>Operators</h2>
    </div>
    <div>
      <button>Show</button>
    </div>
    <hr/>
    <div>
      <div class="right">
        <div>&nbsp;</div>
        <div>
          <button>Remove</button>
        </div>
        <div>&nbsp;</div>
      </div>
      <div class="left">
        <select multiple v-model="selected" ref="size">
          <option v-for="item in data">{{ item }}</option>
        </select>
      </div>
    </div>
    <div>
      <input type="text"/>
    </div>
    <div>
      <button>Add</button>
    </div>
    <hr/>
    <div>
      <button @click="updateConfig">Update</button>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  align-items: stretch;
  margin: 1em;
  padding: 1em;
}
div {
  text-align: center;
  padding: 0.4em;
}
select {
  overflow: hidden;
}
hr {
  width: 90%;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>
