<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
    >
      <div class="container">
        <a
          class="navbar-brand float-left"
          href="https://www.positronx.io"
          target="_blank"
          >TutorWiz - A Tutor Allocation Tool</a
        >
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/"
              >Sign up</router-link
            >
          </li>
        </ul>
        <divSignOut></divSignOut>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import Header from "./components/TopHeader";

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  components: {
    divSignOut: Header,
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        this.$router.push("/login");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
