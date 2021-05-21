<template>
  <span :class="`mdi ${mdi} mdi-${size}px icon ${color}`" @click="$emit('click')"></span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    mdi: {
      type: String,
      required: true
    },
    color: {
      type: String
    },
    size: {
      type: Number,
      default: 18
    }
  }
}
</script>

<style scoped>
  .green {
    color: #1DB575;
  }
</style>