<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onMounted } from 'vue'
import { navigate } from 'vike/client/router'

onMounted(async () => {
  const navigationPromise = navigate('/')
  await navigationPromise
})
</script>

<template>
  logout
</template>
