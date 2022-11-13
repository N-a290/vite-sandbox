import { createWebHistory, createRouter } from "vue-router"; // no usar el VueRouter
import Home from "../components/Home.vue";
import Contact from "../components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;