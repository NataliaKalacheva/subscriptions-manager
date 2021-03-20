<template>
  <div v-if="user.uid" class="page-edit-profile">
    <div class="page-edit-profile__content page-width">
      <profile-header />
      <ui-container>
        <profile-icon
          class="page-edit-profile__icon"
          :title="user.displayName"
          :icon="''"
          size="large"
        />
        <user-form :formData="user" />
      </ui-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProfileHeader from '@/components/Profile/ProfileHeader'
import ProfileIcon from '@/components/Profile/ProfileIcon'
import UserForm from '@/components/Auth/UserForm'

export default {
  name: 'EditProfile',
  components: {
    ProfileHeader,
    ProfileIcon,
    UserForm
  },
  data: () => ({
    title: 'Edit Profile'
  }),
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<style lang="scss" scoped>
.page-edit-profile {
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
  }

  &__icon {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
  }

  ::v-deep .container {
    position: relative;
  }

  ::v-deep .ui-form {
    margin-top: 100px;
  }

  ::v-deep .ui-input .el-input__inner {
    margin-left: 25px;
    padding-left: 0;
    height: auto;
    background: transparent;
    border: none;
    border-radius: 0;

    &:hover,
    &:focus {
      border-bottom: 1px solid $color-blue;
    }
  }

  @include mq-max($tab) {
    padding: 0 0;
  }
}
</style>
