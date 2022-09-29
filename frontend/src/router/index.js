import { useAccountStoreWithout } from "@/store/account.store"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-view",
      component: import("../views/home-view.vue"),
    },
    {
      path: "/register",
      name: "register-view",
      component: import("../views/Auth/register-view.vue"),
    },
    {
      path: "/login",
      name: "login-view",
      component: () => import("../views/Auth/login-view.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard-view",
      component: import("../views/dashboard-view.vue"),
    },
    {
      path: "/profile/:id",
      name: "profile-view",
      component: import("../views/profile-view.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: import("../views/not-found-view.vue"),
    },
  ],
})

router.beforeEach(async (to, from) => {
  const accountStore = useAccountStoreWithout()
  // const publicPages = ["/login", "/register"]
  // const commonPages = ["/"]
  // const authRequired = !publicPages.includes(to.path)
  // if (authRequired && !accountStore.user) return router.push("/login")
  // else if (!authRequired && accountStore.user) return router.push("/dashboard")

  switch (to.path) {
    case "/dashboard":
      if (!accountStore.user) return router.push("/")
      break
    case "/login":
      if (accountStore.user) return router.push("/dashboard")
      break
    case "/register":
      if (accountStore.user) return router.push("/dashboard")
      break
    default:
      break
  }
})

export { router }
