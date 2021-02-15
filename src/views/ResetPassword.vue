<template>
  <div class="page-reset">
    <section-header :title="title">
      <breadcrumps />
      {{ subtitle }}
    </section-header>
    <ui-container>
      <reset-password-form />
    </ui-container>
  </div>
</template>

<script>
import SectionHeader from '@/components/common/SectionHeader'
import ResetPasswordForm from '@/components/Auth/ResetPasswordForm'
import Breadcrumps from '@/components/common/Breadcrumps'

export default {
  name: 'Reset',
  components: {
    SectionHeader,
    ResetPasswordForm,
    Breadcrumps
  },
  data: () => ({
    title: 'Welcome',
    subtitle: 'Please input email and we will send you recover instructions.',
    labelPosition: 'top'
  })
}
</script>

<style lang="scss" scoped>
.page-reset {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
}
</style>
