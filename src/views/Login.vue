<template>
  <div class="page-login">
    <section-header :title="title">
      {{ subtitle }} Or <router-link :to="{ name: 'SignUp' }">SignUp</router-link>
    </section-header>

    <ui-container>
      <login-form />
    </ui-container>
  </div>
</template>

<script>
import SectionHeader from '@/components/common/SectionHeader'
import LoginForm from '@/components/Auth/LoginForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    SectionHeader,
    LoginForm
  },
  data: () => ({
    title: 'Welcome',
    subtitle: 'Please login to your account.'
  }),
  watch: {
    isLogin: {
      handler: 'redirectOnLogin',
      immediate: true
    }
  },
  computed: {
    ...mapGetters('auth', ['isLogin'])
  },
  methods: {
    ...mapActions('auth', ['redirectOnLogin'])
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
