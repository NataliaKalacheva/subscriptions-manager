<template>
  <div class="subscriptions-header">
    <h1 class="subscriptions-header__title">{{ title }}</h1>
    <router-link tag="div" :to="{ name: 'AddSubscription' }">
      <ui-button :isShadow="true" size="mini" type="info" circle>
        <ui-icon-plus />
      </ui-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionsHeader',
  data: () => ({
    title: 'Subscriptions'
  })
}
</script>

<style lang="scss" scoped>
.subscriptions-header {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    margin: 0 0;
    font-size: 26px;
    letter-spacing: -0.98;
  }
}
</style>
