import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '',
      component: () => import('../pages/index')
    },
    {
      path: '/detail/:id',
      component: () => import('../pages/detail'),
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router