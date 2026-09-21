<script setup lang="ts">
import { ref } from 'vue'
import {
  Camera,
  User,
  Image,
  Video,
  Share2,
  Upload,
  Sparkles,
  Play,
  MapPin,
  Globe,
  ArrowRight,
} from 'lucide-vue-next'

const activeSection = ref('模特')

const sections = [
  { id: '模特', name: '模特', icon: User, items: ['虚拟试衣', 'AI换模特', 'AI人物'] },
  { id: '场景', name: '场景', icon: MapPin, items: ['AI换背景', '场景生成', '商业摄影'] },
  { id: '视频', name: '视频', icon: Video, items: ['图生视频', '参考生视频', '服装展示'] },
  { id: '营销', name: '营销', icon: Share2, items: ['小红书', 'Instagram', 'TikTok'] },
]

const modelTypes = ['亚洲女性', '欧美女性', '商务男士', '年轻潮人', '成熟女性', '运动型男']
const scenes = ['摄影棚', '街头', '商场', '高级酒店', '海边', '花园']

const videoOptions = [
  { name: '模特走秀', desc: '生成T台走秀视频' },
  { name: '转身展示', desc: '360度展示服装细节' },
  { name: '面料动态', desc: '展示面料垂坠感与动态' },
]

const marketingPlatforms = [
  { name: '小红书', desc: '标题 + 图片 + 文案 + 标签', color: 'bg-red-500/10 text-red-400 border-red-500/30' },
  { name: 'Instagram', desc: '英文营销文案 + 视觉建议', color: 'bg-pink-500/10 text-pink-400 border-pink-500/30' },
  { name: 'TikTok', desc: '短视频脚本 + 音乐建议', color: 'bg-white/5 text-gray-300 border-white/10' },
]
</script>

<template>
  <div class="flex min-h-[calc(100vh-4rem)]">
    <!-- Left Sidebar -->
    <aside class="hidden lg:flex w-52 flex-shrink-0 glass-sidebar py-6 px-3 flex-col">
      <div class="flex items-center gap-2 px-3 mb-6">
        <div class="h-8 w-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
          <Camera class="h-4 w-4 text-purple-400" />
        </div>
        <div>
          <p class="text-sm font-semibold text-white">AI视觉</p>
          <p class="text-[10px] text-gray-500">全方位视觉呈现</p>
        </div>
      </div>
      <nav class="space-y-1 flex-1">
        <div v-for="section in sections" :key="section.id">
          <p class="text-[10px] text-gray-500 uppercase tracking-wider px-3 mb-1.5 mt-3 first:mt-0">{{ section.name }}</p>
          <button
            v-for="item in section.items"
            :key="item"
            class="flex items-center gap-2.5 w-full rounded-lg px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <component :is="section.icon" class="h-3.5 w-3.5" />
            {{ item }}
          </button>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 p-6 space-y-6">
      <div>
        <h1 class="text-2xl font-bold text-white">AI视觉</h1>
        <p class="text-sm text-gray-500 mt-1">模特、场景、视频、营销 - 全方位视觉呈现</p>
      </div>

      <!-- Section Tabs -->
      <div class="flex gap-2">
        <button
          v-for="section in sections"
          :key="section.id"
          class="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all"
          :class="activeSection === section.id
            ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
            : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'"
          @click="activeSection = section.id"
        >
          <component :is="section.icon" class="h-4 w-4" />
          {{ section.name }}
        </button>
      </div>

      <!-- Model Section -->
      <div v-if="activeSection === '模特'" class="space-y-4">
        <div class="grid lg:grid-cols-2 gap-6">
          <div class="glass-card p-5 space-y-4 border border-white/10">
            <h3 class="text-sm font-semibold text-white">虚拟试衣</h3>
            <div class="grid grid-cols-2 gap-3">
              <div class="border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-purple-400/30 transition-colors cursor-pointer">
                <Upload class="h-6 w-6 text-gray-500 mx-auto mb-1" />
                <p class="text-xs text-gray-500">上传衣服平铺图</p>
              </div>
              <div class="border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-purple-400/30 transition-colors cursor-pointer">
                <Upload class="h-6 w-6 text-gray-500 mx-auto mb-1" />
                <p class="text-xs text-gray-500">上传人体照片</p>
              </div>
            </div>
            <div class="flex items-center gap-2 text-xs text-gray-500">
              <ArrowRight class="h-3.5 w-3.5" />AI生成真人穿着效果
            </div>
            <button class="btn-primary w-full"><Camera class="h-4 w-4" />生成试衣效果</button>
          </div>
          <div class="glass-card p-5 space-y-4 border border-white/10">
            <h3 class="text-sm font-semibold text-white">AI换模特</h3>
            <p class="text-xs text-gray-500">选择模特类型，生成不同市场版本</p>
            <div class="grid grid-cols-3 gap-2">
              <button v-for="model in modelTypes" :key="model" class="rounded-xl border border-white/10 p-3 text-center hover:border-purple-400/30 hover:bg-white/5 transition-colors">
                <div class="h-10 w-10 rounded-full bg-white/10 mx-auto mb-2 flex items-center justify-center">
                  <User class="h-5 w-5 text-gray-400" />
                </div>
                <p class="text-xs font-medium text-gray-300">{{ model }}</p>
              </button>
            </div>
            <button class="btn-primary w-full"><User class="h-4 w-4" />更换模特</button>
          </div>
        </div>
      </div>

      <!-- Scene Section -->
      <div v-if="activeSection === '场景'" class="space-y-4">
        <div class="glass-card p-5 space-y-4 border border-white/10">
          <h3 class="text-sm font-semibold text-white">AI换背景</h3>
          <div class="grid grid-cols-3 md:grid-cols-6 gap-3">
            <button v-for="scene in scenes" :key="scene" class="rounded-xl border border-white/10 p-3 text-center hover:border-purple-400/30 hover:bg-white/5 transition-colors group">
              <div class="h-16 rounded-lg bg-gradient-to-br from-white/5 to-white/10 mb-2 group-hover:from-white/10 group-hover:to-white/15 transition-colors"></div>
              <p class="text-xs font-medium text-gray-300">{{ scene }}</p>
            </button>
          </div>
          <div class="flex gap-3">
            <div class="flex-1 border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-purple-400/30 transition-colors cursor-pointer">
              <Upload class="h-6 w-6 text-gray-500 mx-auto mb-1" />
              <p class="text-xs text-gray-500">上传服装图片</p>
            </div>
            <button class="btn-primary self-end"><Image class="h-4 w-4" />更换背景</button>
          </div>
        </div>
      </div>

      <!-- Video Section -->
      <div v-if="activeSection === '视频'" class="space-y-4">
        <div class="grid md:grid-cols-3 gap-4">
          <div v-for="vid in videoOptions" :key="vid.name" class="glass-card p-5 hover:shadow-lg transition-all cursor-pointer group border border-white/10">
            <div class="h-32 rounded-xl bg-gradient-to-br from-gray-800 to-black mb-3 flex items-center justify-center group-hover:from-gray-700 group-hover:to-gray-900 transition-colors">
              <Play class="h-8 w-8 text-white/40" />
            </div>
            <p class="text-sm font-medium text-white">{{ vid.name }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ vid.desc }}</p>
          </div>
        </div>
        <div class="glass-card p-5 border border-white/10">
          <h3 class="text-sm font-semibold text-white mb-3">参考生视频</h3>
          <p class="text-xs text-gray-500 mb-3">上传参考视频（如巴黎秀场走秀），AI替换服装生成品牌宣传片</p>
          <div class="flex gap-3">
            <div class="flex-1 border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-purple-400/30 transition-colors cursor-pointer">
              <Upload class="h-6 w-6 text-gray-500 mx-auto mb-1" />
              <p class="text-xs text-gray-500">上传参考视频</p>
            </div>
            <div class="flex-1 border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-purple-400/30 transition-colors cursor-pointer">
              <Upload class="h-6 w-6 text-gray-500 mx-auto mb-1" />
              <p class="text-xs text-gray-500">上传服装图片</p>
            </div>
            <button class="btn-primary self-end"><Video class="h-4 w-4" />生成视频</button>
          </div>
        </div>
      </div>

      <!-- Marketing Section -->
      <div v-if="activeSection === '营销'" class="space-y-4">
        <div class="grid md:grid-cols-3 gap-4">
          <div v-for="platform in marketingPlatforms" :key="platform.name" class="glass-card p-5 hover:shadow-lg transition-all cursor-pointer border border-white/10">
            <div class="h-10 w-10 rounded-lg flex items-center justify-center mb-3 border" :class="platform.color">
              <Globe class="h-5 w-5" />
            </div>
            <p class="text-sm font-medium text-white">{{ platform.name }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ platform.desc }}</p>
            <button class="btn-ghost text-xs mt-3 !px-0">生成内容 <ArrowRight class="h-3 w-3" /></button>
          </div>
        </div>
        <div class="glass-card p-5 border border-white/10">
          <h3 class="text-sm font-semibold text-white mb-3">社媒种草图生成</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div>
                <label class="text-xs font-medium text-gray-400 mb-1 block">产品名称</label>
                <input type="text" class="input-field" placeholder="例如：2027春夏真丝连衣裙" />
              </div>
              <div>
                <label class="text-xs font-medium text-gray-400 mb-1 block">卖点关键词</label>
                <input type="text" class="input-field" placeholder="例如：轻盈、优雅、透气" />
              </div>
              <div>
                <label class="text-xs font-medium text-gray-400 mb-1 block">目标平台</label>
                <div class="flex gap-2">
                  <span v-for="p in ['小红书', 'Instagram', 'TikTok']" :key="p" class="badge bg-white/5 text-gray-400 border border-white/10 cursor-pointer hover:bg-white/10">{{ p }}</span>
                </div>
              </div>
            </div>
            <div class="rounded-xl bg-white/5 p-4 border border-white/5">
              <p class="text-xs font-medium text-gray-400 mb-2">预览输出：</p>
              <div class="space-y-2 text-xs text-gray-500">
                <p>- 标题文案 x 3</p>
                <p>- 正文内容</p>
                <p>- 标签推荐</p>
                <p>- 配图建议</p>
              </div>
            </div>
          </div>
          <button class="btn-primary mt-4"><Sparkles class="h-4 w-4" />生成营销内容</button>
        </div>
      </div>
    </div>
  </div>
</template>
