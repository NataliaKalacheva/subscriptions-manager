<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'Guide' }">Guide</router-link> |
      <router-link :to="{ name: 'Login' }">Login</router-link> |
      <router-link :to="{ name: 'SignUp' }">SignUp</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0 0;
  color: $color-white;
  background: $color-blue;
}

p {
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.27px;
}

a {
  color: $color-white;

  &.router-link-exact-active {
    color: $color-grey;
  }
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
  }
}
</style>
