<script lang="ts" setup>
import { usePageContext } from 'vike-vue/usePageContext'

const pageContext = usePageContext()

const { urlPathname } = pageContext

console.log(urlPathname)
</script>

<template>
  <a href="/user/1">matt</a> >
  <a href="/servers/1">Servers</a> >
  <a href="/worlds/1">Worlds</a> >
  <a href="/world/1">World name</a>
</template>
