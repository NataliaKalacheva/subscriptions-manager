<template>
  <el-button class="ui-button" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'UiButton'
}
</script>

<style lang="scss" scoped>
.ui-button {
  &/deep/ {
  }
}
</style>
