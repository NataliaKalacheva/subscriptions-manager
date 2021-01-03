<template>
  <div class="upcoming">
    <h3 class="h3">{{ title }}</h3>
    <template v-if="isExist">
      <carousel :per-page="2.3" :pagination-enabled="false">
        <slide data-index="0" data-name="MySlideName" v-for="item in subscriptions" :key="item.id">
          <upcoming-item :item="item" />
        </slide>
      </carousel>
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
        id: 'LUAkO7jnWq7lYtkU4fDD',
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
        id: 'LUAkO7jnWq7lYtkU4fDD',
        name: 'Netflix',
        description: 'UPDATED',
        startDate: 1594483747063,
        dueDate: 1612026000000, // 31 jan
        period: 'month',
        userId: 'meEgv9mwvvbvGXrHrt6mYKZPZ343',
        isPayed: true,
        price: 10,
        currency: 'USD'
      }
    ]
  }),
  computed: {
    //  ...mapGetters('subscriptions', ['subscriptions', 'total']),
    isExist() {
      // return Boolean(this.total)
      return true
    },
    upcomingList() {
      return this.subscriptions
    },
    momentCheck() {
      console.log(this.$moment)
      this.$moment.updateLocale('en', {
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          w: 'a week',
          ww: '%d weeks',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        }
      })
      return this.$moment(this.subscriptions[0].dueDate).fromNow(true)
    }
  },
  methods: {
    ...mapActions('subscriptions', [
      'getSubscriptions',
      'addSubscription',
      'deleteSubscription',
      'updateSubscription'
    ])
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
