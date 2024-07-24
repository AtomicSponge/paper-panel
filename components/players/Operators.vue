<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref, onUpdated } from 'vue'
import { onUpdate } from './Operators.telefunc'
import type { ModelRef } from 'vue'

/** Label for the toggle button */
const label = ref('Edit')
/** Reference for showing the config display */
const showConfig = ref(false)
/** Reference to the multi select */
const selected = ref()
/** Reference to the size of the multi select */
const size = ref()

/** Form data */
const data:ModelRef<Array<string>> = defineModel({ required: true })

/** Toggle showing the config display */
const toggleConfig = ():void => {
  showConfig.value = showConfig.value ? false : true
  label.value = showConfig.value ? 'Hide' : 'Edit'
}

/** Update the Banned IPs */
const updateConfig = async ():Promise<void> => {
  const res = await onUpdate(data.value)
  if(res?.errorMessage) window.alert(res.errorMessage)
  else window.alert('Operators updated!')
}

/** Set selection size on update */
onUpdated(() => {
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
      <button @click="toggleConfig">{{ label }}</button>
    </div>
    <main v-show="showConfig">
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
    </main>
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
