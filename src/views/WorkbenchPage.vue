<script setup lang="ts">
import { ref } from 'vue'
import {
  FolderOpen,
  Clock,
  Star,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Plus,
  MoreHorizontal,
  Grid3X3,
  List,
} from 'lucide-vue-next'

const viewMode = ref('grid')

const projects = [
  { name: '2027 SS 东方美学系列', type: 'AI创款', count: 20, updated: '2小时前', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { name: '秋冬男装西装改款', type: 'AI改款', count: 10, updated: '5小时前', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { name: '品牌宣传视频素材', type: 'AI视觉', count: 8, updated: '昨天', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { name: '高定礼服系列', type: 'AI创款', count: 15, updated: '2天前', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
  { name: '童装春夏系列', type: 'AI创款', count: 12, updated: '3天前', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
  { name: '电商主图优化', type: 'AI工具', count: 30, updated: '1周前', gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
]

const stats = [
  { label: '总项目数', value: '24', icon: FolderOpen },
  { label: '本月生成', value: '156', icon: Sparkles },
  { label: '收藏设计', value: '42', icon: Star },
  { label: 'AI调用次数', value: '1,280', icon: TrendingUp },
]

const recentActivities = [
  { action: '生成了 6 款设计', project: '2027 SS 东方美学系列', time: '2小时前' },
  { action: '完成改款 4 件', project: '秋冬男装西装改款', time: '5小时前' },
  { action: '生成走秀视频', project: '品牌宣传视频素材', time: '昨天' },
  { action: '褪底处理 12 张', project: '电商主图优化', time: '1周前' },
]
</script>

<template>
  <div class="p-6 space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-white">我的工作台</h1>
        <p class="text-sm text-gray-500 mt-1">管理所有设计项目和资源</p>
      </div>
      <button class="btn-primary"><Plus class="h-4 w-4" />新建项目</button>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <div v-for="stat in stats" :key="stat.label" class="glass-card p-4 border border-white/10">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <component :is="stat.icon" class="h-5 w-5 text-gray-400" />
          </div>
          <div>
            <p class="text-xl font-bold text-white">{{ stat.value }}</p>
            <p class="text-xs text-gray-500">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <div>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-white">设计项目</h2>
        <div class="flex rounded-lg border border-white/10 bg-white/5 p-0.5">
          <button class="p-1.5 rounded-md transition-colors" :class="viewMode === 'grid' ? 'bg-white/10' : ''" @click="viewMode = 'grid'"><Grid3X3 class="h-4 w-4 text-gray-400" /></button>
          <button class="p-1.5 rounded-md transition-colors" :class="viewMode === 'list' ? 'bg-white/10' : ''" @click="viewMode = 'list'"><List class="h-4 w-4 text-gray-400" /></button>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <button class="glass-card p-6 border border-dashed border-white/10 hover:border-amber-400/30 hover:bg-white/[0.02] transition-all flex flex-col items-center justify-center gap-2 min-h-[180px]">
          <div class="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
            <Plus class="h-5 w-5 text-gray-500" />
          </div>
          <p class="text-sm font-medium text-gray-500">新建项目</p>
        </button>

        <div v-for="project in projects" :key="project.name" class="glass-card overflow-hidden group cursor-pointer border border-white/10">
          <div class="h-28 relative" :style="{ background: project.gradient }">
            <div class="absolute top-3 right-3">
              <button class="h-7 w-7 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors">
                <MoreHorizontal class="h-4 w-4 text-white" />
              </button>
            </div>
            <span class="absolute bottom-3 left-3 badge bg-black/50 text-white text-[11px] border border-white/10">{{ project.type }}</span>
          </div>
          <div class="p-4">
            <p class="text-sm font-medium text-white mb-1 truncate">{{ project.name }}</p>
            <div class="flex items-center justify-between text-xs text-gray-500">
              <span class="flex items-center gap-1"><Clock class="h-3 w-3" />{{ project.updated }}</span>
              <span>{{ project.count }} 个设计</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div>
      <h2 class="text-lg font-semibold text-white mb-4">最近动态</h2>
      <div class="glass-card divide-y divide-white/5 border border-white/10">
        <div v-for="activity in recentActivities" :key="activity.action" class="flex items-center justify-between px-5 py-3.5">
          <div class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
              <Sparkles class="h-4 w-4 text-amber-400" />
            </div>
            <div>
              <p class="text-sm text-gray-200">{{ activity.action }}</p>
              <p class="text-xs text-gray-500">{{ activity.project }}</p>
            </div>
          </div>
          <span class="text-xs text-gray-600">{{ activity.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
