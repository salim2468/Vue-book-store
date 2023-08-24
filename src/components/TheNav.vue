<script>
export default {
  name: "TheNav",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'Home' }"
        >Book Store</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'About' }">
              About</router-link
            >
          </li>
        </ul>
      </div>
      <div>
        <router-link
          :to="{ name: 'Login' }"
          style="text-decoration: none; color: black"
          >Logout</router-link
        >
      </div>
    </div>
  </nav>
</template>

