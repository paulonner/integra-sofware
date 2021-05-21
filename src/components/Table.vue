<template>
  <div>
    <table class="table table-dark">
      <thead v-if="header">
        <tr>
          <th v-for="(header, index) in headers" :key="index" :style="`text-align: ${header.align}`">
            {{ header.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="(header, index) in headers" :key="index" :style="`width: ${header.width}; text-align: ${header.align};`">
            <slot :name="header.value" :item="item">
              {{ item[header.value] }}
            </slot>
          <td @click="$router.push({ name: to })">
          </td>
          <td class="text-end" @click="$router.push({ name: to })" v-if="to">
            <Icon mdi="mdi-chevron-right icon" :size="24" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center" v-show="!items.length">
      No se encontraron resultados de la búsqueda
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'Table',
  components: { Icon },
  props: {
    header: {
      type: Boolean,
      default: true
    },
    headers: Array,
    items: Array,
    to: String
  }
}
</script>

<style scoped>
  table, thead{
    border-collapse: separate;
    border-spacing: 0 .6em;
  }

  th:first-child, td:first-child {
    border-left-style: solid;
    border-top-left-radius: 10px; 
    border-bottom-left-radius: 10px;
  }

  th:last-child, td:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 10px; 
    border-top-right-radius: 10px; 
  }

  tr, th {
    background: none;
  }

  th, td {
    padding: 1em 1em 1em 1.5em;
    border-style: none;
    vertical-align: middle;
  }

  .icon {
    cursor: pointer;
  }
</style>