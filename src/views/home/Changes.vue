<template>
  <div>
    <breadcrumb :items="breadcrumbs" />
    <SubHeader>
      <div class="d-flex">
        <Icon mdi="mdi-magnify" color="green" :size="24" />
        <h3>Control de cambios</h3>
      </div>
    </SubHeader>
    <Table
      :headers="headers" 
      :items="items"
    >
      <template v-slot:id="{ item }">
        <Number :number="item.id" />
      </template>

    </Table>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Number from '@/components/Number'
import Table from '@/components/Table'
import SubHeader from '@/components/SubHeader'
import Icon from '@/components/Icon'
import { mapMutations } from 'vuex'

export default {
  name: 'Changes',
  components: { Breadcrumb, Table, Number, SubHeader, Icon},
  data: () => ({
    headers: [
      { name: '', value: 'id' },
      { name: 'Fecha', value: 'date' },
      { name: 'Archivo', value: 'file'},
      { name: 'Cambios', value: 'description' }
    ],
    items: [],
    breadcrumbs: [
      { name: 'Home', url: 'softwares' },
      { name: 'Buscar créditos grupales', url: 'credits' },
      { name: 'Inspeccionar', url: 'inspect' },
      { name: 'Control de cambios', active: true },
    ]
  }),
  methods: {
    ...mapMutations([ 'notify' ]),
    async getChanges () {
      try {
        const { data } = await this.$http.get('/changes')
        this.items = data
      } catch (err) {
        this.notify({ type: 'danger', text: 'Error al Obtener Lista de Cambios' })
      }
    }
  },
  created () {
    this.getChanges()
  }
}
</script>