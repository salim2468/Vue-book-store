
<template>
  <div class="home-container flex ">
    <h4>Author </h4><span v-if="books">Total count ({{books.length}})</span> 
    <div class="book-container flex">
      <BookCard v-for="book in books" :key="book.id" :book="book" @click="goToDetail(book)"/>
    </div>
  </div>



  <!-- <div class="home-container">
    <h4>Books</h4>
    <div class="book-container">
      <div class="card" v-for="book in books" :key="book.id">
        <div class="image-container">
          <img src="../assets/logo.svg" />
        </div>
        <br>
        <h6>{{ book.attributes.name }}</h6>
        <p class="description">{{ book.attributes.publication_year }}</p>
      </div>
    </div>
  </div> -->



</template>

<script>
import axiosInstance from "../../axios/axios";
import BookCard from "../../components/BookCard.vue";
export default {
  name: "AllBooks",
  components:{BookCard},
  data() {
    return {
      loading: true,
      books: null,
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      // console.log("getBooks");
      const resoponse = await axiosInstance.get("books");
      if (resoponse.status === 200) {
        this.books = resoponse.data.data;
        this.loading = false;
        // console.log(this.books);
      }
    },
    goToDetail(book){
      console.log(book);
      this.$router.push({name:"bookDetail",params:{id:book.id},props:{book:'Jhon'}});
    }
  },
};
</script>
<style scoped>
.home-container {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.book-container {
  display: flex; flex-wrap: wrap; background: #F8F8F8	;justify-content: space-evenly;
}
.card {
  height: auto;
  width: 200px;

  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.card:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.image-container {
  width: 100%;
  height: 100px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.description {
  font-size: 15px;
}
</style>






