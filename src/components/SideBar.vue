<template>
  <div class="side-bar">
    <ul>
      <li>
        <router-link :to="{name:'Home'}" class="router-link">
          <span class="material-symbols-outlined"> import_contacts </span> All
          Books</router-link
        >
      </li>
      <li>
        <router-link :to="{name:'AddBook'}" class="router-link">
          <span class="material-symbols-outlined"> add_circle </span>
          <span> Add
          Book</span></router-link
        >
      </li>
      <li>
        <router-link :to="{name:'SearchBook'}" class="router-link"> 
          <span class="material-symbols-outlined"> search </span>Search
          Books</router-link
        >
      </li>
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
.router-link{
  text-decoration: none;
  color: black;
}
.material-symbols-outlined {
  margin-right: 10px; /* Add some spacing between the icon and the heading */
}
</style>