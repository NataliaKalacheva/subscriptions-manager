<template>
  <div class="section-header">
    <ui-icon-bubble />
    <h1 class="section-header__title">{{ title }}</h1>
    <slot />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SubscriptionHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions('subscriptions', ['updateSubscription'])
  }
}
</script>
