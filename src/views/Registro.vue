<template>
  <section class="vh-200 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <b-form @submit.prevent="registro()">
                  <h2 class="fw-bold mb-2 text-uppercase">Registro</h2>
                  <b-form-group
                    class="my-3"
                    label="Nombre:"
                    label-for="input-1"
                  >
                    <b-form-input
                      placeholder="Example: Jhon Cena"
                      required
                      v-model="user.nombre"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="my-3"
                    label="Correo:"
                    label-for="input-2"
                  >
                    <b-form-input
                      type="email"
                      placeholder="example@example.com"
                      required
                      v-model="user.email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group class="my-3" label="Contraseña:">
                    <b-form-input
                      type="password"
                      placeholder=""
                      v-model="user.contraseña"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group class="my-3" label="Telefono:">
                    <b-form-input
                      placeholder="Example: 829-000-0000"
                      required
                      v-model.number="user.telefono"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group class="my-3" label="Cedula:">
                    <b-form-input
                      placeholder="Example: 40230603653"
                      v-model.number="user.cedula"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-button type="submit">Registraser</b-button>
                  <div v-if="mensaje !== ''">
                    <p>{{ mensaje }}</p>
                  </div>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "../router/index";
export default {
  data() {
    return {
      user: {
        cedula: "",
        nombre: "",
        email: "",
        telefono: "",
        contraseña: "",
        tipo_usuario: "",
      },
      mensaje: "",
    };
  },
  methods: {
    registro() {
      console.log(this.user);
      this.axios.post("/user", this.user)
        .then((res) => {
            console.log(res);
            this.mensaje= 'Cuenta creada';
            router.push({name:'Login'})
        })
        .catch((err) => {
          console.log(err.response.data.mensaje);
          this.mensaje= err.response.data.mensaje;
        });

      this.user = {
        cedula: "",
        nombre: "",
        email: "",
        telefono: "",
        contraseña: "",
        tipo_usuario: "",
      };
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