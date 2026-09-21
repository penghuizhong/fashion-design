<script setup lang="ts">
import { ref } from 'vue'
import {
  Palette,
  Upload,
  Paintbrush,
  Scissors,
  Shirt,
  Ruler,
  Sparkles,
  Wand2,
  RotateCcw,
  Download,
  ZoomIn,
  Move,
  MousePointer2,
} from 'lucide-vue-next'

const activeModify = ref('改颜色')
const isModifying = ref(false)

const modifyOptions = [
  { name: '改颜色', icon: Palette },
  { name: '改领型', icon: Shirt },
  { name: '改袖型', icon: Scissors },
  { name: '改裙长', icon: Ruler },
  { name: '改廓形', icon: Move },
  { name: '改面料', icon: Paintbrush },
  { name: '改风格', icon: Sparkles },
  { name: '自定义修改', icon: Wand2 },
]

const colorOptions = [
  { name: '经典黑', hex: '#1a1a1a' },
  { name: '高级灰', hex: '#6B7280' },
  { name: '海军蓝', hex: '#1E3A5F' },
  { name: '酒红', hex: '#722F37' },
  { name: '驼色', hex: '#C19A6B' },
  { name: '象牙白', hex: '#FFFFF0' },
  { name: '橄榄绿', hex: '#556B2F' },
  { name: '烟紫', hex: '#7B68AE' },
]

const fabricOptions = ['羊毛', '真丝', '棉麻', '雪纺', '皮革', '灯芯绒', '牛仔', '蕾丝']
const collarOptions = ['平驳领', '枪驳领', '立领', '圆领', 'V领', '方领', '衬衫领', '青果领']

const results = [
  { id: 1, gradient: 'linear-gradient(135deg, #2D2D2D 0%, #4a4a4a 100%)', label: '经典黑' },
  { id: 2, gradient: 'linear-gradient(135deg, #6B7280 0%, #9CA3AF 100%)', label: '高级灰' },
  { id: 3, gradient: 'linear-gradient(135deg, #1E3A5F 0%, #2E5A8F 100%)', label: '海军蓝' },
  { id: 4, gradient: 'linear-gradient(135deg, #722F37 0%, #9B4D55 100%)', label: '酒红' },
]

function handleModify() {
  isModifying.value = true
  setTimeout(() => { isModifying.value = false }, 2000)
}
</script>

<template>
  <div class="flex min-h-[calc(100vh-4rem)]">
    <!-- Left Sidebar -->
    <aside class="hidden lg:flex w-52 flex-shrink-0 glass-sidebar py-6 px-3 flex-col">
      <div class="flex items-center gap-2 px-3 mb-6">
        <div class="h-8 w-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
          <Palette class="h-4 w-4 text-cyan-400" />
        </div>
        <div>
          <p class="text-sm font-semibold text-white">AI改款</p>
          <p class="text-[10px] text-gray-500">精准修改服装细节</p>
        </div>
      </div>
      <nav class="space-y-1 flex-1">
        <button
          v-for="opt in modifyOptions"
          :key="opt.name"
          class="flex items-center gap-2.5 w-full rounded-lg px-3 py-2 text-sm transition-colors"
          :class="activeModify === opt.name ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'"
          @click="activeModify = opt.name"
        >
          <component :is="opt.icon" class="h-4 w-4" />
          {{ opt.name }}
        </button>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 p-6 space-y-6">
      <div>
        <h1 class="text-2xl font-bold text-white">款式调整</h1>
        <p class="text-sm text-gray-500 mt-1">精准修改服装细节，局部调整更专业</p>
      </div>

      <!-- Modify Type Tabs (mobile) -->
      <div class="lg:hidden flex flex-wrap gap-2">
        <button v-for="opt in modifyOptions" :key="opt.name" class="rounded-full px-3 py-1.5 text-xs font-medium transition-all" :class="activeModify === opt.name ? 'bg-cyan-500 text-black' : 'bg-white/5 border border-white/10 text-gray-400'" @click="activeModify = opt.name">{{ opt.name }}</button>
      </div>

      <div class="grid lg:grid-cols-[360px_1fr] gap-6">
        <!-- Left Panel -->
        <div class="space-y-4">
          <div class="glass-card p-5 border border-white/10">
            <label class="text-xs font-medium text-gray-300 mb-3 block">上传款式</label>
            <div class="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-colors cursor-pointer">
              <Upload class="h-8 w-8 text-gray-500 mx-auto mb-2" />
              <p class="text-sm text-gray-400">上传需要修改的服装图片</p>
              <p class="text-xs text-gray-600 mt-1">支持 JPG、PNG</p>
            </div>
            <div class="mt-3 rounded-xl bg-white/5 p-3 flex items-center gap-3 border border-white/5">
              <div class="h-12 w-12 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-white truncate">普通西装.jpg</p>
                <p class="text-xs text-gray-500">1200 x 1600px</p>
              </div>
            </div>
          </div>

          <div class="glass-card p-5 space-y-4 border border-white/10">
            <div v-if="activeModify === '改颜色'">
              <label class="text-xs font-medium text-gray-300 mb-2 block">选择颜色</label>
              <div class="grid grid-cols-4 gap-2">
                <button v-for="color in colorOptions" :key="color.hex" class="text-center group">
                  <div class="h-10 w-full rounded-lg border-2 border-transparent group-hover:border-cyan-400 transition-colors mb-1" :style="{ backgroundColor: color.hex }"></div>
                  <p class="text-[10px] text-gray-500">{{ color.name }}</p>
                </button>
              </div>
            </div>
            <div v-if="activeModify === '改面料'">
              <label class="text-xs font-medium text-gray-300 mb-2 block">选择面料</label>
              <div class="flex flex-wrap gap-2">
                <button v-for="fabric in fabricOptions" :key="fabric" class="rounded-lg px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10 transition-colors">{{ fabric }}</button>
              </div>
            </div>
            <div v-if="activeModify === '改领型'">
              <label class="text-xs font-medium text-gray-300 mb-2 block">选择领型</label>
              <div class="flex flex-wrap gap-2">
                <button v-for="collar in collarOptions" :key="collar" class="rounded-lg px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10 transition-colors">{{ collar }}</button>
              </div>
            </div>
            <div v-if="activeModify === '自定义修改'">
              <label class="text-xs font-medium text-gray-300 mb-2 block">框选区域后输入修改指令</label>
              <div class="rounded-xl bg-white/5 p-3 mb-3 border border-white/5">
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <MousePointer2 class="h-3.5 w-3.5" />在图片上框选要修改的区域
                </div>
              </div>
              <textarea class="input-field h-20 resize-none" placeholder="例如：改成西装枪驳领"></textarea>
            </div>
            <div v-if="['改袖型', '改裙长', '改廓形', '改风格'].includes(activeModify)">
              <label class="text-xs font-medium text-gray-300 mb-2 block">修改描述</label>
              <textarea class="input-field h-20 resize-none" placeholder="描述你想要的修改效果..."></textarea>
            </div>
            <button class="btn-primary w-full" @click="handleModify">
              <Wand2 class="h-4 w-4" />
              开始改款
            </button>
          </div>
        </div>

        <!-- Right Panel -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-medium text-gray-300">改款结果</h3>
            <div class="flex items-center gap-2">
              <button class="btn-ghost text-xs"><RotateCcw class="h-3.5 w-3.5" /> 重新生成</button>
              <button class="btn-ghost text-xs"><Download class="h-3.5 w-3.5" /> 下载</button>
            </div>
          </div>

          <div class="glass-card p-4 border border-white/10">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-xs font-medium text-gray-500 mb-2 text-center">修改前</p>
                <div class="aspect-[3/4] rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/5">
                  <Shirt class="h-12 w-12 text-gray-500" />
                </div>
                <p class="text-xs text-gray-500 text-center mt-2">普通西装</p>
              </div>
              <div>
                <p class="text-xs font-medium text-gray-500 mb-2 text-center">修改后</p>
                <div class="aspect-[3/4] rounded-xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border border-amber-500/20">
                  <Shirt class="h-12 w-12 text-amber-400/60" />
                </div>
                <p class="text-xs text-amber-400 text-center mt-2">高级灰羊毛西装</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div v-for="item in results" :key="item.id" class="glass-card overflow-hidden group cursor-pointer border border-white/10">
              <div class="aspect-[3/4] relative" :style="{ background: item.gradient }">
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button class="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center"><ZoomIn class="h-4 w-4 text-gray-700" /></button>
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
