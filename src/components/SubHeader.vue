<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SubHeader'
}
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    margin: 12px 0;
    border-bottom: 2px solid rgba(28, 31, 37);
  }

  h3 {
    font-weight: 900;
  }
</style>