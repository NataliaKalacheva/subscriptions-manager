<template>
  <div class="profile-header">
    <ui-icon-bubble />
    <breadcrumps />
    <h1 class="profile-header__title">{{ title }}</h1>
  </div>
</template>

<script>
import Breadcrumps from '@/components/common/Breadcrumps'

export default {
  name: 'EditProfileHeader',
  components: {
    Breadcrumps
  },
  props: {
    title: {
      type: String,
      default: 'Edit Profile'
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-header {
  width: 80%;
  margin: 20px auto 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &__title {
    margin: 0 0 30px;
    font-size: 1.6rem;
    line-height: 1.4;
    letter-spacing: -0.98px;
  }
}
</style>
