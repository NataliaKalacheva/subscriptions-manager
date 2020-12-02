<template>
  <el-select class="ui-select" :class="selectClasses" :style="selectStyles"
             v-bind="$attrs" v-on="$listeners">
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
    selectWidth: {
      type: String,
      default: '250px',
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    selectClasses() {
      return {
      };
    },
    selectStyles() {
      return {
        width: this.isFullWidth ? '100%' : this.selectWidth,
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

  .ui-select /deep/ {
      margin: 5px 0;

    .el-input {
      &__inner {
        height: 50px;
        padding-left: 25px;
        padding-right: 70px;
        color:  $color-input-text;
        background: $color-input-bg;
        border-color: $color-input-bg;
        border-radius: 18px;
        &::placeholder {
          color:  $color-input-placeholder;
        }
      }
      &.is-focus .el-input__inner {
        border-color: $color-input-accent;
      }
      &__suffix {
        &:before {
          content: 'Change';
          position: absolute;
          right: 10px;
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
  }
  .el-select-dropdown__item {
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
