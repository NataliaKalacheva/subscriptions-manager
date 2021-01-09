<template>
  <div class="success-message">
    <p class="success-message__text">{{ successMsg }}</p>

    <router-link tag="span" :to="{ name: redirectLink }">
      <ui-button :isShadow="true" size="small" round>Return</ui-button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SuccessMessage',
  computed: {
    ...mapGetters('auth', ['isLogin']),
    ...mapGetters(['successMsg']),
    redirectLink() {
      const { type } = this.$route.query

      switch (type) {
        case 'reset-password':
          return 'Login'
        case 'add-subscription':
        case 'update-subscription':
          return 'Subscriptions'
        default:
          return 'Home'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.success-message {
  &__text {
    margin: 10px auto 40px;
    max-width: 300px;
    font-size: 20px;
  }
}
</style>
