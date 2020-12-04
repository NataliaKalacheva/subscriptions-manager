<template>
  <div class="guide">
    <ui-container>
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
        <ui-select v-model="selected"
                   :isFullWidth="true" size="large">
          <ui-option v-if="optionTitle" disabled value="" :label="optionTitle"/>
          <ui-option v-for="option in options" :key="option.value"
                    :value="option.value" :label="option.label"/>
        </ui-select>
        <span>Selected: {{ selected }}</span>
      </section>
      <section>
        <h3>Form item</h3>
        <ui-form :label-position="labelPosition" label-width="100px"
                 :model="formData" :rules="formRules" ref="formData"
                 hide-required-asterisk>
          <ui-form-item label="Name" prop="name">
            <ui-input v-model="formData.name"></ui-input>
          </ui-form-item>
          <ui-form-item label="Amount" prop="amount">
            <ui-input v-model.number="formData.amount" placeholder="₦" type="number"></ui-input>
          </ui-form-item>
          <ui-form-item label="Password">
            <ui-input v-model="formData.password" placeholder="Password" show-password></ui-input>
          </ui-form-item>
        </ui-form>
      </section>
    </ui-container>
  </div>
</template>

<script>

import checkNumber from '@/helpers/validators/checkNumber';

export default {
  name: 'Guide',
  components: {},
  data() {
    return {
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
        amount: 0,
        password: '',
        type: '',
      },
      formRules: {
        name: [
          { required: true, message: 'Please input name', trigger: 'blur' },
          {
            min: 3, message: 'Min length: 3', trigger: 'blur',
          },
        ],
        amount: [
          { required: true, message: 'Please input number', trigger: 'blur' },
          { validator: checkNumber, trigger: 'blur' },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
