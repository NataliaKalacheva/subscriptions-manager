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
    }
  }
}
</script>
