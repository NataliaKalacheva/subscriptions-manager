<template>
  <li class="subscriptions-item">
    <div class="subscriptions-item__icon">
      <subscription-icon :title="item.name" is-small />
    </div>
    <div class="subscriptions-item__info">
      <div class="subscriptions-item__title">
        <h5 class="subscriptions-item__name">{{ item.name }}</h5>
        <span class="subscriptions-item__date">
          {{ item.startDate | moment('DD MMMM YYYY') }}
        </span>
      </div>
      <div class="subscriptions-item__price">{{ item.currency }} {{ item.price }}</div>
    </div>
  </li>
</template>

<script>
import SubscriptionIcon from '@/components/Subscriptions/SubscriptionIcon'

export default {
  name: 'SubscriptionsItem',
  components: {
    SubscriptionIcon
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.subscriptions-item {
  display: flex;
  margin-bottom: 20px;

  &__icon {
    flex-basis: 52px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    margin-left: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid $color-divider;
  }

  &__name {
    margin: 0 0 10px;
    font-size: 0.9rem;
    letter-spacing: 0.27px;
  }

  &__date {
    font-size: 0.8rem;
    letter-spacing: -0.21px;
    color: $color-text-grey;
  }

  &__price {
    font-size: 0.9rem;
    letter-spacing: 0.27px;
  }
}
</style>
