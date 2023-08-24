
<template>
  <div class="home-container flex">
    <h4>Home component</h4>
    Find the Best Book You like.
    <hr />
    <h6>Books</h6>
    <span v-if="!loading">Total count ({{ books?.length }})</span>
    <div class="book-container flex">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :book="book"
        @click="goToDetail(book)"
      />
    </div>

    <hr />

    <h6>Authors</h6>
    <span v-if="!loadingAuthor">Total count ({{ authors?.length }})</span>
    <div class="book-container flex" >
      <AuthorCard
        v-for="author in authors"
        :key="author.id"
        :author="author"
      />
    </div>
  </div>
</template>

<script>
import axiosInstance from "../axios/axios";
import BookCard from "../components/BookCard.vue";
import AuthorCard from "../components/AuthorCard.vue";

export default {
  name: "TheHome",
  components: { BookCard, AuthorCard },
  data() {
    return {
      loading: true,
      loadingAuthor: true,

      books: null,
      authors: null,
    };
  },
  mounted() {
    this.getBooks();
    this.getAuthors();
  },
  methods: {
    async getBooks() {
      const resoponse = await axiosInstance.get("books");
      if (resoponse.status === 200) {
        this.books = resoponse.data.data;
        console.log(resoponse.data.data);
        this.loading = false;
      }
    },
    async getAuthors() {
      const resoponse = await axiosInstance.get("authors");
      if (resoponse.status === 200) {
        this.authors = resoponse.data.data;
        console.log(resoponse.data.data);
        this.loadingAuthor = false;
      }
    },
    goToDetail(book) {
      console.log(book);
      this.$router.push({
        name: "bookDetail",
        params: { id: book.id },
        props: { book: "Jhon" },
      });
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 0 80px 0;
}
.book-container {
  display: flex;
  flex-wrap: wrap;
  background: #f8f8f8;
  justify-content: space-evenly;
}
/* .card {
  height: auto;
  width: 200px;

  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} */
/* .image-container {
  width: 100%;
  height: 100px;
} */
/* img {
  width: 100%;
  height: 100%;
  object-fit: contain;
} */
.description {
  font-size: 15px;
}
</style>






