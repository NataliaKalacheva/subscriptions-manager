<template>
  <div href="/" class="breadcrumps">
    <a @click="navigate">
      <ui-arrow dir="left" />
    </a>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'Breadcrumps',
  methods: {
    navigate() {
      router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumps {
  position: absolute;
  top: 25px;
  left: 25px;
}
</style>
