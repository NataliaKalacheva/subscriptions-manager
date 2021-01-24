<template>
  <div class="page-settings">
    <div class="page-settings__content">
      <settings-header :title="title" :userName="user.displayName || ''" />
      <ui-container>
        <settings-content />
      </ui-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SettingsHeader from '@/components/Profile/SettingsHeader'
import SettingsContent from '@/components/Profile/SettingsContent'

export default {
  name: 'Settings',
  components: {
    SettingsHeader,
    SettingsContent
  },
  data: () => ({
    title: 'Settings'
  }),
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<style lang="scss" scoped>
.page-settings {
  &__content {
    max-width: 768px;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
  }

  ::v-deep .container {
    padding-right: 0;
  }

  @include mq-max($tab) {
    padding: 0 0;
  }
}
</style>
