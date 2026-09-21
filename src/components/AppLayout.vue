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
  { name: '首页', path: '/' },
  { name: '趋势', path: '/trends' },
  { name: 'AI创款', path: '/ai-create' },
  { name: 'AI改款', path: '/ai-modify' },
  { name: 'AI视觉', path: '/ai-visual' },
  { name: 'AI工具', path: '/ai-tools' },
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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen bg-dark-bg font-sans">
    <!-- Navigation Bar -->
    <header class="sticky top-0 z-50 glass-nav">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-3 cursor-pointer group" @click="router.push('/'); scrollToTop()">
          <div class="relative flex items-center justify-center w-10 h-10 border-2 border-white rounded-lg group-hover:border-brand-primary transition-colors">
            <div class="w-3 h-3 bg-white rounded-full group-hover:bg-brand-primary transition-colors"></div>
          </div>
          <div>
            <span class="text-xl font-bold tracking-wider text-white block leading-none">方圆智设</span>
            <span class="text-[10px] text-gray-400 tracking-wider font-mono mt-0.5 block">AI 服装设计</span>
          </div>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center transition-all"
            :class="isActive(item.path)
              ? 'text-brand-primary border-b-2 border-brand-primary pb-1'
              : 'text-gray-300 hover:text-white border-b-2 border-transparent pb-1 hover:border-white/30'"
          >
            {{ item.name }}
          </router-link>
          <!-- 服装制版 - 重点突出 -->
          <button
            @click="goToPatternMaking"
            class="ml-4 px-4 py-1.5 text-sm font-bold rounded-full bg-gradient-to-r from-brand-500 to-brand-400 text-black shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition-all flex items-center gap-1.5 group"
          >
            <Scissors class="h-3.5 w-3.5" />
            <span>服装制版</span>
            <ExternalLink class="h-3 w-3 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </nav>

        <!-- Right Tools -->
        <div class="flex items-center space-x-4">
          <button class="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-dark-hover transition">
            <Search class="w-5 h-5" />
          </button>
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="text-gray-300 hover:text-brand-primary p-2 rounded-lg hover:bg-dark-hover transition-all group"
            :title="isLightTheme ? '切换到深色模式' : '切换到浅色模式'"
          >
            <Sun v-if="!isLightTheme" class="w-5 h-5 transition-transform group-hover:rotate-45" />
            <Moon v-else class="w-5 h-5 transition-transform group-hover:-rotate-12" />
          </button>
          <!-- User Menu Dropdown -->
          <div class="relative">
            <button
              class="flex items-center gap-2 group"
              @click="toggleUserMenu"
            >
              <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 flex items-center justify-center font-bold text-black text-sm shadow-lg shadow-amber-500/20 hover:scale-105 transition">
                <span class="text-sm font-bold">钟</span>
              </div>
              <ChevronDown class="h-4 w-4 text-gray-400 hidden sm:block transition-transform group-hover:text-white" :class="userMenuOpen ? 'rotate-180' : ''" />
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
                class="absolute right-0 top-full mt-2 w-56 glass-card rounded-xl border border-dark-border/80 py-2 shadow-2xl shadow-black/50 z-50"
              >
                <!-- User Info -->
                <div class="px-4 py-3 border-b border-white/5">
                  <div class="flex items-center gap-3">
                    <div class="h-10 w-10 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 flex items-center justify-center font-bold text-black text-sm shadow-lg shadow-amber-500/20 flex-shrink-0">
                      <span class="font-bold">钟</span>
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
                    class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-dark-hover hover:text-white transition-colors"
                    @click="goToWorkbench"
                  >
                    <LayoutDashboard class="h-4 w-4 text-brand-primary" />
                    <span class="flex-1 text-left">我的工作台</span>
                    <span class="text-[10px] text-brand-primary bg-brand-primary/10 px-1.5 py-0.5 rounded-full font-bold">PRO</span>
                  </button>
                  <button
                    class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-dark-hover hover:text-white transition-colors"
                  >
                    <Settings class="h-4 w-4 text-gray-400" />
                    <span class="flex-1 text-left">账户设置</span>
                  </button>
                </div>
                <div class="border-t border-white/5 pt-1">
                  <button
                    class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                  >
                    <LogOut class="h-4 w-4" />
                    <span class="flex-1 text-left">退出登录</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
          <!-- Mobile Menu Toggle -->
          <button class="lg:hidden text-gray-300 hover:text-white p-2" @click="mobileMenuOpen = !mobileMenuOpen">
            <X v-if="mobileMenuOpen" class="w-5 h-5" />
            <Menu v-else class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden bg-dark-card border-b border-dark-border px-4 pb-4 space-y-2">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block py-2 text-sm transition-colors"
            :class="isActive(item.path) ? 'text-brand-primary' : 'text-gray-300 hover:text-white'"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
          <!-- 服装制版 - 移动端 -->
          <button
            @click="goToPatternMaking(); mobileMenuOpen = false"
            class="w-full mt-2 px-4 py-2.5 text-sm font-bold rounded-full bg-gradient-to-r from-brand-500 to-brand-400 text-black flex items-center justify-center gap-2"
          >
            <Scissors class="h-4 w-4" />
            <span>服装制版</span>
            <ExternalLink class="h-3.5 w-3.5" />
          </button>
        </div>
      </Transition>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>
  </div>
</template>
