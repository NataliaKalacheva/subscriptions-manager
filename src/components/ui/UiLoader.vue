<template>
  <div
    v-loading.fullscreen="true"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    element-loading-custom-class="ui-loader"
    v-bind="$attrs"
    v-on="$listeners"
  ></div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>
