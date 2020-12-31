<template>
  <div class="breadcrumps">
    <router-link :to="{ name: redirectLink }">
      <ui-icon-base><ui-arrow-left /></ui-icon-base>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumps',
  computed: {
    redirectLink() {
      const type = this.$route.path

      switch (type) {
        case '/subscription':
          return 'Subscriptions'
        case '/add-subscription':
          return 'Subscriptions'
        default:
          return 'Home'
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
