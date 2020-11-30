<template>
  <el-select class="ui-select" v-bind="$attrs" v-on="$listeners">
    <el-option v-if="title" disabled value="">{{ title }}</el-option>
    <el-option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'UiSelect',
  props: {
    options: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
    },
    suffix: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  $color-input-bg: #EBEDF0;
  $color-input-text: #77869E;
  $color-input-accent: #3380FE;

  .ui-select /deep/ {
      margin: 10px;

    .el-input {
      &__inner {
        height: 50px;
        color: $color-input-text;
        background: $color-input-bg;
        border-color: $color-input-bg;
        border-radius: 18px;
      }
      &.is-focus .el-input__inner {
        border-color: $color-input-accent;
      }
      &__suffix {
        &:before {
          content: 'Change';
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          color: $color-input-accent;
        }
      }
    }

    .el-select {

      &__caret {
        display: none;
      }

    }

    .el-select-dropdown {
      font-family: Arial, sans-serif;

      &__item.selected {
        color: $color-input-accent;
      }
    }
  }
</style>
