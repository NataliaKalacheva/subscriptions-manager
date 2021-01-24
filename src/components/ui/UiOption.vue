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
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-option {
  & ::v-deep {
    font-family: Arial, sans-serif;
    color: $color-text-grey;
    text-transform: capitalize;
  }
  &.is-disabled ::v-deep {
    color: rgba($color-text-grey, 0.7);
  }
  &:hover ::v-deep,
  &.hover ::v-deep,
  &:focus ::v-deep {
    background: $color-light-grey;
  }
  &.selected ::v-deep {
    color: $color-blue;
  }
}
</style>
