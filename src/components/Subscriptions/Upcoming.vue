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
import { mapActions } from 'vuex'
import UpcomingItem from '@/components/Subscriptions/UpcomingItem'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Upcoming',
  components: { UpcomingItem, Carousel, Slide },
  data: () => ({
    title: 'Upcoming',
    subscriptions: [
      // temporary for ui
      {
        id: 'DFGHJKL54567GHJKL',
        name: 'Netflix',
        description: 'Some description',
        startDate: 1594483747063,
        dueDate: 1611939600000,
        period: 'month',
        userId: '1Bks9Pzp5hZML8eGev7cA18UzmQ2',
        isPayed: true,
        price: 10,
        currency: 'USD'
      },
      {
        id: 'sdsdfghjhgfdsa',
        name: 'Netflix',
        description: 'UPDATED',
        startDate: 1594483747063,
        dueDate: 1612026000000, // 31 jan
        period: 'month',
        userId: 'meEgv9mwvvbvGXrHrt6mYKZPZ343',
        isPayed: true,
        price: 10,
        currency: 'USD'
      },
      {
        id: 'tfgyhujikolp;sdsd',
        name: 'Netflix',
        description: 'Some description',
        startDate: 1594483747063,
        dueDate: 1611939600000,
        period: 'month',
        userId: '1Bks9Pzp5hZML8eGev7cA18UzmQ2',
        isPayed: true,
        price: 10,
        currency: 'USD'
      },
      {
        id: 'LUAkO7jnWq7lYtkU4fDD',
        name: 'Netflix',
        description: 'UPDATED',
        startDate: 1594483747063,
        dueDate: 1609833763,
        period: 'month',
        userId: 'fghjkfghjkl',
        isPayed: true,
        price: 10,
        currency: 'USD'
      }
    ]
  }),
  computed: {
    isExist() {
      return Boolean(this.upcomingList.length)
    },
    upcomingList() {
      return this.subscriptions.filter(item => this.isUpcoming(item.dueDate))
    }
  },
  methods: {
    ...mapActions('subscriptions', [
      'getSubscriptions',
      'addSubscription',
      'deleteSubscription',
      'updateSubscription'
    ]),
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
