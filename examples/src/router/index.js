import { createRouter, createWebHashHistory } from 'vue-router'
import routerList from './routerList'
import { useCommonStore } from '@/stores/common.js'
const router = createRouter({
  history: createWebHashHistory(),
  routes: routerList
})

function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

router.beforeEach((to, form) => {
  const menuStore = useCommonStore()
  if (to.name === 'lz-ui') {
    menuStore.currentTitle = 'LZ-UI'
  } else {
    menuStore.currentTitle = capitalizeFirstLetter(to.name)
  }
  return true
})

export default router
