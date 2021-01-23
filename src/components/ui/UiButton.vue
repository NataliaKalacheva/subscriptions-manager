<template>
  <el-button class="ui-button" :class="buttonClasses" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    isShadow: {
      type: Boolean,
      default: false
    },
    isLink: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return {
        'is-shadow': this.isShadow,
        'is-link': this.isLink
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-button {
  transition: all 0.3s linear;

  & ::v-deep {
    margin: 10px;
    font-family: Arial, sans-serif;
  }

  &:not(.is-circle) ::v-deep {
    border-radius: 13px;
  }

  &.is-round ::v-deep {
    border-radius: 18px;
  }

  &.is-shadow ::v-deep {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
  }

  &.is-link {
    margin: 0 0;
    padding: 0 0;
    background: transparent;
    border: none;

    &:hover,
    &:focus {
      background: transparent;
      border: none;
      color: currentColor;
    }
  }

  &.is-disabled ::v-deep {
    background-color: $color-grey;
    border-color: $color-grey;
    .ui-icon {
      color: $color-grey;
    }
  }

  &.is-disabled:hover ::v-deep,
  &.is-disabled:focus ::v-deep {
    background-color: $color-grey;
    border-color: $color-grey;
    color: $color-white;

    .ui-icon svg {
      transform: none;
    }
  }

  ::v-deep .ui-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    background: $color-white;
    color: $color-blue;
    border-radius: 50%;
    transform: translateY(-50%);
  }
}

.el-button--default ::v-deep {
  background-color: $color-white;
  border-color: $color-blue;
  color: $color-blue;
}

.el-button--default:hover ::v-deep,
.el-button--default:focus ::v-deep {
  background-color: $color-blue;
  border-color: $color-blue;
  color: $color-white;
}

.el-button--primary ::v-deep {
  position: relative;
  background-color: $color-blue;
  border-color: $color-blue;

  .el-icon-arrow-right {
    position: absolute;
    right: 0;
    background-color: $color-white;
    color: $color-blue;
  }
}

.el-button--primary:hover ::v-deep,
.el-button--primary:focus ::v-deep {
  background-color: $color-white;
  color: $color-blue;

  .ui-icon svg {
    transform: translateX(2px);
  }
}

.el-button--info ::v-deep {
  background-color: $color-white;
  border-color: $color-white;
  color: $color-text-grey;
}

.el-button--info:hover ::v-deep,
.el-button--info:focus::v-deep {
  transform: scale(1.1) translateX(-2px);
}

.el-button--info.is-plain ::v-deep {
  background-color: $color-white;
  border-color: $color-text-grey;
  color: $color-text-grey;
}
.el-button--large ::v-deep {
  width: 223px;
  min-height: 57px;
  padding: 12px 45px;
}
.el-button--medium ::v-deep {
  width: 139px;
  min-height: 47px;
}
.el-button--small ::v-deep {
  padding: 12px 68px;
}
.el-button--mini ::v-deep {
  padding: 6px;
  min-width: 32px;
  min-height: 32px;
}
</style>
