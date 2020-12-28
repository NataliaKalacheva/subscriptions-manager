<template>
  <div class="page-login">
    <section-header :title="title">
      {{ subtitle }}
      Or <router-link :to="{ name: 'Login' }">Login</router-link>
    </section-header>
    <ui-container>
      <sign-up-form />
    </ui-container>
  </div>
</template>

<script>
import SectionHeader from '@/components/common/SectionHeader'
import SignUpForm from '@/components/Auth/SignUpForm'

export default {
  name: 'SignUp',
  components: {
    SectionHeader,
    SignUpForm
  },
  data: () => ({
    title: 'Welcome',
    subtitle: 'Fill all fields to create the new account.'
  }),
  methods: {
    submitForm(formName) {
      this.$refs[formName].$children[0].validate(valid => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!!')
        }
      })
    },
    checkPassword(rule, value, callback) {
      if (!value) {
        callback(new Error('Please repeat the password'))
      }
      if (value !== this.formData.password) {
        callback(new Error('Passwords must match'))
      } else {
        callback()
      }
    }
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
