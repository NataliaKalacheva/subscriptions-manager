<template>
  <div class="page-subscriptions page-width">
    <div class="page-subscriptions__header">
      <subscriptions-header />
    </div>
    <upcoming />
    <subscriptions-list v-if="isExist" />
    <empty-message v-else />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  },
  mounted() {
    this.getSubscriptions()
  },
  computed: {
    ...mapGetters('subscriptions', ['total']),
    isExist() {
      return Boolean(this.total)
    }
  },
  methods: {
    ...mapActions('subscriptions', ['getSubscriptions'])
  }
}
</script>

<style lang="scss" scoped>
.page-subscriptions {
  position: relative;
  padding: 0 $page-padding;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: $color-light-grey;
  color: $color-dark-blue;

  &__header {
    position: relative;
  }

  @include mq-max($tab) {
    padding: 0 0;

    &__header,
    .upcoming {
      padding: 0 $page-padding;
    }
  }
}
</style>
