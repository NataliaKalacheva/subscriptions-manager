<template>
  <el-option class="ui-option" v-bind="$attrs" v-on="$listeners">
    {{ label }}
  </el-option>
</template>

<script>
export default {
  name: 'UiOption',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .ui-option {
    & /deep/ {
      font-family: Arial, sans-serif;
      color: $color-text-grey;
    }
    &.is-disabled /deep/ {
      color: rgba($color-text-grey,.7);
    }
    &:hover /deep/,
    &.hover /deep/,
    &:focus /deep/ {
        background: $color-light-grey;
    }
    &.selected /deep/{
      color: $color-blue;
    }
  }
</style>
