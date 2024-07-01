<!-- Default <head> (can be overridden by pages) -->

<script setup lang="ts">
  import './css/index.css'
  import logoUrl from "../assets/logo.svg"
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Paper Panel" />
  <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline'; style-src 'unsafe-inline';" />
  <link rel="icon" :href="logoUrl" />
</template>
