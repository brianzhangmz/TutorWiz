<template>
  <nav
    class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
  >
    <div class="container">
      <a class="navbar-brand float-left" target="_blank">TutorWiz - A Tutor Allocation Tool</a>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-outline-primary" to="/">Sign up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template> 


