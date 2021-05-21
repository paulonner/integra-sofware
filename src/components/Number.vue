<template>
  <div class="number">
    {{ number | parseNumber }}
  </div>
</template>

<script>
export default {
  name: 'Number',
  props: [ 'number' ],
  filters: {
    parseNumber (value) {
      return value < 10 ? `0${value}` : value
    }
  }
}
</script>

<style>
  .number {
    border: 3px#1DB575 solid;
    padding: 5px 8px;
    display: inline;
  }
</style>