<template>
  <el-input class="ui-input" v-bind="$attrs" v-on="$listeners"
           :class="{ isFullWidth: isFullWidth}">
  </el-input>
</template>

<script>
export default {
  name: 'UiInput',
  props: {
    width: {
      type: [Number, String],
    },
    isFullWidth: {
      type: Boolean,
    },
  },

};
</script>

<style lang="scss" scoped>
  $color-input-bg: #EBEDF0;
  $color-input-text: #77869E;

  .ui-input /deep/ {
      margin: 10px;
      width: auto;
    ::placeholder {
      color:  $color-input-text;
    }
    .el-input__inner {
      height: 50px;
      padding-left: 25px;
      color: $color-input-text;
      background: $color-input-bg;
      border-color: $color-input-bg;
      border-radius: 18px;
    }
  }
  .isFullWidth /deep/ {
    width: 100%;
  }
</style>
