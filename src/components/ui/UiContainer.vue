<template>
  <div class="container" :class="{ isRounded: isRounded }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'UiContainer',
  props: {
    isRounded: Boolean,
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

    &.isRounded {
      border-radius: 50px 50px 0 0;
    }
  }
</style>
