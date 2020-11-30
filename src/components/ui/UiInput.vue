<template>
  <el-input class="ui-input" v-bind="$attrs" v-on="$listeners">
  </el-input>
</template>

<script>
export default {
  name: 'UiInput',
  props: {
  },

};
</script>

<style lang="scss" scoped>
  $color-input-bg: #EBEDF0;
  $color-input-text: #77869E;

  .ui-input /deep/ {
      margin: 10px;
    .el-input__inner {
      height: 50px;
      color: $color-input-text;
      background: $color-input-bg;
      border-color: $color-input-bg;
      border-radius: 18px;
    }
  }
</style>
