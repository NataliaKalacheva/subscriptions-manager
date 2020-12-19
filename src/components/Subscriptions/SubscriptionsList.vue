<template>
  <ui-container>
    <ul>
      <ui-button @click="getSubscriptions">Get all subscriptions</ui-button>
      <template v-if="isExist">
        {{ subscriptions }}
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
  computed: {
    ...mapGetters('subscriptions', ['subscriptions']),
    isExist() {
      return Boolean(Object.keys(this.subscriptions).length)
    }
  },
  methods: {
    ...mapActions('subscriptions', ['getSubscriptions'])
  }
}
</script>
