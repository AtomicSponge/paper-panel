<!--
  paper-panel
  By:  Matthew Evans
  See LICENSE.md
-->

<script lang="ts" setup>
import { usePageContext } from '../../renderer/usePageContext'

const pageContext = usePageContext()
let { is404, abortReason } = pageContext.value
if (!abortReason) {
  abortReason = is404 ? 'Page not found.' : 'Whoops! Something went wrong.'
}
</script>

<template>
  <div class="center">
    <p>{{ abortReason }}</p>
  </div>
</template>

<style>
.center {
  height: calc(100vh - 100px);
  display: flex;
  font-size: 1.3em;
  justify-content: center;
  align-items: center;
}
</style>
