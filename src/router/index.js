import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import student from '@/components/student'
import courseList from '@/components/courseList'
import courseDetail from '@/components/courseDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path:'/student',
      name:'student',
      component:student
    },
    {
      path:'/courseList',
      name:'courseList',
      component:courseList
    },
    {
      path:'/courseDetail',
      name:'courseDetail',
      component:courseDetail
    }
  ]
})
