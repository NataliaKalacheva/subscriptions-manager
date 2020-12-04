<template>
  <el-button class="ui-button" :class="buttonClasses"
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
  },
  computed: {
    buttonClasses() {
      return {
        'is-shadow': this.isShadow,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
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

    &.is-shadow /deep/ {
      box-shadow: 0 6px 12px rgba(0, 0, 0, .16);
    }

    &.is-disabled /deep/ {
      background-color: $color-grey;
      border-color: $color-grey;
      .ui-icon {
        color: $color-grey;
      }
    }

    /deep/ .ui-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      background: $color-white;
      color: $color-blue;
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }

  .el-button--default /deep/  {
    background-color: $color-white;
    border-color: $color-blue;
    color: $color-blue;
  }
  .el-button--primary /deep/ {
    position: relative;
    background-color: $color-blue;
    border-color: $color-blue;

    .el-icon-arrow-right {
      position: absolute;
      right: 0;
      background-color: $color-white;
      color: $color-blue;
    }
  }
  .el-button--info /deep/ {
    background-color: $color-white;
    border-color: $color-white;
    color: $color-text-grey;
  }
  .el-button--info.is-plain /deep/ {
    background-color: $color-white;
    border-color: $color-text-grey;
    color: $color-text-grey;
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
