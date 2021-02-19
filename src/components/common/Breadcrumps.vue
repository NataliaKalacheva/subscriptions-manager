<template>
  <div class="breadcrumps">
    <button class="breadcrumps__item" @click="navigate">
      <ui-arrow dir="left" />
    </button>
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
  z-index: 99;

  &__item {
    @include reset-button;
  }

  &__item,
  &__item svg {
    cursor: pointer;
    color: white;
  }
}
</style>
