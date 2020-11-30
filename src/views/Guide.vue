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
        <ui-input placeholder="example@example.com" v-model="input" size="medium"
                 :isFullWidth="true"/>
      </section>
      <section>
        <h3>Select</h3>
        <ui-select :options="options" :title="optionTitle" v-model="selected"
                   :isFullWidth="true" size="large"/>
        <span>Selected: {{ selected }}</span>
      </section>
      <section>
        <h3>Form item</h3>
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <ui-form-item label="Name">
            <ui-input v-model="formData.name"></ui-input>
          </ui-form-item>
        </el-form>
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
    labelPosition: 'top',
    formData: {
      name: '',
      region: '',
      type: '',
    },
  }),
};
</script>

<style lang="scss" scoped>

</style>
