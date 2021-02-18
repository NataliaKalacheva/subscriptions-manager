<template>
  <div class="nav">
    <router-link class="nav__link" :to="{ name: 'Home' }" area-label="Home">
      <icon-home />
    </router-link>
    <router-link class="nav__link" :to="{ name: 'Subscriptions' }" area-label="Subscriptions">
      <icon-subscriptions />
    </router-link>
    <router-link class="nav__link" :to="{ name: 'Settings' }" area-label="Settings">
      <icon-settings />
    </router-link>
  </div>
</template>

<script>
import IconHome from '@/components/Icons/IconHome'
import IconSubscriptions from '@/components/Icons/IconSubscriptions'
import IconSettings from '@/components/Icons/IconSettings'

export default {
  name: 'Navigation',
  components: {
    IconHome,
    IconSubscriptions,
    IconSettings
  }
  // data: () => ({
  //   showNav: false
  // }),
  // methods: {
  //   toggleNav() {
  //     this.showNav = !this.showNav
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 50%;
  min-width: 200px;
  padding: 5px 5px 0;
  background: $color-grey-blue;
  color: $color-white;
  border-radius: 20px 20px 0 0;
  transform: translateX(-50%);

  &__toggle {
    width: 66px;
    height: 66px;
    color: inherit;

    &:focus {
      outline: none;
    }
  }

  &__link {
    display: inline-block;
    width: 82px;
    color: $color-grey;
  }

  .router-link-exact-active {
    color: $color-white;
  }
}
</style>
