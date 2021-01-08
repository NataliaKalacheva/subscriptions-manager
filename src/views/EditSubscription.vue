<template>
  <div class="page-subscriptions">
    <div class="page-subscriptions__content">
      <subscription-header :title="currentSubscription.name" :id="currentSubscription.id">
        <p>Please, change details which you want to update.</p>
      </subscription-header>
      <ui-container>
        CONTENT HERE for {{ currentSubscription.id }}
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
