<template>
  <svg
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    role="presentation"
    :class="arrowClasses"
  >
    <title lang="en">{{ iconName }} icon</title>
    <g>
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M.0000763 6.58296967c-.00389481.38168716.1396408.76461029.4305992 1.0555687.06053925.06053924.12505723.11469268.19271851.16246795l4.93426132 4.9342575c.57423401.57424164 1.50664902.57424164 2.08088303 0 .57423782-.574234.57423592-1.5066452 0-2.0808792L3.56712723 6.58297347l4.07141113-4.07141113c.57423592-.57423783.57423782-1.50664902 0-2.08088684-.574234-.57423401-1.50664902-.57423401-2.08088303 0L.62339783 5.364933c-.06766129.04777527-.13218308.10193253-.19272232.16247178-.2909584.2909584-.43449402.67387771-.43059922 1.05556488z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'UiArrow',
  props: {
    width: {
      type: [Number, String],
      default: 9
    },
    height: {
      type: [Number, String],
      default: 14
    },
    dir: {
      type: String,
      default: 'left'
    }
  },
  data: () => ({
    iconName: 'arrow'
  }),
  computed: {
    arrowClasses() {
      switch (this.dir) {
        case 'left':
          return 'arrow--left'
        case 'right':
          return 'arrow--right'
        case 'down':
          return 'arrow--down'
        case 'up':
          return 'arrow--up'
        default:
          return 'arrow--left'
      }
    }
  }
}
</script>

<style scoped>
.arrow--right {
  transform: rotate(-180deg);
}
.arrow--down {
  transform: rotate(-90deg);
}
.arrow--up {
  transform: rotate(90deg);
}
</style>
