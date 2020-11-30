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
      default: true
    },
  },

};
</script>

<style lang="scss" scoped>
  $color-input-bg: #EBEDF0;
  $color-input-placeholder: #77869E;
  $color-input-accent: #3380FE;
  $color-input-text: #042C5C;

  .ui-input /deep/ {
      margin: 5px 0;
      width: auto;
    ::placeholder {
      color:  $color-input-placeholder;
    }
    .el-input__inner {
      height: 50px;
      padding-left: 25px;
      color: $color-input-text;
      background: $color-input-bg;
      border-color: $color-input-bg;
      border-radius: 18px;

      &:focus, &:hover {
        border-color: $color-input-accent;
      }
    }
  }
  .isFullWidth /deep/ {
    width: 100%;
  }
</style>
