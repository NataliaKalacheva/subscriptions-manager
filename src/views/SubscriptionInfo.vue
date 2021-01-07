<template>
  <div class="page-subscriptions">
    <div class="page-subscriptions__content">
      <subscription-header :title="subscription.name" :id="subscriptionId">
        <p>{{ subscription.description }}</p>
        <div class="subscription-header__date">
          {{ subscription.startDate | moment('DD MMMM YYYY') }}
        </div>
      </subscription-header>
      <ui-container> CONTENT HERE for {{ subscriptionId }} {{ subscriptionById }}</ui-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SubscriptionHeader from '@/components/Subscriptions/SubscriptionHeader'

export default {
  name: 'SubscriptionInfo',
  components: {
    SubscriptionHeader
  },
  data: () => ({
    subscription: {
      name: 'Netflix Example',
      description: 'New description',
      startDate: 1594483747063,
      period: 'month',
      userId: 'meEgv9mwvvbvGXrHrt6mYKZPZ343',
      isPayed: true,
      price: 10,
      currency: 'USD'
    }
  }),
  computed: {
    subscriptionId() {
      return this.$route.params.subId
    },
    subscriptionById() {
      return this.getSubscriptionById(this.subscriptionId)
    }
  },
  methods: {
    ...mapActions('subscriptions', ['getSubscriptionById'])
  }
}
</script>

<style lang="scss" scoped>
.page-subscriptions {
  &__content {
    max-width: 768px;
    margin: 0 auto;
    position: relative;
  }
}
</style>
