import Router from 'vue-router'
import index from '@/views/index'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
