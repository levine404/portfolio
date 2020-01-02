<template>
  <div
    class="carousel-wrapper"
    style="max-width: 100%"
    ref="carousel-wrapper"
  >
    <div
      class="carousel-3d"
      :style="{
        width: realWidth + 'px',
        height: realHeight + 'px'
      }"
    >
      <div
        class="c-ring"
        :style="{
          width: realWidth + 'px',
          height: realHeight + 'px',
          transform: `rotateX(${-90 + angle}deg)`
        }"
        @click="turnRing"
      >
        <div
          v-for="(item, index) of items"
          :key="index"
          class="c-item"
          :style="{
            width: realItemWidth - 20 + 'px',
            height: realHeight - 20 + 'px',
            top: positions[itemIndex(index)].y + 'px',
            left: positions[itemIndex(index)].x + 'px'
          }"
        >
          <slot
            :item="item"
            :index="index"
            :itemIndex="itemIndex(index)"
            :distance="distanceFromFront(itemIndex(index))"
          ></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel3D',
  props: {
    items: {
      type: Array,
      required: true
    },
    boxWidth: {
      type: Number,
      default: 800
    },
    itemWidth: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 400
    },
    angle: {
      type: Number,
      default: -5
    },
    maintainRatio: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      turn: 0,
      maxWidth: 0,
      observer: null
    }
  },
  mounted () {
    this.calculateMaxWidth()
    if (typeof ResizeObserver !== 'undefined') {
      this.observer = new ResizeObserver(() => {
        this.calculateMaxWidth()
      })
      this.observer.observe(this.$refs['carousel-wrapper'])
    }
  },
  destroyed () {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  computed: {
    realWidth () {
      return this.maxWidth
        ? Math.min(this.maxWidth, this.boxWidth)
        : this.boxWidth
    },
    realHeight () {
      return (this.realItemWidth < this.itemWidth && this.maintainRatio)
        ? (this.realItemWidth / this.itemWidth) * this.height
        : this.height
    },
    realItemWidth () {
      return this.itemWidth >= this.maxWidth
        ? this.maxWidth - 60
        : this.itemWidth
    },
    radius () {
      return this.boxWidth / 2
    },
    positions () {
      return this.items.map((item, index) => {
        const angle = (index / (this.items.length / 2)) * Math.PI - 90 * (Math.PI / 180)
        const radius = this.radius - this.realItemWidth / 2
        const x = this.realWidth / 2 + radius * Math.cos(angle) - this.realItemWidth / 2
        const y = this.realHeight / 2 + radius * Math.sin(angle)
        return { x, y, angle }
      })
    }
  },
  methods: {
    calculateMaxWidth () {
      this.maxWidth = this.$refs['carousel-wrapper'].offsetWidth
    },
    turnRing () {
      this.turn++
    },
    itemIndex (index) {
      return (index + this.turn) % this.items.length
    },
    distanceFromFront (index) {
      return (index <= this.items.length / 2)
        ? index
        : this.items.length - index
    }
  }
}
</script>

<style lang="scss">
.carousel-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.carousel-3d {
  transform-style: preserve-3d;
  transition: transform 1s;
  perspective: 1000;
}
.c-ring {
  margin-top: 20px;
  position: relative;
  transform-origin: 50% 0;
  transform-style: preserve-3d;
}
.c-item {
  position: absolute;
  transform: rotateX(90deg);
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  transition: all 0.6s;
}
</style>
