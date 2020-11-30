<template>
  <div class="guide">
    <ui-container :isRounded="true">
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
        <ui-input placeholder="example@example.com" v-model="input" size="medium"></ui-input>
      </section>
      <section>
        <h3>Select</h3>
        <ui-select :options="options" :title="optionTitle" v-model="selected"
                   size="large"/>
        <span>Selected: {{ selected }}</span>
      </section>
    </ui-container>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  components: {},
  data: () => ({
    input: '',
    selected: '',
    options: [{
      value: 'HTML',
      label: 'HTML',
    }, {
      value: 'CSS',
      label: 'CSS',
    }, {
      value: 'JavaScript',
      label: 'JavaScript',
    }],
    optionTitle: 'Please select',
    selectSuffix: 'Change',
  }),
};
</script>

<style lang="scss" scoped>

</style>
