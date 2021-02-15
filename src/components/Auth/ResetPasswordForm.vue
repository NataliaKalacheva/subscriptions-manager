<template>
  <ui-form
    class="reset-form"
    :label-position="labelPosition"
    :model="resetForm"
    ref="resetForm"
    hide-required-asterisk
  >
    <ui-form-item label="Email" prop="email" :rules="formRules.email">
      <ui-input v-model="resetForm.email" />
    </ui-form-item>

    <ui-button type="primary" size="large" @click.prevent="submitForm"
      >Reset password
      <ui-icon-base is-circle is-shadow>
        <ui-arrow-right />
      </ui-icon-base>
    </ui-button>
  </ui-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ResetForm',
  data: () => ({
    resetForm: {
      email: ''
    },
    formRules: {
      email: [
        { required: true, message: 'Please input email address', trigger: 'submit' },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['sumbit']
        }
      ]
    },
    labelPosition: 'top'
  }),
  methods: {
    ...mapActions('auth', ['resetPassword']),
    submitForm() {
      this.$refs.resetForm.validate(valid => {
        if (valid) {
          this.resetPassword({ ...this.resetForm })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.reset-form {
  padding-bottom: 40px;
  ::v-deep .ui-button {
    margin-top: 60px;
  }

  p {
    margin-left: 18px;
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
