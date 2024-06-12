import{u as t}from"./chunks/copname.ba2596e6.js";import{q as a,o as e,c as l,V as o}from"./chunks/framework.9cd9f48f.js";const n=o(`<h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>通过 <code>size</code> 设置球大小,通过 <code>progress</code> 设置进度</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-water-waves</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:progress</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">progress</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">250px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="内容插槽" tabindex="-1">内容插槽 <a class="header-anchor" href="#内容插槽" aria-label="Permalink to &quot;内容插槽&quot;">​</a></h2><p>通过 <code>color</code> 设置字体颜色</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-water-waves</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:progress</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">progress1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#bfa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ progress1 }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">lz-water-waves</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>属性</th><th style="text-align:center;">含义</th><th style="text-align:center;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>size</td><td style="text-align:center;">水波球大小</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;200px&#39;</td></tr><tr><td>progress</td><td style="text-align:center;">进度</td><td style="text-align:center;">Number</td><td style="text-align:right;">0</td></tr><tr><td>color</td><td style="text-align:center;">文字颜色</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;#fff&#39;</td></tr></tbody></table><h2 id="css变量" tabindex="-1">css变量 <a class="header-anchor" href="#css变量" aria-label="Permalink to &quot;css变量&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--lz-water-wave1-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">a0edff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-water-wave2-color: rgb(40 187 255 / 50%);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-water-wave3-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">2084cc;</span></span></code></pre></div>`,10),p=[n],F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/waterWaves.md","filePath":"component/waterWaves.md","lastUpdated":1670920708000}'),r={name:"component/waterWaves.md"},h=Object.assign(r,{setup(c){const s=t();return a(()=>{s.updateName("water-waves")}),(i,d)=>(e(),l("div",null,p))}});export{F as __pageData,h as default};
