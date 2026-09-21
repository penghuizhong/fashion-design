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
  BookOpen,
  LayoutDashboard,
  Search,
  User,
  Menu,
  X,
  FolderOpen,
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/', icon: Home },
  { name: '趋势', path: '/trends', icon: TrendingUp },
  { name: 'AI创款', path: '/ai-create', icon: Sparkles },
  { name: 'AI改款', path: '/ai-modify', icon: Palette },
  { name: 'AI视觉', path: '/ai-visual', icon: Camera },
  { name: 'AI工具', path: '/ai-tools', icon: Wrench },
  { name: '设计知识库', path: '/knowledge', icon: BookOpen },
  { name: '我的工作台', path: '/workbench', icon: LayoutDashboard },
]

const isActive = (path: string) => route.path === path
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
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-3">
          <button class="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full py-1.5 pl-3 pr-2.5 text-xs text-gray-400 transition-all">
            <Search class="h-3.5 w-3.5" />
            <span class="hidden md:inline">搜索功能、教程...</span>
          </button>
          <button class="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full py-1.5 pl-1.5 pr-3 transition-all" @click="router.push('/workbench')">
            <FolderOpen class="h-3.5 w-3.5 text-gray-400" />
            <span class="text-xs font-medium text-gray-200">我的项目</span>
          </button>
          <div class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-1 pr-3 transition-all cursor-pointer">
            <div class="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center border border-amber-400/40">
              <User class="h-3 w-3 text-black" />
            </div>
            <span class="text-xs font-medium text-gray-200 hidden sm:inline">钟总</span>
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
      </div>
    </header>

    <!-- Main Content -->
    <main :class="route.path === '/' ? '' : 'pt-16'">
      <slot />
    </main>
  </div>
</template>
