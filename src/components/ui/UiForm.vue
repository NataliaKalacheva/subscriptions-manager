<template>
  <el-form class="ui-form" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-form>
</template>

<script>
export default {
  name: 'UiForm'
}
</script>
