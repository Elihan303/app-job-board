import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
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
      }
    }
  },
  actions: {
    guardarUsuario({commit}, payload){
      localStorage.setItem('token', payload)
      commit('obtenerUsuario')
    }
  },
  modules: {
  }
})
