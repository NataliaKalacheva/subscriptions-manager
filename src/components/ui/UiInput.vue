<template>
  <el-input class="ui-input" v-bind="$attrs" v-on="$listeners" :style="inputStyles"> </el-input>
</template>

<script>
export default {
  name: 'UiInput',
  props: {
    width: {
      type: [Number, String],
      default: '250px'
    },
    isFullWidth: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    inputStyles() {
      return {
        width: this.isFullWidth ? '100%' : this.width
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-input /deep/ {
  margin: 0;
  width: auto;
  ::placeholder {
    color: $color-text-grey;
  }
  .el-input__inner {
    height: 50px;
    padding-left: 25px;
    color: $color-dark-blue;
    background: $color-light-grey;
    border-color: $color-light-grey;
    border-radius: 18px;

    &:focus,
    &:hover {
      border-color: $color-blue;
    }
    &:invalid {
      border-color: red;
    }
  }
  .el-input__clear {
    color: $color-blue;
  }
}
</style>
