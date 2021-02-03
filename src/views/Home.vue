<template>
  <div class="home">
    <ui-icon-bubble />
    <current-date />
    <expense v-if="isOverview" :total="currentMonth.total" />
    <ui-container :color="'#ECF0F8'">
      <overview-toggle>
        <template v-slot:introContent>
          <categories-per-month v-if="!showDetails" :overviewMonth="currentMonth" />
          <overview-chart :overview="overview" :lastOverview="lastSixMonths" />
        </template>
        <template v-slot:closedContent>
          <categories-per-month
            v-for="item in lastSixMonths"
            :key="item.month"
            :overviewMonth="item"
          />
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
import CategoriesPerMonth from '@/components/Overview/CategoriesPerMonthChart'

export default {
  name: 'Home',
  components: {
    CurrentDate,
    Expense,
    OverviewToggle,
    OverviewChart,
    CategoriesPerMonth
  },
  watch: {
    userId() {
      this.getOverview()
    }
  },
  computed: {
    ...mapGetters('auth', ['isLogin']),
    ...mapGetters('user', ['user', 'userId']),
    ...mapGetters('overview', ['overview', 'showDetails', 'lastSixMonths']),
    isOverview() {
      return this.lastSixMonths.length
    },
    currentMonth() {
      return this.lastSixMonths[0]
    },
    prevMonth() {
      return this.lastSixMonths[1]
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
