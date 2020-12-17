<template>
  <div
    v-loading.fullscreen="isShowLoader"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    element-loading-custom-class="ui-loader"
    v-bind="$attrs"
    v-on="$listeners"
  ></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Loader',
  computed: {
    ...mapGetters(['isShowLoader'])
  }
}
</script>
