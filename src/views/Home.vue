<template>
  <div class="home">
    <ui-icon-bubble />
    <expense v-if="isOverview" :total="totalForMonth" />
  </div>
</template>

<script>
// @ts-nocheck
import { mapGetters, mapActions } from 'vuex'
import Expense from '@/components/Overview/Expense'

export default {
  name: 'Home',
  components: {
    Expense
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
