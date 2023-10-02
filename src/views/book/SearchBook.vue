<template>
  <div class="main-container">
    Search Books You want
    <form class="form-container">
      <div class="mb-3" style="width: 200px; margin-right: 4px; flex: 1">
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          v-model="searchedText"
          placeholder="Enter here"
          required
        />
      </div>
      <button
        type="submit"
        class="btn btn-outline-secondary"
        style="height: 40px"
        @click="getSearchedBook"
      >
        Search
      </button>
    </form>
    <div class="book-container flex">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :book="book"
        @click="goToDetail(book)"
      />
    </div>
    <div class="sub-container"></div>
  </div>
</template>

<script>
import axiosInstance from "../../axios/axios";
import BookCard from "../../components/BookCard.vue";

export default {
  name: "SearchBook",
  data() {
    return {
      searchedText: null,
      books: null,
    };
  },
  components: {
    BookCard,
  },
  methods: {
    async getSearchedBook(e) {
      e.preventDefault();
      if (this.searchedText === null || this.searchedText.length === 0) {
        alert("Please type what you want to search");
        return;
      }
      console.log(this.searchedText);
      const resoponse = await axiosInstance.get(
        `books/search/${this.searchedText}`
      );
      if (resoponse.status === 200) {
        this.books = resoponse.data.data;
        console.log(this.books);
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
  margin: 0 8px 8px 8px;
}
.book-container {
  display: flex;
  flex-wrap: wrap;
  background: #f8f8f8;
  justify-content: space-evenly;
}
.form-container {
  display: flex;
  height: 60px;
  margin-right: 4px;
  margin-top: 8px;
}
</style>