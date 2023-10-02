<template>
  <div class="main-container">
    Search Author You want
    <form class="form-container">
      <div class="mb-3" style="width: 200px;margin-right:4px; flex: 1">
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          v-model="searchedText"
          placeholder="Enter here"
        />
      </div>
      <button type="submit" class="btn btn-outline-secondary"  style="height:40px;" @click="getSearchedAuthor">Search</button>
    </form>
     <div class="book-container flex">
      <AuthorCard v-for="author in authors" :key="author.id" :author="author" @click="goToDetail(author)"/>
    </div>
    <div class="sub-container">

    </div>
  </div>
</template>

<script>
import axiosInstance from "../../axios/axios";
import AuthorCard from "../../components/AuthorCard.vue";

export default {
  
  name: "SearchAuthor",
  data(){
    return{
      searchedText:null,
      authors:null,
    }
  },
  components:{
    AuthorCard,
  },
  methods:{
    async getSearchedAuthor(e){
      e.preventDefault();
      if(this.searchedText === null || this.searchedText.length === 0){
        alert('Please type you want to search');
        return;
      }

      console.log('getauthor=>',this.searchedText);
      const resoponse = await axiosInstance.get(`authors/search/${this.searchedText}`, 
        // {
        //   params: { search: this.searchedText },
        // }
        );
      if (resoponse.status === 200) {
        this.authors = resoponse.data.data;
        console.log(this.authors,"this.authors");
      }
    }
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex: 1;
  flex-direction: column;
    margin: 8px;

  
}.book-container {
  display: flex; flex-wrap: wrap; background: #F8F8F8	;justify-content: space-evenly;
}
.form-container {
  display: flex;
  height: 60px;
  margin-right: 4px;
  margin-top:8px;
}
</style>