<template>
  <div class="success-message">
    <p class="success-message__text">{{ successMessage }}</p>
    <router-link tag="span" :to="{ name: 'Home' }">
      <ui-button :isShadow="true" size="small" round>Return</ui-button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SuccessMessage',
  computed: {
    ...mapGetters('auth', ['successMessage'])
  }
}
</script>

<style lang="scss" scoped>
.success-message {
  &__text {
    margin: 10px 0 40px;
    font-size: 20px;
  }
}
</style>
