if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const f=e=>i(e,r),c={module:{uri:r},exports:s,require:f};t[r]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(o(...e),s)))}}define(["./workbox-7077d47f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"6a443ef8.js",revision:"36ab0b1fc3525c017618e13bbf395d8f"},{url:"index.html",revision:"a5bf05541dfd90c8eae17013c1b7f901"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
