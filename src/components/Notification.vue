<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'notification',
  computed: {
    ...mapGetters(['messagePool'])
  },
  watch: {
    messagePool: 'showNotification'
  },
  methods: {
    showNotification({ title, message, type }) {
      this.$notify({
        title,
        message,
        type
      })
    }
  }
}
</script>
