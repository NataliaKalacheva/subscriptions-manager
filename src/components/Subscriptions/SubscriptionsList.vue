<template>
  <ui-container>
    <ul>
      <ui-button @click="getSubscriptions">Get all subscriptions</ui-button>
      <ui-button @click="addSubscription(newSubscription)">Add</ui-button>
      <ui-button @click="updateSubscription(updated)">Update</ui-button>

      <template v-if="isExist">
        <li v-for="item in subscriptions" :key="item.id">
          {{ item }}

          <ui-button @click="deleteSubscription(item.id)">Delete</ui-button>
        </li>
      </template>

      <template v-else>
        <div>No subscriptions</div>
      </template>
    </ul>
  </ui-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SubscriptionsList',
  components: {},
  data: () => ({
    newSubscription: {
      name: 'Netflix',
      description: 'New description',
      startDate: 1594483747063,
      period: 'month',
      userId: 'meEgv9mwvvbvGXrHrt6mYKZPZ343',
      isPayed: true,
      price: 10,
      currency: 'USD'
    },
    updated: {
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
  }),
  computed: {
    ...mapGetters('subscriptions', ['subscriptions', 'total']),
    isExist() {
      return Boolean(this.total)
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
