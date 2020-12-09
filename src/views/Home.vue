<template>
  <div class="home">
    <h1>Home</h1>
    <h1 v-if="isLogin">
      You are logged in!
      <ui-button @click="signOut">signOut</ui-button>
    </h1>
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
