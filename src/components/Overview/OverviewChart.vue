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
    revertedOverview() {
      const revertedOverview = this.lastOverview.slice().reverse()
      console.log(revertedOverview)
      return this.showDetails ? revertedOverview.slice(-6) : revertedOverview.slice(-2)
    },
    labels() {
      return this.revertedOverview.map(item => item.month.slice(0, 3).toUpperCase())
    },
    totalPerMonth() {
      return this.revertedOverview.map(item => item.total)
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
      return this.revertedOverview.map(item =>
        this.currentMonth.month === item.month ? '#2879FE' : '#C2D9FF'
      )
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