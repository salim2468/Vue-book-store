
<template>
  <div class="home-container flex ">
    <h4>Authors </h4><span v-if="!loading">Total count ({{authors.length}})</span> 
    <div class="book-container flex" v-if="!loading">
      <AuthorCard v-for="author in authors" :key="author.id" :author="author" @click="goToDetail(author)"/>
    </div>
  </div>
</template>

<script>
import axiosInstance from "../../axios/axios";
import AuthorCard from "../../components/AuthorCard.vue";
export default {
  name: "AllAuthors",
  components:{AuthorCard},
  data() {
    return {
      loading: true,
      authors: null,
    };
  },
  mounted() {
    this.getAuthors();
  },
  methods: {
    async getAuthors() {
      console.log("getAuthors");
      const resoponse = await axiosInstance.get("authors");
      if (resoponse.status === 200) {
        this.authors = resoponse.data.data;
        this.loading = false;
        // console.log(this.authors);
      }
    },
    goToDetail(book){
      console.log(book);
      // this.$router.push({name:"bookDetail",params:{id:book.id},props:{book:'Jhon'}});
    }
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






