<template>
  <div class="page-login">
    <section-header :title="title">
      {{ subtitle }}
      Or <router-link :to="{ name: 'Login' }">Login</router-link>
    </section-header>
    <ui-container>
      <user-form />
    </ui-container>
  </div>
</template>

<script>
import SectionHeader from '@/components/common/SectionHeader'
import UserForm from '@/components/Auth/UserForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SignUp',
  components: {
    SectionHeader,
    UserForm
  },
  data: () => ({
    title: 'Welcome',
    subtitle: 'Fill all fields to create the new account.'
  }),
  computed: {
    ...mapGetters('auth', ['isLogin'])
  },
  watch: {
    isLogin: {
      handler: 'redirectOnLogin',
      immediate: true
    }
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

  ::v-deep .ui-button {
    margin-top: 60px;
  }

  @include mq-max($tab) {
    ::v-deep .ui-form {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      flex-grow: 1;
    }

    ::v-deep .ui-button {
      margin-top: auto;
      align-self: center;
    }
  }
}
</style>
