<template>
  <div class="home">
    <ui-icon-bubble />
    <current-date />
    <expense v-if="isOverview" :total="totalForMonth" />
    <ui-container>
      <overview-toggle />
    </ui-container>
  </div>
</template>

<script>
// @ts-nocheck
import { mapGetters, mapActions } from 'vuex'
import CurrentDate from '@/components/Overview/CurrentDate'
import Expense from '@/components/Overview/Expense'
import OverviewToggle from '@/components/Overview/OverviewToggle'

export default {
  name: 'Home',
  components: {
    CurrentDate,
    Expense,
    OverviewToggle
  },
  watch: {
    userId() {
      this.getOverview()
    }
  },
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
