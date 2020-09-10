<template>
  <view class="m-1 px-2 py-1 border d-inline-block" :style="getStyle">{{ tag.text }}</view>
</template>

<script>
export default {
  props: {
    tag: Object,
    color: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    getStyle() {
      if (!this.color) {
        return `background-color: #f5f5f5; border-color: transparent;`
      }
      let color = {
        borderColor: ['#eea6aa', '#dd6a4b', '#98d5d8', '#9dbe93', '#bccd99'],
        backgroundColor: ['#f8eae9', '#ffbec6', '#e8f6f6', 'e4f5e2', '#f2f6e8'],
      }
      let i = Math.floor(Math.random() * color.borderColor.length)
      let borderColor = color.borderColor[i]
      let backgroundColor = color.backgroundColor[i]
      return `background-color: ${backgroundColor}; border-color: ${borderColor};`
    },
  },
}
</script>

<style scoped></style>
