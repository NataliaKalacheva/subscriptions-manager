<template>
  <div class="subscriptions-all">
    <ui-container>
      <h3 class="h3">{{ title }}</h3>
      <ul class="subscriptions-all__list">
        <template v-if="isExist">
          <subscriptions-item v-for="item in subscriptions" :key="item.id" :item="item" />
        </template>

        <template v-else>
          <div>No subscriptions</div>
        </template>
      </ul>
    </ui-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SubscriptionsItem from '@/components/Subscriptions/SubscriptionsItem'

export default {
  name: 'SubscriptionsList',
  components: {
    SubscriptionsItem
  },
  data: () => ({
    title: 'All subscriptions',
    subscriptions: [
      // temporary for ui
      {
        id: 'DFGHJKL54567GHJKL',
        name: 'Netflix',
        description: 'Some description',
        startDate: 1594483747063,
        period: 'month',
        userId: '1Bks9Pzp5hZML8eGev7cA18UzmQ2',
        isPayed: true,
        price: 10,
        currency: 'USD'
      },
      {
        id: 'LUAkO7jnWq7lYtkU4fDD',
        name: 'Netflix',
        description: 'UPDATED',
        startDate: 1594483747063,
        period: 'month',
        userId: 'meEgv9mwvvbvGXrHrt6mYKZPZ343',
        isPayed: true,
        price: 10,
        currency: 'USD'
      }
    ]
  }),
  computed: {
    //  ...mapGetters('subscriptions', ['subscriptions', 'total']),
    isExist() {
      // return Boolean(this.total)
      return true
    }
  },
  methods: {
    ...mapActions('subscriptions', [
      'getSubscriptions',
      'addSubscription',
      'deleteSubscription',
      'updateSubscription'
    ])
  }
}
</script>

<style lang="scss" scoped>
.subscriptions-all {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;

  ::v-deep .container {
    padding-right: 0;
  }

  &__list {
    margin: 0 0;
    padding: 0 0 0 10px;
    list-style: none;
  }
}
</style>
