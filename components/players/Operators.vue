<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { navigate, reload } from 'vike/client/router'
import { onAbort } from 'telefunc/client'

import { onAddUser, onRemoveUser, onUpdate } from './Operators.telefunc'

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
/** Reference to the add item input box */
const newItem = ref('')

/** Form data */
const data:ModelRef<Array<Operators>> = defineModel({ required: true })

/** Toggle showing the config display */
const toggleConfig = ():void => {
  showConfig.value = showConfig.value ? false : true
  label.value = showConfig.value ? 'Hide' : 'Edit'
}

/** Add an item to the list */
const addItem = async ():Promise<void> => {
  if(newItem.value.length === 0) return
  try {
    data.value.forEach(item => {
      if(newItem.value === item.name) {
        throw new Error(`${newItem.value} already in list!`)
      }
    })
  } catch (error:any) {
    window.alert(error.message)
    return
  }
  const res = await onAddUser({ data: newItem.value })
  newItem.value = ''
  if(res?.errorMessage) window.alert(res.errorMessage)
  else await reload()
}

/** Remove an item from the list */
const removeItem = async (idx:number):Promise<void> => {
  if (window.confirm(`Remove ${data.value[idx].name} from the Operator list?`)) {
    const res = await onRemoveUser({ data: data.value[idx].name })
    if(res?.errorMessage) window.alert(res.errorMessage)
    else await reload()
  }
}

/** Update all items */
const updateItems = async ():Promise<void> => {
  const res = await onUpdate({ data: data.value })
  if(res?.errorMessage) window.alert(res.errorMessage)
  else await reload()
}
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
            <button @click="updateItems()">Update</button>
          </div>
        </div>
        <div class="left table">
          <div v-for="item, idx in data" :key="idx" class="row">
            <div class="cell">
              <h3>{{ item.name }}</h3>
            </div>
            <div class="cell">
              Level:
              <select v-model="item.level">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div class="cell">
              <button class="remove" @click="removeItem(idx)">Remove</button>
            </div>
          </div>
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
div .table {
  display: table;
  margin-left: auto;
  margin-right: auto;
}
div .row {
  display: table-row;
}
div .cell {
  display: table-cell;
  padding: 4px;
}
select {
  overflow: hidden;
  min-width: 4em;
}
input {
  margin-right: 0.6em;
}
.remove {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgb(178, 34, 34);
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
