<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref, onUpdated } from 'vue'
import { navigate } from 'vike/client/router'
import { onAbort } from 'telefunc/client'

import { onAddUser } from './Whitelist.telefunc'

import type { ModelRef } from 'vue'

onAbort(async (error:any) => {
  if (error.abortValue.notLoggedIn) {
    const navigationPromise = navigate('/login')
    await navigationPromise
  }
})

/** Label for the toggle button */
const label = ref('Edit')
/** Reference for showing the config display */
const showConfig = ref(false)
/** Reference to the multi select data*/
const selected = ref([])
/** Reference to the multi select, only used for size calc */
const size = ref()
/** Key value to force select display updates */
const selectKey = ref(0)
/** Reference to the add item input box */
const newItem = ref('')

/** Form data */
const data:ModelRef<Array<Whitelist>> = defineModel({ required: true })

/** Toggle showing the config display */
const toggleConfig = ():void => {
  showConfig.value = showConfig.value ? false : true
  label.value = showConfig.value ? 'Hide' : 'Edit'
}

/** Add an item to the list */
const addItem = ():void => {
  if(newItem.value.length === 0) return
  try {
    data.value.forEach(item => {
      if(newItem.value === item.name) {
        throw new Error(`${item.name} already in list!`)
      }
    })
  } catch (error:any) {
    window.alert(error.message)
    return
  }
  onAddUser({ data: newItem.value })
  newItem.value = ''
}

/** Remove an item from the list */
const removeItems = ():void => {
  selected.value.forEach(item => {
    data.value.splice(data.value.indexOf(item), 1)
  })
  selectKey.value += 1
}

/** Set selection size on update */
onUpdated(() => {
  if(size.value.childElementCount < 7)
    size.value.setAttribute('size', 7)
  else
    size.value.setAttribute('size', size.value.childElementCount)
})
</script>

<template>
  <section class="subbox">
    <div>
      <h2>Whitelist</h2>
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
            <button @click="removeItems()">Remove</button>
          </div>
        </div>
        <div class="left">
          <select multiple v-model="selected" ref="size" :key="selectKey">
            <option v-for="item in data" :value="item">{{ item.name }}</option>
          </select>
        </div>
      </div>
      <div>
        <input type="text" v-model="newItem"/>
        <button @click="addItem()">Add</button>
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
  min-width: 12em;
}
input {
  margin-right: 0.6em;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>
