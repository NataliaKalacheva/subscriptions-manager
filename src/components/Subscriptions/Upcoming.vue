<template>
  <div class="upcoming">
    <h3 class="h3">{{ title }}</h3>
    <template v-if="isExist">
      <carousel :per-page="2.3" :pagination-enabled="false">
        <slide data-index="0" data-name="MySlideName" v-for="item in upcomingList" :key="item.id">
          <upcoming-item :item="item" />
        </slide>
      </carousel>
    </template>
    <template v-else>
      All subscriptions is up to date!
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UpcomingItem from '@/components/Subscriptions/UpcomingItem'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Upcoming',
  components: { UpcomingItem, Carousel, Slide },
  data: () => ({
    title: 'Upcoming'
  }),
  computed: {
    ...mapGetters('subscriptions', ['subscriptions']),
    isExist() {
      return Boolean(this.upcomingList.length)
    },
    upcomingList() {
      return this.subscriptions.filter(item => this.isUpcoming(item.dueDate))
    }
  },
  methods: {
    isUpcoming(date) {
      return (
        this.$moment(date).diff(this.$moment(), 'd') < 30 &&
        this.$moment(date).diff(this.$moment(), 'd') >= 0
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.upcoming {
  max-width: 768px;
  margin: 0 auto;

  @include mq-max($tab) {
    margin-right: -20px;
  }
}
</style>
