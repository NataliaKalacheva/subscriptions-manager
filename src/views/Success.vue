<template>
  <div class="page-success">
    <div class="page-success__content">
      <ui-icon-check />
      <success-message />
    </div>
  </div>
</template>

<script>
import successMessage from '@/components/SuccessMessage'

export default {
  name: 'Success',
  components: {
    successMessage
  }
}
</script>

<style lang="scss" scoped>
.page-success {
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
  .page-success {
    background-image: url('../assets/success-bg@3x.png');
  }
}

@include mq($tab) {
  .page-success {
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-image: url('../assets/success-bg-desktop.svg');
  }
}
</style>
