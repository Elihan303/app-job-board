<template>
  <div>
    <b-navbar  class="colorines" toggleable="sm" type="dark" variant="info">
      <b-navbar-brand href="#">Job</b-navbar-brand>

  

   

        <!-- Right aligned nav items -->
    
       
     

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
       
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["cerrarSeccion"]),
  },
  computed: {
    ...mapGetters(["estadoActivo"]),
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

 .colorines{
    background: #6a11cb;
    background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1))
  }
</style>