<template>
  <div class="section-header page-width">
    <ui-icon-bubble />
    <h1 class="section-header__title">{{ title }}</h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section-header {
  position: relative;
  margin: 10px auto 30px;
  width: 100%;
  text-align: center;

  &__title {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.39px;
  }
}
</style>
