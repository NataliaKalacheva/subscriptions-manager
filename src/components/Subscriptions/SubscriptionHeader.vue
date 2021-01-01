<template>
  <div class="subscription-header">
    <ui-icon-bubble />
    <breadcrumps />
    <subscription-icon :title="title" />
    <h1 class="subscription-header__title">{{ title }}</h1>
    <slot />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Breadcrumps from '@/components/common/Breadcrumps'
import SubscriptionIcon from '@/components/Subscriptions/SubscriptionIcon'

export default {
  name: 'SubscriptionHeader',
  components: {
    Breadcrumps,
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
    margin: 0 0 5px;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.39px;
  }

  &__date {
    margin: 30px auto 0;
    padding: 5px 20px;
    font-size: 0.8rem;
    letter-spacing: -0.21px;
    background: rgba($color-white, 0.2);
    border-radius: 15px;
  }

  ::v-deep .subscription-icon {
    margin: 20px 0;
  }
}
</style>
