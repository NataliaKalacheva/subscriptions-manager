<template>
  <div class="overview--empty">
    <p>
      Not enought data. Please,
      <router-link :to="{ name: 'AddSubscription' }">add more subscriptions</router-link>
      .
    </p>
  </div>
</template>

<style lang="scss" scoped>
.overview--empty {
  margin: 20px auto 50px;
  text-align: center;
}
</style>
