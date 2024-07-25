import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-BYbT66C3.js";const e={},o=t(`<p>There is the default example for <code>Robyn</code> framework.</p><p>We strongly recommend to use the following example as a standard way to use <code>PSQLPy</code> with <code>Robyn</code> framework.</p><h2 id="complete-example" tabindex="-1"><a class="header-anchor" href="#complete-example"><span>Complete example</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># Start example</span>
<span class="token keyword">from</span> __future__ <span class="token keyword">import</span> annotations

<span class="token keyword">import</span> asyncio
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Any

<span class="token keyword">from</span> psqlpy <span class="token keyword">import</span> ConnectionPool
<span class="token keyword">from</span> robyn <span class="token keyword">import</span> Request<span class="token punctuation">,</span> Robyn

db_pool <span class="token operator">=</span> ConnectionPool<span class="token punctuation">(</span>
    dsn<span class="token operator">=</span><span class="token string">&quot;postgres://postgres:postgres@localhost:5432/postgres&quot;</span><span class="token punctuation">,</span>
    max_db_pool_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

app <span class="token operator">=</span> Robyn<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">pg_pool_example</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Request<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">dict</span><span class="token punctuation">[</span>Any<span class="token punctuation">,</span> Any<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    connection <span class="token operator">=</span> <span class="token keyword">await</span> db_pool<span class="token punctuation">.</span>connection<span class="token punctuation">(</span><span class="token punctuation">)</span>
    query_result <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>
        <span class="token string">&quot;SELECT * FROM users&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> query_result<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token keyword">await</span> app<span class="token punctuation">.</span>start<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function c(l,i){return s(),a("div",null,p)}const k=n(e,[["render",c],["__file","robyn.html.vue"]]),d=JSON.parse('{"path":"/usage/frameworks/robyn.html","title":"Robyn","lang":"en-US","frontmatter":{"title":"Robyn","description":"There is the default example for Robyn framework. We strongly recommend to use the following example as a standard way to use PSQLPy with Robyn framework. Complete example","head":[["meta",{"property":"og:url","content":"https://psqlpy-python.github.io/usage/frameworks/robyn.html"}],["meta",{"property":"og:site_name","content":"PSQLPy"}],["meta",{"property":"og:title","content":"Robyn"}],["meta",{"property":"og:description","content":"There is the default example for Robyn framework. We strongly recommend to use the following example as a standard way to use PSQLPy with Robyn framework. Complete example"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-25T11:12:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-25T11:12:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Robyn\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-25T11:12:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Complete example","slug":"complete-example","link":"#complete-example","children":[]}],"git":{"createdTime":1721905978000,"updatedTime":1721905978000,"contributors":[{"name":"reqww","email":"my.gurbanov@gmail.com","commits":1}]},"filePathRelative":"usage/frameworks/robyn.md","localizedDate":"July 25, 2024","autoDesc":true,"excerpt":"<p>There is the default example for <code>Robyn</code> framework.</p>\\n<p>We strongly recommend to use the following example as a standard way to use <code>PSQLPy</code> with <code>Robyn</code> framework.</p>\\n<h2>Complete example</h2>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\"># Start example</span>\\n<span class=\\"token keyword\\">from</span> __future__ <span class=\\"token keyword\\">import</span> annotations\\n\\n<span class=\\"token keyword\\">import</span> asyncio\\n<span class=\\"token keyword\\">from</span> typing <span class=\\"token keyword\\">import</span> Any\\n\\n<span class=\\"token keyword\\">from</span> psqlpy <span class=\\"token keyword\\">import</span> ConnectionPool\\n<span class=\\"token keyword\\">from</span> robyn <span class=\\"token keyword\\">import</span> Request<span class=\\"token punctuation\\">,</span> Robyn\\n\\ndb_pool <span class=\\"token operator\\">=</span> ConnectionPool<span class=\\"token punctuation\\">(</span>\\n    dsn<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"postgres://postgres:postgres@localhost:5432/postgres\\"</span><span class=\\"token punctuation\\">,</span>\\n    max_db_pool_size<span class=\\"token operator\\">=</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\napp <span class=\\"token operator\\">=</span> Robyn<span class=\\"token punctuation\\">(</span>__file__<span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token decorator annotation punctuation\\">@app<span class=\\"token punctuation\\">.</span>get</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">async</span> <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">pg_pool_example</span><span class=\\"token punctuation\\">(</span>request<span class=\\"token punctuation\\">:</span> Request<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">list</span><span class=\\"token punctuation\\">[</span><span class=\\"token builtin\\">dict</span><span class=\\"token punctuation\\">[</span>Any<span class=\\"token punctuation\\">,</span> Any<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">:</span>\\n    connection <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> db_pool<span class=\\"token punctuation\\">.</span>connection<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    query_result <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> connection<span class=\\"token punctuation\\">.</span>execute<span class=\\"token punctuation\\">(</span>\\n        <span class=\\"token string\\">\\"SELECT * FROM users\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">return</span> query_result<span class=\\"token punctuation\\">.</span>result<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token keyword\\">async</span> <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">await</span> app<span class=\\"token punctuation\\">.</span>start<span class=\\"token punctuation\\">(</span>host<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"127.0.0.1\\"</span><span class=\\"token punctuation\\">,</span> port<span class=\\"token operator\\">=</span><span class=\\"token number\\">8000</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token keyword\\">if</span> __name__ <span class=\\"token operator\\">==</span> <span class=\\"token string\\">\\"__main__\\"</span><span class=\\"token punctuation\\">:</span>\\n    asyncio<span class=\\"token punctuation\\">.</span>run<span class=\\"token punctuation\\">(</span>main<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}');export{k as comp,d as data};
