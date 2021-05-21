<template>
  <button 
    type="button" 
    class="btn btn-dark button d-flex align-items-center"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style>
  .icon {
    margin-right: 8px;
  }

  .button {
    border: 3px#1DB575 solid;
    font-size: 12px;
    font-weight: 900;
  }
</style>