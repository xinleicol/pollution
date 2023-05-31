
import Home from "@/components/persons/Home.vue"
import XNHome from "@/components/persons/XNHome.vue"
import HNHome from "@/components/persons/HNHome.vue"
const routes = [
    { path: '/', component: Home },
    { path: '/xinnan', component: XNHome },
    { path: '/haonan', component: HNHome },
  ]
  

export default routes;