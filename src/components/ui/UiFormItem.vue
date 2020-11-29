<template>
  <el-form-item v-bind="$attrs" v-on="$listeners"></el-form-item>
</template>

<script>
export default {
  name: 'UiFormItem',
  props: {
  },
  data: () => ({
    input: '',
  }),

};
</script>

<style lang="scss" scoped>
</style>
