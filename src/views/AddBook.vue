<template>
  <div class="main-container">
    Add book
    <form class="form-container">
      <div class="mb-3">
        <label class="form-label">Book Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="name"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Description</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          v-model="description"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Publication Year</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          v-model="publication_year"
        />
      </div>
      <button
        type="submit"
        class="btn btn-outline-secondary"
        @click="addNewBook"
      >
        Add
      </button>
    </form>
     <!-- Name:{{ name }} Description:{{ description }} Publication:{{publication_year}} -->
  </div>
</template>

<script>
import axiosInstance from "../axios/axios";

export default {
  name: "AddBook",
  data() {
    return {
      name: null,
      description: null,
      publication_year: null,
    };
  },
  methods: {
    async addNewBook(event) {
      event.preventDefault();
      console.log("button clicked");
      const newBook = {
        name: this.name,
        description: this.description,
        publication_year: this.publication_year,
      };
      try {
        const response = await axiosInstance.post("books", newBook);
        console.log(response.data);
        this.name = "";
        this.description = "";
        this.publication_year = "";
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.main-container {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.form-container {
  background: #f8f8f8;
  padding: 8px 16px;
}
</style>