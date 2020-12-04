<template>
  <span class="ui-icon" :class="{ isCircle: isCircle, isShadow: isShadow }">
    <svg :width="width" :height="height" :aria-labelledby="iconName" role="presentation">
      <title :id="iconName" lang="en">{{ iconName }} icon</title>
      <g :fill="iconColor">
        <slot />
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 9
    },
    height: {
      type: [Number, String],
      default: 14
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    isCircle: {
      type: Boolean,
      default: false
    },
    isShadow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.isCircle {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
}

.isShadow {
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.16);
}
</style>
