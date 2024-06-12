import{u as s}from"./chunks/copname.ba2596e6.js";import{q as a,o as e,c as l,V as n}from"./chunks/framework.9cd9f48f.js";const o=n(`<h2 id="返回上级" tabindex="-1">返回上级 <a class="header-anchor" href="#返回上级" aria-label="Permalink to &quot;返回上级&quot;">​</a></h2><p>通过 <code>leftArrow</code> 开启返回按钮</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-nav-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">标题</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">left-title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">返回</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">left-arrow</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="右侧插槽" tabindex="-1">右侧插槽 <a class="header-anchor" href="#右侧插槽" aria-label="Permalink to &quot;右侧插槽&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-nav-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">标题</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">left-title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">返回</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">left-arrow</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#right</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">18</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#419dfb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">lz-nav-bar</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="fixed定位" tabindex="-1">fixed定位 <a class="header-anchor" href="#fixed定位" aria-label="Permalink to &quot;fixed定位&quot;">​</a></h2><p>通过 <code>fixed</code> 开启,通过 <code>placeholder</code> 生成等高占位元素</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">lz-nav-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fixed</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">  /&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>属性</th><th style="text-align:center;">含义</th><th style="text-align:center;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>title</td><td style="text-align:center;">标题名字</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>bgColor</td><td style="text-align:center;">背景颜色</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;#fff&#39;</td></tr><tr><td>leftTitle</td><td style="text-align:center;">左边文字</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>leftColor</td><td style="text-align:center;">左边文字颜色</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;#419dfb&#39;</td></tr><tr><td>rightTitle</td><td style="text-align:center;">右边文字</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>leftArrow</td><td style="text-align:center;">是否开启左边箭头</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>arrowProps</td><td style="text-align:center;">箭头配置，跟icon配置相同</td><td style="text-align:center;">Object</td><td style="text-align:right;">-</td></tr><tr><td>border</td><td style="text-align:center;">是否显示上边框</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">true</td></tr><tr><td>zIndex</td><td style="text-align:center;">层级</td><td style="text-align:center;">[Number,String]</td><td style="text-align:right;">1</td></tr><tr><td>fixed</td><td style="text-align:center;">是否开启fixed定位</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>placeholder</td><td style="text-align:center;">是否生成等高占位元素</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th style="text-align:center;">含义</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>click-left</td><td style="text-align:center;">点击左侧</td><td style="text-align:right;">-</td></tr><tr><td>click-right</td><td style="text-align:center;">点击右侧</td><td style="text-align:right;">-</td></tr></tbody></table><h2 id="css变量" tabindex="-1">css变量 <a class="header-anchor" href="#css变量" aria-label="Permalink to &quot;css变量&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--lz-nav-bar-height: 46px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-nav-bar-center-max-width: 60%;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-nav-bar-center-font-size: 16px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-nav-bar-center-font-weight: 700;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-nav-bar-center-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">323233;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-nav-bar-left-right-padding: 0 16px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-nav-bar-left-right-font-size: 14px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-nav-bar-left-text-padding-left: 5px;</span></span></code></pre></div>`,14),r=[o],F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/navBar.md","filePath":"component/navBar.md","lastUpdated":1670901376000}'),p={name:"component/navBar.md"},h=Object.assign(p,{setup(c){const t=s();return a(()=>{t.updateName("nav-bar")}),(d,i)=>(e(),l("div",null,r))}});export{F as __pageData,h as default};
