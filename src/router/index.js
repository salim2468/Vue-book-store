import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../views/TheHome.vue";
import TheAbout from "../views/TheAbout.vue";



import AllBooks from "../views/book/AllBooks.vue";
import AddBook from "../views/book/AddBook.vue";
import SearchBook from "../views/book/SearchBook.vue";
import BookDetail from "../views/book/BookDetail.vue";
import UpdateBook from "../views/book/UpdateBook.vue";

import AllAuthors from "../views/author/AllAuthors.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TheHome,
  },
  {
    path: "/about",
    name: "About",
    component: TheAbout,
  },
  // ---------- Books section ----------
  {
    path: "/books",
    name: "AllBooks",
    component: AllBooks,
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
    props: true,
  },
  {
    path: "/book/update/:id",
    name: "updateBook",
    component: UpdateBook,
    props: true,
  },
  // ---------- Authors section ----------
  {
    path: "/authors",
    name: "AllAuthors",
    component: AllAuthors,
  },
  // {
  //   path: "/authors",
  //   name: "AllAuthors",
  //   component: AllAuthors,
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
