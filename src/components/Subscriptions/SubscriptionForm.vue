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
      <ui-select v-model="subscriptionForm.appType" :isFullWidth="true" size="large">
        <ui-option
          v-for="option in appTypesList"
          :key="option.name"
          :value="option.publicName"
          :label="option.publicName"
        />
      </ui-select>
    </ui-form-item>
    <ui-form-item label="Amount" prop="price" :rules="formRules.price">
      <span class="subscription-form__currency" :area-label="supportedCurrency.type">
        {{ supportedCurrency.icon }}
      </span>
      <ui-input
        v-model.number="subscriptionForm.price"
        :placeholder="subscriptionForm.price"
        type="number"
      />
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

    <ui-button type="primary" size="large" @click.prevent="validateForm"
      >Add subscription
      <ui-icon-base is-circle is-shadow>
        <ui-arrow-right />
      </ui-icon-base>
    </ui-button>
  </ui-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import router from '@/router'
import checkNumber from '@/helpers/validators/checkNumber'
import { billingCycles, supportedCurrency } from '@/constants'

export default {
  name: 'subscriptionForm',
  props: {
    subscriptionData: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    subscriptionForm: {
      name: '',
      description: '',
      price: 0,
      startDate: Date.now(),
      dueDate: Date.now(),
      period: billingCycles[0].label,
      isPayed: true,
      appType: '',
      id: null
    },
    periodOptions: billingCycles,
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
    ...mapGetters('user', ['userId']),
    ...mapGetters('appTypes', ['appTypesList']),
    supportedCurrency() {
      return supportedCurrency
    },
    isExistSubscription() {
      return Boolean(this.subscriptionData.id)
    }
  },
  watch: {
    subscriptionData: {
      handler: 'setInitialFormData',
      immediate: true
    }
  },
  methods: {
    ...mapActions('subscriptions', ['addSubscription', 'updateSubscription']),
    setInitialFormData(data) {
      if (!data.id) return
      Object.entries(data).forEach(([key, value]) => {
        if (key in this.subscriptionForm) {
          this.$set(this.subscriptionForm, key, value)
        }
      })
    },
    validateForm() {
      this.$refs.subscriptionForm.validate(valid => {
        if (!valid) return
        this.submitForm()
      })
    },
    async submitForm() {
      if (this.isExistSubscription) {
        this.handleSubscriptionUpdate()
        return
      }
      this.handleSubscriptionAdd()
    },
    async handleSubscriptionUpdate() {
      try {
        await this.updateSubscription({
          ...this.subscriptionForm,
          userId: this.userId,
          currency: this.supportedCurrency.type
        })
        router.push({ name: 'Success', query: { type: 'update-subscription' } })
      } catch (err) {
        throw new Error(err)
      }
    },
    async handleSubscriptionAdd() {
      try {
        await this.addSubscription({
          ...this.subscriptionForm,
          userId: this.userId,
          currency: this.supportedCurrency.type
        })
        router.push({ name: 'Success', query: { type: 'add-subscription' } })
      } catch (err) {
        throw new Error(err)
      }
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
    padding: 1px 0 0;
    transform: translateY(-50%);
    color: $color-dark-blue;
  }

  &::v-deep .ui-button {
    margin-top: 60px;
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
