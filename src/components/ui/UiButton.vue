<template>
  <el-button v-bind="$attr" v-on="$listeners">
    <slot/>
  </el-button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    msg: String,
  },
};
</script>
