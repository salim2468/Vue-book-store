<template>
  <div class="main-container">
    <p>Register New Author</p>
    <form class="form-container">
      <div class="mb-3">
        <label class="form-label">Author Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="name"
          required
        />
      </div>
      
      <br />
      <button
        type="submit"
        class="btn btn-outline-secondary"
        @click="addNewAuthor"
      >
        Add
      </button>
    </form>
    
  </div>
</template>

<script>
import axiosInstance from "../../axios/axios";

export default {
  name: "AddBook",
  data() {
    return {
      name: null,
    };
  },
  methods: {
    async addNewAuthor(event) {
      event.preventDefault();
      console.log("button clicked");
      if (
        this.name === null || this.name === ""
      ) {
        alert("Please fill up form");
        return;
      }
      const newAuthor = {
        name: this.name,
      };
      try {
        const response = await axiosInstance.post("authors", newAuthor);
        console.log(response.data);
        this.name = "";
      } catch (e) {
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
}
.form-container {
  background: #f8f8f8;
  padding: 8px 16px;
}
select {
  padding: 8px;
  margin-left: 12px;
}
.name-card {
  padding: 4px 8px;
  border-radius: 4px;
  margin: 0px 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>