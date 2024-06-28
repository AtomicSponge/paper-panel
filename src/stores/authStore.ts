import { defineStore } from 'pinia'

export const authStore = defineStore('authentication', {
  state: () => ({
    isAuthenticated: false,
    user: ''
  }),
  actions: {
    setAuthed (u:string) {
      this.isAuthenticated = true
      this.user = u
    }
  }
})
