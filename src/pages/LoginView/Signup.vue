<template>
  <div class="vue-tempalte">
    <navi></navi>

    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <div class="vue-tempalte">
            <form @submit.prevent="signup">
              <h3>Sign Up</h3>

              <div class="form-group">
                <label>Full Name</label>
                <input
                  v-model="username"
                  placeholder="username"
                  type="text"
                  class="form-control form-control-lg"
                />
              </div>

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
                  placeholder="password"
                  type="password"
                  class="form-control form-control-lg"
                />
              </div>

              <button type="submit" class="btn btn-dark btn-lg btn-block">
                Sign Up
              </button>

              <p class="forgot-password text-right">
                Already registered
                <router-link :to="{ name: 'login' }">sign in?</router-link>
              </p>
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
import Header from "@/components/LoginNavibar/LoginTabBar.vue";
import munkres from "munkres-js";

export default {
  created() {
    console.log(
      "munkres:" +
        munkres([
          [100, 100, 0, 0, 0, 100, 100],
          [100, 100, 0, 0, 0, 100, 100],
          [0, 0, 1, 1, 1, 100, 100],
          [0, 0, 1, 1, 1, 100, 100],
          [100, 100, 0, 0, 0, 1, 100],
          [100, 100, 0, 0, 0, 1, 100],
          [100, 100, 0, 0, 0, 1, 100],
          [100, 100, 0, 0, 0, 1, 100],
          [100, 100, 100, 100, 100, 100, 1],
          [100, 100, 100, 100, 100, 100, 1],
        ])
    );
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    navi: Header,
  },
  methods: {
    //sign up logic
    signup() {
      if (this.email != "" && this.password != "" && this.username != "") {
        // sign up with firebase
        try {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password);
          this.$router.replace({ name: "main" });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
