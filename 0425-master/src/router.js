import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
//要在路由字典中添加那个页面组件的路由，必须先import
// import About from './views/About.vue'
import Index from './views/index.vue'
import Reg from './views/reg.vue'
import Login from './views/login.vue'
import Contact from './views/contact.vue'
import Iceis from './views/iceis.vue'
import Black from './views/black.vue'
import Aboutus from './views/aboutus.vue'

Vue.use(Router)

export default new Router({
  routes:[
    {path:"/",component:Index},
    {path:"/index",component:Index},
    {path:"/reg",component:Reg},
    {path:"/login",component:Login},
    {path:"/contact",component:Contact},
    {path:"/iceis",component:Iceis},
    {path:"/black",component:Black},
    {path:"/aboutus",component:Aboutus}
  ]
})
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       // name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       component:About
//       // name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
