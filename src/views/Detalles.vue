<template>
    <div class="colorines" style="padding-bottom: 14.8%">
        <div class="p-5 text-left">
            <router-link to="/" class="btn btn-warning" style="justify">atras</router-link>
            <router-view/>
            <div class="container pt-5 bg-white text-left">
                <h5><strong>{{detalles.compañia}}</strong></h5>
                <h6>{{detalles.Ubicacion}}</h6>
                <hr>
                <h5>{{detalles.Posicion}}</h5>
                <hr>
                <h5>horario: {{detalles.Tipo}}</h5>
                <p>{{detalles.Descripcion}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .colorines{
    background: #6a11cb;
    background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1))
  }
</style>

<script>
import { mapState } from 'vuex'
export default {
    name:'Detalles',
    computed:{
        ...mapState(['detalles'])
    }
}
</script>