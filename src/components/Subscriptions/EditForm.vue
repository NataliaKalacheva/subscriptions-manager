<template>
  <ui-form
    class="subscription-form"
    :label-position="labelPosition"
    :model="subscriptionForm"
    ref="subscriptionForm"
    hide-required-asterisk
  >
    <ui-form-item label="Name" prop="name" :rules="formRules.name">
      <ui-input v-model="subscriptionForm.name" />
    </ui-form-item>
    <ui-form-item label="App Type" prop="type" :rules="formRules.type">
      <ui-select v-model="subscriptionForm.type" :isFullWidth="true" size="large">
        <ui-option
          v-for="option in appTypesList"
          :key="option.name"
          :value="option.publicName"
          :label="option.publicName"
        />
      </ui-select>
    </ui-form-item>
    <ui-form-item label="Amount" prop="price" :rules="formRules.price">
      <span class="subscription-form__currency" area-label="USD">$</span>
      <ui-input v-model.number="subscriptionForm.price" placeholder="$" type="number" />
    </ui-form-item>
    <ui-form-item label="Start Date" prop="startDate" :rules="formRules.startDate">
      <ui-date-picker
        v-model.number="subscriptionForm.startDate"
        value-format="timestamp"
        type="date"
        placeholder="dd/mm/yyyy"
      />
    </ui-form-item>
    <ui-form-item label="Due Date" prop="dueDate" :rules="formRules.dueDate">
      <ui-date-picker
        v-model.number="subscriptionForm.dueDate"
        value-format="timestamp"
        type="date"
        placeholder="dd/mm/yyyy"
      />
    </ui-form-item>
    <ui-form-item label="Billing Cycle" prop="period" :rules="formRules.period">
      <ui-select v-model="subscriptionForm.period" :isFullWidth="true" size="large">
        <ui-option
          v-for="option in periodOptions"
          :key="option.value"
          :value="option.label"
          :label="option.label"
        />
      </ui-select>
    </ui-form-item>

    <ui-button type="primary" size="large" @click.prevent="submitForm"
      >Update subscription
      <ui-icon-base is-circle is-shadow>
        <ui-arrow-right />
      </ui-icon-base>
    </ui-button>
  </ui-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import checkNumber from '@/helpers/validators/checkNumber'
import BillingCycles from '@/constants'

export default {
  name: 'EditForm',
  props: {
    subscriptionForm: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    periodOptions: BillingCycles,
    formRules: {
      name: [{ required: true, message: 'Please input subscription', trigger: 'submit' }],
      price: [
        { required: true, message: 'Please input number', trigger: 'submit' },
        { validator: checkNumber, trigger: 'submit' }
      ],
      startDate: [{ required: true, message: 'Please input start date', trigger: 'submit' }],
      dueDate: [{ required: false }],
      period: [{ required: true, message: 'Please select billing cycle', trigger: 'submit' }]
    },
    labelPosition: 'top'
  }),
  computed: {
    ...mapGetters(['userId', 'appTypesList'])
  },
  methods: {
    ...mapActions('subscriptions', ['updateSubscription']),
    submitForm() {
      this.$refs.subscriptionForm.validate(valid => {
        if (valid) {
          this.updateSubscription({ ...this.subscriptionForm, userId: this.userId })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.subscription-form {
  &__currency {
    position: absolute;
    top: 50%;
    left: 12px;
    z-index: 1;
    padding: 3px 0 0;
    transform: translateY(-50%);
    color: $color-blue;
  }

  &::v-deep .ui-button {
    margin-top: 60px;
  }

  .reset-link {
    margin-left: 18px;
  }

  @include mq-max($tab) {
    &::v-deep {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      flex-grow: 1;
    }

    &::v-deep .ui-button {
      margin-top: auto;
      align-self: center;
    }
  }
}
</style>
