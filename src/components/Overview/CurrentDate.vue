<template>
  <div class="current-date">
    <time>
      {{ new Date() | moment('DD MMMM YYYY') }}
    </time>
  </div>
</template>

<script>
export default {
  name: 'CurrentDay'
}
</script>

<style lang="scss" scoped>
.current-date {
  margin: 20px auto;
  text-align: center;
  font-size: 1.6rem;
}
</style>
