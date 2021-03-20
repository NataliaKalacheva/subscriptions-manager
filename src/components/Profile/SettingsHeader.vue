<template>
  <div class="settings-header">
    <ui-icon-bubble />
    <h1 class="settings-header__title">{{ title }}</h1>
    <div class="settings-header__user">
      <profile-icon :title="userName" :icon="icon" />
      <div class="settings-header__user-data">
        <div class="settings-header__user-name h3">
          {{ userName }}
        </div>
        <router-link :to="{ name: 'EditProfile' }" class="settings-header__user-edit">
          Edit profile
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileIcon from '@/components/Profile/ProfileIcon'

export default {
  name: 'SettingsHeader',
  components: {
    ProfileIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    userName: {
      type: String,
      default: 'User Name'
    }
  }
}
</script>

<style lang="scss" scoped>
.settings-header {
  width: 80%;
  margin: 20px auto 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__title {
    margin: 0 0 20px;
    font-size: 1.6rem;
    line-height: 1.4;
    letter-spacing: -0.98px;
  }

  &__user {
    display: flex;
    align-items: center;
  }

  &__user-data {
    margin-left: 20px;
  }

  &__user-name {
    margin-bottom: 3px;
  }

  &__user-edit {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
</style>
