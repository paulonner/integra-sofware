<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
    <notify />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Notify from '@/components/Notify'

export default {
  name: 'App',
  components: { Header, Notify }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: black;
    color: white;
    height: 100%;
  }

  body, html {
    background: black;
  }

</style>
