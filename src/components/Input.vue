<template>
  <div class="mb-3">
    <label class="form-label">{{ label }}</label>
      <input 
        :type="type" 
        class="form-control" 
        :required="required"
        v-on:input="$emit('input', $event.target.value)"
      >
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
    required: {
      type: Boolean,
      default: false
    },
    type: String
  }
}
</script>

<style>

</style>