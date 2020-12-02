<template>
  <el-button class="ui-button" :class="{ isShadow: isShadow, isArrow: isArrow }"
             v-bind="$attrs" v-on="$listeners">
    <slot/>
  </el-button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    isShadow: {
      type: Boolean,
      default: false,
    },
    isArrow: {
      type: Boolean,
      default: false,
    },
  },

};
</script>

<style lang="scss" scoped>
  $primary-color: #3380FE;
  $white: #ffffff;
  $grey: #C8C8C8;
  $info-color: rgb(119,134,158);

  .ui-button {
    & /deep/ {
      margin: 10px;
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

    &.is-disabled /deep/ {
      background-color: $grey;
      border-color: $grey;
      .ui-icon {
        color: $grey;
      }
    }

    /deep/ .ui-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      background: $white;
      color: $primary-color;
      border-radius: 50%;
      transform: translateY(-50%);
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
  .el-button--info /deep/ {
    background-color: $white;
    border-color: $white;
    color: $info-color;
  }
  .el-button--info.is-plain /deep/ {
    background-color: $white;
    border-color: $info-color;
    color: $info-color;
  }
  .el-button--large /deep/ {
    width: 223px;
    min-height: 57px;
    padding: 12px 45px;
  }
  .el-button--medium /deep/ {
    width: 139px;
    min-height: 47px;
  }
  .el-button--small /deep/ {
    padding: 12px 68px;
  }
  .el-button--mini /deep/ {
    padding: 6px;
    min-width: 32px;
    min-height: 32px;
  }
</style>
