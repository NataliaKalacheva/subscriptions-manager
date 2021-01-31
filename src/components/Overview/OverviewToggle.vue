<template>
  <div class="overview">
    <h3 class="h3 overview__toggle">
      {{ title }}
      <ui-button class="overview__toggle-btn" type="info"><ui-arrow dir="down"/></ui-button>
    </h3>
  </div>
</template>

<script>
// @ts-nocheck

export default {
  name: 'OverviewToggle',
  components: {},
  data: () => ({
    title: 'Overview'
  })
}
</script>

<style lang="scss" scoped>
.overview {
  &__toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__toggle-btn {
    max-height: 32px;
  }
}
</style>
