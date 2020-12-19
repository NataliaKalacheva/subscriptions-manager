<template>
  <ui-container>
    <ul>
      <ui-button @click="getSubscriptions">Get all subscriptions</ui-button>

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
  data: () => ({}),
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
