<template>
  <div class="success-message">
    <p class="success-message__text">{{ successMessage }}</p>

    <router-link v-if="isLogin" tag="span" :to="{ name: 'Home' }">
      <ui-button :isShadow="true" size="small" round>Return</ui-button>
    </router-link>
    <router-link v-else tag="span" :to="{ name: 'Login' }">
      <ui-button :isShadow="true" size="small" round>Return</ui-button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SuccessMessage',
  computed: {
    ...mapGetters('auth', ['successMessage', 'isLogin'])
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
