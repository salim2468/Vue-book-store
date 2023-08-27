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
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAeQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUEBgcCAf/EADkQAAICAQIDBQYEAgsAAAAAAAABAgMEBRESITEGE0FRYUJxgaGxwSIykdFT8BQWIzM0Q1JicnOS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAABDkXwphxS6+C8wJJzjBcU2kvNmFbqC6VR39WYd107pbze/kvBEZYieWZfL29vcjx39v8Sf/AKZGCwTRy74/5jfvMmnUOitj8Y/sYAEF5XbC2O8JKS9D2UVdkq5cUHsy1xcmN0efKa6okVkAAgAAAAAPM5qEXKT2S6lNfbK6xzl8F5IzNSt/DGtePORXmsQAAQBrHaTtJLFtlh6e13sf7y1rfgfkvU1WWpZ8rO8ebkcfn3sv3A6iDTtA7T299DG1OfHCb2jc+sX/ALvNepuIA9VzlXNSg9muh5BRd0Wq6tTj4khWabbw2Ot9JLde8szDQAAAAAp82XFkz9ORASZH+Is/5MjNYgQ5l39HxL79t3VXKa+CJiDNp7/CyKV1sqlFfFMI5ZKUpyc5veUnvJ+bPg2a5NbNdUC0DpXZ/IllaNiXWbufBwyfm1y+xzU6T2cpdGh4cJbqThxNeW7b+4FkACD3TLguhLyki8RQLqi/RNXAAEUAAFNmR4cmz1e5CZ+p1c42Jej+xgGsQAPFttdNcrLpxhCK3cpPZII1TtB2YtsyJ5emxUu8fFOnfZ8Xi17/ACNfek6ipcLwcjf/AK2bXm9r8OqTjjVWZD/1flj8+fyK/wDrpkb8sKnby42B40bsrkW3Rt1KHdUR5utv8U/Tl0Ruuy8DWcTtjjTajlY06d/ag+Jfpyf1NixsmjLqVuNbG2uXtRf87ASgAD1VHithFeLReoq9Oq47nPblFfMtCauAAIoAAPFtatrcJdGUttcqpuElzRemPlY0b49dproy4KLMyqcLGsyMiXDCC3fr6I51rGr5Gq38dr4aov8ABUnyj+79S57d5Vqza8BqUYVJTkn7Un096S+pqxpnQAFShl6bqGRpuQrsWez9qL/LNeTRiAhXT9K1GnU8OORTyfScG+cJeRmxjKUkordt7JGgdjsyzH1iGPHilDJ/BKKW/Pwfw+jOpYmKqlxS5z+hNaxLjUqipRXXq35smAMqAAAAAAAAwNV0nD1ajus2mM17Muko+5+Bo2q9gMyluem3wyIfw7HwzXx6P5HSD5tuWkcUytH1LEbWTgZENvHu21+q5GFwvfbhe/uO8bJDYVI4jjaZn5TSxsLIt36ONT2/U2HS+weo5MlPOnXi1+K34p/ouXz+B03YbIUir0XQcDRq9sSr+0f5rZ85y+P2RagEUAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k="
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