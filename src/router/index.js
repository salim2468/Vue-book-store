import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/TheHome.vue";
import About from "../views/TheAbout.vue";
import AddBook from "../views/AddBook.vue";
import SearchBook from "../views/SearchBook.vue";
import BookDetail from "../views/BookDetail.vue";



const routes = [
    {
      path: "/",
      name: "Home",
      component:Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/search",
      name: "SearchBook",
      component: SearchBook,
    },
    {
      path: "/add",
      name: "AddBook",
      component: AddBook,
    },
    {
      path: "/book/:id",
      name: "bookDetail",
      component: BookDetail,
      props:true
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  