import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import UserProfile from "../views/UserProfile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/user/:id",
    name: "UserProfile",
    component: UserProfile,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
