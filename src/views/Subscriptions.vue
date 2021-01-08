<template>
  <div class="page-subscriptions">
    <div class="page-subscriptions__header">
      <subscriptions-header />
    </div>

    <upcoming />
    <subscriptions-list />
    <empty-message />
  </div>
</template>

<script>
import SubscriptionsHeader from '@/components/Subscriptions/SubscriptionsAllHeader'
import Upcoming from '@/components/Subscriptions/Upcoming'
import SubscriptionsList from '@/components/Subscriptions/SubscriptionsList'
import EmptyMessage from '@/components/Subscriptions/EmptyMessage'

export default {
  name: 'Subscriptions',
  components: {
    SubscriptionsHeader,
    SubscriptionsList,
    Upcoming,
    EmptyMessage
  }
}
</script>

<style lang="scss" scoped>
.page-subscriptions {
  padding: 0 $page-container-padding;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: $color-light-grey;
  color: $color-dark-blue;

  &__header {
    position: relative;
    max-width: 768px;
    margin: 0 auto;
  }
}
</style>
