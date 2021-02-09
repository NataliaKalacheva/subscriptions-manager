<template>
  <div id="app">
    <div class="app-content">
      <ui-loader />
      <notification />
      <router-view />
    </div>
  </div>
</template>

<script>
import Notification from '@/components/Notification.vue'

export default {
  name: 'App',
  components: {
    Notification
  }
}
</script>

<style lang="scss">
.app-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
  }
}
</style>
