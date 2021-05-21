<template>
  <div>
    <a class="d-block link-dark text-decoration-none dropdown-toggle">
      <img :src="avatar || image" alt="mdo" width="32" height="32" class="rounded-circle">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  data: () => ({
    image: require('../assets/logo.png')
  }),
  props: {
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>