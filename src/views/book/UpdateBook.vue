<template>
  <div class="main-container">
    <!-- <p>Book</p> -->
    <form class="form-container" v-if="!loading">
      <!-- {{ book }} -->
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
      <div class="mb-3">
        <label class="form-label">Price</label>
        <input
          type="number"
          class="form-control"
          id="exampleInputPassword1"
          v-model="price"
        />
      </div>
      <!-- @change="changeAuthor($event)" -->
      <label for="cars">Select Authors</label>
      <br>
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
        @click="updateBook()"
      >
        UpdateBook
      </button>
    </form>
  </div>
</template>



<script>
import axiosInstance from "../../axios/axios";

export default {
  name: "UpdateBook",

  data() {
    return {
      name: null,
      description: null,
      publication_year: null,
      price: null,
      authors: null,
      authorsLoading: true,
      selectedAuthors: [],
      loading: true,
      id: null,
      book: {},
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getAuthors();
    this.getBookDetails();
  },
  methods: {
    async getAuthors() {
      const response = await axiosInstance.get("authors");
      this.authors = response.data.data;
      this.authorsLoading = false;
    },
    async getBookDetails() {
      const resoponse = await axiosInstance.get(`books/${this.id}`);
      if (resoponse.status === 200) {
        this.book = resoponse.data.data;
        this.name = this.book.attributes.name;
        this.description = this.book.attributes.description;
        this.publication_year = this.book.attributes.publication_year;
        this.price = this.book.attributes.price;
        this.selectedAuthors =this.book.attributes.authors.map(
          (auth) => auth.id
        );
        this.loading = false;
      }
    },
    changeAuthor(event) {
      if (!this.selectedAuthors.includes(event.target.value))
        this.selectedAuthors.push(event.target.value);
    },
    removeSelectedAuthors(id) {
      this.selectedAuthors = this.selectedAuthors.filter((item) => item !== id);
    },
    async updateBook() {
      const updatedBook = {
        name: this.name,
        description: this.description,
        publication_year: this.publication_year,
        price: this.price,
        authors: this.selectedAuthors,
      };
      try{
        const response = await axiosInstance.put(`/books/${this.id}`,updatedBook);
        this.getBookDetails();
      }catch (e) {
        console.log(e);
      }

    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 2px;
  margin-right: 8px;
}

.form-container {
  background: #f8f8f8;
  padding: 8px 16px;
}

select{
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