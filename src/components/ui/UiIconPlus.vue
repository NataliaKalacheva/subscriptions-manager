<template>
<svg :width="width" :height="height" :aria-labelledby="iconName" viewBox="0 0 15.126 15.126">
  <path :fill="iconColor" fill-rule="evenodd" d="M6.0628357
  1.5c0-.82787323.67211913-1.5 1.5-1.5.82788085 0 1.5.67212677 1.5
  1.5v4.56284332h4.56283569c.82788086 0 1.5.67212677 1.5 1.5s-.67211914
  1.5-1.5 1.5h-4.5628357v4.5628357c0 .82788086-.67211914
  1.5-1.5 1.5s-1.5-.67211914-1.5-1.5v-4.5628357H1.5c-.82788086
  0-1.5-.67212677-1.5-1.5s.67211914-1.5 1.5-1.5h4.5628357V1.5z"/>
</svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 15,
    },
    height: {
      type: [Number, String],
      default: 15,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
    isCircle: {
      type: Boolean,
    },
    isShadow: {
      type: Boolean,
    },
  },
};
</script>
