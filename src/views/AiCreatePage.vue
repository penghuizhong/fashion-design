<script setup lang="ts">
import { ref } from 'vue'
import {
  Sparkles,
  Shuffle,
  Layers,
  Wand2,
  Upload,
  RotateCcw,
  Download,
  Heart,
  ZoomIn,
  Plus,
  ChevronRight,
} from 'lucide-vue-next'

const activeSub = ref('文生款')
const category = ref('女装')
const style = ref('高定')
const prompt = ref('')
const isGenerating = ref(false)

const subItems = ['文生款', '相似款', '款式融合', '系列创款']

const categories = ['女装', '男装', '童装', '汉服', 'Lolita', '西装']
const styles = ['高定', '极简', '国潮', '欧美', '日系', '街头']
const outputTypes = ['正面款式图', '背面款式图', '细节图', '设计说明']

const generatedResults = [
  { id: 1, gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', label: '款式 A' },
  { id: 2, gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', label: '款式 B' },
  { id: 3, gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', label: '款式 C' },
  { id: 4, gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', label: '款式 D' },
  { id: 5, gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', label: '款式 E' },
  { id: 6, gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', label: '款式 F' },
]

function handleGenerate() {
  isGenerating.value = true
  setTimeout(() => { isGenerating.value = false }, 2000)
}
</script>

<template>
  <div class="flex min-h-[calc(100vh-4rem)]">
    <!-- Left Sidebar -->
    <aside class="hidden lg:flex w-52 flex-shrink-0 glass-sidebar py-6 px-3 flex-col">
      <div class="flex items-center gap-2 px-3 mb-6">
        <div class="h-8 w-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
          <Sparkles class="h-4 w-4 text-amber-400" />
        </div>
        <div>
          <p class="text-sm font-semibold text-white">AI创款</p>
          <p class="text-[10px] text-gray-500">从灵感到服装款式</p>
        </div>
      </div>

      <div class="mb-4">
        <p class="text-[10px] text-gray-500 uppercase tracking-wider px-3 mb-2">创作</p>
        <nav class="space-y-1">
          <button
            v-for="item in subItems"
            :key="item"
            class="flex items-center gap-2.5 w-full rounded-lg px-3 py-2 text-sm transition-colors"
            :class="activeSub === item ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'"
            @click="activeSub = item"
          >
            <component :is="item === '文生款' ? Wand2 : item === '相似款' ? Shuffle : item === '款式融合' ? Layers : Sparkles" class="h-4 w-4" />
            {{ item }}
          </button>
        </nav>
      </div>

      <div class="mt-auto">
        <p class="text-[10px] text-gray-500 uppercase tracking-wider px-3 mb-2">最近项目</p>
        <div class="space-y-1">
          <div v-for="p in ['春夏女装系列', '高级灰西装', 'Lolita 系列']" :key="p" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer">
            <div class="h-6 w-6 rounded bg-white/10 flex-shrink-0"></div>
            <div>
              <p class="text-xs text-gray-300">{{ p }}</p>
              <p class="text-[10px] text-gray-600">2025-04-20</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 p-6 space-y-6">
      <!-- Page Header -->
      <div>
        <h1 class="text-2xl font-bold text-white">{{ activeSub }}</h1>
        <p class="text-sm text-gray-500 mt-1">
          {{ activeSub === '文生款' ? '从设计理念生成服装款式' : activeSub === '相似款' ? '参考图片生成变体' : activeSub === '款式融合' ? '融合多款设计元素' : '生成完整系列设计' }}
        </p>
      </div>

      <div class="grid lg:grid-cols-[360px_1fr] gap-6">
        <!-- Left Panel: Controls -->
        <div class="space-y-4">
          <!-- Text to Design -->
          <div v-if="activeSub === '文生款'" class="glass-card p-5 space-y-4 border border-white/10">
            <div>
              <label class="text-xs font-medium text-gray-300 mb-2 block">设计描述</label>
              <textarea v-model="prompt" class="input-field h-28 resize-none" placeholder="请输入你的设计需求，例如：设计一款东方美学高级女装..."></textarea>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-300 mb-2 block">品类</label>
              <div class="flex flex-wrap gap-2">
                <button v-for="cat in categories" :key="cat" class="rounded-lg px-3 py-1.5 text-xs font-medium transition-colors" :class="category === cat ? 'bg-amber-500 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'" @click="category = cat">{{ cat }}</button>
              </div>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-300 mb-2 block">风格</label>
              <div class="flex flex-wrap gap-2">
                <button v-for="s in styles" :key="s" class="rounded-lg px-3 py-1.5 text-xs font-medium transition-colors" :class="style === s ? 'bg-amber-500 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'" @click="style = s">{{ s }}</button>
              </div>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-300 mb-2 block">输出内容</label>
              <div class="space-y-2">
                <label v-for="output in outputTypes" :key="output" class="flex items-center gap-2 text-sm text-gray-300">
                  <input type="checkbox" checked class="rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-500" />
                  {{ output }}
                </label>
              </div>
            </div>
            <button class="btn-primary w-full" @click="handleGenerate">
              <Sparkles class="h-4 w-4" />
              生成设计
            </button>
          </div>

          <!-- Similar -->
          <div v-if="activeSub === '相似款'" class="glass-card p-5 space-y-4 border border-white/10">
            <div>
              <label class="text-xs font-medium text-gray-300 mb-2 block">上传参考图</label>
              <div class="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-amber-400/30 transition-colors cursor-pointer">
                <Upload class="h-8 w-8 text-gray-500 mx-auto mb-2" />
                <p class="text-sm text-gray-400">点击或拖拽上传参考款式</p>
                <p class="text-xs text-gray-600 mt-1">支持 JPG、PNG，最大 10MB</p>
              </div>
            </div>
            <div class="rounded-xl bg-white/5 p-3 border border-white/5">
              <p class="text-xs font-medium text-gray-400 mb-2">AI将分析以下元素：</p>
              <div class="flex flex-wrap gap-1.5">
                <span class="badge bg-white/5 text-gray-400 text-[11px] border border-white/10">廓形</span>
                <span class="badge bg-white/5 text-gray-400 text-[11px] border border-white/10">领型</span>
                <span class="badge bg-white/5 text-gray-400 text-[11px] border border-white/10">袖型</span>
                <span class="badge bg-white/5 text-gray-400 text-[11px] border border-white/10">门襟</span>
                <span class="badge bg-white/5 text-gray-400 text-[11px] border border-white/10">面料纹理</span>
                <span class="badge bg-white/5 text-gray-400 text-[11px] border border-white/10">装饰元素</span>
              </div>
            </div>
            <button class="btn-primary w-full" @click="handleGenerate">
              <Shuffle class="h-4 w-4" />
              生成相似款
            </button>
          </div>

          <!-- Fusion -->
          <div v-if="activeSub === '款式融合'" class="glass-card p-5 space-y-4 border border-white/10">
            <p class="text-sm text-gray-400">上传多个款式，选择各款的设计元素进行融合</p>
            <div class="space-y-3">
              <div v-for="i in 3" :key="i" class="border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-amber-400/30 transition-colors cursor-pointer">
                <Upload class="h-6 w-6 text-gray-500 mx-auto mb-1" />
                <p class="text-xs text-gray-500">上传款式 {{ ['A', 'B', 'C'][i-1] }}</p>
              </div>
            </div>
            <div class="rounded-xl bg-white/5 p-3 space-y-2 border border-white/5">
              <p class="text-xs font-medium text-gray-400">融合设置：</p>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="text-[11px] text-gray-500">裙摆来源</label>
                  <select class="select-field text-xs"><option>款式 A</option><option>款式 B</option><option>款式 C</option></select>
                </div>
                <div>
                  <label class="text-[11px] text-gray-500">领型来源</label>
                  <select class="select-field text-xs"><option>款式 B</option><option>款式 A</option><option>款式 C</option></select>
                </div>
                <div>
                  <label class="text-[11px] text-gray-500">袖子来源</label>
                  <select class="select-field text-xs"><option>款式 C</option><option>款式 A</option><option>款式 B</option></select>
                </div>
                <div>
                  <label class="text-[11px] text-gray-500">面料来源</label>
                  <select class="select-field text-xs"><option>款式 A</option><option>款式 B</option><option>款式 C</option></select>
                </div>
              </div>
            </div>
            <button class="btn-primary w-full" @click="handleGenerate">
              <Layers class="h-4 w-4" />
              融合生成
            </button>
          </div>

          <!-- Series -->
          <div v-if="activeSub === '系列创款'" class="glass-card p-5 space-y-4 border border-white/10">
            <div>
              <label class="text-xs font-medium text-gray-300 mb-2 block">系列主题</label>
              <input type="text" class="input-field" placeholder="例如：都市游牧系列" />
            </div>
            <div>
              <label class="text-xs font-medium text-gray-300 mb-2 block">系列品类</label>
              <div class="flex flex-wrap gap-2">
                <span v-for="item in ['上衣', '裙装', '裤装', '外套', '连衣裙']" :key="item" class="badge bg-white/5 text-gray-400 border border-white/10 cursor-pointer hover:bg-white/10">{{ item }}</span>
              </div>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-300 mb-2 block">色彩方案</label>
              <div class="flex gap-1.5">
                <div v-for="c in ['#D4AF37', '#9CA3AF', '#D4A574', '#789262', '#8E7CB8']" :key="c" class="h-8 w-8 rounded-lg border border-white/10 cursor-pointer hover:scale-110 transition-transform" :style="{ backgroundColor: c }"></div>
              </div>
            </div>
            <button class="btn-primary w-full" @click="handleGenerate">
              <Sparkles class="h-4 w-4" />
              生成系列
            </button>
          </div>
        </div>

        <!-- Right Panel: Results -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-medium text-gray-300">生成结果</h3>
            <div class="flex items-center gap-2">
              <button class="btn-ghost text-xs"><RotateCcw class="h-3.5 w-3.5" /> 重新生成</button>
              <button class="btn-ghost text-xs"><Download class="h-3.5 w-3.5" /> 全部下载</button>
            </div>
          </div>

          <div v-if="isGenerating" class="glass-card p-12 text-center border border-white/10">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 mb-4">
              <Sparkles class="h-6 w-6 text-amber-400 animate-pulse" />
            </div>
            <p class="text-sm font-medium text-white">AI正在生成设计...</p>
            <p class="text-xs text-gray-500 mt-1">预计需要 15-30 秒</p>
          </div>

          <div v-else class="grid grid-cols-2 xl:grid-cols-3 gap-3">
            <div v-for="item in generatedResults" :key="item.id" class="glass-card overflow-hidden group cursor-pointer border border-white/10">
              <div class="aspect-[3/4] relative" :style="{ background: item.gradient }">
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button class="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center"><ZoomIn class="h-4 w-4 text-gray-700" /></button>
                  <button class="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center"><Heart class="h-4 w-4 text-gray-700" /></button>
                  <button class="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center"><Download class="h-4 w-4 text-gray-700" /></button>
                </div>
                <span class="absolute bottom-2 left-2 badge bg-black/50 text-white text-[11px] border border-white/10">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
