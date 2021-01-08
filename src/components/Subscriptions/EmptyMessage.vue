<template>
  <p class="empty-message">{{ content }}</p>
</template>

<script>
export default {
  name: 'EmptyMessage',
  data: () => ({
    content: 'No subscriptions'
  })
}
</script>

<style scoped>
.empty-message {
  text-align: center;
}
</style>
