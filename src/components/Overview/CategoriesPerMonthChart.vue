<template>
  <div v-if="Boolean(overviewMonth)" class="categories-chart">
    <template v-if="detailed">
      <div class="categories-chart__header">
        <h3 class="h3">{{ overviewMonth.month }}</h3>
        <span class="categories-chart__total">
          {{ supportedCurrency.icon }} {{ overviewMonth.total }}
        </span>
      </div>
    </template>

    <div class="categories-chart__body">
      <doughnut-chart
        class="categories-chart__doughut"
        :chartData="chartData"
        :height="chartEdge"
        :width="chartEdge"
      />

      <template v-if="detailed">
        <categories-details :categories="categories" />
      </template>
    </div>
  </div>
</template>

<script>
import DoughnutChart from '@/components/Overview/DoughnutChart'
import { categoryColors, supportedCurrency } from '@/constants'
import CategoriesDetails from '@/components/Overview/CategoriesDetails'

export default {
  name: 'CategoriesPerMonth',
  components: {
    DoughnutChart,
    CategoriesDetails
  },
  props: {
    detailed: {
      type: Boolean,
      default: false
    },
    overviewMonth: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    categoryColors,
    supportedCurrency
  }),
  computed: {
    categories() {
      return this.overviewMonth.categories
    },
    labels() {
      return Object.keys(this.overviewMonth.categories)
    },
    totals() {
      return this.labels.map(category => this.categories[category].total || 0)
    },
    colors() {
      return this.labels.map(category => categoryColors[category] || 'green')
    },
    chartEdge() {
      return this.detailed ? 100 : 75
    },
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: '$',
            backgroundColor: this.colors,
            data: this.totals,
            borderWidth: 0
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.categories-chart {
  &:first-child .categories-chart__header {
    border-top: none;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding-top: 20px;
    border-top: 1px solid $color-divider-darker;

    h3 {
      margin: 0 0;
    }
  }
  &__body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__doughut {
    margin: 10px 40px 10px 0;
  }
  &__total {
    font-weight: 700;
    font-size: 1.3rem;
  }
}
</style>
