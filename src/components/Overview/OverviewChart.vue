<template>
  <div class="overview-bars">
    <p v-if="showDetails" class="overview-bars__note">
      You've spent {{ diff.total }} <span :class="diff.class">{{ diff.note }}</span>
      <span class="note-grey"> than last month</span>
    </p>
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
    diff() {
      const diff = this.currentMonth.total - this.prevMonth.total
      const diffObj = {}

      if (diff > 0) {
        diffObj.total = `$${diff}`
        diffObj.note = `more`
        diffObj.class = `note-danger`
      }
      if (diff === 0) {
        diffObj.total = ''
        diffObj.note = `no more, no less`
        diffObj.class = `note-info`
      }
      if (diff < 0) {
        diffObj.total = `$ ${Math.abs(diff)}`
        diffObj.note = `less`
        diffObj.class = `note-info`
      }
      return diffObj
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
  position: relative;
  padding-top: 30px;
  &__note {
    position: absolute;
    top: 0;
    width: 100%;
    margin: 0 0;
    text-align: center;
    color: $color-text-grey;
    font-size: 0.7rem;
    font-weight: 500;
    transform: translateY(-100%);
  }
  .note-grey {
    color: $color-grey;
  }

  .note-danger {
    color: $color-danger;
  }

  .note-info {
    color: $color-blue;
  }
}
</style>
