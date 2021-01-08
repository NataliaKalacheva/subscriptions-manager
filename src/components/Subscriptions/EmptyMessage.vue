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
  margin: 60px auto;
  text-align: center;
}
</style>
