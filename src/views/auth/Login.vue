<template>
  <main class="form-signin text-center">
    <form @submit.prevent="singIn">
      <h1 class="h3 mb-3 fw-normal">Inicia Sesión</h1>
      <Alert ref="notify"/>
      <div class="input">
        <input 
          type="email" 
          v-model="login.email" 
          class="form-control" 
          placeholder="Correo"
          required
        >
        <input 
          type="password" 
          v-model="login.password" 
          class="form-control" 
          placeholder="Contraseña"
          required
        >
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit" :disabled="loading">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-show="loading"></span>
        INICIA SESIÓN
      </button>
    </form>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import Alert from '@/components/Alert'

export default {
  name: 'Login',
  components: { Alert },
  data: () => ({
    login: {
      email: '',
      password: ''
    },
    alert: {},
    loading: false
  }),
  methods: {
    ...mapMutations([ 'auth', 'setUser' ]),
    async singIn () {
      try {
        this.loading = true
        const { data: { accessToken } } = await this.$http.post('/signin', this.login)
        const { data: [ user ] } = await this.$http.get(`users/?email=${this.login.email}`)
        this.auth(accessToken)
        this.setUser(JSON.stringify(user))
        this.$router.push({ name: 'softwares' })
      } catch (err) {
        this.$refs.notify.show('success', 'Credenciales Incorrectas')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>
  .form-signin {
    width: 100%;
    max-width: 450px;
    padding: 15px;
    margin: auto;
  }

  .input input {
    padding: 15px;
    margin-bottom: 10px;
  }
</style>