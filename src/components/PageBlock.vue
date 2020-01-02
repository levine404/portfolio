<script>
export default {
  functional: true,
  name: 'PageBlock',
  props: {
    color: String,
    name: String
  },
  render (createElement, { props, scopedSlots }) {
    return createElement(
      'div',
      {
        attrs: {
          id: props.name
        },
        class: 'page-block',
        style: {
          background: props.color
        }
      },
      scopedSlots.default
        ? scopedSlots.default()
        : []
    )
  }
}
</script>

<style>
.page-block {
  width: 100%;
  flex: 1 0 100%;
}
</style>
