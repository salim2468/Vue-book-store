<template>
  <div class="contianer">
    <!-- <div class="top" @click="toogleForm">
      <p>Update Book Image</p>
    </div> -->
    <CircularIconButton :icon="'imagesmode'" @buttonPress="toogleForm"/>
    <div class="bottom" v-if="isShown">
      Select Cover Image of Author
      <form enctype="multipart/form-data">
        <div class="mb-3">
          <input
            type="file"
            name="profile"
            @change="handleFileUpload"
            class="form-control"
          />
        </div>
        <button @click.prevent="uploadProfilePic" class="btn btn-secondary">
          Upload
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axiosInstance from "../../../axios/axios";
import CircularIconButton from "../../../components/CircularIconButton.vue";


export default {
  name: "UploadProfileImage",
  data() {
    return { isShown: false, selectedFile: null };
  },
  components:{CircularIconButton},
  props: ["id"],
  methods: {
    toogleForm() {
      this.isShown = !this.isShown;
    },
    handleFileUpload(event) {
      console.log("1st method child");
      this.selectedFile = event.target.files[0];
    },
    async uploadProfilePic() {
      console.log("2nd method");
      const formData = new FormData();
      formData.append("image", this.selectedFile);
      formData.append("user_id", this.id);
      try {
        const response = await axiosInstance.post("books/img", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);
        this.$router.go();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/show_hide.css";
.container {
  background: grey;
}
</style>