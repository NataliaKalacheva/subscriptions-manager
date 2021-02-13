<template>
  <div class="upgrade-banner__wrapper">
    <div class="upgrade-banner" :class="bannerClasses" :style="bannerStyles">
      <ui-icon-ellipse class="upgrade-banner__ellipse"></ui-icon-ellipse>
      <h4 class="upgrade-banner__title">{{ title }}</h4>
      <p class="upgrade-banner__text">{{ text }}</p>
      <ui-button class="upgrade-banner__button" size="xs">{{ cta }}</ui-button>
      <ui-icon-bubble class="upgrade-banner__bubble" :top-position="false"></ui-icon-bubble>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiContainer',
  props: {
    title: {
      type: String,
      default: 'Upgrade to premium'
    },
    text: {
      type: String,
      default: 'Sync statement, Get discounts, Premium chartsand more!'
    },
    cta: {
      type: String,
      default: 'Upgrade'
    }
  },
  computed: {
    bannerClasses() {
      return {
        'container--rounded': this.isRounded,
        'container--inner': this.inner
      }
    },
    bannerStyles() {
      return {
        backgroundColor: this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.upgrade-banner {
  position: relative;
  display: grid;
  grid-template-areas:
    'a b'
    'c b';
  min-height: 90px;
  padding: 15px;
  background: $color-blue;
  border-radius: 25px;
  box-shadow: inset 0 1px 3px rgba($color-black, 0.5);
  color: $color-white;
  overflow: hidden;
  &__wrapper {
    margin: 15px 0;
    border-radius: 25px;
    box-shadow: 0 2px 4px rgba($color-black, 0.5);
  }
  &__title {
    max-width: 180px;
    margin: 0 0 0;
    padding: 10px 0 0;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.27px;
  }
  &__text {
    max-width: 180px;
    margin: 0 0;
    font-size: 0.7rem;
    letter-spacing: -0.21px;
    text-shadow: 0 2px 4px rgba($color-black, 0.5);
  }
  &__button {
    grid-area: b;
    width: auto;
    height: 50px;
    align-self: center;
  }
  &__ellipse {
    position: absolute;
    top: -70px;
    left: -70px;
  }
  &__bubble {
    position: absolute;
    right: -180px;
  }
}
</style>
