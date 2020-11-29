<template>
  <el-button class="ui-button"
             :class="{ isShadow: isShadow, isArrow: isArrow }" v-bind="$attrs" v-on="$listeners">
    <slot/>
  </el-button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    isShadow: Boolean,
    isArrow: Boolean,
  },

};
</script>

<style lang="scss" scoped>
  $primary-color: #3380FE;
  $white: #ffffff;

  .ui-button {
    & /deep/ {
      font-family: Arial, sans-serif;
    }

    &:not(.is-circle) /deep/ {
      border-radius: 13px;
    }

    &.is-round /deep/ {
      border-radius: 18px;
    }

    &.isShadow /deep/ {
      box-shadow: 0 6px 12px rgba(0, 0, 0, .16);
    }

  }

  .el-button--default /deep/  {
    background-color: $white;
    border-color: $primary-color;
    color: $primary-color;
  }
  .el-button--primary /deep/ {
    position: relative;
    background-color: $primary-color;
    border-color: $primary-color;

    .el-icon-arrow-right {
      position: absolute;
      right: 0;
      background-color: $white;
      color: $primary-color;
    }
  }
</style>
