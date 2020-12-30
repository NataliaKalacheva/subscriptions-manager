<template>
  <div class="subscription-header">
    <ui-icon-bubble />
    <subscription-icon :title="title" />
    <h1 class="subscription-header__title">{{ title }}</h1>
    <slot />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SubscriptionIcon from '@/components/Subscriptions/SubscriptionIcon'

export default {
  name: 'SubscriptionHeader',
  components: {
    SubscriptionIcon
  },
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

<style lang="scss" scoped>
.subscription-header {
  margin: 20px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  &__title {
    margin: 0 0;
    font-size: 26px;
    letter-spacing: -0.98;
  }
}
</style>
