<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="isFirstLogin">Welcome message</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {},
  data: () => ({
    ...mapGetters('auth', ['isFirstLogin'])
  })
}
</script>
