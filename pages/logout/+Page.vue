<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onMounted } from 'vue'
import { navigate } from 'vike/client/router'

onMounted(async () => {
  setTimeout(async () => {
    const navigationPromise = navigate('/')
    await navigationPromise
  }, 1000)
})
</script>

<template>
  <h2>Logging out of Paper Panel...</h2>
</template>
