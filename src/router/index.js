import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutFolder.vue/AboutView.vue";
import AboutUs from "../views/AboutFolder.vue/AboutUs.vue";
import CompanyInfo from "../views/AboutFolder.vue/OurCompany.vue";
import UserView from "../views/UserView.vue";
import notFound from "../views/NotFound.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/about",
    name: "about",
    component: About,
    children: [
      // { path: "/about", name: "about", component: About },
      { path: "about-us", name: "uss", component: AboutUs },
      { path: "ourCompany", name: "company", component: CompanyInfo },
    ],
  },
  { path: "/user/:name", name: "user", component: UserView },
  { path: "/:pathMatch:(.*)*", name: "notFound", component: notFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
