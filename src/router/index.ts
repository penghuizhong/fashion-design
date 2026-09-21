import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/trends',
      name: 'trends',
      component: () => import('@/views/TrendsPage.vue'),
    },
    {
      path: '/ai-create',
      name: 'ai-create',
      component: () => import('@/views/AiCreatePage.vue'),
    },
    {
      path: '/ai-modify',
      name: 'ai-modify',
      component: () => import('@/views/AiModifyPage.vue'),
    },
    {
      path: '/ai-visual',
      name: 'ai-visual',
      component: () => import('@/views/AiVisualPage.vue'),
    },
    {
      path: '/ai-tools',
      name: 'ai-tools',
      component: () => import('@/views/AiToolsPage.vue'),
    },
    {
      path: '/workbench',
      name: 'workbench',
      component: () => import('@/views/WorkbenchPage.vue'),
    },
  ],
})

export default router
