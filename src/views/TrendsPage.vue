<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  TrendingUp,
  Palette,
  Layers,
  Sparkles,
  Zap,
  Eye,
  Filter,
  ChevronRight,
} from 'lucide-vue-next'

const router = useRouter()
const activeSeason = ref('2027 SS')
const activeTheme = ref('东方美学')

const seasons = ['2027 SS', '2027 FW', '2026 FW', '2026 SS']
const themes = ['东方美学', 'Quiet Luxury', '复古学院', '可持续时尚', '极简主义']

const sidebarItems = [
  { name: '趋势分析', icon: TrendingUp },
  { name: '趋势灵感', icon: Eye },
  { name: '趋势色彩', icon: Palette },
  { name: '趋势面料', icon: Layers },
  { name: '趋势廓形', icon: Filter },
  { name: '趋势细节', icon: Sparkles },
]

const colors = [
  { name: '高级灰', hex: '#9CA3AF' },
  { name: '静谧蓝', hex: '#6B8FA3' },
  { name: '竹青', hex: '#789262' },
  { name: '烟紫', hex: '#8E7CB8' },
  { name: '暖杏', hex: '#D4A574' },
  { name: '墨黑', hex: '#2D2D2D' },
  { name: '月白', hex: '#F5F0EB' },
  { name: '赭石', hex: '#A0522D' },
]

const fabrics = ['真丝缎面', '提花织物', '羊绒混纺', '有机棉', '再生聚酯', '亚麻混纺']
const silhouettes = ['H型廓形', 'A字裙摆', '茧型大衣', '修身西装', '飘逸长裙', '宽松衬衫']
const details = ['盘扣设计', '立领结构', '刺绣工艺', '褶皱处理', '不对称剪裁', '镂空细节']
const keywords = ['Quiet Luxury', '东方美学', '复古学院']
</script>

<template>
  <div class="flex min-h-[calc(100vh-4rem)]">
    <!-- Left Sidebar -->
    <aside class="hidden lg:flex w-56 flex-shrink-0 glass-sidebar py-6 px-3 flex-col">
      <div class="flex items-center gap-2 px-3 mb-6">
        <div class="h-8 w-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
          <TrendingUp class="h-4 w-4 text-amber-400" />
        </div>
        <div>
          <p class="text-sm font-semibold text-white">趋势</p>
          <p class="text-[10px] text-gray-500">洞察流行趋势</p>
        </div>
      </div>
      <nav class="space-y-1 flex-1">
        <button
          v-for="item in sidebarItems"
          :key="item.name"
          class="flex items-center gap-2.5 w-full rounded-lg px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <component :is="item.icon" class="h-4 w-4" />
          {{ item.name }}
        </button>
      </nav>
      <button class="btn-primary w-full mt-4 text-xs !px-3 !py-2" @click="router.push('/ai-create')">
        <Zap class="h-3.5 w-3.5" />
        一键趋势创款
      </button>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 p-6 space-y-6">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-white">2027 春夏女装趋势</h1>
          <p class="text-sm text-gray-500 mt-1">探索未来流行趋势，获取设计灵感</p>
        </div>
        <div class="flex rounded-lg border border-white/10 bg-white/5 p-0.5">
          <button
            v-for="season in seasons"
            :key="season"
            class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
            :class="activeSeason === season ? 'bg-amber-500 text-black' : 'text-gray-400 hover:text-white'"
            @click="activeSeason = season"
          >
            {{ season }}
          </button>
        </div>
      </div>

      <!-- Theme Selector -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="theme in themes"
          :key="theme"
          class="rounded-full px-4 py-2 text-sm font-medium transition-all"
          :class="activeTheme === theme
            ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
            : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'"
          @click="activeTheme = theme"
        >
          {{ theme }}
        </button>
      </div>

      <!-- Trend Banner -->
      <div class="glass-card p-6 border border-white/10">
        <div class="flex items-start justify-between mb-6">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="badge bg-amber-500/10 text-amber-300 border border-amber-500/20">{{ activeSeason }}</span>
              <span class="badge bg-white/5 text-gray-300 border border-white/10">{{ activeTheme }}</span>
            </div>
            <h2 class="text-xl font-bold text-white">{{ activeSeason }} {{ activeTheme }}趋势</h2>
          </div>
          <button class="btn-primary" @click="router.push('/ai-create')">
            <Zap class="h-4 w-4" />
            基于此趋势创款
          </button>
        </div>

        <!-- Keywords -->
        <div class="mb-6">
          <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">关键词</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="kw in keywords" :key="kw" class="badge bg-white/5 text-gray-300 border border-white/10">{{ kw }}</span>
          </div>
        </div>

        <!-- Trend Details -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">流行色</p>
            <div class="grid grid-cols-4 gap-2">
              <div v-for="color in colors" :key="color.hex" class="text-center group">
                <div class="h-10 w-full rounded-lg border border-white/10 mb-1 group-hover:scale-105 transition-transform" :style="{ backgroundColor: color.hex }"></div>
                <p class="text-[10px] text-gray-500 truncate">{{ color.name }}</p>
              </div>
            </div>
          </div>
          <div>
            <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">流行面料</p>
            <div class="space-y-1.5">
              <div v-for="fabric in fabrics" :key="fabric" class="flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-pointer">
                <Layers class="h-3.5 w-3.5 text-gray-500" />{{ fabric }}
              </div>
            </div>
          </div>
          <div>
            <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">流行廓形</p>
            <div class="space-y-1.5">
              <div v-for="sil in silhouettes" :key="sil" class="flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-pointer">
                <Filter class="h-3.5 w-3.5 text-gray-500" />{{ sil }}
              </div>
            </div>
          </div>
          <div>
            <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">流行细节</p>
            <div class="space-y-1.5">
              <div v-for="detail in details" :key="detail" class="flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-pointer">
                <Sparkles class="h-3.5 w-3.5 text-gray-500" />{{ detail }}
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
          <p class="text-sm text-gray-500">根据以上趋势元素，AI将自动生成完整设计方案</p>
          <button class="btn-primary" @click="router.push('/ai-create')">
            <Sparkles class="h-4 w-4" />
            一键生成 20 款设计
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
