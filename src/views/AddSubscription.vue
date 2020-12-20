<template>
  <div class="page-subscriptions">
    <div class="page-subscriptions__content">
      <subscriptions-header :title="title"> {{ description }}</subscriptions-header>
      <ui-container>
        <subscription-form />
      </ui-container>
    </div>
  </div>
</template>

<script>
import SubscriptionsHeader from '@/components/common/SectionHeader'
import SubscriptionForm from '@/components/Subscriptions/AddSubscriptionForm'

export default {
  name: 'Subscriptions',
  components: {
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
  padding: 0 $page-container-padding;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;

  &__content {
    max-width: 768px;
    margin: 0 auto;
  }
}
</style>
