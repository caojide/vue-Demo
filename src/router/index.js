import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import login from '@/components/login'

Vue.use(Router)
//路由配置
export default new Router({
  routes: [
    {
        path: '/login',
        name: 'login',
        component: login   
    },
    {
        path: '/Hello',
        name: 'Hello',
        component: Hello
    },
    {
        path: '*', redirect: '/Hello'    
    }
  ]
})
