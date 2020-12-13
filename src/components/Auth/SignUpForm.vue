<template>
  <ui-form
    :label-position="labelPosition"
    :model="signUpForm"
    ref="signUpForm"
    hide-required-asterisk
  >
    <ui-form-item label="Email" prop="email" :rules="formRules.email">
      <ui-input v-model="signUpForm.email" />
    </ui-form-item>
    <ui-form-item label="Password" prop="password" :rules="formRules.password">
      <ui-input v-model="signUpForm.password" placeholder="Password" show-password />
    </ui-form-item>
    <ui-form-item label="Repeat password" prop="repeatPassword" :rules="formRules.repeatPassword">
      <ui-input v-model="signUpForm.repeatPassword" placeholder="Password" show-password />
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
  name: 'SignUpForm',
  data() {
    return {
      signUpForm: {
        email: '',
        password: '',
        repeatPassword: ''
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
            min: 6,
            message: 'Min length: 6',
            trigger: 'submit'
          }
        ],
        repeatPassword: [
          { required: true, message: 'Please input password', trigger: 'submit' },
          {
            min: 6,
            message: 'Min length: 6',
            trigger: 'submit'
          },
          { validator: this.checkPassword, trigger: 'sumbit' }
        ]
      },
      labelPosition: 'top'
    }
  },
  methods: {
    ...mapActions('auth', ['signUp']),
    submitForm() {
      this.$refs.signUpForm.validate(valid => {
        if (valid) {
          this.signUp({ ...this.signUpForm })
        }
      })
    },
    checkPassword(rule, value, callback) {
      if (!value) {
        callback(new Error('Please repeat the password'))
      }
      if (value !== this.signUpForm.password) {
        callback(new Error('Passwords must match'))
      } else {
        callback()
      }
    }
  }
}
</script>
