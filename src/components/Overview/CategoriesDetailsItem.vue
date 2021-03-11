<template functional>
  <li class="categories-details__list-item">
    <span
      class="categories-details__swatch"
      :style="{ backgroundColor: parent.categoryColors[props.category.name] }"
    ></span>
    <span class="categories-details__category">{{ props.category.name }}</span>
    <span class="categories-details__price">
      {{ parent.supportedCurrency.icon }} {{ props.category.total }}
    </span>
  </li>
</template>

<script>
export default {
  name: 'CategoriesDetailsItem',
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.categories-details {
  &__list-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 0.7rem;
    font-weight: 500;
    color: $color-text-grey;
    letter-spacing: -0.24px;
  }
  &__swatch {
    display: block;
    margin-right: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  &__category {
    min-width: 40%;
  }
  &__price {
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
