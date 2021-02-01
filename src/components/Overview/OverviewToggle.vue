<template>
  <div class="overview">
    <h3 class="h3 overview__toggle" @click="toggleContent">
      {{ title }}
      <ui-button class="overview__toggle-btn" type="info"><ui-arrow dir="down"/></ui-button>
    </h3>
    <div class="overview__content">
      <slot name="closedContent"></slot>
    </div>
    <transition name="fade">
      <div v-if="isExpanded" class="overview__hidden">
        Invisible content
      </div>
    </transition>
  </div>
</template>

<script>
// @ts-nocheck

export default {
  name: 'OverviewToggle',
  data: () => ({
    title: 'Overview',
    isExpanded: false
  }),
  methods: {
    toggleContent() {
      this.isExpanded = !this.isExpanded
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
