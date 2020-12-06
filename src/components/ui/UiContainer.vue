<template>
  <div class="container" :class="containerClasses">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiContainer',
  props: {
    isRounded: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    containerClasses() {
      return {
        'is-rounded': this.isRounded
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 33px;
  background: white;
  color: $color-dark-blue;

  &.is-rounded {
    border-radius: 50px 50px 0 0;
  }

  @include mq($tab) {
    width: 768px;
    margin: 0 auto;
  }
}
</style>
