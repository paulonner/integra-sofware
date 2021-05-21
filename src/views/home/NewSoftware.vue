<template>
  <div>
    <Breadcrumb :items="breadcrumbs" />
    <SubHeader>
      <div class="d-flex">
        <Icon mdi="mdi-check-box-outline" color="green" :size="24" />
        <h3>Nuevo Software</h3>
      </div>
    </SubHeader>
    <div class="form">
      <form @submit.prevent="submit">
        <Input
          label="Nombre"
          :required="true"
          v-model="form.name"
        />
        <Input
          label="Tipo de crédito"
          :required="true"
          v-model="form.type"
        />
        <Button type="submit">
          GUARDAR
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input'
import Breadcrumb from '@/components/Breadcrumb'
import SubHeader from '@/components/SubHeader'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { mapMutations } from 'vuex'

export default {
  name: 'NewSoftware',
  components: { Input, Breadcrumb, Button, SubHeader, Icon },
  data: () => ({
    form: {
      name: ''
    },
    breadcrumbs: [
      { name: 'Home', url: 'softwares' },
      { name: 'Nuevo Software', active: true }
    ]
  }),
  methods: {
    ...mapMutations([ 'notify' ]),
    async submit () {
      try {
        await this.$http.post('/softwares', this.form)
        this.notify({ type: 'success', text: 'Datos Guardados Exitosamente' })
        this.$router.push({ name: 'softwares' })
      } catch (err) {
        this.notify({ type: 'danger', text: 'Error al Guardar Datos' })
      }
    }
  }
}
</script>

<style scoped>
  .form {
    max-width: 40vh;
    margin: auto;
  }
</style>