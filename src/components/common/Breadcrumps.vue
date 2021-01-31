<template>
  <div class="breadcrumps">
    <router-link :to="{ path: redirectLink }">
      <ui-arrow dir="left" />
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
        case 'EditProfile':
          return `/settings`
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
