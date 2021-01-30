<template>
  <div class="home">
    <h1 class="text-center">Home</h1>
    <h2 class="text-center" v-if="isLogin">
      You are logged in!
      <ui-button @click="signOut">Sign out</ui-button>
    </h2>
    <p>{{ userId }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  mounted() {
    console.log(this.user)
    this.getOverview(this.userId)
  },
  computed: {
    ...mapGetters('auth', ['isLogin']),
    ...mapGetters('user', ['user', 'userId'])
  },
  methods: {
    ...mapActions('auth', ['signOut']),
    ...mapActions('overview', ['getOverview'])
  }
}
</script>
