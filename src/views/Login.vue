<template>
  <section class="vh-100 gradient-custom">
    <form @submit.prevent="login">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem">
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Inicio</h2>
                  <p class="text-white-50 mb-5">
                    Por favor entra tu correo y contraseña
                  </p>

                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="typeEmailX">Correo</label>
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      placeholder="Correo"
                      v-model="user.email"
                    />
                  </div>

                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="typePasswordX"
                      >Contraseña</label
                    >
                    <input
                      type="password"
                      id="typePasswordX"
                      class="form-control form-control-lg"
                      placeholder="Contraseña"
                      v-model="user.contraseña"
                    />
                  </div>
                  <button
                    class="btn btn-outline-light btn-lg px-5 mb-2"
                    type="submit"
                  >
                    Acceder
                  </button>
                  <div v-if="mensaje !== ''">
                    <p>{{ mensaje }}</p>
                  </div>

                  <p class="small mb-3 pb-lg-2">
                    <a class="text-white-50" href="#!"
                      >olvidadeste tu contraseña?</a
                    >
                  </p>

                  <div>
                    <p class="mb-0">
                      No tienes una cuenta?
                      <a href="#!" class="text-white-50 fw-bold">Registrate</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      user: { email: "", contraseña: "" },
      mensaje: "",
    };
  },
  methods: {
    ...mapActions(['guardarUsuario']),
    login() {
      //console.log(this.user);
      this.axios.post('/login', this.user)
        .then(res => {
          console.log(res.data);
          const token = res.data.token;
          this.guardarUsuario(token);
        })
        .catch(err => {
          //console.log(err.response);
          this.mensaje = err.response.data.mensaje;
        });
    },
  },
};
</script>

<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
}
</style>