<template>
  <nav
    class="navbar navbar-expand-lg sticky-top bg-body-tertiary"
    style="box-shadow: 0px 1px 10px lightgray; margin-bottom:8px;"
  >
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
      <span class="logout" @click="logout">Logout</span>
        <!-- <router-link
          :to="{ name: 'Login' }"
          style="text-decoration: none; color: black"
          >Logout</router-link
        > -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name:'TheNav',
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push({name:'Login'});
    }
  },
}
</script>

