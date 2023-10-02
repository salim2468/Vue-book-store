<template>
  <div class="side-bar">
    <ul>
      <li><h6 class="title">Book</h6></li>
      <ul>
        <li>
          <router-link :to="{ name: 'AllBooks' }" class="router-link">
            <span class="material-symbols-outlined"> import_contacts </span> All
            Books</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'AddBook' }" class="router-link">
            <span class="material-symbols-outlined"> add_circle </span>
            <span> Add Book</span></router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'SearchBook' }" class="router-link">
            <span class="material-symbols-outlined"> search </span>Search
            Books</router-link
          >
        </li>
      </ul>
      <hr>
      <li><h6 class="title">Author</h6></li>
      <ul>
        <li>
          <router-link :to="{ name: 'AllAuthors' }" class="router-link">
            <span class="material-symbols-outlined"> import_contacts </span> All
            Authors</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'AddAuthor' }" class="router-link">
            <span class="material-symbols-outlined"> add_circle </span>
            <span> Add Author</span></router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'SearchBook' }" class="router-link">
            <span class="material-symbols-outlined"> search </span>Search
            Author</router-link
          >
        </li>
      </ul>
      <hr>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style>
.side-bar {
  width: 300px;
  height: 100vh;
  background: #f8f8f8;
  margin-right: 10px;
  margin-top: 2px;
  padding-top: 20px;
  padding-right: 20px;
}
/* .background-circle{
  background: grey;
  border-radius:50% ;
  padding: 4px;
} */
li {
  display: flex;
  align-items: center;
}
.router-link {
  text-decoration: none;
  color: black;
  display: flex;
  margin-top: 4px;
}
.material-symbols-outlined {
  margin-right: 10px; /* Add some spacing between the icon and the heading */
}
.title{
  background:#DCDCDC;padding:4px 15px;border-radius:14px;
}
</style>