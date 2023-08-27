<template>
  <div class="contianer">
    <div class="top" @click="toogleForm()">
      <p>Update Author Details</p>
    </div>
    <div class="bottom" v-if="isShown">
      <form class="form-container">
        <div class="mb-3">
          <label class="form-label">Author Name</label>
          <label class="btn btn-outline-secondary mx-2">{{
            author.attributes.name
          }}</label>
        </div>
        <div class="mb-3">
          <label class="form-label">New Author Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="name"
          />
        </div>
        <button @click.prevent="updateAuthorInfo" class="btn btn-secondary">
          Update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axiosInstance from "../../../axios/axios";
export default {
  name: "UploadProfileInfo",
  props: ["author"],
  data() {
    return { isShown: false, name: null };
  },
  methods: {
    toogleForm() {
      this.isShown = !this.isShown;
    },
    async updateAuthorInfo() {
      console.log(this.name);
      const updatedUser = {
        name: this.name,
      };
      const resoponse = await axiosInstance.put(
        `authors/${this.author.id}`,
        updatedUser
      );
      console.log(resoponse);
      this.$emit("refresh");
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/show_hide.css";
.container {
  background: grey;
}
</style>