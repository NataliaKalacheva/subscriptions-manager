<template>
  <div class="overview">
    Overview
  </div>
</template>

<script>
// @ts-nocheck

export default {
  name: 'OverviewToggle',
  components: {},
  data: () => ({
    groupId: 'overviewToggle',
    item: {
      id: 1,
      active: false,
      title: 'Celebration',
      details: `
      <p>Come on, this is a Bluth family celebration. It's no place for children.</p>
    `
    }
  })
}
</script>
