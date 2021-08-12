<template>
  <div class="main-container fullscreen">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-7">
          <div class="text-center">
            <h1 class="h2">Create account</h1>
            <p class="lead">Start doing things for free, in an instant</p>
            <button class="btn btn-lg btn-block btn-primary">
              <img
                alt="Google"
                src="assets/img/logo-google.svg"
                class="rounded align-top mr-2"
              />Continue with Google
            </button>
            <hr />
            <form @submit.prevent="signUP">
              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="User Name"
                  v-model="form.username"
                />
                 <div class="text-left" v-if="error.username">
                  <small v-for="error_item in error.username" :key="error_item">{{error_item}}</small>
                </div>
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="email"
                  placeholder="Email Address"
                  v-model="form.email"
                />
                <div class="text-left" v-if="error.email">
                  <small v-for="error_item in error.email" :key="error_item">{{error_item}}</small>
                </div>
              </div>
              <div class="form-group">
                <input
                  id="password"
                  class="form-control"
                  type="password"
                  placeholder="Password"
                  v-model="form.password1"
                />
                 <div class="text-left" v-if="error.password1">
                  <small v-for="error_item in error.password1" :key="error_item">{{error_item}}</small>
                </div>
              </div>

              <div class="form-group">
                <input
                 id="confirm_password"
                  class="form-control"
                  type="password"
                  placeholder="Repeat Password"
                  v-model="form.password2"
                />
                 <div class="text-left" v-if="error.password2">
                  <small v-for="error_item in error.password2" :key="error_item">{{error_item}}</small>
                </div>
              </div>
              <button
                class="btn btn-lg btn-block btn-primary"
                role="button"
                type="submit"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthService from "@/services/AuthService";

export default {
  name: "Signup",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password1: "",
        password2: "",
      },
      error: {
        username: null,
        email: null,
        password1: null,
        password2: null,
      },
    };
  },

  methods: {
    signUP() {
    this.error= {
        username: null,
        email: null,
        password1: null,
        password2: null,
      }
      AuthService.signUP(this.form)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
         for(var k in e.response.data){
          this.error[k]=e.response.data[k]
          console.log(k)
        }
        });
    },
  },
};
</script>
