<template>
  <div v-if="Boolean(overviewMonth)" class="categories-chart">
    <doughnut-chart :chartData="chartData" :height="150" :width="150" />
  </div>
</template>

<script>
import DoughnutChart from '@/components/Overview/DoughnutChart'
import { categoryColors } from '@/constants'

export default {
  name: 'CategoriesPerMonth',
  components: {
    DoughnutChart
  },
  props: {
    overviewMonth: {
      type: Object,
      default: () => {}
    }
  },
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
    categoryColors() {
      return categoryColors
    },
    colors() {
      return this.labels.map(category => {
        if (categoryColors[category]) {
          return categoryColors[category]
        }
        return 'green'
      })
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

<style scoped>
.categories-chart {
  padding: 0 20px;
}
</style>
