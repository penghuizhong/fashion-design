<script setup lang="ts">
import { ref } from 'vue'
import {
  Image,
  ZoomIn,
  Eraser,
  Mic,
  Volume2,
  AudioLines,
  Upload,
  Sparkles,
} from 'lucide-vue-next'

const activeCategory = ref('image')

const imageTools = [
  { id: 'remove-bg', name: 'AI褪底', desc: '一键去除图片背景', icon: Image, color: 'bg-sky-500/10 text-sky-400 border-sky-500/30' },
  { id: 'upscale', name: '高清放大', desc: '2K / 4K 超分辨率', icon: ZoomIn, color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
  { id: 'erase', name: '涂抹消除', desc: '删除 logo、杂物、水印', icon: Eraser, color: 'bg-rose-500/10 text-rose-400 border-rose-500/30' },
]

const soundTools = [
  { id: 'voice-design', name: '语音设计', desc: '口述设计需求，AI生成结构化描述', icon: Mic, color: 'bg-violet-500/10 text-violet-400 border-violet-500/30' },
  { id: 'voice-clone', name: '语音克隆', desc: '克隆讲师声音用于课程', icon: AudioLines, color: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
  { id: 'voice-gen', name: '语音生成', desc: '产品介绍、视频旁白、广告声音', icon: Volume2, color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
]
</script>

<template>
  <div class="p-6 space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-white">AI工具</h1>
      <p class="text-sm text-gray-500 mt-1">图片处理与声音工具，提升设计效率</p>
    </div>

    <div class="flex rounded-lg border border-white/10 bg-white/5 p-0.5 w-fit">
      <button class="px-4 py-2 text-sm font-medium rounded-md transition-colors" :class="activeCategory === 'image' ? 'bg-amber-500 text-black' : 'text-gray-400'" @click="activeCategory = 'image'">图片工具</button>
      <button class="px-4 py-2 text-sm font-medium rounded-md transition-colors" :class="activeCategory === 'sound' ? 'bg-amber-500 text-black' : 'text-gray-400'" @click="activeCategory = 'sound'">声音工具</button>
    </div>

    <div v-if="activeCategory === 'image'" class="grid md:grid-cols-3 gap-4">
      <div v-for="tool in imageTools" :key="tool.id" class="glass-card p-5 hover:shadow-lg transition-all border border-white/10">
        <div class="h-10 w-10 rounded-xl border flex items-center justify-center mb-3" :class="tool.color">
          <component :is="tool.icon" class="h-5 w-5" />
        </div>
        <p class="text-sm font-medium text-white">{{ tool.name }}</p>
        <p class="text-xs text-gray-500 mt-1 mb-4">{{ tool.desc }}</p>
        <div class="border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-amber-400/30 transition-colors cursor-pointer">
          <Upload class="h-5 w-5 text-gray-500 mx-auto mb-1" />
          <p class="text-xs text-gray-500">上传图片</p>
        </div>
        <button class="btn-secondary w-full mt-3 text-xs"><Sparkles class="h-3.5 w-3.5 text-amber-400" />开始处理</button>
      </div>
    </div>

    <div v-if="activeCategory === 'sound'" class="grid md:grid-cols-3 gap-4">
      <div v-for="tool in soundTools" :key="tool.id" class="glass-card p-5 hover:shadow-lg transition-all border border-white/10">
        <div class="h-10 w-10 rounded-xl border flex items-center justify-center mb-3" :class="tool.color">
          <component :is="tool.icon" class="h-5 w-5" />
        </div>
        <p class="text-sm font-medium text-white">{{ tool.name }}</p>
        <p class="text-xs text-gray-500 mt-1 mb-4">{{ tool.desc }}</p>
        <div class="rounded-xl bg-white/5 p-4 border border-white/5">
          <div class="flex items-center gap-2 mb-2">
            <div class="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
              <component :is="tool.icon" class="h-4 w-4 text-gray-400" />
            </div>
            <div class="flex-1">
              <div class="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full w-1/3 bg-amber-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <p class="text-[11px] text-gray-500">点击录制或上传音频</p>
        </div>
        <button class="btn-secondary w-full mt-3 text-xs"><Sparkles class="h-3.5 w-3.5 text-amber-400" />开始处理</button>
      </div>
    </div>
  </div>
</template>
