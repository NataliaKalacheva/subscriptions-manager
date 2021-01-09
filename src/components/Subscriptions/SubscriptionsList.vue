<template>
  <div class="subscriptions-all">
    <ui-container>
      <h3 class="h3">{{ title }}</h3>
      <ul class="subscriptions-all__list">
        <subscriptions-item v-for="item in subscriptions" :key="item.id" :item="item" />
      </ul>
    </ui-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SubscriptionsItem from '@/components/Subscriptions/SubscriptionsItem'

export default {
  name: 'SubscriptionsList',
  components: {
    SubscriptionsItem
  },
  data: () => ({
    title: 'All subscriptions'
  }),
  computed: {
    ...mapGetters('subscriptions', ['subscriptions'])
  }
}
</script>

<style lang="scss" scoped>
.subscriptions-all {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;

  ::v-deep .container {
    height: calc(100vh - 400px);
    padding-right: 0;
  }

  &__list {
    margin: 0 0;
    padding: 0 0 0 10px;
    list-style: none;
  }
}
</style>
