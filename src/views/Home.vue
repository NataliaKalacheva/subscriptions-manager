<template>
  <div class="home">
    <ui-icon-bubble />
    <current-date />
    <expense v-if="isOverview" :total="totalForMonth" />
    <ui-container :color="'#ECF0F8'">
      <overview-toggle>
        <template v-slot:closedContent>
          <doughnut-chart :chartData="chartData" :height="200" />
          <overview-chart :overview="overview" />
        </template>
      </overview-toggle>
    </ui-container>
  </div>
</template>

<script>
// @ts-nocheck
import { mapGetters, mapActions } from 'vuex'
import CurrentDate from '@/components/Overview/CurrentDate'
import Expense from '@/components/Overview/Expense'
import OverviewToggle from '@/components/Overview/OverviewToggle'
import OverviewChart from '@/components/Overview/OverviewChart'
import DoughnutChart from '@/components/Overview/DoughnutChart'

export default {
  name: 'Home',
  components: {
    CurrentDate,
    Expense,
    OverviewToggle,
    OverviewChart,
    DoughnutChart
  },
  watch: {
    userId() {
      this.getOverview()
    }
  },
  data: () => ({
    chartData: {
      datasets: [
        {
          data: [10, 20, 30],
          backgroundColor: 'red',
          borderWidth: 0
        }
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ['Red', 'Yellow', 'Blue']
    }
  }),
  computed: {
    ...mapGetters('auth', ['isLogin']),
    ...mapGetters('user', ['user', 'userId']),
    ...mapGetters('overview', ['overview']),
    isOverview() {
      return Object.keys(this.overview).length
    },
    currentMonth() {
      return this.$moment(new Date()).format('MMMM')
    },
    totalForMonth() {
      return this.overview[this.currentMonth].total
    }
  },
  methods: {
    ...mapActions('auth', ['signOut']),
    ...mapActions('overview', ['getOverview'])
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 40px 0 0;
}
</style>
