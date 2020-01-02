<template>
  <div class="desktop-display">
    <div class="desktop-screen">
      <div
        class="desktop-inner-screen"
        :style="{
          'background-image': `url(${img})`
        }"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesktopDisplay',
  props: {
    showIcon: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      required: false
    }
  },
  methods: {
    handleClick () {
      console.warn('clicked.')
    }
  }
}
</script>

<style lang="scss">
.desktop-display {
  width: 100%;
  height: 100%;
  .desktop-screen {
    width: 100%;
    height: 100%;
    background: #333;
    border-radius: 12px;
    padding: 12px;
    border-width: 6px;
    border-style: solid;
    border-top-color: #555;
    border-left-color: #555;
    border-right-color: #222;
    border-bottom-color: #222;
    .desktop-inner-screen {
      position: relative;
      width: 100%;
      height: 100%;
      background: white;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top center;
      .desktop-max-icon {
        position: absolute;
        bottom: 8px;
        right: 8px;
        color: #fff;
        font-size: 4vh;
      }
    }
  }
}
</style>
