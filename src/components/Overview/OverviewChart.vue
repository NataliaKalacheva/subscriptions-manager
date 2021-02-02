<template>
  <div>
    <basic-chart :chartData="chartData" :height="200" />
  </div>
</template>

<script>
import BasicChart from '@/components/Overview/BasicChart'

export default {
  name: 'OverviewChart',
  components: {
    BasicChart
  },
  props: {
    overview: {
      type: Object,
      default: null
    }
  },
  computed: {
    labels() {
      return Object.keys(this.overview)
    },
    uppercasedLabels() {
      return this.labels.map(month => month.toUpperCase())
    },
    totalPerMonth() {
      return this.labels.map(month => this.overview[month].total)
    },
    currentMonth() {
      return this.$moment(new Date()).format('MMMM')
    },
    colors() {
      return this.labels.map(month => (this.currentMonth === month ? '#2879FE' : '#C2D9FF'))
    },
    chartData() {
      return {
        labels: this.uppercasedLabels,
        datasets: [
          {
            label: '$',
            backgroundColor: this.colors,
            data: this.totalPerMonth
          }
        ]
      }
    }
  }
}
</script>
