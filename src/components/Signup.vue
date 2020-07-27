<template>
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
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      isSigning: false,
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    //sign up logic
    signup() {
      if (this.email != "" && this.password != "" && this.username != "") {
        // refresh the isSigining state to true
        //this.isSigning = true;

        // sign up with firebase
        try {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password);

          //this.isSigning = false;
          this.$router.replace({ name: "main" });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
