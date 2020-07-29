<template>
  <div class="vue-tempalte">
    <navi></navi>

    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <div class="vue-tempalte">
            <form @submit.prevent="login">
              <h3>Sign In</h3>

              <div class="form-group">
                <label>Email address</label>
                <input
                  v-model="email"
                  placeholder="email"
                  type="email"
                  class="form-control form-control-lg"
                />
              </div>

              <div class="form-group">
                <label>Password</label>
                <input
                  v-model="password"
                  type="password"
                  placeholder="password"
                  class="form-control form-control-lg"
                />
              </div>

              <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

              <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
              </p>

              <div class="social-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import Header from "@/components/LoginTabBar.vue";

export default {
  data() {
    return {
      isLoging: false,
      email: "",
      password: ""
    };
  },
  components: {
    navi: Header
  },
  methods: {
    //login logic
    async login() {
      if (this.email != "" && this.password != "") {
        // log in with firebase
        try {
          const user = await firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password);
          console.log(user);
          this.$router.push("/main");
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};
</script>
