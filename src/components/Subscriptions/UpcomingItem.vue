<template>
  <div class="upcoming-item">
    <div class="upcoming-item__header">
      <router-link :to="routerLink" class="upcoming-item__link">
        <subscription-icon :title="item.name" size="xs" />
      </router-link>
      <span class="upcoming-item__price">{{ item.currency }} {{ item.price }}</span>
    </div>
    <div class="upcoming-item__info">
      <h5 class="upcoming-item__name">
        <router-link :to="routerLink" class="upcoming-item__link">
          {{ item.name }}
        </router-link>
      </h5>
      <span class="upcoming-item__type">
        App type
      </span>
      <subscription-countdown :daysLeft="relatedTime" />
    </div>
  </div>
</template>

<script>
import SubscriptionIcon from '@/components/Subscriptions/SubscriptionIcon'
import SubscriptionCountdown from '@/components/Subscriptions/SubscriptionCountdown'

export default {
  name: 'UpcomingItem',
  components: {
    SubscriptionIcon,
    SubscriptionCountdown
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    routerLink() {
      return { name: 'SubscriptionInfo', params: { subId: this.item.id } }
    },
    relatedTime() {
      return this.$moment(this.item.dueDate).diff(this.$moment(), 'd')
    }
  }
}
</script>

<style lang="scss" scoped>
.upcoming-item {
  margin-right: 20px;
  padding: 20px;
  background: $color-white;
  border-radius: 27px;
  color: $color-dark-blue;

  a {
    color: $color-dark-blue;
  }

  &__link {
    display: inline-block;
    text-decoration: none;
  }

  &__name {
    margin: 10px 0 0;
    font-size: 0.9rem;
    letter-spacing: 0.23px;
  }

  &__type {
    font-size: 0.8rem;
    color: $color-text-grey;
    letter-spacing: 0.18px;
  }

  &__price {
    vertical-align: top;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 2.5;
    letter-spacing: 0.3px;
  }

  ::v-deep .subscription-icon {
    margin-right: 20px;
  }
}
</style>
