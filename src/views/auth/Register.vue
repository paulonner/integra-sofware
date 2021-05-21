<template>
  <div>
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
          type="text"
        />
        <Input
          label="URL de Avatar"
          v-model="form.avatar"
          type="text"
        />
        <Input
          label="Correo"
          :required="true"
          v-model="form.email"
          type="text"
        />
        <Input
          label="Contraseña"
          :required="true"
          v-model="form.password"
          type="password"
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
import SubHeader from '@/components/SubHeader'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { mapMutations } from 'vuex'

export default {
  name: 'Register',
  components: { Input, Button, SubHeader, Icon },
  data: () => ({
    form: {}
  }),
  methods: {
    ...mapMutations([ 'notify', 'auth', 'setUser' ]),
    async submit () {
      try {
        const { data: { accessToken } } = await this.$http.post('/users', this.form)
        this.notify({ type: 'success', text: 'Datos Guardados Exitosamente' })
        this.auth(accessToken)
        this.setUser(JSON.stringify(this.form))
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