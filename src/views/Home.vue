<template>
  <div class="home">
    <h1 class="text-center">Home</h1>
    <h2 class="text-center" v-if="isLogin">
      You are logged in!
      <ui-button @click="signOut">Sign out</ui-button>
    </h2>
    <subscriptions-list />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SubscriptionsList from '@/components/Subscriptions/SubscriptionsList'

export default {
  name: 'Home',
  components: {
    SubscriptionsList
  },
  computed: {
    ...mapGetters('auth', ['isLogin'])
  },
  methods: {
    ...mapActions('auth', ['signOut'])
  }
}
</script>
