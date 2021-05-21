<template>
  <div>
    <span>Listado de softwares</span>
    <SubHeader>
      <div class="d-flex">
        <Icon mdi="mdi-inbox-full-outline" color="green" :size="24" />
        <h3>Listado de softwares</h3>
      </div>
      <Button @click="$router.push({ name: 'newSoftware' })">
        <Icon mdi="mdi-plus" color="green"/>
        AGREGAR NUEVO
      </Button>
    </SubHeader>
    <Table
      :headers="headers" 
      :items="items"
      to="credits"
      :header="false"
    >
      <template v-slot:id="{ item }">
        <Number :number="item.id" />
      </template>

    </Table>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Table from '@/components/Table'
import Number from '@/components/Number'
import SubHeader from '@/components/SubHeader'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export default {
  name: 'Softwares',
  components: { Table, Number, SubHeader, Button, Icon },
  data: () => ({
    headers: [
      { name: 'number', value: 'id', width: '80px' },
      { name: 'name', value: 'name'},
      { name: 'type', value: 'type' }
    ],
    items: []
  }),
  methods: {
    ...mapMutations([ 'notify' ]),
    async getSoftwareList () {
      try {
        const { data } = await this.$http.get('/softwares')
        this.items = data
      } catch (err) {
        this.notify({ type: 'danger', text: 'Error al cargar lista de Softwares'})
      }
    }
  },
  created () {
  },
  mounted () {
     this.getSoftwareList()
  }
}
</script>