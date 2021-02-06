<template>
  <div class="discount-banner__wrapper">
    <div class="discount-banner" :class="bannerClasses" :style="bannerStyles">
      <h4 class="discount-banner__title">{{ title }}</h4>
      <p class="discount-banner__text">{{ text }}</p>
      <img class="discount-banner__img" src="@/assets/finance.png" :alt="title" />
      <ui-button class="discount-banner__button" type="primary" size="xs">{{ info }}</ui-button>
      <ui-button class="discount-banner__button" size="xs">{{ cta }}</ui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiContainer',
  props: {
    title: {
      type: String,
      default: 'Bill too high?'
    },
    text: {
      type: String,
      default: 'We can help you negotiate or provide discount options.'
    },
    cta: {
      type: String,
      default: 'Dismiss'
    },
    info: {
      type: String,
      default: 'Learn more'
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
.discount-banner {
  display: grid;
  grid-template-areas:
    'a img'
    'c img'
    'btn e';
  min-height: 90px;
  margin-bottom: 40px;
  padding: 15px;
  color: $color-text-grey;
  overflow: hidden;

  &__title {
    max-width: 180px;
    margin: 0 0 0;
    padding: 10px 0 0;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.27px;
    color: $color-dark-blue;
  }
  &__text {
    max-width: 180px;
    margin: 0 0;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: -0.21px;
  }
  &__img {
    max-width: 130px;
    grid-area: img;
  }
  ::v-deep &__button {
    width: auto;
    margin-top: 15px;
    height: 50px;
    align-self: center;

    &:first-of-type {
      grid-area: btn;
      margin-right: 30px;
    }
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
