import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../views/TheHome.vue";
import TheAbout from "../views/TheAbout.vue";
import AddBook from "../views/AddBook.vue";
import SearchBook from "../views/SearchBook.vue";
import BookDetail from "../views/BookDetail.vue";
import UpdateBook from "../views/UpdateBook.vue";




const routes = [
    {
      path: "/",
      name: "Home",
      component:TheHome,
    },
    {
      path: "/about",
      name: "About",
      component: TheAbout,
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
    }, {
      path: "/book/update/:id",
      name: "updateBook",
      component: UpdateBook,
      props:true
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  