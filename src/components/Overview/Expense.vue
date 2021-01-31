<template>
  <div class="expense">
    <p>
      You've spent
      <span class="expense__money">
        <span class="expense__currency" :area-label="supportedCurrency.type">
          {{ supportedCurrency.icon }}
        </span>
        {{ total }}
      </span>
      this
      <span class="expense__period">{{ period }}</span>
    </p>
  </div>
</template>

<script>
// @ts-nocheck
import { supportedCurrency } from '@/constants'

export default {
  name: 'Expense',
  props: {
    total: {
      type: Number,
      default: 0
    },
    period: {
      type: String,
      default: 'month'
    }
  },
  computed: {
    supportedCurrency() {
      return supportedCurrency
    }
  }
}
</script>

<style lang="scss" scoped>
.expense {
  max-width: 768px;
  margin: 40px auto 20px;
  text-align: center;

  &__money {
    display: block;
    font-size: 2.1rem;
  }

  &__currency {
    letter-spacing: -3px;
  }
}
</style>
