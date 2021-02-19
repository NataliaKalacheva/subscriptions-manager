<template>
  <div class="categories-details">
    <ul class="categories-details__list">
      <template v-for="category in categories">
        <li :key="category.name" class="categories-details__list-item">
          <span
            class="categories-details__swatch"
            :style="{ backgroundColor: categoryColors[category.name] }"
          ></span>
          <span class="categories-details__category">{{ category.name }}</span>
          <span class="categories-details__price">
            {{ supportedCurrency.icon }} {{ category.total }}
          </span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { categoryColors, supportedCurrency } from '@/constants'

export default {
  name: 'CategoriesDetails',
  data: () => ({
    categoryColors,
    supportedCurrency
  }),
  props: {
    categories: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.categories-details {
  flex-grow: 1;
  max-width: 300px;

  &__list {
    @include reset-list;
  }
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
