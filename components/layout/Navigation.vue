<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { usePageContext } from 'vike-vue/usePageContext'

const pageContext = usePageContext()
const { user } = pageContext
const showServerLink = ref(false)

onMounted(() => {
  if(user !== undefined && user.serveradmin) {
    showServerLink.value = true
  }
})
</script>

<template>
  <span><a :href="`/user/${user!.id}`">matt</a></span>
  <span v-show="showServerLink"> > <a href="/server">Server</a></span>
  <span> > <a href="/worlds">Worlds</a></span>
</template>
