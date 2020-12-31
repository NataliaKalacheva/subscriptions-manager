<template>
  <div class="page-subscriptions">
    <div class="page-subscriptions__content">
      <subscriptions-header />
    </div>
  </div>
</template>

<script>
import SubscriptionsHeader from '@/components/Subscriptions/SubscriptionsAllHeader'

export default {
  name: 'Subscriptions',
  components: {
    SubscriptionsHeader
  }
}
</script>

<style lang="scss" scoped>
.page-subscriptions {
  padding: 0 $page-container-padding;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  background-color: $color-light-grey;
  color: $color-dark-blue;

  &__content {
    position: relative;
    max-width: 768px;
    margin: 0 auto;
  }
}
</style>
