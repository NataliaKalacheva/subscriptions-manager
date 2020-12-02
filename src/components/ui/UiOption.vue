<template>
  <el-option class="ui-option" v-bind="$attrs" v-on="$listeners"
            :class="optionClasses" :style="optionStyles">
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
  computed: {
    optionClasses() {
      return {
      };
    },
    optionStyles() {
      return {
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  $color-input-bg: #EBEDF0;
  $color-input-placeholder: #77869E;
  $color-input-accent: #3380FE;
  $color-input-text: #042C5C;

  .ui-option {
    & /deep/ {
      font-family: Arial, sans-serif;
      color: $color-input-placeholder;
    }
    &.is-disabled /deep/ {
      color: rgba($color-input-placeholder,.7);
    }
    &:hover /deep/,
    &.hover /deep/,
    &:focus /deep/ {
        background: $color-input-bg;
    }
    &.selected /deep/{
      color: $color-input-accent;
    }
  }
</style>
