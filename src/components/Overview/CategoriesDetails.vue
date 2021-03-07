<template>
  <div class="categories-details">
    <ul class="categories-details__list">
      <template v-for="category in categories">
        <categories-details-item :category="category" :key="category.name" />
      </template>
    </ul>
  </div>
</template>

<script>
import CategoriesDetailsItem from '@/components/Overview/CategoriesDetailsItem'
import { categoryColors, supportedCurrency } from '@/constants'

export default {
  name: 'CategoriesDetails',
  components: {
    CategoriesDetailsItem
  },
  props: {
    categories: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    categoryColors,
    supportedCurrency
  })
}
</script>

<style lang="scss" scoped>
.categories-details {
  flex-grow: 1;
  max-width: 300px;

  &__list {
    @include reset-list;
  }
}
</style>
