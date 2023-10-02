import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../views/TheHome.vue";
import TheAbout from "../views/TheAbout.vue";
import TheLogin from "../views/TheLogin.vue";
import TheDashboard from "../views/TheDashboard.vue";


import AllBooks from "../views/book/AllBooks.vue";
import AddBook from "../views/book/AddBook.vue";
import SearchBook from "../views/book/SearchBook.vue";
import BookDetail from "../views/book/BookDetail.vue";
import UpdateBook from "../views/book/UpdateBook.vue";

import AddAuthor from "../views/author/AddAuthor.vue";
import AllAuthors from "../views/author/AllAuthors.vue";
import SearchAuthor from "../views/author/SearchAuthor.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: TheLogin,
  },
  {
    path: "/",
    name: "TheDashboard",
    component: TheDashboard,
    redirect:{ name:'Home'},
    children:[
      {
        path: "/",
        name: "Home",
        component: TheHome,
      },
      {
        path: "/authors",
        name: "AllAuthors",
        component: AllAuthors,
      },
      {
        path: "/add-author",
        name: "AddAuthor",
        component: AddAuthor,
      },
      {
        path: "/search-author",
        name: "SearchAuthor",
        component: SearchAuthor,
      },
      {
        path: "/about",
        name: "About",
        component: TheAbout,
      },
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
      

    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;




