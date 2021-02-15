<template>
  <ui-form
    class="login-form"
    :label-position="labelPosition"
    :model="loginForm"
    ref="loginForm"
    hide-required-asterisk
  >
    <ui-form-item label="Email" prop="email" :rules="formRules.email">
      <ui-input v-model="loginForm.email" @focus="clearValidate" />
    </ui-form-item>
    <ui-form-item label="Password" prop="password" :rules="formRules.password">
      <ui-input v-model="loginForm.password" placeholder="Password" show-password />
    </ui-form-item>
    <div class="reset-link">
      <router-link :to="{ name: 'ResetPassword' }">Forgot password?</router-link>
    </div>
    <ui-button type="primary" size="large" @click.prevent="submitForm"
      >Login
      <ui-icon-base is-circle is-shadow>
        <ui-arrow-right />
      </ui-icon-base>
    </ui-button>
  </ui-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginForm',
  data: () => ({
    loginForm: {
      email: '',
      password: ''
    },
    formRules: {
      email: [
        { required: true, message: 'Please input email address', trigger: 'submit' },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['sumbit']
        }
      ],
      password: [
        { required: true, message: 'Please input password', trigger: 'submit' },
        {
          min: 4,
          message: 'Min length: 4',
          trigger: 'submit'
        }
      ]
    },
    labelPosition: 'top'
  }),
  methods: {
    ...mapActions('auth', ['login']),
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.login({ ...this.loginForm })
        }
      })
    },
    clearValidate() {
      this.$refs.loginForm.clearValidate()
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  padding-bottom: 40px;
  ::v-deep .ui-button {
    margin-top: 60px;
  }

  .reset-link {
    margin-left: 18px;
    margin-top: 20px;
    text-align: left;
    font-size: 0.9rem;
  }

  @include mq-max($tab) {
    ::v-deep {
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
