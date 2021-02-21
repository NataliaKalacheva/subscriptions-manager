<template>
  <div class="coming-soon">
    <div class="coming-soon__content">
      <icon-development />
      <h1 class="h2">{{ title }}</h1>
      <p class="coming-soon__text">{{ message }}</p>
      <ui-button :isShadow="true" size="small" round @click="navigate">Return</ui-button>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import IconDevelopment from '@/components/Icons/IconDevelopment'

export default {
  name: 'ComingSoon',
  components: {
    IconDevelopment
  },
  data: () => ({
    title: 'Coming soon!',
    message: 'This functionality is under development'
  }),
  methods: {
    navigate() {
      router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.coming-soon {
  width: 100%;
  height: 100vh;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25vh;
  box-sizing: border-box;
  background-color: $color-white;
  background-position: center;
  background-size: cover;
  color: $color-dark-blue;

  &__content {
    text-align: center;
  }
}

@include mq-max($tab) {
  .coming-soon {
    background-image: url('../assets/success-bg@3x.png');
  }
}

@include mq($tab) {
  .coming-soon {
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-image: url('../assets/success-bg-desktop.svg');
  }
}
</style>
