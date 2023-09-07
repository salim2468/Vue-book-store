import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../views/TheHome.vue";
import TheAbout from "../views/TheAbout.vue";
import TheLogin from "../views/TheLogin.vue";
import TheRegister from "../views/TheRegister.vue";

import TheDashboard from "../views/TheDashboard.vue";

import AllBooks from "../views/book/AllBooks.vue";
import AddBook from "../views/book/AddBook.vue";
import SearchBook from "../views/book/SearchBook.vue";
import BookDetail from "../views/book/BookDetail.vue";
import UpdateBook from "../views/book/UpdateBook.vue";

import AddAuthor from "../views/author/AddAuthor.vue";
import AllAuthors from "../views/author/AllAuthors.vue";
import SearchAuthor from "../views/author/SearchAuthor.vue";
import AuthorDetail from "../views/author/AuthorDetail.vue";

const routes = [
  {
    path: "/admin/login",
    name: "Login",
    component: TheLogin,
     meta:{requiresAuth:false}
  },
  {
    path: "/admin/register",
    name: "Register",
    component: TheRegister,
     meta:{requiresAuth:false}
  },
  {
    path: "/admin/",
    name: "TheDashboard",
    component: TheDashboard,
    redirect:{ name:'Home'},
     meta:{requiresAuth:true,},
    children:[
      {
        path: "/admin/",
        name: "Home",
        component: TheHome,
      },
      {
        path: "/admin/authors",
        name: "AllAuthors",
        component: AllAuthors,
      },
      {
        path: "/admin/add-author",
        name: "AddAuthor",
        component: AddAuthor,
      },
      {
        path: "/admin/search-author",
        name: "SearchAuthor",
        component: SearchAuthor,
      },
      {
        path: "/admin/author/:id",
        name: "AuthorDetail",
        component: AuthorDetail,
        props: true,
      },
      {
        path: "/admin/about",
        name: "About",
        component: TheAbout,
      },
      {
        path: "/admin/books",
        name: "AllBooks",
        component: AllBooks,
      },
      {
        path: "/admin/search",
        name: "SearchBook",
        component: SearchBook,
      },
      {
        path: "/admin/add",
        name: "AddBook",
        component: AddBook,
      },
      {
        path: "/admin/book/:id",
        name: "bookDetail",
        component: BookDetail,
        props: true,
      },
      {
        path: "/admin/book/update/:id",
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


const isAuthenticated = ()=>{
  if (localStorage.getItem("adminToken")!== null) {
    return true;
  } else {
    return false;
  }
}

router.beforeEach((to, from, next) => {
  console.log(`navigation to ${to.name} from ${from.name}`);
 
  if(to.matched.some(route => route.meta.requiresAuth)){
    if(isAuthenticated()){
      console.log('isAuthenticated TRUE');
      next();
    }else{
      console.log('isAuthenticated FALSE');
      next({name:'Login'});
    }
  }
  else{
    next();
  }

});

export default router;
