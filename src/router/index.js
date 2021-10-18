import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {requireAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import( '../views/Login.vue')
    },
    {
      path: '/registro',
      name: 'Registro',
      component: () => import( '../views/Registro.vue')
    },
    {
      path: '/detalles',
      name: 'Detalles',
      component: () => import( '../views/Detalles.vue')
    }


  ]
}) 

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

  if(rutaProtegida && store.state.token === ''){
    // console.log(store.state.token);
    next({name: 'Login'})
  }else{
    next()
  }

})




export default router
