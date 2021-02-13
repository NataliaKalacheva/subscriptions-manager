<template>
  <div class="settings-content">
    <h4 class="settings-content__title">{{ title }}</h4>
    <ul class="settings-content__linklist">
      <li><a class="settings-content__link" href="#">Terms of use</a></li>
      <li><a class="settings-content__link" href="#">Privacy Policy</a></li>
    </ul>
    <ui-button class="settings-content__logout" @click="signOut" is-link
      ><logout-icon />Log out</ui-button
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import LogoutIcon from '@/components/Profile/LogoutIcon'

export default {
  name: 'SettingsContent',
  components: {
    LogoutIcon
  },
  props: {},
  data: () => ({
    title: 'App'
  }),
  methods: {
    ...mapActions('auth', ['signOut'])
  }
}
</script>

<style lang="scss" scoped>
.settings-content {
  &__title {
    margin: 10px 0;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 2;
    letter-spacing: 0.27px;
    color: $color-text-grey;
    text-transform: uppercase;
  }

  &__linklist {
    padding: 0 0 10px 15px;
    list-style: none;
    border-bottom: 2px solid $color-divider;
  }

  &__link {
    display: block;
    margin-bottom: 10px;
    padding: 10px 0;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  &__logout {
    color: $color-danger;
  }
}
</style>
