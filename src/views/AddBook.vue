<template>
  <div class="main-container">
    <!-- <p>Book</p> -->
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
      <!-- @change="changeAuthor($event)" -->
      <label for="cars">Select Authors</label>
      <select v-if="authorsLoading" @change="changeAuthor($event)" required>
        <option v-for="author in authors" :key="author.id" :value="author.id">
          {{ author.attributes.name }}
        </option>
      </select>

      <p>Selected Authors:</p>
      <ul v-if="selectedAuthors.length>0" style="display: flex; flex-wrap: wrap; background:green;padding:10px 2px;background:white;">
        <li v-for="item in selectedAuthors" :key="item">
          <p @click="removeSelectedAuthors(item)" class="name-card">
            {{ authors.find((i) => item == i.id).attributes.name }}
          </p>
        </li>
      </ul>
      <br />
      <button
        type="submit"
        class="btn btn-outline-secondary"
        @click="addNewBook"
      >
        Add
      </button>
      {{ selectedAuthorsName }}

      <!-- {{ selectedAuthors ? selectedAuthors: "chaia" }} -->
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
      authors: null,
      authorsLoading: false,
      selectedAuthors: [],
    };
  },
  methods: {
    async addNewBook(event) {
      event.preventDefault();
      console.log("button clicked");
      if (
        this.name === null ||
        this.description === null ||
        this.publication_year === null
      ) {
        alert("Please fill up form");
      }
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
        this.selectedAuthors =[];
      } catch (e) {
        console.log(e);
      }
    },
    async getAuthors() {
      const response = await axiosInstance.get("authors");
      console.log("getAuthors-------->>>>>");
      console.log(this.authors);
      this.authors = response.data.data;
      console.log("getAuthors-------->>>>>");
      console.log(this.authors);
      this.authorsLoading = true;
    },
    changeAuthor(event) {
      if (!this.selectedAuthors.includes(event.target.value))
        this.selectedAuthors.push(event.target.value);
      // const matchAuthor = this.authors.find((author)=>author.id === event.target.value);
      // this.selectedAuthorsName = matchAuthor.attributes.name;
    },
    removeSelectedAuthors(id) {
      this.selectedAuthors = this.selectedAuthors.filter((item) => item !== id);
    },
  },
  mounted() {
    this.getAuthors();
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 2px;
}
.form-container {
  background: #f8f8f8;
  padding: 8px 16px;
}
select {
  padding: 8px;
  margin-left: 12px;
}
.name-card {
  padding: 4px 8px;
  /* border: 1px solid grey; */
  border-radius: 4px;
  margin: 0px 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>