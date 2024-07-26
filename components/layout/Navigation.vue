<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { onMounted } from 'vue'
import { navigate } from 'vike/client/router'
import { usePageContext } from 'vike-vue/usePageContext'

const pageContext = usePageContext()
const { user } = pageContext

onMounted(async () => {
  if(user === undefined) {
    const navigationPromise = navigate('/login')
    await navigationPromise
  }
})
</script>

<template>
  <span><a :href="`/user/${user!.id}`">{{ user!.name }}</a></span>
  <span> > <a href="/server">Server</a></span>
  <span> > <a href="/players">Players</a></span>
  <span> > <a href="/worlds">Worlds</a></span>
</template>
