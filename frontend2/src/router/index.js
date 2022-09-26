import Billing from "@/views/Billing.vue";
import Dashboard from "@/views/Dashboard.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Tables from "@/views/Tables.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: import("../views/not-found-view.vue"),
  },
  {
    path: "/",
    name: "/",
    meta: { layout: "dashboard" },
    redirect: "/dashboard",
    // beforeEnter(to, from, next) {
    //   if (!store.state.account.user) return next("/sign-in");
    //   return next();
    // },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: { layout: "dashboard" },
    component: Dashboard,
    // beforeEnter(to, from, next) {
    //   if (!store.state.account.user) return next("/sign-in");
    //   return next();
    // },
  },
  {
    path: "/tables",
    name: "Tables",
    meta: { layout: "dashboard" },
    component: Tables,
    // beforeEnter(to, from, next) {
    //   if (!store.state.account.user) return next("/sign-in");
    //   return next();
    // },
  },
  {
    path: "/billing",
    name: "Billing",
    meta: { layout: "dashboard" },
    component: Billing,
    // beforeEnter(to, from, next) {
    //   if (!store.state.account.user) return next("/sign-in");
    //   return next();
    // },
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    meta: { layout: "dashboard" },
    component: VirtualReality,
    // beforeEnter(to, from, next) {
    //   if (!store.state.account.user) return next("/sign-in");
    //   return next();
    // },
  },
  {
    path: "/profile",
    name: "Profile",
    meta: { layout: "dashboard" },
    component: Profile,
    // beforeEnter(to, from, next) {
    //   if (!store.state.account.user) return next("/sign-in");
    //   return next();
    // },
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    meta: { layout: "dashboard" },
    component: Rtl,
    // beforeEnter(to, from, next) {
    //   if (!store.state.account.user) return next("/sign-in");
    //   return next();
    // },
  },
  {
    path: "/sign-in",
    name: "Sign In",
    meta: { layout: "auth" },
    component: SignIn,
    // beforeEnter(to, from, next) {
    //   if (store.state.account.user) return next("/dashboard");
    //   return next();
    // },
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    meta: { layout: "auth" },
    component: SignUp,
    // beforeEnter(to, from, next) {
    //   if (store.state.account.user) return next("/dashboard");
    //   return next();
    // },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
