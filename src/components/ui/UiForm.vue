<template>
  <el-form class="ui-form" ref="uiForm" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-form>
</template>

<script>
export default {
  name: 'UiForm',
  methods: {
    validate(cb) {
      this.$refs.uiForm.validate(cb)
    },
    clearValidate(cb) {
      this.$refs.uiForm.clearValidate(cb)
    }
  }
}
</script>

<style scoped>
.ui-form {
  text-align: center;
}
</style>
