<template>
  <div class="page-login">
    <section-header :title="title">
      {{ subtitle }}
    </section-header>
    <ui-container>
      <ui-form
        :label-position="labelPosition"
        :model="formData"
        ref="formData"
        hide-required-asterisk
      >
        <ui-form-item label="Name" prop="email" :rules="formRules.email">
          <ui-input v-model="formData.email"></ui-input>
        </ui-form-item>
        <ui-form-item label="Password" prop="password" :rules="formRules.password">
          <ui-input v-model="formData.password" placeholder="Password" show-password></ui-input>
        </ui-form-item>
        <ui-button type="primary" size="large" @click.prevent="submitForm(formData)"
          >Login
          <ui-icon-base :isCircle="true" :isShadow="true">
            <ui-arrow-right></ui-arrow-right>
          </ui-icon-base>
        </ui-button>
      </ui-form>
    </ui-container>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'

export default {
  name: 'Login',
  components: {
    SectionHeader
  },
  data() {
    return {
      title: 'Welcome',
      subtitle: 'Please login to your account.',
      formData: {
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
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!!')
        }
      })
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

  /deep/ .ui-button {
    margin-top: 60px;
  }

  @include mq-max($tab) {
    /deep/ .ui-form {
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
