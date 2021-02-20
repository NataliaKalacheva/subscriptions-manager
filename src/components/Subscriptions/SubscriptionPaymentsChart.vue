<template>
  <div class="subscription-chart">
    <basic-chart :chartData="chartData" :style="chartStyles" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { supportedCurrency, barColors } from '@/constants'
import BasicChart from '@/components/common/BasicChart'

export default {
  name: 'SubscriptionPayments',
  components: {
    BasicChart
  },
  data: () => ({
    supportedCurrency,
    barColors
  }),
  computed: {
    ...mapGetters('subscriptions', ['subscriptionHistory']),
    labels() {
      const $this = this
      return this.subscriptionHistory.map(item => $this.$moment(item.date).format('MMM'))
    },
    prices() {
      return this.subscriptionHistory.map(item => item.price)
    },
    chartStyles() {
      return {
        height: `180px`,
        width: `300px`,
        position: 'relative'
      }
    },
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: '$',
            backgroundColor: this.barColors.general,
            data: this.prices
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.subscription-chart {
  & > div {
    margin: 10px auto 40px;
  }
}
</style>
