<template>
  <div class="progress-circle">
    <svg :width="radius" :height="radius" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="progress-background" r="50" cx="50" cy="50" fill="transparent"/>
      <circle class="progress-bar" r="50" cx="50" cy="50" fill="transparent" :stroke-dasharray="dashArray"
              :stroke-dashoffset="dashOffset"/>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dashArray: Math.PI * 100
    }
  },
  props: {
    radius: {
      type: Number,
      default: 100
    },
    percent: {
      type: Number,
      default: 0
    }
  },
  computed: {
    dashOffset () {
      return (1 - this.percent) * this.dashArray
    }
  }
}
</script>

<style lang='scss' scope>
.progress-circle{
  position: relative;
  circle{
    stroke-width: 8px;
    transform-origin: center;
    &.progress-background{
      transform: scale(0.9);
      stroke: #00F;
    }
    &.progress-bar{
      transform: scale(0.9) rotate(-90deg);
      stroke: #F00;
    }
  }
}
</style>
