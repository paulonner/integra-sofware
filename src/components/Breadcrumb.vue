<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="(item, index) in items" :key="index">
          <router-link :to="{ name: item.url }" v-if="!item.active">{{ item.name }}</router-link>
          <a v-else>{{ item.name }}</a>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
  .breadcrumb-item a {
    font-size: 14px;
    color: white;
  }
</style>