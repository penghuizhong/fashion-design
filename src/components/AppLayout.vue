<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  Home,
  TrendingUp,
  Sparkles,
  Palette,
  Camera,
  Wrench,
  LayoutDashboard,
  Search,
  User,
  Menu,
  X,
  Scissors,
  ExternalLink,
  ChevronDown,
  Settings,
  LogOut,
  Sun,
  Moon,
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const mobileMenuOpen = ref(false)
const userMenuOpen = ref(false)
const isLightTheme = ref(false)

// 制版网站地址
const patternMakingUrl = 'https://zhiban.fangyuan-ai.com'

const navItems = [
  { name: '首页', path: '/', icon: Home },
  { name: '趋势', path: '/trends', icon: TrendingUp },
  { name: 'AI创款', path: '/ai-create', icon: Sparkles },
  { name: 'AI改款', path: '/ai-modify', icon: Palette },
  { name: 'AI视觉', path: '/ai-visual', icon: Camera },
  { name: 'AI工具', path: '/ai-tools', icon: Wrench },
]

const isActive = (path: string) => route.path === path

function goToPatternMaking() {
  window.open(patternMakingUrl, '_blank')
}

function goToWorkbench() {
  userMenuOpen.value = false
  router.push('/workbench')
}

function toggleUserMenu() {
  userMenuOpen.value = !userMenuOpen.value
}

function toggleTheme() {
  isLightTheme.value = !isLightTheme.value
  if (isLightTheme.value) {
    document.documentElement.classList.add('light-theme')
  } else {
    document.documentElement.classList.remove('light-theme')
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#08090C]">
    <!-- Navigation Bar -->
    <header class="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-3 cursor-pointer" @click="router.push('/')">
          <div class="relative w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-yellow-600 via-amber-400 to-amber-100 rounded-lg p-0.5 shadow-lg shadow-amber-500/10">
            <div class="w-full h-full bg-[#08090C] rounded-[6px] flex items-center justify-center">
              <div class="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                <div class="w-1.5 h-1.5 bg-amber-400 rounded-sm transform rotate-45"></div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="text-base font-bold tracking-tight text-white">方圆</span>
              <span class="text-xs text-gray-400 font-light">AI服装设计</span>
            </div>
          </div>
        </div>

        <!-- Central Nav Links -->
        <nav class="hidden lg:flex items-center gap-0.5">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="relative px-3 py-2 text-sm font-medium transition-colors group"
            :class="isActive(item.path) ? 'text-white' : 'text-gray-400 hover:text-white'"
          >
            {{ item.name }}
            <span
              class="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400 rounded-full transition-opacity"
              :class="isActive(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
            ></span>
          </router-link>
          <!-- 服装制版 - 重点突出 -->
          <button
            @click="goToPatternMaking"
            class="ml-2 relative px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all flex items-center gap-1.5 group"
          >
            <Scissors class="h-3.5 w-3.5" />
            <span>服装制版</span>
            <ExternalLink class="h-3 w-3 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-3">
          <button class="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full py-1.5 pl-3 pr-2.5 text-xs text-gray-400 transition-all light-theme:bg-black/5 light-theme:border-black/10 light-theme:text-gray-600 light-theme:hover:bg-black/10">
            <Search class="h-3.5 w-3.5" />
            <span class="hidden md:inline">搜索功能、教程...</span>
          </button>
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-amber-400 transition-all group"
            :title="isLightTheme ? '切换到深色模式' : '切换到浅色模式'"
          >
            <Sun v-if="!isLightTheme" class="h-4 w-4 transition-transform group-hover:rotate-45" />
            <Moon v-else class="h-4 w-4 transition-transform group-hover:-rotate-12" />
          </button>
          <!-- User Menu Dropdown -->
          <div class="relative">
            <button
              class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-1 pr-2 transition-all"
              @click="toggleUserMenu"
            >
              <div class="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center border border-amber-400/40">
                <User class="h-3 w-3 text-black" />
              </div>
              <span class="text-xs font-medium text-gray-200 hidden sm:inline">钟总</span>
              <ChevronDown class="h-3 w-3 text-gray-400 hidden sm:block transition-transform" :class="userMenuOpen ? 'rotate-180' : ''" />
            </button>
            <!-- Dropdown Panel -->
            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div
                v-if="userMenuOpen"
                class="absolute right-0 top-full mt-2 w-56 glass-card rounded-xl border border-white/10 py-2 shadow-2xl shadow-black/50 z-50"
              >
                <!-- User Info -->
                <div class="px-4 py-3 border-b border-white/5">
                  <div class="flex items-center gap-3">
                    <div class="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center border border-amber-400/40 flex-shrink-0">
                      <User class="h-4 w-4 text-black" />
                    </div>
                    <div class="min-w-0">
                      <div class="text-sm font-semibold text-white truncate">钟总</div>
                      <div class="text-xs text-gray-400 truncate">zhong@fangyuan-ai.com</div>
                    </div>
                  </div>
                </div>
                <!-- Menu Items -->
                <div class="py-1">
                  <button
                    class="w-full flex items-center gap-3 px-4 py-2.5 text-xs text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                    @click="goToWorkbench"
                  >
                    <LayoutDashboard class="h-4 w-4 text-amber-400" />
                    <span class="flex-1 text-left">我的工作台</span>
                    <span class="text-[10px] text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">PRO</span>
                  </button>
                  <button
                    class="w-full flex items-center gap-3 px-4 py-2.5 text-xs text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    <Settings class="h-4 w-4 text-gray-400" />
                    <span class="flex-1 text-left">账户设置</span>
                  </button>
                </div>
                <div class="border-t border-white/5 pt-1">
                  <button
                    class="w-full flex items-center gap-3 px-4 py-2.5 text-xs text-red-400 hover:bg-red-500/10 transition-colors"
                  >
                    <LogOut class="h-4 w-4" />
                    <span class="flex-1 text-left">退出登录</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
          <button class="lg:hidden text-gray-300 hover:text-white p-1" @click="mobileMenuOpen = !mobileMenuOpen">
            <X v-if="mobileMenuOpen" class="h-5 w-5" />
            <Menu v-else class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-2 pb-4 space-y-1">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="block text-sm py-2.5 transition-colors"
          :class="isActive(item.path) ? 'text-amber-400' : 'text-gray-300 hover:text-white'"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
        <!-- 服装制版 - 移动端 -->
        <button
          @click="goToPatternMaking(); mobileMenuOpen = false"
          class="w-full mt-2 px-4 py-2.5 text-sm font-bold rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black flex items-center justify-center gap-2"
        >
          <Scissors class="h-4 w-4" />
          <span>服装制版</span>
          <ExternalLink class="h-3.5 w-3.5" />
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main :class="route.path === '/' ? '' : 'pt-16'">
      <slot />
    </main>
  </div>
</template>
