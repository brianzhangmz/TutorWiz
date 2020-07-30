<template>
  <nav
    class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
  >
    <div class="container">
      <div class="logo">
        <a href="#" class="simple-text">
          Tutor Wiz - A tool to allocate tutors
        </a>
      </div>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link class="btn btn-outline-primary" to="/login"
            >Sign in</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="btn btn-outline-primary" to="/"
            >Sign up</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
