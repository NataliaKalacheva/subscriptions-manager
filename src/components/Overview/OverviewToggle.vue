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
    <transition name="fade">
      <div v-if="showDetails" class="overview__hidden">
        <slot name="closedContent"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
// @ts-nocheck
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
.fade-enter-active {
  transition: all 0.6s ease-in-out;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
