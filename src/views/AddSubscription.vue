<template>
  <div class="page-subscriptions">
    <div class="page-subscriptions__content page-width">
      <breadcrumps />
      <subscriptions-header :title="title">{{ description }}</subscriptions-header>
      <ui-container>
        <subscription-form />
      </ui-container>
    </div>
  </div>
</template>

<script>
import SubscriptionsHeader from '@/components/common/SectionHeader'
import SubscriptionForm from '@/components/Subscriptions/SubscriptionForm'
import Breadcrumps from '../components/common/Breadcrumps.vue'

export default {
  name: 'Subscriptions',
  components: {
    Breadcrumps,
    SubscriptionsHeader,
    SubscriptionForm
  },
  data: () => ({
    title: 'Add Subscription',
    description:
      'Enter the details of a service you are subscribed to  so we can help you track and manage it.'
  })
}
</script>

<style lang="scss" scoped>
.page-subscriptions {
  padding: 0 $page-padding;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;

  &__content {
    position: relative;
  }

  &,
  &__content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  @include mq-max($tab) {
    padding: 0 0;
  }
}
</style>
