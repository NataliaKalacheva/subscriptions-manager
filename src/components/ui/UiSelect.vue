<template>
  <el-select class="ui-select" :style="selectStyles" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-select>
</template>

<script>
export default {
  name: 'UiSelect',
  props: {
    selectWidth: {
      type: String,
      default: '250px'
    },
    isFullWidth: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectStyles() {
      return {
        width: this.isFullWidth ? '100%' : this.selectWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-select /deep/ {
  margin: 5px 0;

  .el-input {
    &__inner {
      height: 50px;
      padding-left: 25px;
      padding-right: 70px;
      color: $color-dark-blue;
      background: $color-light-grey;
      border-color: $color-light-grey;
      border-radius: 18px;
      &::placeholder {
        color: $color-text-grey;
      }
    }
    &.is-focus .el-input__inner {
      border-color: $color-blue;
    }
    &__suffix {
      &:before {
        content: 'Change';
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: $color-blue;
      }
    }
  }

  .el-select {
    &__caret {
      display: none;
    }
  }
}
</style>
