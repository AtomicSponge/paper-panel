<script lang="ts" setup>
import { usePageContext } from './usePageContext'

const pageContext = usePageContext()

const { usertype } = pageContext.value
</script>

<template>
  <div v-show="usertype === 'admin'">
    <a href="/admin">Admin Panel</a>
  </div>
</template>
