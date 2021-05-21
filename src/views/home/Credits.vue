<template>
  <div>
    <Breadcrumb :items="breadcrumbs" />
    <SubHeader>
      <h3>Buscar créditos grupales</h3>
      <Button @click="$router.push({ name: 'inspect' })">
        <Icon mdi="mdi-magnify" />
        INSPECCIONAR
      </Button>
    </SubHeader>
    <Table 
      :headers="headers" 
      :items="items" 
      :header="true"
    >
      <template v-slot:quality="{ item }">
        {{ `${item.quality}%` }}
      </template>

      <template v-slot:status="{ item }">
        <span :class="status(item.status)">
          {{ item.status }}
        </span>
      </template>

      <template v-slot:actions>
        <Icon mdi="mdi-download-box-outline" @click="downloadFile" />
      </template>
    </Table>
  </div>
</template>

<script>
import Table from '@/components/Table'
import Breadcrumb from '@/components/Breadcrumb'
import SubHeader from '@/components/SubHeader'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export default {
  name: 'Credits',
  components: { Table, Breadcrumb, SubHeader, Button, Icon },
  props: {
    msg: String
  },
  data: () => ({
    headers: [
      { name: 'Archivo', value: 'file_name' },
      { name: 'Expedición', value: 'expedition' },
      { name: '% Calidad de información', value: 'quality', align: 'center' },
      { name: 'Estatus', value: 'status' },
      { name: 'Finalización', value: 'finish' },
      { name: 'Usuario', value: 'user' },
      { name: 'Acciones', value: 'actions', align: 'center' },
    ],
    items: [],
    breadcrumbs: [
      { name: 'Home', url: 'softwares' },
      { name: 'Buscar créditos grupales', active: true }
    ]
  }),
  methods: {
    status (status) {
      if (status === 'Finalizado') return 'text-primary'
      if (status === 'En proceso') return 'text-warning'
      if (status === 'Rechazado') return 'text-danger'
    },
    async getCredits () {
      try {
        const { data } = await this.$http.get('/credits')
        console.log(data);
        this.items = data
      } catch (err) {
        console.log(err)
      }
    },
    downloadFile () {
      alert('This should download file')
    }
  },
  created () {
    this.getCredits()
  }
}
</script>

<style>

</style>