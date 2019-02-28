import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import search from '@/components/search'
import activityList from '@/components/activityList'
import student from '@/components/student'
import courseList from '@/components/courseList'
import courseDetail from '@/components/courseDetail'
import courseDetail_schedule from '@/components/courseDetail_schedule'
import parents from '@/components/parents'
import messageList from '@/components/messageList'
import messageDetail from '@/components/messageDetail'
import organizationDetail from '@/components/organizationDetail'
import brifeIntroduction from '@/components/brifeIntroduction'
import tabBar from '@/components/common/tabBar'
import activityDetail from '@/components/activityDetail'
import curriculumActivity from '@/components/curriculumActivity'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tabBar',
      name: 'tabBar',
      component: tabBar
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
      path: '/activityList',
      name: 'activityList',
      component: activityList
    },
    {
      path: '/courseList',
      name: 'courseList',
      component: courseList
    },
    {
      path: '/courseDetail',
      name: 'courseDetail',
      component: courseDetail,
      children:[
        {
          path:'/courseDetail_schedule',
          name:'courseDetail_schedule',
          component:courseDetail_schedule
        },
      ]
    },
    {
      path: '/parents',
      name: 'parents',
      component: parents
    },
    {
      path:'/messageList',
      name:'messageList',
      component:messageList
    },
    {
      path: '/messageDetail',
      name: 'messageDetail',
      component: messageDetail
    },
    {
      path: '/organizationDetail',
      name: 'organizationDetail',
      component: organizationDetail,
      children:[
        {
          path:'/brifeIntroduction',
          name:'BrifeIntroduction',
          component:brifeIntroduction
        },
        {
          path:'/curriculumActivity',
          name:'curriculumActivity',
          component:curriculumActivity
        }
      ]
    },
    {
      path: '/activityDetail',
      name: 'activityDetail',
      component: activityDetail
    }
  ]
})
