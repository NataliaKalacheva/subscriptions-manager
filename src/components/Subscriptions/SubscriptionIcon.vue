<template>
  <div class="subscription-icon">
    <img :src="icon" :alt="title" />
  </div>
</template>

<script>
export default {
  name: 'SubscriptionHeader',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.subscription-icon {
  width: 72px;
  height: 72px;
  border-radius: 5px;
  background: $color-grey;
}
</style>
