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
const showAdminLink = ref(false)

onMounted(() => {
  if(user !== undefined && user.admin) {
    showAdminLink.value = true
  }
})
</script>

<template>
  <div v-show="showAdminLink">
    <a href="/admin">Admin Panel</a>
  </div>
</template>
