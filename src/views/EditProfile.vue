<template>
  <div class="page-edit-profile"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Settings',
  components: {},
  data: () => ({
    title: 'Settings'
  }),
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<style lang="scss" scoped>
.page-edit-profile {
  &__content {
    max-width: 768px;
    margin: 0 auto;
    position: relative;
  }

  @include mq-max($tab) {
    padding: 0 0;
  }
}
</style>
