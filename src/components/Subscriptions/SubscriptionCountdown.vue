<template>
  <div>Left {{ daysLeft }} days</div>
</template>

<script>
export default {
  name: 'Countdown',
  props: {
    daysLeft: {
      type: Number,
      required: true
    }
  }
}
</script>
