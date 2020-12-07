<template>
  <ui-form
    class="login-form"
    :label-position="labelPosition"
    :model="loginForm"
    ref="loginForm"
    hide-required-asterisk
  >
    <ui-form-item label="Email" prop="email" :rules="formRules.email">
      <ui-input v-model="loginForm.email" />
    </ui-form-item>
    <ui-form-item label="Password" prop="password" :rules="formRules.password">
      <ui-input v-model="loginForm.password" placeholder="Password" show-password />
    </ui-form-item>
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
        { required: true, message: 'Please input number', trigger: 'submit' },
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
          this.login(this.loginForm)
        } else {
          console.log('error submit!!')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  /deep/ .ui-button {
    margin-top: 60px;
  }

  @include mq-max($tab) {
    /deep/ {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      flex-grow: 1;
    }

    /deep/ .ui-button {
      margin-top: auto;
      align-self: center;
    }
  }
}
</style>
