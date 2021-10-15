import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    userDB:''
  },
  mutations: {
    obtenerUsuario(state, payload){
      state.token= payload;
      if(payload===''){
        state.userDB='';
      }else{
        state.userDB= decode(payload);
        router.push({name:'Home'})
      }
    }
  },
  actions: {
    guardarUsuario({commit}, payload){
      localStorage.setItem('token', payload)
      commit('obtenerUsuario', payload)
    },
    cerrarSeccion({commit}){

      commit('obtenerUsuario', '')
      localStorage.removeItem('token')
      router.push({name:'Login'})
    }
  },
  getters:{
    estadoActivo: state=> !!state.token
  }
})
