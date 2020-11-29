<template>
  <div class="guide">
    <section>
      <h3>Buttons</h3>
      <ui-button type="primary">Continue
        <ui-icon-base><ui-arrow-right></ui-arrow-right></ui-icon-base>
      </ui-button>
      <ui-button :isShadow="true" round>Return</ui-button>
      <ui-button circle><i class="el-icon-plus"></i></ui-button>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Guide',
  components: {
  },
};
</script>
