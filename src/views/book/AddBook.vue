<template>
  <div class="main-container">
    <p>Add New Book</p>
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
       <div class="row g-3 mb-3">
        <div class="col">
          <label class="form-label">Publication Year</label>
          <input
            type="text"
            class="form-control"
            aria-label="First name"
            v-model="publication_year"
          />
        </div>
        <div class="col">
          <label class="form-label">Genere</label>
          <input
            type="text"
            class="form-control"
            aria-label="Last name"
            v-model="genere"
          />
        </div>
      </div>
      <div class="row g-3 mb-3">
        <div class="col">
          <label class="form-label">Page Number</label>
          <input
            type="text"
            class="form-control"
            aria-label="First name"
            v-model="page_no"
          />
        </div>
        <div class="col">
          <label class="form-label">ISNB</label>
          <input
            type="text"
            class="form-control"
            aria-label="Last name"
            v-model="isbn"
          />
        </div>
      </div>
      <div class="row g-3 mb-3">
        <div class="col">
          <label class="form-label">Price</label>
          <input
            type="text"
            class="form-control"
            aria-label="First name"
            v-model="price"
          />
        </div>
        <div class="col">
          <label class="form-label">Language</label>
          <input
            type="text"
            class="form-control"
            aria-label="Last name"
            v-model="language"
          />
        </div>
      </div>
      <label for="cars">Select Authors</label>
      <select v-if="!authorsLoading" @change="changeAuthor($event)" required>
        <option v-for="author in authors" :key="author.id" :value="author.id">
          {{ author.attributes.name }}
        </option>
      </select>

      <p>Selected Authors:</p>
      <ul
        v-if="selectedAuthors.length > 0"
        style="
          display: flex;
          flex-wrap: wrap;
          background: green;
          padding: 10px 2px;
          background: white;
          list-style-type: none;
        "
      >
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
        @click.prevent="addNewBook"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
import axiosInstance from "../../axios/axios";

export default {
  name: "AddBook",
  data() {
    return {
      name: null,
      description: null,
      publication_year: null,
      genere:null,
      page_no: null,
      isbn: null,
      price: null,
      language: null,
      authors: null,
      authorsLoading: true,
      selectedAuthors: [],
    };
  },
  methods: {
    async addNewBook() {
      if (
        this.name === null ||
        this.description === null ||
        this.publication_year === null ||
        this.genere === null ||
        this.page_no === null ||
        this.isbn === null ||
        this.price === null ||
        this.language === null
      ) {
        alert("Please fill up form");
        return;
      }
      const newBook = {
        name: this.name,
        description: this.description,
        publication_year: this.publication_year,
        genere:this.genere,
        page_no: this.page_no,
        isbn: this.isbn,
        price: this.price,
        language: this.language,
        authors: this.selectedAuthors,
      };
      try {
        const response = await axiosInstance.post("books", newBook);
        this.name = "";
        this.description = "";
        this.publication_year = "";
        this.genere = "";
        this.page_no = "";
        this.isbn = "";
        this.price = "";
        this.language = "";
        this.selectedAuthors = [];
      } catch (e) {
        console.log(e);
      }
    },
    async getAuthors() {
      const response = await axiosInstance.get("authors");
      this.authors = response.data.data;
      this.authorsLoading = false;
    },
    changeAuthor(event) {
      if (!this.selectedAuthors.includes(event.target.value))
        this.selectedAuthors.push(event.target.value);
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
  margin: 0 8px 8px 8px;
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
  margin: 4px 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>