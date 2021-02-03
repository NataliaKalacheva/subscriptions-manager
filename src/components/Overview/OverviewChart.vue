<template>
  <div class="overview-bars">
    <p v-if="showDetails" class="overview-bars__note">{{ curWithPrev }}</p>
    <basic-chart :chartData="chartData" :style="chartStyles" />
  </div>
</template>

<script>
import BasicChart from '@/components/Overview/BasicChart'
import { mapGetters } from 'vuex'

export default {
  name: 'OverviewChart',
  components: {
    BasicChart
  },
  props: {
    overview: {
      type: Object,
      default: () => ({})
    },
    lastOverview: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters('overview', ['showDetails']),
    chartStyles() {
      return {
        height: `180px`,
        width: this.showDetails ? `300px` : `150px`,
        position: 'relative'
      }
    },
    labels() {
      const sortLabels = Object.keys(this.overview).sort(
        (a, b) => this.overview[a].timestamp - this.overview[b].timestamp
      )
      return this.showDetails ? sortLabels.slice(-6) : sortLabels.slice(-2)
    },
    labelsToShow() {
      return this.labels.map(month => month.slice(0, 3).toUpperCase())
    },
    totalPerMonth() {
      return this.labels.map(month => this.overview[month].total)
    },
    currentMonth() {
      return this.lastOverview[0]
    },
    prevMonth() {
      return this.lastOverview[1]
    },
    curWithPrev() {
      const diff = this.currentMonth.total - this.prevMonth.total
      if (diff > 0) {
        return `You've spent $ ${diff} more than last month`
      }
      if (diff === 0) {
        return `You've spent the same as last month`
      }
      if (diff < 0) {
        return `You've spent $ ${Math.abs(diff)} less than last month`
      }
      return `Sorry, calculation failed`
    },
    colors() {
      return this.labels.map(month => (this.currentMonth.month === month ? '#2879FE' : '#C2D9FF'))
    },
    chartData() {
      return {
        labels: this.labelsToShow,
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

<style lang="scss" scoped>
.overview-bars {
  &__note {
    position: absolute;
    top: -10px;
    transform: translateY(-100%);
    margin: 0 0;
  }
}
</style>
