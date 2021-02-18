<template>
  <transition appear :name="transitionName">
    <div class="container" :class="containerClasses" :style="containerStyles">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UiContainer',
  props: {
    isRounded: {
      type: Boolean,
      default: true
    },
    inner: {
      type: Boolean,
      default: false
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  data: () => ({
    transitionName: 'fade'
  }),
  computed: {
    containerClasses() {
      return {
        'container--rounded': this.isRounded,
        'container--inner': this.inner,
        'container--collapsed': this.collapsed
      }
    },
    containerStyles() {
      return {
        backgroundColor: this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$container-padding: 33px;
.container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px $container-padding $container-padding * 2;
  background: white;
  color: $color-dark-blue;

  ::v-deep a {
    color: $color-dark-blue;
    &:hover,
    &:focus {
      color: $color-blue;
    }
  }

  &--inner {
    margin-left: -$container-padding;
    margin-right: -$container-padding;
  }

  &--collapsed {
    padding-bottom: 0;
  }

  &--rounded {
    border-radius: 50px 50px 0 0;
  }

  @include mq($tab) {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
  }
}
.fade-enter-active {
  transition: all 0.6s ease-in-out;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
