<template >
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
    rel="stylesheet"
  />

  <div class="background">
    <div class="shape"></div>
    <div class="shape"></div>
  </div>
  <form class="body">
    <h3>Login</h3>

    <label for="username">Username</label>
    <input type="text" placeholder="Email" v-model="email" />

    <label for="password">Password</label>
    <input
      type="password"
      placeholder="Password"
      id="password"
      v-model="password"
    />
    <br />
    <button @click.prevent="login">Log In</button>

    <router-link class="nav-link" :to="{ name: 'Register' }">
      Create Account</router-link
    >
  </form>
</template>

<script>
import axiosInstance from "../axios/axios";

export default {
  name: "TheLogin",
  data() {
    return {
      email: "kevin@gmail.com",
      password: "kevin",
    };
  },
  methods: {
    async login() {
      if (
        this.email === "" ||
        this.email === null ||
        this.password === "" ||
        this.password === null
      ) {
        alert("Please enter the credentials");
        return;
      }
      try {
        const data = {
          email: this.email,
          password: this.password,
        };
        const resoponse = await axiosInstance.post("login", data);
        if (resoponse.status === 200) {
          localStorage.setItem("adminToken", resoponse.data.token);
          this.$router.push({ name: "Home" });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style media="screen" scoped>
@import "../assets/css/login_register.css";
</style>


