<template>
  <div>
    <Slide right no-overlay>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'SubscriptionActions',
  components: {
    Slide // burger menu with slide effect
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .bm-menu {
    background-color: $color-white;

    &,
    & a {
      color: $color-dark-blue;
    }
  }
  .bm-item-list > * > span {
    color: $color-dark-blue;
  }
  .bm-cross {
    background-color: $color-text-grey;
  }
  .bm-burger-button {
    top: 26px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .bm-burger-bars {
    background-color: $color-white;
  }
  .line-style {
    width: 4px;
    border-radius: 50%;
  }
}
</style>
