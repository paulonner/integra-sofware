<template>
  <div 
    id="liveToast" 
    :class="`toast align-items-center text-white bg-${notify.type} border-0 position-absolute top-0 end-0 mt-5 mx-2`" 
    role="alert" 
    aria-live="assertive" 
    aria-atomic="true"
  >
    <div class="d-flex">
      <div class="toast-body">
        {{ notify.text }}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Notify',
  data: () => ({
    toast: {}
  }),
  methods: {
    ...mapMutations([ 'setToast' ])
  },
  computed: {
    ...mapState( ['notify'] )
  },
  mounted () {
    const liveToast = document.getElementById('liveToast')
    this.setToast(new Toast(liveToast, {}))
  }
}
</script>