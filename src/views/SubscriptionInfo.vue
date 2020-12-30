<template>
  <div class="page-subscriptions">
    <div class="page-subscriptions__content">
      <subscription-header :title="subscription.name">
        {{ subscription.description }}
      </subscription-header>
      <ui-container>
        CONTENT HERE
      </ui-container>
    </div>
  </div>
</template>

<script>
import SubscriptionHeader from '@/components/Subscriptions/SubscriptionHeader'

export default {
  name: 'Subscriptions',
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
  })
}
</script>
