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
      <ui-input v-model.number="subscriptionForm.amount" placeholder="$" type="number" />
    </ui-form-item>
    <ui-form-item label="Next Payment" prop="nextPayment">
      <ui-date-picker
        v-model.number="subscriptionForm.nextPayment"
        type="date"
        placeholder="dd/mm/yyyy"
      />
    </ui-form-item>
    <ui-form-item label="Due Date" prop="dueDate">
      <ui-date-picker
        v-model.number="subscriptionForm.dueDate"
        type="date"
        placeholder="dd/mm/yyyy"
      />
    </ui-form-item>
    <ui-form-item label="Due Date" prop="dueDate">
      <ui-select
        v-model.number="subscriptionForm.billingCycle"
        type="date"
        placeholder="dd/mm/yyyy"
      />
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
      nextPayment: '',
      dueDate: '',
      billingCycle: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ]
    },
    formRules: {
      name: [{ required: true, message: 'Please input subscription', trigger: 'submit' }],
      amount: [
        { required: true, message: 'Please input number', trigger: 'submit' },
        { validator: checkNumber, trigger: 'blur' }
      ],
      nextPayment: [
        { required: true, message: 'Please input next payment date', trigger: 'submit' }
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
