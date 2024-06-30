<script lang="ts" setup>
import type { Data } from './+data'
import { useData } from './useData'
const data = useData<Data>()
</script>

<template>
  <a href="/user">{{ data.username }}</a> >
  <a href="/servers">Servers</a> >
  <a href="/worlds">Worlds</a> >
  <a href="/world/world">World name</a>
</template>
