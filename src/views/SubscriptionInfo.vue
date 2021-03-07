<template>
  <div class="subscription" v-if="currentSubscription.id">
    <div class="subscription__content page-width">
      <subscription-header
        :title="currentSubscription.name"
        :id="currentSubscription.id"
        :icon="currentSubscription.icon"
      >
        <p>{{ currentSubscription.appType }}</p>
        <div class="subscription-header__date">
          {{ currentSubscription.startDate | moment('DD MMMM YYYY') }}
        </div>
      </subscription-header>
      <ui-container :color="'#ECF0F8'" collapsed>
        <h3 class="h3 subscription__title">
          Billing
          <span class="subscription__price">
            {{ currentSubscription.price }}
            {{ currentSubscription.currency.icon }}
            <span class="subscription__period">/{{ currentSubscription.period }}</span>
          </span>
        </h3>
        <subscription-payments-chart />
        <subscription-payments :subscription="currentSubscription" />
      </ui-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SubscriptionHeader from '@/components/Subscriptions/SubscriptionHeader'
import SubscriptionPayments from '@/components/Subscriptions/SubscriptionPayments'
import SubscriptionPaymentsChart from '@/components/Subscriptions/SubscriptionPaymentsChart'

export default {
  name: 'SubscriptionInfo',
  components: {
    SubscriptionHeader,
    SubscriptionPayments,
    SubscriptionPaymentsChart
  },
  mounted() {
    this.getSubscriptionById(this.subscriptionId)
    this.getSubscriptionPayments(this.subscriptionId)
  },
  computed: {
    ...mapGetters('subscriptions', ['currentSubscription']),
    subscriptionId() {
      return this.$route.params.subId
    }
  },
  methods: {
    ...mapActions('subscriptions', ['getSubscriptionById', 'getSubscriptionPayments'])
  }
}
</script>

<style lang="scss" scoped>
.subscription {
  height: 100vh;
  min-height: 800px;
  overflow: hidden;

  &__content {
    min-height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &__title {
    display: flex;
    justify-content: space-between;
  }

  &__price {
    margin-left: 20px;
  }

  &__period {
    color: $color-text-grey;
    font-size: 1rem;
    font-weight: 400;
    text-transform: lowercase;
  }
}
</style>
