<template>
  <div class="overview">
    <h3 class="h3 overview__toggle" @click="toggleDetails">
      {{ title }}
      <ui-button class="overview__toggle-btn" type="info">
        <ui-arrow :dir="arrowDirection" />
      </ui-button>
    </h3>
    <div class="overview__content">
      <slot name="introContent"></slot>
    </div>
    <transition name="slide-out">
      <div v-if="showDetails" class="overview__hidden">
        <slot name="closedContent"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'OverviewToggle',
  data: () => ({
    title: 'Overview'
  }),
  methods: {
    ...mapActions('overview', ['toggleDetails'])
  },
  computed: {
    ...mapGetters('overview', ['showDetails']),
    arrowDirection() {
      return this.showDetails ? 'up' : 'down'
    }
  }
}
</script>

<style lang="scss" scoped>
.overview {
  margin-bottom: 30px;
  &__toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__toggle-btn {
    max-height: 32px;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;

    ::v-deep .categories-chart {
      margin-bottom: 40px;
    }
  }
}

.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 0.3s;
}

.slide-out-enter,
.slide-out-leave-to {
  opacity: 0;
  transform: translateY(-100px);
  margin-bottom: -100px;
}
</style>
