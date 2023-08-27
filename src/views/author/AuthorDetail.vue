<template>
  <div class="main-container">
    Author Details
    <div class="top-container" v-if="!loading">
      <table>
        <tr>
          <td rowspan="3">
            <img
              v-if="author.attributes.image"
              :src="author.attributes.image"
              alt="image"
              style="
                height: 90px;
                width: 90px;
                object-fit: cover;
                border-radius: 50%;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                  0 6px 20px 0 rgba(0, 0, 0, 0.19);
              "
            />
            <img
              v-else
              src="../assets/person2.jpg"
              alt="image"
              style="
                height: 90px;
                width: 90px;
                object-fit: cover;
                border-radius: 50%;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                  0 6px 20px 0 rgba(0, 0, 0, 0.19);
              "
            />
          </td>
        </tr>
        <tr>
          <td>
            <h5>{{ author?.attributes.name }}</h5>
          </td>
        </tr>
      </table>

      <div style="margin-left: auto">
        <table>
          <tr>
            <td>
              <button class="btn btn-secondary" @click="deleteBook()">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <UploadProfileImage :id="id"/>
    <UploadProfileInfo :author="author" @refresh="refresh"/>
  </div>
</template>

<script>
import axiosInstance from "../../axios/axios";
import UploadProfileImage from "./components/UploadProfileImage.vue";
import UploadProfileInfo from "./components/UploadProfileInfo.vue";


export default {
  name: "AuthorDetail",
  // props:['author'],
  components: { UploadProfileImage,UploadProfileInfo },
  data() {
    return {
      author: {},
      loading: true,
      id: null,
      selectedFile: null,
    };
  },
  mounted() {
    this.getAuthorDetails();
    // console.log(this.$route.params.id);
  },
  methods: {
    async getAuthorDetails() {
      this.id = this.$route.params.id;
      const resoponse = await axiosInstance.get(`authors/${this.id}`);
      if (resoponse.status === 200) {
        this.author = resoponse.data.data;
        this.loading = false;
      }
    },
    async deleteBook() {
      try {
        const resoponse = await axiosInstance.delete(`authors/${this.id}`);
        console.log(resoponse.data.message);
        this.$router.push({ name: "Home" });
      } catch (e) {
        console.log(e);
      }
    },

  refresh(){
    this.$router.go();
  }

  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 8px;
}
.top-container {
  background: #f8f8f8;
  /* background: gray; */
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  margin-top: 2px;
  /* justify-content: left; */
}
td {
  padding: 16px;

}
</style>