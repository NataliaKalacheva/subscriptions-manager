<template>
  <ui-form :label-position="labelPosition" :model="UserForm" ref="UserForm" hide-required-asterisk>
    <ui-form-item label="Full name" prop="displayName" :rules="formRules.displayName">
      <ui-input v-model="UserForm.displayName" />
    </ui-form-item>
    <ui-form-item label="Email" prop="email" :rules="formRules.email">
      <ui-input v-model="UserForm.email" />
    </ui-form-item>
    <ui-form-item
      v-if="isLogin"
      label="Phone number"
      prop="phoneNumber"
      :rules="formRules.phoneNumber"
    >
      <ui-input v-model.number="UserForm.phoneNumber" />
    </ui-form-item>
    <ui-form-item v-if="!isLogin" label="Password" prop="password" :rules="formRules.password">
      <ui-input v-model="UserForm.password" placeholder="Password" show-password />
    </ui-form-item>
    <ui-form-item
      v-if="!isLogin"
      label="Repeat password"
      prop="repeatPassword"
      :rules="formRules.repeatPassword"
    >
      <ui-input v-model="UserForm.repeatPassword" placeholder="Password" show-password />
    </ui-form-item>
    <ui-button type="primary" size="large" @click.prevent="submitForm">
      {{ submitButtonText }}
      <ui-icon-base is-circle is-shadow>
        <ui-arrow-right />
      </ui-icon-base>
    </ui-button>
  </ui-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import router from '@/router'

export default {
  name: 'UserForm',
  props: {
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      UserForm: {
        displayName: '',
        email: '',
        phoneNumber: null,
        password: '',
        repeatPassword: ''
      },
      formRules: {
        displayName: [{ required: true, message: 'Please input your name', trigger: 'submit' }],
        email: [
          { required: true, message: 'Please input email address', trigger: 'submit' },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['sumbit']
          }
        ],
        phoneNumber: [
          {
            type: 'number',
            min: 6,
            message: 'Please input correct phone number',
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
  watch: {
    formData: {
      handler: 'setInitialFormData',
      immediate: true
    }
  },
  computed: {
    ...mapGetters('auth', ['isLogin']),
    submitButtonText() {
      return this.isLogin ? 'Update profile' : 'Sign Up'
    }
  },
  methods: {
    ...mapActions('auth', ['signUp', 'updateUser']),
    setInitialFormData(data) {
      if (!data.uid) return
      Object.entries(data).forEach(([key, value]) => {
        if (key in this.UserForm) {
          this.$set(this.UserForm, key, value)
        }
      })
    },
    submitForm() {
      this.$refs.UserForm.validate(valid => {
        if (!valid) return

        if (this.isLogin) {
          this.handleUpdateUser()
          return
        }

        this.handleSignUp()
      })
    },
    checkPassword(rule, value, callback) {
      if (!value) {
        callback(new Error('Please repeat the password'))
      }
      if (value !== this.UserForm.password) {
        callback(new Error('Passwords must match'))
      } else {
        callback()
      }
    },
    async handleSignUp() {
      try {
        await this.signUp({ ...this.UserForm })
        router.push({ path: '/' })
      } catch (err) {
        throw new Error(err)
      }
    },
    async handleUpdateUser() {
      try {
        const data = await this.updateUser({ ...this.UserForm })
        router.push({ path: '/success', query: { type: 'update-user' } })
        return data
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}
</script>
