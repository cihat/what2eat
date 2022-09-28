import {createRouter, createWebHistory} from "vue-router"
import {useAccountStoreWithout} from "../stores/account.store"

const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: import("../views/404.vue"),
  },
  {
    meta: {
      title: "Landing Page",
    },
    path: "/",
    name: "landing-page",
    component: () => import("@/views/LandingPage.vue"),
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
      title: "Register",
    },
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    meta: {
      title: "Dashboard",
    },
    path: "/dashboard",
    name: "dashboard",
    component: import("@/views/HomeView.vue"),
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
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

/* Default title tag */
const defaultDocumentTitle = "What to Eat"

/* Set document title from route meta */
router.afterEach(to => {
  document.title = to.meta?.title ? `${to.meta.title} — ${defaultDocumentTitle}` : defaultDocumentTitle
})

router.beforeEach(async to => {
  const publicPages = ["/", "/login", "/register"]
  console.log("path", to.path)
  const authRequired = !publicPages.includes(to.path)
  const accountStore = useAccountStoreWithout()

  if (authRequired && !accountStore.user) return router.push("/")
  else if (!authRequired && accountStore.user) return router.push("/dashboard")
})

export default router

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

// export { router }
