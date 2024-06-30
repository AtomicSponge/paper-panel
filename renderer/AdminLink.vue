<script lang="ts" setup>
import type { Data } from './+data.adminlink'
import { useData } from './useData'
const data = useData<Data>()
</script>

<template>
  <a href="/admin">Admin Panel</a>
</template>
