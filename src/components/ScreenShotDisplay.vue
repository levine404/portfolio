<template>
  <div class="screen-shot-display">
    <DesktopDisplay
      :showIcon="true"
      :img="img"
    />
    <div class="screen-shot-shadow">
    </div>
  </div>
</template>

<script>
import DesktopDisplay from './DesktopDisplay.vue'
export default {
  name: 'ScreenShotDisplay',
  components: {
    DesktopDisplay
  },
  props: {
    img: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss">
.screen-shot-display {
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: all 0.6s;
  .screen-shot-shadow {
    position: absolute;
    bottom: -50px;
    width: 95%;
    height: 20px;
    border-radius: 40%;
    background: radial-gradient(black, transparent);
    opacity: 0.1;
  }
}
</style>
