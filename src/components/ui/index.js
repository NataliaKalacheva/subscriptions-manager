import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context(
  './components',
  false,
  /Ui[A-Z]\w+\.(vue|js)$/,
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(

      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, ''),
    ),
  );

  Vue.component(
    componentName,
    componentConfig.default || componentConfig,
  );
});
