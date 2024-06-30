<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import type { Data } from './+data'
import { useData } from '../../renderer/useData'
const data = useData<Data>()
</script>

<template>
  user: {{ data.username }}
</template>
