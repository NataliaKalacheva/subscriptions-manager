<template>
  <div class="guide">
    <section>
      <h3>Buttons</h3>
      <ui-button type="primary" size="large">Continue
          <ui-icon-base :isCircle="true" :isShadow="true">
            <ui-arrow-right></ui-arrow-right>
          </ui-icon-base>
      </ui-button>
      <ui-button type="primary" size="large" disabled>Continue
          <ui-icon-base :isCircle="true" :isShadow="true">
            <ui-arrow-right></ui-arrow-right>
          </ui-icon-base>
      </ui-button>
      <ui-button type="primary" size="medium">Learn more</ui-button>
      <ui-button size="medium">Dismiss</ui-button>
      <ui-button :isShadow="true" size="small" round>Return</ui-button>
      <ui-button :isShadow="true" size="mini" type="info" circle>
            <ui-icon-plus/>
      </ui-button>
      <ui-button size="mini" type="info" circle plain>
            <ui-icon-plus width="10" height="10"/>
      </ui-button>

    </section>
    <section>
      <h3>Inputs</h3>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  components: {},
};
</script>

<style lang="scss" scoped>

</style>
