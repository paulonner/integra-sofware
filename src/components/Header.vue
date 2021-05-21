<template>
  <header class="py-3 mb-3 bg-dark">
    <div class="container-fluid align-items-center d-flex justify-content-between">
      <span class="fs-4 fw-bolder company">Integra<span>Software</span></span>
      <div class="d-flex align-items-center" v-if="isAuthenticated">
        <span class="mx-2">{{ currentUser.name }}</span>
        <div class="flex-shrink-0 dropdown">
          <Avatar :avatar="currentUser.avatar" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false" />
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <router-link class="dropdown-item" :to="{ name: 'softwares' }">Lista de Softwares</router-link>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click="signOut">Cerrar Sesión</a></li>
          </ul>
        </div>
      </div>
      <button 
        class="btn btn-outline-light"
        @click="$router.push({ name: 'register' })"
        v-if="!isAuthenticated && $route.name === 'login'">
        REGÍSTRATE
      </button>
      <button 
        class="btn btn-outline-light"
        @click="$router.push({ name: 'login' })"
        v-if="!isAuthenticated && $route.name === 'register'">
        INICIA SESIÓN
      </button>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Avatar from '@/components/Avatar'

export default {
  name: 'Navbar',
  components: { Avatar },
  methods: {
    ...mapMutations([ 'logout' ]),
    signOut (e) {
      e.preventDefault()
      this.logout()
      this.$router.push({ name: 'login'})
    }
  },
  computed: {
    ...mapGetters([ 'isAuthenticated', 'currentUser' ])
  }
}
</script>

<style scoped>
  .company span {
    color: rgb(35, 255, 156)
  }
</style>