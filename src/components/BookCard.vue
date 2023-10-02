<template>
 <div class="card">
        <div class="image-container">
            <img  v-if="book.attributes.image_path" :src="book.attributes.image_path"   />
          <img   v-else  src="../assets/book.jpeg" />
        </div>
        <br>
        <h6>{{ book.attributes.name }}</h6>
        <p class="description">{{ book.attributes.publication_year }}</p>
      </div>
</template>

<script>

export default {
  name: "BookCard",
  props:['book'],
}
</script>

<style scoped>
.card {
  height: auto;
  width: 200px;

  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.card:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: lightgray;
}
.image-container {
  width: 100%;
  height: 100px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.description {
  font-size: 15px;
}
</style>
