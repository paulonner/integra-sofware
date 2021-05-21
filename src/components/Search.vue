<template>
  <div>
    <input
      class="search"
      type="text" 
      v-on:input="$emit('input', $event.target.value)"
      placeholder="Nº Cliente, crédito, ID..."
    >
  </div>
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style>
  .search {
    width: 100%;
    border: 2px solid rgb(79, 87, 111);
    background-color: inherit;
    padding: 1em;
    font-weight: 700;
    border-radius: 12px;
    color: white;
  }
</style>