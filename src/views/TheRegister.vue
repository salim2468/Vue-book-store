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
  <form class="body" style="height: 600px">
    <h3>Register</h3>
    <label for="username">Name</label>
    <input type="text" placeholder="Name" v-model="name" />

    <label for="username">Email</label>
    <input type="text" placeholder="Email" v-model="email" />
    <p class="error">{{ emailError }}</p>
    <label for="password">Password</label>
    <input
      type="password"
      placeholder="Password"
      id="password"
      v-model="password"
    />
    <span class="error">{{ passwordError }}</span>
    <button @click.prevent="register">Create</button>
    <router-link class="nav-link" :to="{ name: 'Login' }">
      Already Have an Account</router-link
    >
  </form>
</template>



<script>
import axiosInstance from "../axios/axios";

export default {
  name: "TheRegister",
  data() {
    return {
      name: "Kevin",
      email: "kevin@gmail.com",
      password: "kevin",
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    async register() {
      if (
        this.name === "" ||
        this.name === null ||
        this.email === "" ||
        this.email === null ||
        this.password === "" ||
        this.password === null
      ) {
        alert("Please enter the credentials");
        return;
      }
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      try {
        const resoponse = await axiosInstance.post("register", data);
        if (resoponse.status === 200) {
          this.$router.push({ name: "Login" });
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          if (error.response.data.errors.email) {
            // alert(error.response.data.errors.email);
            this.emailError = error.response.data.errors.email.join(", ");
          }
          if (error.response.data.errors.password) {
            this.passwordError = error.response.data.errors.password.join(", ");
          }
        } else {
          console.log("EEE", error);
        }
      }
    },
  },
};
</script>

<style media="screen" scoped>
@import "../assets/css/login_register.css";
</style>


