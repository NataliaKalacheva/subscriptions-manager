<template>
    <el-form-item class="ui-form-item" :label="label" v-bind="$attrs" v-on="$listeners">
      <slot/>
    </el-form-item>
</template>

<script>
export default {
  name: 'UiFormItem',
  props: {
    label: {
      type: String,
    },
    isFullWidth: {
      type: Boolean,
    },
  },

};
</script>

<style lang="scss" scoped>
  $color-text-grey: #77869E;

  .ui-form-item /deep/ {
    text-align: left;

    .el-form-item__label {
      padding: 0;
      font-size: 14px;
      letter-spacing: 0.27px;
      line-height: 2.4;
      color: $color-text-grey;
    }
  }
</style>
