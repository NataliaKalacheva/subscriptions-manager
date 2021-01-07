<template>
  <div>
    <Slide right no-overlay width="500">
      <router-link :to="{ name: 'EditSubscription' }">Edit</router-link>
      <a href="#" @click.prevent="deleteSubscription(id)">Delete</a>
    </Slide>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Slide } from 'vue-burger-menu'

export default {
  name: 'SubscriptionActions',
  components: {
    Slide // burger menu with slide effect
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions('subscriptions', ['deleteSubscription'])
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .bm-menu {
    max-width: 100%;
    background-color: $color-white;

    &,
    & a {
      color: $color-dark-blue;
    }
  }
  .bm-item-list > * > span {
    color: $color-dark-blue;
  }
  .bm-cross {
    background-color: $color-text-grey;
  }
  .bm-burger-button {
    top: 26px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .bm-burger-bars {
    background-color: $color-white;
  }
  .line-style {
    width: 4px;
    border-radius: 50%;
  }

  .bm-cross-button {
    left: 25px;
    right: auto;
  }
}
</style>
