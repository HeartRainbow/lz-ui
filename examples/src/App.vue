<script setup>
import { uvNavBar } from 'lz-ui'
import { useRouter, useRoute } from 'vue-router'
import { useCommonStore } from '@/stores/common.js'

const menuStore = useCommonStore()
const gitAddress = {
  github: 'https://github.com/monsterxwx/lz-ui',
  gitee: 'https://gitee.com/monsterwx/lz-ui'
}
const router = useRouter()
const route = useRoute()
const toPage = (url) => {
  window.open(gitAddress[url])
}
const backIndex = () => {
  if (route.fullPath === '/lz-ui') return
  router.back()
}
</script>

<template>
  <div class="base-layout">
    <div class="layout-top">
      <lz-nav-bar
        :left-arrow="$route.fullPath!=='/lz-ui'"
        @click-left="backIndex"
        :title="menuStore.currentTitle"
      >
        <template #right>
          <div class="icon">
            <img
              @click="toPage('github')"
              src="@/assets/github.svg"
            >
            <img
              @click="toPage('gitee')"
              src="@/assets/gitee.svg"
            >
          </div>
        </template>
      </lz-nav-bar>
    </div>
    <div class="layout-content">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component
            :is="Component"
            v-if="$route.meta.keepAlive"
          />
        </keep-alive>
        <component
          :is="Component"
          v-if="!$route.meta.keepAlive"
        />
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-layout {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
  flex-direction: column;
  touch-action: none;
  .layout-top {
    border-bottom: 1px solid #eeeeee;
    touch-action: none;
    .icon {
      display: flex;
      gap: 10px;
      img {
        width: 26px;
        height: 26px;
        cursor: pointer;
      }
    }
  }
  .layout-content {
    overflow: auto;
    min-height: 0;
    flex: 1 0;
    touch-action: none;
  }
}
</style>
