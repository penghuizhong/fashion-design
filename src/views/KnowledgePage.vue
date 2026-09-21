<script setup lang="ts">
import { ref } from 'vue'
import {
  BookOpen,
  User,
  Search,
  Send,
  Sparkles,
  ChevronRight,
  Heart,
  Ruler,
  Scissors,
  Layers,
  Monitor,
  Cpu,
} from 'lucide-vue-next'

const chatInput = ref('')
const knowledgeCategories = [
  { name: '人体结构', icon: User, count: 42 },
  { name: '服装原型', icon: Heart, count: 38 },
  { name: '版型设计', icon: Ruler, count: 56 },
  { name: '面料知识', icon: Layers, count: 45 },
  { name: '工艺知识', icon: Scissors, count: 33 },
  { name: 'CAD教程', icon: Monitor, count: 28 },
  { name: 'AI制版', icon: Cpu, count: 19 },
]

const chatMessages = [
  { role: 'user', content: '为什么我的西装前片容易起吊？' },
  { role: 'assistant', content: '根据西装结构分析，前片起吊可能与以下因素有关：\n\n1. 胸省转移不当 - 省量分配不合理会导致前片张力不均\n2. 胸围松量不足 - 前胸部位需要足够的活动松量\n3. 前胸弧度处理 - 前中线弧度与人体胸型不匹配\n4. 前片长度平衡 - 前后片长度比例失调\n\n建议检查纸样的胸省位置，确保省尖指向胸高点，并适当增加前胸松量。' },
]

const popularQuestions = [
  '西装前片起吊怎么处理？',
  '如何正确进行省道转移？',
  '真丝面料裁剪注意事项',
  '立裁与平裁的区别',
]
</script>

<template>
  <div class="flex min-h-[calc(100vh-4rem)]">
    <!-- Left Sidebar -->
    <aside class="hidden lg:flex w-56 flex-shrink-0 glass-sidebar py-6 px-3 flex-col">
      <div class="flex items-center gap-2 px-3 mb-6">
        <div class="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
          <BookOpen class="h-4 w-4 text-emerald-400" />
        </div>
        <div>
          <p class="text-sm font-semibold text-white">设计知识</p>
          <p class="text-[10px] text-gray-500">专业知识体系</p>
        </div>
      </div>
      <div class="relative mb-4 px-1">
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <input type="text" class="input-field pl-9 !h-9 !text-xs" placeholder="搜索知识库..." />
      </div>
      <nav class="space-y-1 flex-1">
        <button v-for="cat in knowledgeCategories" :key="cat.name" class="flex items-center justify-between w-full rounded-lg px-3 py-2 text-left hover:bg-white/5 transition-colors group">
          <div class="flex items-center gap-2.5">
            <component :is="cat.icon" class="h-4 w-4 text-gray-500 group-hover:text-gray-300" />
            <span class="text-sm text-gray-400 group-hover:text-white">{{ cat.name }}</span>
          </div>
          <span class="text-xs text-gray-600">{{ cat.count }}</span>
        </button>
      </nav>
      <div class="mt-4">
        <p class="text-[10px] text-gray-500 uppercase tracking-wider px-3 mb-2">热门问题</p>
        <div class="space-y-1">
          <button v-for="q in popularQuestions" :key="q" class="flex items-center gap-2 w-full text-left rounded-lg px-3 py-1.5 text-xs text-gray-500 hover:bg-white/5 hover:text-gray-300 transition-colors">
            <ChevronRight class="h-3 w-3 flex-shrink-0" />{{ q }}
          </button>
        </div>
      </div>
    </aside>

    <!-- Main: AI Chat -->
    <div class="flex-1 p-6">
      <div class="glass-card flex flex-col border border-white/10" style="min-height: calc(100vh - 7rem);">
        <div class="border-b border-white/10 px-5 py-3 flex items-center gap-3">
          <div class="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <Sparkles class="h-4 w-4 text-black" />
          </div>
          <div>
            <p class="text-sm font-medium text-white">AI设计助手 - 方圆</p>
            <p class="text-[11px] text-gray-500">基于专业知识库的AI设计师</p>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto p-5 space-y-4">
          <div v-for="msg in chatMessages" :key="msg.content" class="flex" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
            <div class="max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed" :class="msg.role === 'user' ? 'bg-amber-500 text-black' : 'bg-white/5 text-gray-200 border border-white/5'">
              <p class="whitespace-pre-line">{{ msg.content }}</p>
            </div>
          </div>
        </div>

        <div class="border-t border-white/10 px-5 py-3">
          <div class="flex items-center gap-2">
            <input v-model="chatInput" type="text" class="input-field flex-1" placeholder="请输入你的问题，例如：为什么西装前片容易起吊？" />
            <button class="btn-primary !px-3"><Send class="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
