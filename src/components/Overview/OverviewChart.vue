<template>
  <div>
    {{ labels }} {{ totalPerMonth }}
    <basic-chart :chartData="chartData" :options="options" />
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
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      layout: {
        padding: {
          left: 50,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      title: {
        display: true,
        text: 'Custom Chart Title'
      },
      height: 200,
      tooltips: {
        mode: 'point'
      }
    }
  }),
  computed: {
    labels() {
      return Object.keys(this.overview)
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
        labels: this.labels,
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
