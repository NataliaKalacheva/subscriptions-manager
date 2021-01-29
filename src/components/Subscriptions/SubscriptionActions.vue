<template>
  <div>
    <Slide right no-overlay width="500">
      <router-link :to="{ name: 'EditSubscription' }">Edit</router-link>
      <a href="#" @click.prevent="initDeleteSubscription()">Delete</a>
      <a href="#" @click.prevent="initRenewSubscription()">Renew</a>
    </Slide>
  </div>
</template>

<script>
import router from '@/router'
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
    ...mapActions('subscriptions', ['deleteSubscription', 'renewSubscription']),
    async initDeleteSubscription() {
      try {
        await this.deleteSubscription(this.id)
        router.push({ name: 'Subscriptions' })
      } catch (err) {
        throw new Error(err)
      }
    },
    async initRenewSubscription() {
      try {
        await this.renewSubscription(this.id)
        router.push({ name: 'Subscriptions' })
      } catch (err) {
        throw new Error(err)
      }
    }
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
