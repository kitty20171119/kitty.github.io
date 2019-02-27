import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import search from '@/components/search'
import activity from '@/components/activity'
import student from '@/components/student'
import courseList from '@/components/courseList'
import courseDetail from '@/components/courseDetail'
import parents from '@/components/parents'
import messageDetail from '@/components/messageDetail'
import organizationDetail from '@/components/organizationDetail'
import tabBar from '@/components/common/tabBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/tabBar',
      name:'tabBar',
      component:tabBar
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/student',
      name: 'student',
      component: student
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/courseList',
      name: 'courseList',
      component: courseList
    },
    {
      path: '/courseDetail',
      name: 'courseDetail',
      component: courseDetail
    },
    {
      path: '/parents',
      name: 'parents',
      component: parents
    },
    {
      path: '/messageDetail',
      name: 'messageDetail',
      component: messageDetail
    },
    {
      path: '/organizationDetail',
      name: 'organizationDetail',
      component: organizationDetail
    }
  ]
})
