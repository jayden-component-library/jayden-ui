import{a as F,E as p,j as m,J as n,q as a,z as l,l as s,U as r,i as d,m as y}from"./chunks/framework.509feed2.js";const C=l("h1",{id:"card-卡片",tabindex:"-1"},[s("Card 卡片 "),l("a",{class:"header-anchor",href:"#card-卡片","aria-label":'Permalink to "Card 卡片"'},"​")],-1),_=l("h2",{id:"基本展示",tabindex:"-1"},[s("基本展示 "),l("a",{class:"header-anchor",href:"#基本展示","aria-label":'Permalink to "基本展示"'},"​")],-1),A=r(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">j-card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione</span></span>
<span class="line"><span style="color:#A6ACCD;">  debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat</span></span>
<span class="line"><span style="color:#A6ACCD;">  totam, magni doloremque veniam neque porro libero rerum unde voluptatem!</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">j-card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="展示标题和副标题" tabindex="-1">展示标题和副标题 <a class="header-anchor" href="#展示标题和副标题" aria-label="Permalink to &quot;展示标题和副标题&quot;">​</a></h2><p>通过<strong>title</strong>和<strong>subTitle</strong>属性添加标题、副标题</p>`,3),b=r(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">j-card</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Card Title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">subTitle</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Card subtitle sceondary text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione</span></span>
<span class="line"><span style="color:#A6ACCD;">  debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat</span></span>
<span class="line"><span style="color:#A6ACCD;">  totam, magni doloremque veniam neque porro libero rerum unde voluptatem!</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">j-card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="标题-副标题-插槽" tabindex="-1">标题/副标题 插槽 <a class="header-anchor" href="#标题-副标题-插槽" aria-label="Permalink to &quot;标题/副标题 插槽&quot;">​</a></h2><p>通过<strong>title</strong>、<strong>subtitle</strong>插槽自定义标题、副标题内容</p>`,3),g=r(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">j-card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">j-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;icon-view-fill&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">j-icon</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Card Title</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#subtitle</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">j-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;icon-email-fill&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">j-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Card Card subtitle sceondary text</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione</span></span>
<span class="line"><span style="color:#A6ACCD;">  debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat</span></span>
<span class="line"><span style="color:#A6ACCD;">  totam, magni doloremque veniam neque porro libero rerum unde voluptatem!</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">j-card</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="操作-底部-插槽" tabindex="-1">操作（底部）插槽 <a class="header-anchor" href="#操作-底部-插槽" aria-label="Permalink to &quot;操作（底部）插槽&quot;">​</a></h2><p>通过<strong>actions</strong> 插槽 自定义底部内容</p>`,3),h=l("h2",{id:"阴影级别",tabindex:"-1"},[s("阴影级别 "),l("a",{class:"header-anchor",href:"#阴影级别","aria-label":'Permalink to "阴影级别"'},"​")],-1),q=l("p",null,[s("阴影级别 通过"),l("strong",null,"elevation"),s("属性设定 范围0-24")],-1),v=r(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">j-card</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:elevation</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">elevation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione</span></span>
<span class="line"><span style="color:#A6ACCD;">  debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat</span></span>
<span class="line"><span style="color:#A6ACCD;">  totam, magni doloremque veniam neque porro libero rerum unde voluptatem!</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">j-slider</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:min</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:max</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">24</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">elevation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#prepend</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> elevation {{ elevation }} </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">j-slider</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">j-card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> elevation </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="完整案例" tabindex="-1">完整案例 <a class="header-anchor" href="#完整案例" aria-label="Permalink to &quot;完整案例&quot;">​</a></h2>`,2),E=l("img",{style:{width:"100%","object-fit":"cover","aspect-ratio":"16/9"},src:"https://img1.baidu.com/it/u=1556499325,2437056787&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"},null,-1),P=JSON.parse('{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}'),f={name:"components/card/index.md"},S=Object.assign(f,{setup(T){const e=F(4);return(j,i)=>{const o=p("j-card"),c=p("j-icon"),t=p("j-button"),D=p("j-slider");return d(),m("div",null,[C,_,n(o,null,{default:a(()=>[s(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! ")]),_:1}),A,n(o,{title:"Card Title",subTitle:"Card subtitle sceondary text"},{default:a(()=>[s(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! ")]),_:1}),b,n(o,null,{title:a(()=>[n(c,{icon:"icon-view-fill"}),s(" Card Title ")]),subtitle:a(()=>[n(c,{icon:"icon-email-fill"}),s(" Card Card subtitle sceondary text ")]),default:a(()=>[s(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! ")]),_:1}),g,n(o,null,{actions:a(()=>[n(t,null,{default:a(()=>[s("Click Me")]),_:1}),s("   "),n(t,{type:"warn"},{default:a(()=>[s("Clear")]),_:1})]),default:a(()=>[s(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! ")]),_:1}),h,q,n(o,{elevation:e.value},{default:a(()=>[s(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! "),n(D,{min:0,max:24,modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=u=>e.value=u)},{prepend:a(()=>[s(" elevation "+y(e.value),1)]),_:1},8,["modelValue"])]),_:1},8,["elevation"]),v,n(o,{title:"Title",subTitle:"Subtitle"},{header:a(()=>[E]),actions:a(()=>[n(t,null,{default:a(()=>[s("Click Me")]),_:1}),s("   "),n(t,{type:"warn"},{default:a(()=>[s("Clear")]),_:1})]),default:a(()=>[s(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! ")]),_:1})])}}});export{P as __pageData,S as default};
