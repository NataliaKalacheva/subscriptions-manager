<template>
  <div class="page-subscriptions">
    <div class="page-subscriptions__content page-width">
      <subscription-header
        v-if="currentSubscription.id"
        :title="currentSubscription.name"
        :id="currentSubscription.id"
        :icon="currentSubscription.icon"
      >
        <p>Please, change details which you want to update.</p>
      </subscription-header>
      <ui-container>
        <edit-form :subscription-data="currentSubscription" />
      </ui-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SubscriptionHeader from '@/components/Subscriptions/SubscriptionHeader'
import EditForm from '@/components/Subscriptions/SubscriptionForm'

export default {
  name: 'SubscriptionInfo',
  components: {
    SubscriptionHeader,
    EditForm
  },
  created() {
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
    position: relative;
  }
  @include mq-max($tab) {
    padding: 0 0;
  }
}
</style>
