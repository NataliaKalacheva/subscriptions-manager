<template>
  <div class="container" :class="containerClasses" :style="containerStyles">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'UiContainer',
  props: {
    isRounded: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    containerClasses() {
      return {
        'is-rounded': this.isRounded,
      };
    },
    containerStyles() {
      return {
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    max-width: 768px;
    margin: 0 auto;
    padding: 15px 33px;
    background: white;
    color: #042C5C;

    &.is-rounded {
      border-radius: 50px 50px 0 0;
    }
  }
</style>
