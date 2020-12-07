<template>
  <div class="page-login">
    <section-header :title="title">
      {{ subtitle }} Or <router-link :to="{ name: 'SignUp' }">SignUp</router-link>
      <div class="loader__wrapper" v-if="isLogin">Login</div>
      <div class="loader__wrapper" v-else>Not login</div>
    </section-header>
    <ui-container>
      <login-form />
    </ui-container>
  </div>
</template>

<script>
import SectionHeader from '@/components/Auth/SectionHeader'
import LoginForm from '@/components/Auth/LoginForm'
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  components: {
    SectionHeader,
    LoginForm
  },
  data: () => ({
    title: 'Welcome',
    subtitle: 'Please login to your account.',
    labelPosition: 'top'
  }),
  computed: {
    ...mapGetters(['isLogin'])
  }
}
</script>

<style lang="scss" scoped>
.page-login {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
}
</style>
