
const routes = [
  {
    path: '/',
    component: () => import('layouts/OuterLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/LogIn.vue')
      },
      {
        path: '/register',
        component: () => import('pages/Register.vue')
      },
      {
        path: '/verification',
        component: () => import('pages/Verification.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/InnerLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/user/DashBoard.vue')
      },
      {
        path: 'meetings',
        component: () => import('pages/user/MeetingPage.vue')
      },
      {
        path: 'meetings/id',
        component: () => import('pages/user/MeetingMenu.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/user/meeting/AgendaPage.vue')
          },
          {
            path: 'attendees',
            component: () => import('pages/user/meeting/AttendeesPage.vue')
          },
          {
            path: 'summary',
            component: () => import('pages/user/meeting/SummaryPage.vue')
          }
          // {
          //   path: 'addtask',
          //   component: () => import('pages/user/meeting/agenda/AddTask.vue')
          // },
          // {
          //   path: 'addagenda',
          //   component: () => import('pages/user/meeting/agenda/AddAgenda.vue')
          // },
          // {
          //   path: 'addattendee',
          //   component: () => import('pages/user/meeting/attendee/AddAttendee.vue')
          // }
          // {
          //   path: 'editagenda/id',
          //   component: () => import('pages/user/meeting/agenda/EditAgenda.vue')
          // }
        ]
      },
      {
        path: 'invite',
        component: () => import('pages/user/MeetingInvitePage.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
