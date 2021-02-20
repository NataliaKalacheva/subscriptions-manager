<template>
  <li class="payment-details">
    <div class="payment-details__icon">
      <subscription-icon :title="name" :icon="payment.icon || null" size="small" />
    </div>
    <div class="payment-details__info">
      <div class="payment-details__title">
        <span class="payment-details__date">
          {{ payment.date | moment('DD MMMM YYYY') }}
        </span>
        <h5 class="payment-details__name">
          {{ name }}
        </h5>
      </div>
      <div class="payment-details__price">-{{ payment.currency.icon }}{{ payment.price }}</div>
    </div>
  </li>
</template>

<script>
import { supportedCurrency } from '@/constants'
import SubscriptionIcon from '@/components/Subscriptions/SubscriptionIcon'

export default {
  name: 'SubscriptionPayments',
  components: {
    SubscriptionIcon
  },
  props: {
    payment: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data: () => ({
    supportedCurrency
  })
}
</script>

<style lang="scss" scoped>
.payment-details {
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
    margin: 10px 0 0;
    font-size: 0.9rem;
    letter-spacing: 0.27px;
  }

  &__date {
    font-size: 0.8rem;
    letter-spacing: -0.21px;
    color: $color-text-grey;
  }

  &__price {
    margin-right: 40px;
    font-size: 0.9rem;
    letter-spacing: 0.27px;
    color: $color-danger;
  }

  &__link {
    text-decoration: none;
  }
}
</style>
