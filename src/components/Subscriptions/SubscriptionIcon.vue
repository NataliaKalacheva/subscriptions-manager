<template>
  <div class="subscription-icon" :class="iconClasses" v-bind="$attrs">
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
    },
    isSmall: {
      type: Boolean,
      default: false
    },
    isXs: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconTitle() {
      const iconTitle = this.title.split(' ')
      return iconTitle
        .map(item => item[0])
        .join('')
        .toUpperCase()
    },
    iconClasses() {
      return {
        'is-small': this.isSmall,
        'is-xs': this.isXs
      }
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
  font-size: 2rem;
  overflow: hidden;

  &.is-small {
    width: 48px;
    height: 48px;
    font-size: 1.1rem;
  }

  &.is-xs {
    width: 34px;
    height: 34px;
    font-size: 1rem;
    border-radius: 10px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
