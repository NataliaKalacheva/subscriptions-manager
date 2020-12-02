<template>
  <el-select class="ui-select" :class="selectClasses" :style="selectStyles"
             v-bind="$attrs" v-on="$listeners">
    <slot/>
  </el-select>
</template>

<script>
export default {
  name: 'UiSelect',
  props: {
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
</style>
