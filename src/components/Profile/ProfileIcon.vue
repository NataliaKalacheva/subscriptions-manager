<template>
  <div class="profile-image" :class="iconClasses" v-bind="$attrs">
    <img v-if="icon" :src="icon" :alt="iconTitle" />
    <span v-else>{{ iconTitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProfileIcon',
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'default'
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
      switch (this.size) {
        case 'small':
          return 'is-small'
        case 'xs':
          return 'is-xs'
        case 'large':
          return 'is-large'
        default:
          return 'default'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 77px;
  height: 77px;
  margin-left: 10px;
  border-radius: 50%;
  border: 4px solid $color-white;
  box-shadow: 0 2px 9px $color-text-grey;
  background: $color-light-grey;
  box-sizing: border-box;
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
  }

  &.is-large {
    width: 111px;
    height: 111px;
    font-size: 2rem;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
