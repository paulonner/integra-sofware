<template>
  <div>
    <breadcrumb :items="breadcrumbs" />
    <SubHeader>
      <div class="d-flex align-center">
        <Icon mdi="mdi-magnify" color="green" :size="24" />
        <h3 class="mx-2">Inspeccionar</h3>
      </div>
    </SubHeader>
    <Search v-model="search"/>
    <p v-show="search.length" class="results">
      {{ search }} <span>{{ `(${listClients.length} resultados)` }}</span>
    </p>
    <Table
      :headers="headers" 
      :items="listClients" 
      :header="true"
      to="changes"
    >
      <template v-slot:name="{ item }">
        <div class="d-flex align-items-center">
          <Avatar :avatar="item.avatar" />
          <span>{{ item.name }}</span>
        </div>
      </template>
    </Table>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Table from '@/components/Table'
import SubHeader from '@/components/SubHeader'
import Search from '@/components/Search'
import Icon from '@/components/Icon'
import Avatar from '@/components/Avatar'

export default {
  name: 'Inspect',
  components: { Breadcrumb, Table, SubHeader, Search, Icon, Avatar },
  data: () => ({
    breadcrumbs: [
      { name: 'Home', url: 'softwares' },
      { name: 'Buscar créditos grupales', url: 'credits' },
      { name: 'Inspeccionar', url: 'inspect' , active: true }
    ],
    headers: [
      { name: 'Cliente', value: 'name', width: '400px' },
      { name: 'RFC', value: 'rfc' }
    ],
    items: [],
    search: ''
  }),
  methods: {
    async getClients () {
      const { data } = await this.$http.get('clients')
      this.items = data
    }
  },
  computed: {
    listClients () {
      return this.items.filter(item => 
        item.name.toLowerCase().includes(this.search.toLowerCase()) ||
        item.rfc.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  created () {
    this.getClients()
  }
}
</script>

<style scoped>
  .results {
    font-weight: 900;
    font-size: 18px;
    padding-top: 15px;
  }

  .results span {
    font-style: italic;
  }
</style>