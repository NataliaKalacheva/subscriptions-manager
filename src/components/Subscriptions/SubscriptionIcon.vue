<template>
  <div class="subscription-icon">
    <img v-if="icon" :src="icon" :alt="iconTitle" />
    <span v-else>{{ iconTitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionHeader',
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    iconTitle() {
      const iconTitle = this.title.split(' ')
      return iconTitle
        .map(item => item[0])
        .join('')
        .toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.subscription-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 72px;
  height: 72px;
  border-radius: 15px;
  background: $color-light-grey;
  color: $color-blue;
  font-weight: 900;
  font-size: 36px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
