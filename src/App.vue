<template>
  <div id="app">
    <ui-loader />
    <notification />
    <router-view />
    <navigation />
  </div>
</template>

<script>
import Notification from '@/components/common/Notification'
import Navigation from '@/components/common/Navigation'

export default {
  name: 'App',
  components: {
    Notification,
    Navigation
  }
}
</script>

<style lang="scss">
#app {
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
