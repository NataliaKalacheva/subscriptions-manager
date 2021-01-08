<template>
  <div class="breadcrumps">
    <router-link :to="{ path: redirectLink }">
      <ui-icon-base><ui-arrow-left /></ui-icon-base>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumps',
  computed: {
    redirectLink() {
      const type = this.$route.name

      switch (type) {
        case 'SubscriptionInfo':
        case 'AddSubscription':
          return '/subscriptions'
        case 'EditSubscription':
          return `/subscription/${this.$route.params.subId}`
        default:
          return '/'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumps {
  position: absolute;
  top: 25px;
  left: 25px;
}
</style>
