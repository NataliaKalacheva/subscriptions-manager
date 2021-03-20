<template>
  <div class="home">
    <ui-icon-bubble />
    <current-date />
    <expense v-if="isOverview" :total="currentMonth.total" />
    <ui-container :color="'#ECF0F8'" collapsed>
      <template v-if="isOverview">
        <overview-toggle>
          <template v-slot:introContent>
            <categories-per-month v-if="!showDetails" :overviewMonth="currentMonth" />
            <overview-chart :lastOverview="lastSixMonths" />
          </template>
          <template v-slot:closedContent>
            <template v-for="item in lastSixMonths">
              <categories-per-month :key="item.month" :overviewMonth="item" detailed />
            </template>
          </template>
        </overview-toggle>
      </template>
      <template v-else>
        <overview-empty />
      </template>
      <ui-container inner>
        <upgrade-banner />
        <discount-banner />
      </ui-container>
    </ui-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CurrentDate from '@/components/Overview/CurrentDate'
import Expense from '@/components/Overview/Expense'
import OverviewToggle from '@/components/Overview/OverviewToggle'
import OverviewChart from '@/components/Overview/OverviewChart'
import OverviewEmpty from '@/components/Overview/OverviewEmpty'
import CategoriesPerMonth from '@/components/Overview/CategoriesPerMonthChart'
import UpgradeBanner from '@/components/Promo/UpgradeBanner'
import DiscountBanner from '@/components/Promo/DiscountBanner'

export default {
  name: 'Home',
  components: {
    CurrentDate,
    Expense,
    OverviewToggle,
    OverviewChart,
    OverviewEmpty,
    CategoriesPerMonth,
    UpgradeBanner,
    DiscountBanner
  },
  watch: {
    userId() {
      this.getOverview()
    }
  },
  created() {
    this.getOverview()
  },
  computed: {
    ...mapGetters('user', ['user', 'userId']),
    ...mapGetters('auth', ['isLogin']),
    ...mapGetters('overview', ['showDetails', 'lastSixMonths']),
    isOverview() {
      return this.lastSixMonths.length
    },
    currentMonth() {
      const [firstMonth] = this.lastSixMonths
      return firstMonth
    },
    prevMonth() {
      const [, secondMonth] = this.lastSixMonths
      return secondMonth
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
  min-height: 100vh;
  padding: 40px 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
