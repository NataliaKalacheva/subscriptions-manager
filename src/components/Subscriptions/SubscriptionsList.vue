<template>
  <div class="subscriptions-all">
    <ui-container :class="listClasses">
      <div class="subscriptions-all__drag-up" @click="dragUpSubscriptions">
        <ui-icon-drag-up></ui-icon-drag-up>
      </div>
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
    title: 'All subscriptions',
    isExpanded: false
  }),
  computed: {
    ...mapGetters('subscriptions', ['subscriptions']),
    listClasses() {
      return {
        'is-expanded': this.isExpanded
      }
    }
  },
  methods: {
    dragUpSubscriptions() {
      this.isExpanded = !this.isExpanded
    }
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
    transition: height 0.4s linear;

    &.is-expanded {
      height: 100vh;
      overflow-y: auto;
      transition: height 0.4s linear;
    }
  }

  &__drag-up {
    width: 100%;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }

  &__list {
    margin: 0 0;
    padding: 0 0 0 10px;
    list-style: none;
  }
}
</style>
