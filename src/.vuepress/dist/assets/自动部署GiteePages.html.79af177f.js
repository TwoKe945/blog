import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as e}from"./app.91aaacec.js";const t="/blog/assets/1.b3962c85.png",i="/blog/assets/2.5530546f.png",l={},p=e('<h1 id="自动部署gitee-pages" tabindex="-1"><a class="header-anchor" href="#自动部署gitee-pages" aria-hidden="true">#</a> 自动部署Gitee Pages</h1><h2 id="博客部署" tabindex="-1"><a class="header-anchor" href="#博客部署" aria-hidden="true">#</a> 博客部署</h2><ul><li>github <ol><li>采用Github action工作流部署</li></ol></li><li>gitee <ol><li>购买Gitee Pages Pro</li><li>获得Gitee 官方的优质项目</li><li>使用Github action工作流，同步到Gitee</li></ol></li></ul><p>根据上述的两种分析，采用的是Github action同步Gitee</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><ul><li><p>配置Secret变量</p><ul><li>GITEE_RSA_PRIVATE_KEY (Gitee SSH 私钥)</li><li>GITEE_PASSWORD (Gitee 登录密码)</li></ul></li></ul><p><img src="'+t+`" alt="配置Secret变量" loading="lazy"></p><ul><li><p>创建工作流</p><ul><li>在项目目录下创建.github/workflows目录</li><li>在目录下编写工作流文件 deploy.yml</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 工作流名</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy Blog

<span class="token comment"># 监听的指令 - push -&gt; 分支 - master</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>

<span class="token comment"># 一个工作流由多个任务组成</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># 任务名为deploy，可以自定义名 -&gt; build-deploy、build等等</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
  <span class="token comment"># 运行环境</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token comment"># 同步Gitee</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Sync to Gitee
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> wearerequired/git<span class="token punctuation">-</span>mirror<span class="token punctuation">-</span>action@master
      <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># 注意在 Settings-&gt;Secrets 配置 GITEE_RSA_PRIVATE_KEY</span>
          <span class="token key atrule">SSH_PRIVATE_KEY</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_RSA_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 注意替换为你的 GitHub 源仓库地址</span>
          <span class="token key atrule">source-repo</span><span class="token punctuation">:</span> <span class="token string">&quot;git@github.com:TwoKe945/blog.git&quot;</span>
          <span class="token comment"># 注意替换为你的 Gitee 目标仓库地址</span>
          <span class="token key atrule">destination-repo</span><span class="token punctuation">:</span> <span class="token string">&quot;git@gitee.com:twoke/blog.git&quot;</span>
    <span class="token comment"># 更新Gitee Pages</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build Gitee Pages
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> yanglbme/gitee<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>action@master
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 注意替换为你的 Gitee 用户名</span>
          <span class="token key atrule">gitee-username</span><span class="token punctuation">:</span> twoke
          <span class="token comment"># 注意在 Settings-&gt;Secrets 配置 GITEE_PASSWORD</span>
          <span class="token key atrule">gitee-password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># 注意替换为你的 Gitee 仓库</span>
          <span class="token key atrule">gitee-repo</span><span class="token punctuation">:</span> twoke/blog
          <span class="token comment"># 分支</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> master
          <span class="token comment"># 文档目录</span>
          <span class="token key atrule">directory</span><span class="token punctuation">:</span> src/.vuepress/dist
          <span class="token comment"># 强制使用https</span>
          <span class="token key atrule">https</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用工作流" tabindex="-1"><a class="header-anchor" href="#使用工作流" aria-hidden="true">#</a> 使用工作流</h2><p>当提交记录时，会触发工作流，执行自动同步部署博客。</p><p><img src="`+i+'" alt="自动部署博客" loading="lazy"></p>',12),c=[p];function o(u,r){return s(),a("div",null,c)}const m=n(l,[["render",o],["__file","自动部署GiteePages.html.vue"]]);export{m as default};
