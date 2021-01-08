<template>
  <div class="countdown">
    <round-slider
      class="countdown__slider"
      min="0"
      max="26"
      :value="daysLeft"
      :read-only="true"
      path-color="#fff"
      :range-color="`url(#${gradientId})`"
      handle-size="0"
      line-cap="round"
      width="2"
      radius="15"
    />
    <svg width="0" height="0">
      <defs>
        <linearGradient :id="gradientId" v-html="linearGradient"></linearGradient>
      </defs>
    </svg>

    <span class="label"> days left </span>
  </div>
</template>

<script>
import RoundSlider from 'vue-round-slider'

export default {
  name: 'Countdown',
  components: {
    RoundSlider
  },
  props: {
    id: {
      type: String,
      default: String(Math.random())
    },
    daysLeft: {
      type: Number,
      required: true
    }
  },
  computed: {
    gradientId() {
      return `gradient-${this.id}`
    },
    linearGradient() {
      if (this.daysLeft <= 10) {
        return `
        <stop offset="0%" style="stop-color:rgb(200, 200, 200);stop-opacity:1;" />
        <stop offset="25%" style="stop-color:rgb(206, 87, 87);stop-opacity:.8;" />
        <stop offset="50%" style="stop-color:rgb(206, 87, 87);stop-opacity:.8;" />
        <stop offset="75%" style="stop-color:rgb(200, 200, 200);stop-opacity:1;" />
        <stop offset="100%" style="stop-color:rgb(255, 255, 255);stop-opacity:1;" />
      `
      }
      return `
        <stop offset="0%" style="stop-color:rgb(255, 255, 255);stop-opacity:1;" />
        <stop offset="25%" style="stop-color:rgb(51, 128, 254);stop-opacity:1;" />
        <stop offset="50%" style="stop-color:rgb(51, 128, 254);stop-opacity:1;" />
        <stop offset="100%" style="stop-color:rgb(51, 128, 254);stop-opacity:1;" />
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.countdown::v-deep {
  margin-top: 20px;

  .rs-control {
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle;
  }

  .rs-tooltip-text {
    font-size: 0.7rem;
    margin-top: -50%;
    margin-left: -50%;
  }
  .rs-inner-container {
    transform: rotate(-45deg);
  }
  .label {
    font-size: 0.9rem;
  }
}
</style>
