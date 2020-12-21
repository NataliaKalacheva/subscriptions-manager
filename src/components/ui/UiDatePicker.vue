<template>
  <el-date-picker class="ui-date-picker" v-bind="$attrs" v-on="$listeners" :style="inputStyles" />
</template>

<script>
export default {
  name: 'UiDatePicker',
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
.ui-date-picker /deep/ {
  margin: 0;
  width: auto;
  ::placeholder {
    color: $color-text-grey;
  }
  .el-input__inner {
    position: relative;
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
  }
  .el-input__clear,
  .el-icon-date {
    color: $color-blue;
  }
  .el-input__prefix {
    left: auto;
    right: 8px;
  }
}

.el-date-picker {
  font-family: Arial, sans-serif;
}
</style>
