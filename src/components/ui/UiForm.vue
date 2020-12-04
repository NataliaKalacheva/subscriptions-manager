<template>
  <el-form v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-form>
</template>

<script>
export default {
  name: 'UiForm'
}
</script>
