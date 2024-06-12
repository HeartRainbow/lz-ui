import{u as s}from"./chunks/copname.ba2596e6.js";import{q as a,o as l,c as e,V as n}from"./chunks/framework.9cd9f48f.js";const o=n(`<h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvTextEllipsis</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="自定义省略文字" tabindex="-1">自定义省略文字 <a class="header-anchor" href="#自定义省略文字" aria-label="Permalink to &quot;自定义省略文字&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvTextEllipsis</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">dots</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">---</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="展开-收起" tabindex="-1">展开/收起 <a class="header-anchor" href="#展开-收起" aria-label="Permalink to &quot;展开/收起&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvTextEllipsis</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">expand-text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">展开</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">collapse-text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">收起</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢娱和不幸，转眼间就已跑到那似水流年里去了。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="自定义展示行数-设置3行" tabindex="-1">自定义展示行数，设置3行 <a class="header-anchor" href="#自定义展示行数-设置3行" aria-label="Permalink to &quot;自定义展示行数，设置3行&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvTextEllipsis</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">rows</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">expand-text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">展开</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">collapse-text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">收起</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>属性</th><th style="text-align:center;">含义</th><th style="text-align:center;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>content</td><td style="text-align:center;">需要展示的文本</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>rows</td><td style="text-align:center;">行数</td><td style="text-align:center;">[String, Number]</td><td style="text-align:right;">1</td></tr><tr><td>expandText</td><td style="text-align:center;">展开操作的文案</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>collapseText</td><td style="text-align:center;">收起操作的文案</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>dots</td><td style="text-align:center;">省略号的文本内容</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;...&#39;</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th style="text-align:center;">含义</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>clickAction</td><td style="text-align:center;">点击展开收起时触发</td><td style="text-align:right;">event</td></tr></tbody></table><h2 id="css-变量" tabindex="-1">css 变量 <a class="header-anchor" href="#css-变量" aria-label="Permalink to &quot;css 变量&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--lz-text-ellipsis-action-text-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1989fa;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-text-ellipsis-line-height: 1.6;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-text-ellipsis-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">323233;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --lz-text-ellipsis-font-size: 14px;</span></span></code></pre></div>`,14),p=[o],F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/textEllipsis.md","filePath":"component/textEllipsis.md","lastUpdated":1684293681000}'),r={name:"component/textEllipsis.md"},h=Object.assign(r,{setup(c){const t=s();return a(()=>{t.updateName("text-ellipsis")}),(i,d)=>(l(),e("div",null,p))}});export{F as __pageData,h as default};
