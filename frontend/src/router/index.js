import { useAccountStoreWithout } from "@/store/account.store"
import { createRouter, createWebHistory } from "vue-router"

let routes = [
	{
		// will match everything
    path: "/:pathMatch(.*)*",
		component: () => import('@/views/404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		redirect: '/dashboard',
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		layout: "dashboard",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
	},
	{
		path: '/layout',
		name: 'Layout',
		layout: "dashboard",
		component: () => import('@/views/Layout.vue'),
	},
	{
		path: '/tables',
		name: 'Tables',
		layout: "dashboard",
		component: () => import('@/views/Tables.vue'),
	},
	{
		path: '/billing',
		name: 'Billing',
		layout: "dashboard",
		component: () => import('@/views/Billing.vue'),
	},
	{
		path: '/Profile',
		name: 'Profile',
		layout: "dashboard",
		meta: {
			layoutClass: 'layout-profile',
		},
		component: () => import('@/views/Profile.vue'),
	},
	{
		path: '/sign-in',
		name: 'Sign-In',
		component: () => import('@/views/Sign-In.vue'),
	},
	{
		path: '/sign-up',
		name: 'Sign-Up',
		meta: {
			layoutClass: 'layout-sign-up',
		},
		component: () => import('@/views/Sign-Up.vue'),
	},
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;
	
	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

// const router = new VueRouter({
// 	mode: 'hash',
// 	base: process.env.BASE_URL,
// 	routes,
// 	scrollBehavior (to, from, savedPosition) {
// 		if ( to.hash ) {
// 			return {
// 				selector: to.hash,
// 				behavior: 'smooth',
// 			}
// 		}
// 		return {
// 			x: 0,
// 			y: 0,
// 			behavior: 'smooth',
// 		}
// 	}
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
    
  //   [
  //   {
  //     path: "/",
  //     name: "home-view",
  //     component: import("@/views/home-view.vue"),
  //   },
  //   {
  //     path: "/register",
  //     name: "register-view",
  //     component: import("@/views/Auth/register-view.vue"),
  //   },
  //   {
  //     path: "/login",
  //     name: "login-view",
  //     component: () => import("@/views/Auth/login-view.vue"),
  //   },
  //   {
  //     path: "/dashboard",
  //     name: "dashboard-view",
  //     component: import("@/views/dashboard-view.vue"),
  //   },
  //   {
  //     path: "/profile/:id",
  //     name: "profile-view",
  //     component: import("@/views/profile-view.vue"),
  //   },
  //   {
  //     path: "/:pathMatch(.*)*",
  //     component: import("@/views/not-found-view.vue"),
  //   },
  // ],
})

// router.beforeEach(async to => {
//   const publicPages = ["/login", "/register"]
//   const authRequired = !publicPages.includes(to.path)
//   const accountStore = useAccountStoreWithout()

//   if (authRequired && !accountStore.user) return router.push("/login")
//   else if (!authRequired && accountStore.user) return router.push("/dashboard")
// })

export { router }
