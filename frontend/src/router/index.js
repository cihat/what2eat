import Home from "@/views/HomeView.vue";
import Style from "@/views/StyleView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    meta: {
      title: "Select style",
    },
    path: "/",
    name: "style",
    component: Style,
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
    },
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },
  {
    meta: {
      title: "Tables",
    },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/TablesView.vue"),
  },
  {
    meta: {
      title: "Forms",
    },
    path: "/forms",
    name: "forms",
    component: () => import("@/views/FormsView.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    meta: {
      title: "Ui",
    },
    path: "/ui",
    name: "ui",
    component: () => import("@/views/UiView.vue"),
  },
  {
    meta: {
      title: "Responsive layout",
    },
    path: "/responsive",
    name: "responsive",
    component: () => import("@/views/ResponsiveView.vue"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;




// import { useAccountStoreWithout } from "@/stores/account.store"
// import { createRouter, createWebHistory } from "vue-router"

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home-view",
//       component: import("../views/home-view.vue"),
//     },
//     {
//       path: "/register",
//       name: "register-view",
//       component: import("../views/Auth/register-view.vue"),
//     },
//     {
//       path: "/login",
//       name: "login-view",
//       component: () => import("../views/Auth/login-view.vue"),
//     },
//     {
//       path: "/dashboard",
//       name: "dashboard-view",
//       component: import("../views/dashboard-view.vue"),
//     },
//     {
//       path: "/profile/:id",
//       name: "profile-view",
//       component: import("../views/profile-view.vue"),
//     },
//     {
//       path: "/:pathMatch(.*)*",
//       component: import("../views/not-found-view.vue"),
//     },
//   ],
// })

// router.beforeEach(async to => {
//   const publicPages = ["/login", "/register"]
//   const authRequired = !publicPages.includes(to.path)
//   const accountStore = useAccountStoreWithout()

//   if (authRequired && !accountStore.user) return router.push("/login")
//   else if (!authRequired && accountStore.user) return router.push("/dashboard")
// })

// export { router }
