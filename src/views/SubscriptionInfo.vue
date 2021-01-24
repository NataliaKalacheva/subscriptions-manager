<template>
  <div class="page-subscriptions" v-if="currentSubscription.id">
    <div class="page-subscriptions__content">
      <subscription-header
        :title="currentSubscription.name"
        :id="currentSubscription.id"
        :icon="currentSubscription.icon"
      >
        <p>{{ currentSubscription.description }}</p>
        <div class="subscription-header__date">
          {{ currentSubscription.startDate | moment('DD MMMM YYYY') }}
        </div>
      </subscription-header>
      <ui-container> CONTENT HERE for {{ currentSubscription }}</ui-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SubscriptionHeader from '@/components/Subscriptions/SubscriptionHeader'

export default {
  name: 'SubscriptionInfo',
  components: {
    SubscriptionHeader
  },
  mounted() {
    this.getSubscriptionById(this.$route.params.subId)
  },
  computed: {
    ...mapGetters('subscriptions', ['currentSubscription'])
  },
  methods: {
    ...mapActions('subscriptions', ['getSubscriptionById'])
  }
}
</script>

<style lang="scss" scoped>
.page-subscriptions {
  &__content {
    max-width: 768px;
    margin: 0 auto;
    position: relative;
  }
}
</style>
