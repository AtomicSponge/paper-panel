import { defineStore } from 'pinia'

export const authStore = defineStore('authenticated', {
  state: () => ({ value: false }),
  actions: { set (v:boolean) { this.value = v } }
})
