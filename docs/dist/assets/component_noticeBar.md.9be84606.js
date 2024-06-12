import{u as s}from"./chunks/copname.ba2596e6.js";import{q as a,o as e,c as n,V as l}from"./chunks/framework.9cd9f48f.js";const o=l(`<h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-notice-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="是否滚动" tabindex="-1">是否滚动 <a class="header-anchor" href="#是否滚动" aria-label="Permalink to &quot;是否滚动&quot;">​</a></h2><p>通过 <code>scrollable</code> 设置</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-notice-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:scrollable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><p>自定义左侧图标插槽名 <code>icon</code> ,自定义内容，默认插槽</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-notice-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:scrollable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  test</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">lz-notice-bar</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="通知栏模式" tabindex="-1">通知栏模式 <a class="header-anchor" href="#通知栏模式" aria-label="Permalink to &quot;通知栏模式&quot;">​</a></h2><p>通过 <code>mode</code> 设置,可选值为 <code>close</code> 和 <code>link</code></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-notice-bar</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bottom</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">close</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">speed</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">90</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:show-left-icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">@close</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">close</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-notice-bar</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">米袋虽空——樱花开哉！</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>属性</th><th style="text-align:center;">含义</th><th style="text-align:center;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>speed</td><td style="text-align:center;">速度</td><td style="text-align:center;">[String, Number]</td><td style="text-align:right;">60</td></tr><tr><td>delay</td><td style="text-align:center;">延迟时间</td><td style="text-align:center;">[String, Number]</td><td style="text-align:right;">1</td></tr><tr><td>scrollable</td><td style="text-align:center;">是否开启滚动</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>text</td><td style="text-align:center;">显示的文字</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>color</td><td style="text-align:center;">文字颜色</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;#ed6a0c&#39;</td></tr><tr><td>bgColor</td><td style="text-align:center;">背景颜色</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;#fffbe8&#39;</td></tr><tr><td>showLeftIcon</td><td style="text-align:center;">是否显示左边的播放图标</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">true</td></tr><tr><td>iconProps</td><td style="text-align:center;">图标配置</td><td style="text-align:center;">Object</td><td style="text-align:right;">-</td></tr><tr><td>mode</td><td style="text-align:center;">通知栏模式，可选close和link</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>rightIconProps</td><td style="text-align:center;">右边icon的配置</td><td style="text-align:center;">Object</td><td style="text-align:right;">-</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th style="text-align:center;">含义</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>click</td><td style="text-align:center;">点击时</td><td style="text-align:right;">-</td></tr><tr><td>close</td><td style="text-align:center;">关闭时</td><td style="text-align:right;">-</td></tr><tr><td>replay</td><td style="text-align:center;">滚动结束时</td><td style="text-align:right;">-</td></tr></tbody></table><h2 id="css变量" tabindex="-1">css变量 <a class="header-anchor" href="#css变量" aria-label="Permalink to &quot;css变量&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--lz-notice-bar-padding: 0 16px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-notice-bar-height: 40px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-notice-bar-line-height: 24px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-notice-bar-icon-padding: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-notice-bar-content-text-font-size: 14px;</span></span></code></pre></div>`,17),p=[o],F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/noticeBar.md","filePath":"component/noticeBar.md","lastUpdated":1670920708000}'),r={name:"component/noticeBar.md"},h=Object.assign(r,{setup(c){const t=s();return a(()=>{t.updateName("notice-bar")}),(i,d)=>(e(),n("div",null,p))}});export{F as __pageData,h as default};
