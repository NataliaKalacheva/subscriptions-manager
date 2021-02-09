<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Notification',
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
