<template>
  <ui-container class="subscription-history" :class="historyClasses" inner>
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
import { mapActions, mapGetters } from 'vuex'
import { supportedCurrency } from '@/constants'
import SubscriptionPaymentsItem from '@/components/Subscriptions/SubscriptionPaymentsItem'

export default {
  name: 'SubscriptionPayments',
  components: {
    SubscriptionPaymentsItem
  },
  props: {
    subscription: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.getSubscriptionPayments(this.subscription.id)
  },
  data: () => ({
    supportedCurrency,
    isExpanded: false
  }),
  computed: {
    ...mapGetters('subscriptions', ['subscriptionHistory']),
    historyClasses() {
      return {
        'container--expanded': this.isExpanded
      }
    },
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
    ...mapActions('subscriptions', ['getSubscriptionPayments']),
    toggleHistory() {
      console.log('click')
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
  &.container--expanded {
    position: fixed;
    top: 0;
    left: 50%;
    height: 100vh;
    overflow-y: auto;
    border-radius: 0;
    transform: translateX(-50%);
    animation: transitionHeight 0.4s linear;
  }

  @keyframes transitionHeight {
    from {
      transform: translateX(-50%) translateY(400px);
    }
    to {
      transform: translateX(-50%) translateY(0);
    }
  }
}
</style>
