<template>
  <div class="main-container">
    <!-- Book -->
    <div class="top-container" v-if="!loading">
      <table>
        <tr>
          <td rowspan="3">
            <img src="../assets/logo.svg" height="120" width="100" />
          </td>
          <td>
            <h5>{{ book?.attributes.name }}</h5>
          </td>
          <!-- <td>{{book.type}}</td> -->
        </tr>
        <tr>
          <td>Publication year: {{ book.attributes.publication_year }}</td>
        </tr>
        <tr>
          <td>
            Price: {{ book.attributes.price ? book.attributes.price : "No" }}
          </td>
        </tr>
      </table>
    </div>
    <div class="top-container" v-if="!loading">
      <p>{{ book.attributes.description }}</p>
    </div>
    <br />
    <h5>Authors:</h5>
    <div class="top-container" v-if="!loading">
      <table v-for="author in book.attributes.author" :key="author.id">
        <tr>
          <td
            style="display: flex; justify-content: center; align-items: center;"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36PznHOReV7k4Emp3q2-HLvlcUrVxQiIRGUpwGsyE2Q&s"
              alt="image"
              style="height: 80px; border-radius:50%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
            />
          </td>
        </tr>
        <tr>
          <td>{{ author.name }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axiosInstance from "../axios/axios";

export default {
  name: "BookDetail",
  // props:['book'],
  data() {
    return {
      book: {},
      loading: true,
    };
  },
  mounted() {
    this.getBookDetails();
    // console.log(this.$route.params.id);
  },
  methods: {
    async getBookDetails() {
      const id = this.$route.params.id;
      const resoponse = await axiosInstance.get(`books/${id}`);
      if (resoponse.status === 200) {
        this.book = resoponse.data.data;
        this.loading = false;
        console.log(this.book, "iisnfkjasbfkjasbkjf");
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
.top-container {
  background: #f8f8f8;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  margin-top: 2px;
}
td {
  padding: 16px;
}
</style>