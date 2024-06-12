import{u as s}from"./chunks/copname.ba2596e6.js";import{q as a,o as e,c as l,V as n}from"./chunks/framework.9cd9f48f.js";const o=n(`<h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-stepper</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:min</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="限制为整数" tabindex="-1">限制为整数 <a class="header-anchor" href="#限制为整数" aria-label="Permalink to &quot;限制为整数&quot;">​</a></h2><p>通过 <code>integer</code> 设置</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-stepper</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">integer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value11</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="禁止输入框输入" tabindex="-1">禁止输入框输入 <a class="header-anchor" href="#禁止输入框输入" aria-label="Permalink to &quot;禁止输入框输入&quot;">​</a></h2><p>通过 <code>disable-input</code> 设置</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-stepper</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disable-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value22</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="修改步长-每次-3" tabindex="-1">修改步长，每次+-3 <a class="header-anchor" href="#修改步长-每次-3" aria-label="Permalink to &quot;修改步长，每次+-3&quot;">​</a></h2><p>通过 <code>step</code> 设置</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-stepper</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:step</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="修改尺寸" tabindex="-1">修改尺寸 <a class="header-anchor" href="#修改尺寸" aria-label="Permalink to &quot;修改尺寸&quot;">​</a></h2><p>通过 <code>size</code> 设置</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-stepper</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">34</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">input-width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">40px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="限制输入范围-1-5" tabindex="-1">限制输入范围(-1,5) <a class="header-anchor" href="#限制输入范围-1-5" aria-label="Permalink to &quot;限制输入范围(-1,5)&quot;">​</a></h2><p>通过 <code>min</code> 和 <code>max</code> 设置</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-stepper</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:min</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:max</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="显示可清除图标" tabindex="-1">显示可清除图标 <a class="header-anchor" href="#显示可清除图标" aria-label="Permalink to &quot;显示可清除图标&quot;">​</a></h2><p>通过 <code>clearable</code> 设置</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-search</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">clearable</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>属性</th><th style="text-align:center;">含义</th><th style="text-align:center;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>modelValue</td><td style="text-align:center;">双向绑定的数字</td><td style="text-align:center;">Number</td><td style="text-align:right;">-</td></tr><tr><td>max</td><td style="text-align:center;">最大值</td><td style="text-align:center;">Number</td><td style="text-align:right;">-</td></tr><tr><td>min</td><td style="text-align:center;">最小值</td><td style="text-align:center;">Number</td><td style="text-align:right;">1</td></tr><tr><td>min</td><td style="text-align:center;">最小值</td><td style="text-align:center;">Number</td><td style="text-align:right;">1</td></tr><tr><td>integer</td><td style="text-align:center;">只允许输入整数</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>disabled</td><td style="text-align:center;">是否禁用</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>disableInput</td><td style="text-align:center;">是否禁止输入框输入</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>inputWidth</td><td style="text-align:center;">输入框的宽度</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;28px&#39;</td></tr><tr><td>size</td><td style="text-align:center;">步进器大小</td><td style="text-align:center;">Number</td><td style="text-align:right;">28</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th style="text-align:center;">含义</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>add</td><td style="text-align:center;">点击+时</td><td style="text-align:right;">-</td></tr><tr><td>sub</td><td style="text-align:center;">点击-时</td><td style="text-align:right;">-</td></tr><tr><td>change</td><td style="text-align:center;">值改变时</td><td style="text-align:right;">当前绑定的值</td></tr></tbody></table><h2 id="css-变量" tabindex="-1">css 变量 <a class="header-anchor" href="#css-变量" aria-label="Permalink to &quot;css 变量&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--lz-stepper-gap: 2px;</span></span>
<span class="line"><span style="color:#A6ACCD;">--lz-stepper-input-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">323233;</span></span>
<span class="line"><span style="color:#A6ACCD;">--lz-stepper-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f2f3f5;</span></span>
<span class="line"><span style="color:#A6ACCD;">--lz-stepper-active-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f7f8f9;</span></span>
<span class="line"><span style="color:#A6ACCD;">--lz-stepper-disabled-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f7f8fa;</span></span>
<span class="line"><span style="color:#A6ACCD;">--lz-stepper-border-radius: 4px;</span></span></code></pre></div>`,26),p=[o],F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/stepper.md","filePath":"component/stepper.md","lastUpdated":1672570252000}'),r={name:"component/stepper.md"},h=Object.assign(r,{setup(c){const t=s();return a(()=>{t.updateName("stepper")}),(d,i)=>(e(),l("div",null,p))}});export{F as __pageData,h as default};
