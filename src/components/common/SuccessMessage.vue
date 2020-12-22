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
  data: () => ({
    redirectLink: 'Login'
  }),
  computed: {
    ...mapGetters('auth', ['isLogin']),
    ...mapGetters(['successMsg'])
  },
  watch: {
    '$route.query': {
      handler: 'setPageContent',
      immediate: true
    }
  },
  methods: {
    setPageContent() {
      const { type } = this.$route.query

      switch (type) {
        case 'reset-password':
          this.redirectLink = 'Login'
          break
        case 'add-subscription':
          this.redirectLink = 'Subscriptions'
          break
        default:
          this.redirectLink = 'Home'
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
