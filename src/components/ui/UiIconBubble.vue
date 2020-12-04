<template>
  <svg
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    :class="iconClasses"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <ellipse cx="155" cy="155" :fill="iconColor" rx="155" ry="155" />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'bubble'
    },
    width: {
      type: [Number, String],
      default: 310
    },
    height: {
      type: [Number, String],
      default: 310
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    isTransparent: {
      type: Boolean,
      default: true
    },
    topPosition: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    iconClasses() {
      return {
        'is-transparent': this.isTransparent,
        'top-position': this.topPosition
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.is-transparent {
  opacity: 0.1;
}

.top-position {
  position: fixed;
  top: -150px;
  right: -100px;
}
</style>
