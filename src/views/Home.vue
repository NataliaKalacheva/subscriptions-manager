<template>
  <div class="home">
    <h1 class="text-center">Home</h1>
    <h2 class="text-center" v-if="isLogin">
      You are logged in!
      <ui-button @click="signOut">Sign out</ui-button>
    </h2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters('auth', ['isLogin'])
  },
  watch: {
    isLogin: function redirect(value) {
      console.log(value)
    }
  },
  methods: {
    ...mapActions('auth', ['signOut'])
  }
}
</script>
