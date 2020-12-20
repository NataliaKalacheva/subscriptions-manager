<template>
  <ui-form
    class="subscription-form"
    :label-position="labelPosition"
    :model="subscriptionForm"
    ref="subscriptionForm"
    hide-required-asterisk
  >
    <ui-form-item label="name" prop="name" :rules="formRules.name">
      <ui-input v-model="subscriptionForm.name" />
    </ui-form-item>
    <ui-form-item label="Amount" prop="amount">
      <ui-input v-model.number="subscriptionForm.amount" placeholder="$" type="number"></ui-input>
    </ui-form-item>
    <ui-form-item label="Next Payment" prop="nextPayment">
      <ui-input
        v-model.number="subscriptionForm.nextPayment"
        type="text"
        placeholder="dd/mm/yyyy"
      ></ui-input>
    </ui-form-item>

    <ui-button type="primary" size="large" @click.prevent="submitForm"
      >Add subscription
      <ui-icon-base is-circle is-shadow>
        <ui-arrow-right />
      </ui-icon-base>
    </ui-button>
  </ui-form>
</template>

<script>
import { mapActions } from 'vuex'
import checkNumber from '@/helpers/validators/checkNumber'

export default {
  name: 'subscriptionForm',
  data: () => ({
    subscriptionForm: {
      name: '',
      amount: 0,
      nextPayment: ''
    },
    formRules: {
      name: [{ required: true, message: 'Please input subscription', trigger: 'submit' }],
      amount: [
        { required: true, message: 'Please input number', trigger: 'blur' },
        { validator: checkNumber, trigger: 'blur' }
      ]
    },
    labelPosition: 'top'
  }),
  computed: {},
  methods: {
    ...mapActions('subscription', ['addSubscription']),
    submitForm() {
      this.$refs.subscriptionForm.validate(valid => {
        if (valid) {
          console.log('submit here')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.subscription-form {
  /deep/ .ui-button {
    margin-top: 60px;
  }

  .reset-link {
    margin-left: 18px;
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
