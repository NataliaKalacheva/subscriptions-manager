<template>
  <ui-container class="subscription-history" inner :expanded="isExpanded">
    <div v-if="subscriptionHistory">
      <h3 class="h3 subscription-history__title">
        History
        <button class="subscription-history__toggle" @click="toggleHistory">
          {{ toggleTitle }}
        </button>
      </h3>
      <p class="subscription-history__note">
        You've spent {{ supportedCurrency.icon }}{{ totalPrice }}
        <span class="note-light"> on {{ qtyTransactions }} transactions</span>
      </p>
      <ul class="subscription-history__list">
        <template v-for="item in subscriptionHistory">
          <subscription-payments-item :key="item.id" :payment="item" :name="subscription.name" />
        </template>
      </ul>
    </div>
  </ui-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { supportedCurrency } from '@/constants'
import SubscriptionPaymentsItem from '@/components/Subscriptions/SubscriptionPaymentsItem'

export default {
  name: 'SubscriptionPayments',
  components: {
    SubscriptionPaymentsItem
  },
  props: {
    subscription: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    supportedCurrency,
    isExpanded: false
  }),
  computed: {
    ...mapGetters('subscriptions', ['subscriptionHistory']),
    toggleTitle() {
      return this.isExpanded ? 'Hide all' : 'View all'
    },
    totalPrice() {
      return this.subscriptionHistory.reduce((acc, current) => {
        return acc + current.price
      }, 0)
    },
    qtyTransactions() {
      return this.subscriptionHistory.length
    }
  },
  methods: {
    toggleHistory() {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<style lang="scss" scoped>
.subscription-history {
  &__title {
    display: flex;
    justify-content: space-between;
  }
  &__note {
    color: $color-text-grey;
    font-weight: 500;
  }
  &__toggle {
    @include reset-button;
    color: $color-text-grey;
    cursor: pointer;

    &:hover,
    &:focus {
      outline: none;
      color: $color-dark-blue;
    }
  }
  &__list {
    @include reset-list;
    margin-top: $container-padding;
    margin-right: -$container-padding;
  }
  .note-light {
    color: $color-grey;
  }
  &.container {
    transform: translateY(0);
  }
}
</style>
