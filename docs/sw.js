if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const f=e=>i(e,r),d={module:{uri:r},exports:s,require:f};t[r]=Promise.all(n.map((e=>d[e]||f(e)))).then((e=>(o(...e),s)))}}define(["./workbox-7077d47f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"4ea29bad.js",revision:"7cef2b3497aa2ffb35d61df5d48ecf60"},{url:"index.html",revision:"f57b723060ee7a0c14711d8f1f837484"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
