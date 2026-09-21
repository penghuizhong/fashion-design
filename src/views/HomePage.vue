<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  ArrowRight,
  Bolt,
  Play,
  Camera,
  Palette,
  PenTool,
  Layers,
  ChevronRight,
  Download,
  Box,
  Check,
  Video,
  Wrench,
  WandSparkles,
  Scissors,
  ExternalLink,
  Ruler,
  Layers3,
  Bot,
} from 'lucide-vue-next'

const router = useRouter()
const isGenerating = ref(false)
const activeStyle = ref('先锋高定')

const styles = ['先锋高定', '新中式国潮', '复古机能']
const presetTags = ['+ 新中式领口', '+ 液态金属面料', '+ 廓形西装']

// 制版网站地址
const patternMakingUrl = 'https://zhiban.fangyuan-ai.com'

function goToPatternMaking() {
  window.open(patternMakingUrl, '_blank')
}

const videoCards = [
  { mode: '巴黎秀场模式', modeColor: 'text-purple-300', title: '米兰时装周光影走秀', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80' },
  { mode: '未来赛博模式', modeColor: 'text-cyan-300', title: '液态金属风超高清动态', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80' },
  { mode: '自然光影模式', modeColor: 'text-amber-300', title: '度假风飘逸面料渲染', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80' },
]

const ecommerceImages = [
  { scene: 'SCENE 01', sceneColor: 'text-amber-400', title: '法式复古街头 - 虚拟试衣', img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80' },
  { scene: 'SCENE 02', sceneColor: 'text-purple-400', title: '极简极速摄影棚 - 主图生成', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80' },
]

const toolCards = [
  { icon: Palette, title: '智能配色与Pantone萃取', desc: '一键上传灵感大片，提取精准色彩配比，并自动匹配国际Pantone潘通纺织色卡。', color: 'bg-amber-500/10 border-amber-500/30 text-amber-400', hoverColor: 'group-hover:bg-amber-400 group-hover:text-black', linkColor: 'text-amber-400', link: '体验配色工具' },
  { icon: PenTool, title: '矢量款式图/线稿提取', desc: '将效果图自动分离为符合工业打样标准的矢量款式线稿，直接导出AI/CAD格式。', color: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400', hoverColor: 'group-hover:bg-cyan-400 group-hover:text-black', linkColor: 'text-cyan-400', link: '提取款式线稿' },
  { icon: Layers, title: '面料纹理生成与贴图', desc: '生成包含法线贴图、凹凸贴图的超高清无缝面料纹理（提花、刺绣、皮革等）。', color: 'bg-purple-500/10 border-purple-500/30 text-purple-400', hoverColor: 'group-hover:bg-purple-400 group-hover:text-black', linkColor: 'text-purple-400', link: '生成材质贴图' },
]

const patternFeatures = [
  { icon: Ruler, title: '智能公式计算器', desc: '一键计算袖窿深、领围、肩斜等核心制版参数，支持多种体型系数自动换算。', color: 'bg-amber-500/10 border-amber-500/30 text-amber-400', hoverColor: 'group-hover:bg-amber-400 group-hover:text-black' },
  { icon: Layers3, title: 'CAD 图稿资源库', desc: '海量工业级版型图纸，涵盖男女装、童装、内衣全品类，支持DXF/AAMA格式导出。', color: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400', hoverColor: 'group-hover:bg-cyan-400 group-hover:text-black' },
  { icon: Bot, title: 'AI 制版助手', desc: '自然语言描述即可生成初版版型，自动放码推档，大幅缩短制版师从草图到样板的时间。', color: 'bg-purple-500/10 border-purple-500/30 text-purple-400', hoverColor: 'group-hover:bg-purple-400 group-hover:text-black' },
  { icon: Scissors, title: '制版视频教程', desc: '从基础打版到高级定制，系统化视频课程体系，助力制版师技能进阶。', color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400', hoverColor: 'group-hover:bg-emerald-400 group-hover:text-black' },
]

function handleGenerate() {
  isGenerating.value = true
  setTimeout(() => { isGenerating.value = false }, 1500)
}
</script>

<template>
  <div class="relative">
    <!-- Ambient Grid Background -->
    <div class="fixed inset-0 pointer-events-none opacity-30" style="background-size: 40px 40px; background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);"></div>

    <!-- ==================== HERO SECTION ==================== -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Ambient Glows -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <!-- Tag Pill -->
        <div class="inline-flex items-center gap-2 bg-white/5 border border-amber-500/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md shadow-inner">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span class="text-xs text-amber-200 tracking-widest font-medium uppercase">全新进化 · Next-Gen Fashion AI 3.5</span>
        </div>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          重塑时尚生态 <br>
          <span class="text-gold-gradient font-serif italic font-normal">AI 驱动</span> 服装设计革新
        </h1>

        <p class="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 font-light mb-10 leading-relaxed">
          方圆智设整合顶级生成式时尚大模型，从灵感草图、3D生成、AI模特走秀到电商大片，为服装设计师与品牌提供全链路数字化高定解决方案。
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <button class="w-full sm:w-auto px-8 py-4 rounded-full btn-primary flex items-center justify-center gap-3 shadow-lg shadow-amber-500/20 group cursor-pointer" @click="router.push('/ai-create')">
            <span class="text-sm font-bold tracking-wide">立即体验 AI 创款</span>
            <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button class="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black flex items-center justify-center gap-3 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all group" @click="goToPatternMaking">
            <Scissors class="h-4 w-4" />
            <span class="text-sm font-bold">前往服装制版平台</span>
            <ExternalLink class="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <!-- Metrics -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-10">
          <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div class="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">10x+</div>
            <div class="text-xs text-gray-400 mt-1">设计打样效率提升</div>
          </div>
          <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div class="text-2xl sm:text-3xl font-bold text-white font-serif">500,000+</div>
            <div class="text-xs text-gray-400 mt-1">高定灵感图案库</div>
          </div>
          <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div class="text-2xl sm:text-3xl font-bold text-cyan-400 font-serif">4K</div>
            <div class="text-xs text-gray-400 mt-1">超清质感图实时演算</div>
          </div>
          <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div class="text-2xl sm:text-3xl font-bold text-purple-400 font-serif">85%</div>
            <div class="text-xs text-gray-400 mt-1">视觉拍摄成本降低</div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span class="text-[10px] tracking-widest text-gray-400 uppercase mb-2">SCROLL DOWN</span>
        <div class="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div class="w-1 h-2 bg-amber-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>

    <!-- ==================== AI CREATION SECTION ==================== -->
    <section class="py-24 relative z-10 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div class="flex items-center gap-2 text-amber-400 text-xs tracking-widest uppercase font-semibold mb-2">
              <WandSparkles class="h-4 w-4" />
              <span>FEATURE 01 / AI CREATION</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">AI 创款 · 草图到高定大片</h2>
          </div>
          <p class="text-gray-400 text-sm max-w-md mt-4 md:mt-0">
            支持极速手稿转三维渲染图、爆款融合演变、印花图案智能平铺与款式微调，秒级呈现大牌高定质感。
          </p>
        </div>

        <!-- Interactive Workstation -->
        <div class="glass-card rounded-3xl p-6 lg:p-8 border border-white/10 relative overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- Left Control Panel -->
            <div class="lg:col-span-4 space-y-6">
              <div class="bg-black/40 rounded-2xl p-5 border border-white/5">
                <label class="text-xs font-semibold text-gray-300 block mb-3">创意设计描述 (Prompt)</label>
                <textarea class="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400 h-24 resize-none transition-colors" placeholder="如：极简主义米白色高定晚礼服...">极简主义重磅真丝晚礼服，不对称立体剪裁，流线型褶皱，微光金属光泽，奢华高定视觉风格。</textarea>
                <div class="flex flex-wrap gap-2 mt-3">
                  <span v-for="tag in presetTags" :key="tag" class="text-[10px] bg-white/5 hover:bg-amber-400/20 text-gray-300 hover:text-amber-300 px-2.5 py-1 rounded-full cursor-pointer transition-colors border border-white/5">{{ tag }}</span>
                </div>
              </div>

              <div class="space-y-3">
                <span class="text-xs font-semibold text-gray-300 block">选择设计风格</span>
                <div class="grid grid-cols-3 gap-2">
                  <button v-for="s in styles" :key="s" class="py-2.5 px-3 rounded-xl text-xs font-medium text-center transition-colors" :class="activeStyle === s ? 'bg-amber-400/10 border border-amber-400/40 text-amber-300' : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300'" @click="activeStyle = s">{{ s }}</button>
                </div>
              </div>

              <button class="w-full py-3.5 btn-primary rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2" @click="handleGenerate">
                <Bolt class="h-4 w-4" />
                <span>{{ isGenerating ? 'AI 神经网络演算中...' : '生成款式高定效果图' }}</span>
              </button>
            </div>

            <!-- Right Display -->
            <div class="lg:col-span-8 relative rounded-2xl overflow-hidden border border-white/10 min-h-[380px] bg-black/60 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80" alt="高定时装设计效果图" class="w-full h-[420px] object-cover transition-all duration-700" :style="{ opacity: isGenerating ? 0.4 : 1 }">
              <!-- Glass Info Overlay -->
              <div class="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-xl flex items-center justify-between border border-white/15">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span class="text-xs font-medium text-white">演算生成结果：4K 实时高精度渲染完成 (耗时 1.2s)</span>
                </div>
                <div class="flex items-center gap-2">
                  <button class="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs text-white flex items-center gap-1.5">
                    <Download class="h-3 w-3" /> 导出版图
                  </button>
                  <button class="px-3 py-1.5 btn-primary rounded-lg text-xs flex items-center gap-1.5">
                    <Box class="h-3 w-3" /> 3D精修
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== AI VIDEO SECTION ==================== -->
    <section class="py-24 relative z-10" style="background: linear-gradient(to bottom, transparent, rgba(88, 28, 135, 0.1), transparent);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div class="flex items-center gap-2 text-purple-400 text-xs tracking-widest uppercase font-semibold mb-2">
              <Video class="h-4 w-4" />
              <span>FEATURE 02 / AI RUNWAY VIDEO</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">AI 视频 · 超临场虚拟时装秀</h2>
          </div>
          <p class="text-gray-400 text-sm max-w-md mt-4 md:mt-0">
            一键将服装静态图转化为符合人体动力学的超高清模特走秀视频，完美还原真实物理面料风吹摆动与光影流动。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="card in videoCards" :key="card.title" class="glass-card rounded-2xl overflow-hidden group border border-white/10">
            <div class="relative h-80 overflow-hidden">
              <img :src="card.img" :alt="card.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div class="w-full flex items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold" :class="card.modeColor">{{ card.mode }}</span>
                    <h3 class="text-base font-bold text-white">{{ card.title }}</h3>
                  </div>
                  <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black transition-colors">
                    <Play class="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== E-COMMERCE VISUALS SECTION ==================== -->
    <section class="py-24 relative z-10 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Info -->
          <div class="lg:col-span-5 space-y-6">
            <div class="flex items-center gap-2 text-cyan-400 text-xs tracking-widest uppercase font-semibold">
              <Camera class="h-4 w-4" />
              <span>FEATURE 03 / E-COMMERCE VISUALS</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white leading-tight">
              电商视觉 · 零摄影开销 <br>
              <span class="text-cyan-purple-gradient">无限虚拟模特试衣</span>
            </h2>
            <p class="text-gray-300 text-sm leading-relaxed font-light">
              告别昂贵的模特和外景拍摄。只需上传平铺服装白底图，即可自由组合全球不同肤色、身形的虚拟模特与商业拍摄场景，实时输出天猫、抖音高转化主图。
            </p>
            <div class="space-y-4 border-t border-white/10 pt-6">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                  <Check class="h-3 w-3" />
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-white">多元化模特库 (Global Avatars)</h4>
                  <p class="text-xs text-gray-400">包含欧美高定模特、日韩清新、复古摩登等百余种姿态。</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                  <Check class="h-3 w-3" />
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-white">商业级灯光渲染 (Studio Lighting)</h4>
                  <p class="text-xs text-gray-400">精准模拟棚拍柔光、日光暗影与多角度环境反射。</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Image Showcase -->
          <div class="lg:col-span-7 grid grid-cols-2 gap-4">
            <div v-for="(img, idx) in ecommerceImages" :key="img.scene" class="glass-card rounded-2xl p-3 border border-white/10" :class="idx === 1 ? 'mt-8' : ''">
              <img :src="img.img" :alt="img.title" class="w-full h-64 sm:h-80 object-cover rounded-xl mb-3">
              <div class="px-2">
                <span class="text-[10px] font-mono" :class="img.sceneColor">{{ img.scene }}</span>
                <p class="text-xs font-semibold text-white truncate">{{ img.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== AI TOOLBOX SECTION ==================== -->
    <section class="py-24 relative z-10 border-t border-white/5" style="background: rgba(0,0,0,0.4);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 text-amber-400 text-xs tracking-widest uppercase font-semibold mb-2">
            <Wrench class="h-4 w-4" />
            <span>FEATURE 04 / AI TOOLBOX</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">AI 时尚工具箱 · 专为设计师打造</h2>
          <p class="text-gray-400 text-sm mt-3">深度集成了服装产业专属的单项高频效率工具，全方位赋能创作全流程。</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="tool in toolCards" :key="tool.title" class="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group cursor-pointer">
            <div>
              <div class="w-12 h-12 rounded-xl border flex items-center justify-center text-xl mb-5 transition-colors" :class="[tool.color, tool.hoverColor]">
                <component :is="tool.icon" class="h-5 w-5" />
              </div>
              <h3 class="text-lg font-bold text-white mb-2">{{ tool.title }}</h3>
              <p class="text-xs text-gray-400 leading-relaxed">{{ tool.desc }}</p>
            </div>
            <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium" :class="tool.linkColor">
              <span>{{ tool.link }}</span>
              <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== PATTERN MAKING SECTION ==================== -->
    <section class="py-24 relative z-10 border-t border-white/5" style="background: linear-gradient(to bottom, rgba(251, 191, 36, 0.03), transparent);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div class="flex items-center gap-2 text-amber-400 text-xs tracking-widest uppercase font-semibold mb-2">
              <Scissors class="h-4 w-4" />
              <span>FEATURE 05 / PATTERN MAKING</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">服装制版 · 专业制版平台</h2>
            <p class="text-gray-400 text-sm mt-3 max-w-xl">
              方圆智版 — 专为服装制版师打造的智能制版工作台，与方圆智设设计端数据互通，实现从设计到生产的无缝衔接。
            </p>
          </div>
          <button class="text-xs text-amber-300 hover:text-white flex items-center gap-1 mt-4 md:mt-0 group" @click="goToPatternMaking">
            <span>立即前往制版平台</span>
            <ExternalLink class="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="feature in patternFeatures" :key="feature.title" class="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group cursor-pointer" @click="goToPatternMaking">
            <div>
              <div class="w-12 h-12 rounded-xl border flex items-center justify-center text-xl mb-5 transition-colors" :class="[feature.color, feature.hoverColor]">
                <component :is="feature.icon" class="h-5 w-5" />
              </div>
              <h3 class="text-lg font-bold text-white mb-2">{{ feature.title }}</h3>
              <p class="text-xs text-gray-400 leading-relaxed">{{ feature.desc }}</p>
            </div>
            <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-amber-400">
              <span>前往体验</span>
              <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        <!-- 双平台联动说明 -->
        <div class="mt-12 glass-card rounded-2xl p-8 border border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div class="md:col-span-8">
              <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span class="text-amber-400">设计 × 制版</span>
                双平台无缝联动
              </h3>
              <p class="text-sm text-gray-400 leading-relaxed">
                方圆智设（AI服装设计）与方圆智版（AI服装制版）深度打通，设计稿一键转版型参数，
                从创意灵感、效果渲染到工业制版，全链路数字化协同，让设计落地更高效。
              </p>
            </div>
            <div class="md:col-span-4 flex md:justify-end">
              <button class="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all group" @click="goToPatternMaking">
                <Scissors class="h-4 w-4" />
                <span>进入制版平台</span>
                <ExternalLink class="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== FOOTER ==================== -->
    <footer class="border-t border-white/10 bg-black/80 py-12 relative z-10 text-xs text-gray-400">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div class="flex items-center gap-2 text-white font-bold text-base mb-3">
              <span class="text-amber-400">方圆智设</span>
              <span class="text-[10px] font-normal text-gray-500">| AI服装设计工作台</span>
            </div>
            <p class="text-xs text-gray-500 leading-relaxed mb-4">
              连接灵感与工业生产，用人工智能重塑时尚品牌的设计、营销与视觉表达。
            </p>
          </div>
          <div>
            <h5 class="text-white font-semibold mb-3">核心产品</h5>
            <ul class="space-y-2">
              <li><button class="hover:text-white" @click="router.push('/ai-create')">AI 款式草图生成</button></li>
              <li><button class="hover:text-white" @click="router.push('/ai-visual')">虚拟秀场视频渲染</button></li>
              <li><button class="hover:text-white" @click="router.push('/ai-visual')">电商模特商拍合成</button></li>
              <li><button class="hover:text-white" @click="router.push('/ai-tools')">3D 面料贴图与线稿</button></li>
            </ul>
          </div>
          <div>
            <h5 class="text-white font-semibold mb-3">解决方案</h5>
            <ul class="space-y-2">
              <li><span class="hover:text-white cursor-pointer">独立设计师品牌</span></li>
              <li><span class="hover:text-white cursor-pointer">大型服装企业数字化</span></li>
              <li><span class="hover:text-white cursor-pointer">跨境服装电商爆款</span></li>
              <li><span class="hover:text-white cursor-pointer">时尚院校与科研机构</span></li>
            </ul>
          </div>
          <div>
            <h5 class="text-white font-semibold mb-3">联系与支持</h5>
            <p class="mb-2">商业合作: partner@fangyuan-ai.com</p>
            <p class="mb-2">技术支持: 400-888-9999</p>
            <p>地址: 上海市静安区时尚创意产业园 A8 栋</p>
          </div>
        </div>
        <div class="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500">
          <p>© 2026 方圆智设 (FangYuan AI Fashion). All rights reserved.</p>
          <div class="flex gap-6 mt-4 sm:mt-0">
            <span class="hover:text-gray-400 cursor-pointer">隐私政策</span>
            <span class="hover:text-gray-400 cursor-pointer">服务条款</span>
            <span class="hover:text-gray-400 cursor-pointer">沪ICP备20260888号-1</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
