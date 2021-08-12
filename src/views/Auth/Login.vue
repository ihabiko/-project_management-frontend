<template>
    <div class="main-container fullscreen">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 col-md-7">
            <div class="text-center">
              <h1 class="h2">Welcome Back 👋</h1>
              <p class="lead">Log in to your account to continue</p>
              <form  @submit.prevent="logIN">
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
                  v-model="form.password"/>
                  <div class="text-right">
                    <small><a href="#">Forgot password?</a>
                    </small>
                  </div>
              </div>
                <button class="btn btn-lg btn-block btn-primary" role="button" type="submit">
                  Log in
                </button>
                <small>Don't have an account yet? <router-link to="/create-account">Create one</router-link>
                </small>
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
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
      error: {
        username: null,
        email: null,
        password: null,
      },
    };
  },

  methods: {
    logIN() {
    this.error= {
        username: null,
        email: null,
        password: null,
      }
      AuthService.logIN(this.form)
        .then((response) => {
          var user = { id:response.data.user.pk, name:response.data.user.username,session:response.data.token };
          this.$cookies.set('user',user);
        })
        .catch((e) => {
         for(var k in e.response.data){
          this.error[k]=e.response.data[k]
        }
        });
    },
  },
};
</script>
