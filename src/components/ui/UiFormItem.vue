<template>
  <el-form-item
    class="ui-form-item"
    :label="label"
    :style="itemStyles"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </el-form-item>
</template>

<script>
export default {
  name: 'UiFormItem',
  props: {
    label: {
      type: String,
      required: true
    },
    isFullWidth: {
      type: Boolean,
      default: true
    },
    width: {
      type: [Number, String],
      default: '250px'
    }
  },
  computed: {
    itemStyles() {
      return {
        width: this.isFullWidth ? '100%' : this.width
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-form-item /deep/ {
  text-align: left;

  .el-form-item {
    &__label {
      margin-left: 18px;
      padding: 0;
      font-size: 14px;
      letter-spacing: 0.27px;
      line-height: 2.4;
      color: $color-text-grey;
    }
    &__error {
      margin-left: 18px;
    }
  }
}

.ui-form-item.is-error /deep/ {
  .el-input__inner {
    border-color: $color-danger;
  }
}
</style>
