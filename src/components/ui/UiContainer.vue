<template>
  <transition :name="transitionName">
    <div v-if="show" class="container" :class="containerClasses">
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
    }
  },
  data: () => ({
    transitionName: 'fade',
    show: false
  }),
  computed: {
    containerClasses() {
      return {
        'is-rounded': this.isRounded
      }
    }
  },
  watch: {
    $route: {
      handler: 'activateTransition',
      immediate: true
    }
  },
  methods: {
    activateTransition() {
      setTimeout(() => {
        this.show = true
      }, 0)
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

  ::v-deep a {
    color: $color-dark-blue;
    &:hover,
    &:focus {
      color: $color-blue;
    }
  }

  &.is-rounded {
    border-radius: 50px 50px 0 0;
  }

  @include mq($tab) {
    max-width: 768px;
    width: 90%;
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
