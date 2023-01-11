/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,d=l.trustedTypes,c=d?d.emptyScript:"",h=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:f}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.5.0");const v=window,g=v.trustedTypes,b=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,x="?"+y,w=`<${x}>`,A=document,C=(t="")=>A.createComment(t),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,$=/>/g,O=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),I=/'/g,k=/"/g,N=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),D=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),M=new WeakMap,R=A.createTreeWalker(A,129,null,!1),V=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=S;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===S?"!--"===l[1]?n=T:void 0!==l[1]?n=$:void 0!==l[2]?(N.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=O):void 0!==l[3]&&(n=O):n===O?">"===l[0]?(n=null!=o?o:S,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?O:'"'===l[3]?k:I):n===k||n===I?n=O:n===T||n===$?n=S:(n=O,o=void 0);const h=n===O&&t[e+1].startsWith("/>")?" ":"";r+=n===S?i+w:d>=0?(s.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+y+h):i+y+(-2===d?(s.push(void 0),e):h)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,s]};class H{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,d]=V(t,e);if(this.el=H.createElement(l,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=R.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=d[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?j:"?"===e[1]?W:"@"===e[1]?G:U})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(N.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),R.nextNode(),a.push({type:2,index:++o});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)a.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,s){var o,r,n,a;if(e===D)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const d=P(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Co)&&void 0!==n?n:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=B(t,l._$AS(t,e.values),l,s)),e}class F{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);R.currentNode=o;let r=R.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new q(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new K(r,this,t)),this.u.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(r=R.nextNode(),n++)}return o}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),P(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==D&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==z&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=H.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.p(i);else{const t=new F(o,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new H(t)),e}k(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new q(this.O(C()),this.O(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class U{constructor(t,e,i,s,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=B(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=B(this,s[i+n],e,n),a===D&&(a=this._$AH[n]),r||(r=!P(a)||a!==this._$AH[n]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class j extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const Y=g?g.emptyScript:"";class W extends U{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class G extends U{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:z)===D)return;const s=this._$AH,o=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==z&&(s===z||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const J=v.litHtmlPolyfillSupport;null==J||J(H,q),(null!==(_=v.litHtmlVersions)&&void 0!==_?_:v.litHtmlVersions=[]).push("2.5.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,X;class Q extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new q(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}Q.finalized=!0,Q._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class et extends HTMLElement{static get version(){return"23.3.2"}}customElements.define("vaadin-lumo-styles",et);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const it=t=>class extends t{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(t){this._set_theme(t)}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,st=[];function ot(t,e,i={}){var s;t&&(s=t,dt(customElements.get(s))&&console.warn(`The custom element definition for "${t}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),e=function(t=[]){return[t].flat(1/0).filter((t=>t instanceof o||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,i):st.push({themeFor:t,styles:e,include:i.include,moduleId:i.moduleId})}function rt(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():st}function nt(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function at(t){const e=[];return t.include&&[].concat(t.include).forEach((t=>{const i=rt().find((e=>e.moduleId===t));i?e.push(...at(i),...i.styles):console.warn(`Included moduleId ${t} not found in style registry`)}),t.styles),e}function lt(t){const e=`${t}-default-theme`,i=rt().filter((i=>i.moduleId!==e&&function(t,e){return(t||"").split(" ").some((t=>new RegExp(`^${t.split("*").join(".*")}$`).test(e)))}(i.themeFor,t))).map((t=>({...t,styles:[...at(t),...t.styles],includePriority:nt(t.moduleId)}))).sort(((t,e)=>e.includePriority-t.includePriority));return i.length>0?i:rt().filter((t=>t.moduleId===e))}function dt(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}const ct=t=>class extends(it(t)){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;t&&!dt(this)&&function(t,e){const i=document.createElement("style");i.innerHTML=t.map((t=>t.cssText)).join("\n"),e.content.appendChild(i)}(this.getStylesForThis(),t)}static finalizeStyles(t){const e=this.getStylesForThis();return t?[...super.finalizeStyles(t),...e]:e}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),e=(t?t.constructor.__themes:[])||[];this.__themes=[...e,...lt(this.is)];const i=this.__themes.flatMap((t=>t.styles));return i.filter(((t,e)=>e===i.lastIndexOf(t)))}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,ht=r`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,ut=document.createElement("template");ut.innerHTML=`<style>${ht.toString().replace(":host","html")}</style>`,document.head.appendChild(ut.content);const pt=r`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;ot("",pt,{moduleId:"lumo-color"});ot("",[pt,r`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`],{moduleId:"lumo-color-legacy"});
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const mt=r`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,ft=document.createElement("template");ft.innerHTML=`<style>${mt.toString().replace(":host","html")}</style>`,document.head.appendChild(ft.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const _t=r`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,vt=document.createElement("template");vt.innerHTML=`<style>${_t.toString().replace(":host","html")}</style>`,document.head.appendChild(vt.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const gt=r`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,bt=document.createElement("template");bt.innerHTML=`<style>${gt.toString().replace(":host","html")}</style>`,document.head.appendChild(bt.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const yt=r`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`;ot("",r`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`,{moduleId:"lumo-typography"});const xt=document.createElement("template");xt.innerHTML=`<style>${yt.toString().replace(":host","html")}</style>`,document.head.appendChild(xt.content);ot("vaadin-button",r`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`,{moduleId:"lumo-button"}),
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let wt,At,Ct=/(url\()([^)]*)(\))/g,Pt=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Et(t,e){if(t&&Pt.test(t))return t;if("//"===t)return t;if(void 0===wt){wt=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",wt="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),wt)try{return new URL(t,e).href}catch(e){return t}return At||(At=document.implementation.createHTMLDocument("temp"),At.base=At.createElement("base"),At.head.appendChild(At.base),At.anchor=At.createElement("a"),At.body.appendChild(At.anchor)),At.base.href=e,At.anchor.href=t,At.anchor.href||t}function St(t,e){return t.replace(Ct,(function(t,i,s,o){return i+"'"+Et(s.replace(/["']/g,""),e)+"'"+o}))}function Tt(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $t=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Ot=$t&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})();let It=window.Polymer&&window.Polymer.rootPath||Tt(document.baseURI||window.location.href),kt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Nt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Lt=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Dt=window.Polymer&&window.Polymer.legacyOptimizations||!1,zt=window.Polymer&&window.Polymer.legacyWarnings||!1,Mt=window.Polymer&&window.Polymer.syncInitialRender||!1,Rt=window.Polymer&&window.Polymer.legacyUndefined||!1,Vt=window.Polymer&&window.Polymer.orderedComputed||!1,Ht=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Bt=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Ft=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,qt=0;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ut=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=qt++;return function(s){let o=s.__mixinSet;if(o&&o[i])return s;let r=e,n=r.get(s);if(!n){n=t(s),r.set(s,n);let e=Object.create(n.__mixinSet||o||null);e[i]=!0,n.__mixinSet=e}return n}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let jt={},Yt={};function Wt(t,e){jt[t]=Yt[t.toLowerCase()]=e}function Gt(t){return jt[t]||Yt[t.toLowerCase()]}class Kt extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=Gt(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,s){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Et(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Tt(e)}return this.__assetpath}register(t){if(t=t||this.id){if(Nt&&void 0!==Gt(t))throw Wt(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Wt(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}Kt.prototype.modules=jt,customElements.define("dom-module",Kt);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Jt="shady-unscoped";function Zt(t){return Kt.import(t)}function Xt(t){const e=St((t.body?t.body:t).textContent,t.baseURI),i=document.createElement("style");return i.textContent=e,i}function Qt(t){const e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...te(e[t]));return i}function te(t){const e=Zt(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...ie(e));const i=e.querySelector("template");i&&t.push(...ee(i,e.assetpath)),e._styles=t}return e._styles}function ee(t,e){if(!t._styles){const i=[],s=t.content.querySelectorAll("style");for(let t=0;t<s.length;t++){let o=s[t],r=o.getAttribute("include");r&&i.push(...Qt(r).filter((function(t,e,i){return i.indexOf(t)===e}))),e&&(o.textContent=St(o.textContent,e)),i.push(o)}t._styles=i}return t._styles}function ie(t){const e=[],i=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<i.length;t++){let s=i[t];if(s.import){const t=s.import,i=s.hasAttribute(Jt);if(i&&!t._unscopedStyle){const e=Xt(t);e.setAttribute(Jt,""),t._unscopedStyle=e}else t._style||(t._style=Xt(t));e.push(i?t._unscopedStyle:t._style)}}return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const se=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;function oe(t){return t.indexOf(".")>=0}function re(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function ne(t,e){return 0===e.indexOf(t+".")}function ae(t,e,i){return e+i.slice(t.length)}function le(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let s=t[i].toString().split(".");for(let t=0;t<s.length;t++)e.push(s[t])}return e.join(".")}return t}function de(t){return Array.isArray(t)?le(t).split("."):t.toString().split(".")}function ce(t,e,i){let s=t,o=de(e);for(let t=0;t<o.length;t++){if(!s)return;s=s[o[t]]}return i&&(i.path=o.join(".")),s}function he(t,e,i){let s=t,o=de(e),r=o[o.length-1];if(o.length>1){for(let t=0;t<o.length-1;t++){if(s=s[o[t]],!s)return}s[r]=i}else s[e]=i;return o.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ue={},pe=/-[a-z]/g,me=/([A-Z])/g;function fe(t){return ue[t]||(ue[t]=t.indexOf("-")<0?t:t.replace(pe,(t=>t[1].toUpperCase())))}function _e(t){return ue[t]||(ue[t]=t.replace(me,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ve=0,ge=0,be=[],ye=0,xe=!1,we=document.createTextNode("");new window.MutationObserver((function(){xe=!1;const t=be.length;for(let e=0;e<t;e++){let t=be[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}be.splice(0,t),ge+=t})).observe(we,{characterData:!0});const Ae={run:t=>(xe||(xe=!0,we.textContent=ye++),be.push(t),ve++),cancel(t){const e=t-ge;if(e>=0){if(!be[e])throw new Error("invalid async handle: "+t);be[e]=null}}},Ce=Ae,Pe=Ut((t=>class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let s=this.__data[t],o=this._shouldPropertyChange(t,e,s);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=s),this.__data[t]=e,this.__dataPending[t]=e),o}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Ce.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i)),this.__dataCounter--}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,s){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,s)}_attributeToProperty(t,e,i){if(!this.__serializing){const s=this.__dataAttributes,o=s&&s[t]||t;this[o]=this._deserializeValue(e,i||this.constructor.typeForProperty(o))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const s=this._serializeValue(e);"class"!==i&&"name"!==i&&"slot"!==i||(t=se(t)),void 0===s?t.removeAttribute(i):t.setAttribute(i,""===s&&window.trustedTypes?window.trustedTypes.emptyScript:s)}_serializeValue(t){return"boolean"==typeof t?t?"":void 0:null!=t?t.toString():void 0}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})),Ee={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Se=HTMLElement.prototype;for(;Se;){let t=Object.getOwnPropertyNames(Se);for(let e=0;e<t.length;e++)Ee[t[e]]=!0;Se=Object.getPrototypeOf(Se)}const Te=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;const $e=Ut((t=>{const e=Pe(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(fe(t[e]))}static attributeNameForProperty(t){return _e(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const i=this;i.hasAttribute(t)||this._valueToNodeAttribute(i,e,t)}_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(Te(t))return t;try{return JSON.stringify(t)}catch(t){return""}}}return super._serializeValue(t)}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(e){i=t}break;case Array:try{i=JSON.parse(t)}catch(e){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!Ee[e]){let i=t[e];void 0!==i&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})),Oe={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ie=!1,ke=!1;function Ne(t){(function(){if(!Ie){Ie=!0;const t=document.createElement("textarea");t.placeholder="a",ke=t.placeholder===t.textContent}return ke})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Le=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,i,s)=>{const o=i.getAttribute(s);t&&s.startsWith("on-")?e.setAttribute(s,t.createScript(o,s)):e.setAttribute(s,o)}})();function De(t){let e=t.getAttribute("is");if(e&&Oe[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:e}=i.attributes[0];Le(t,i,e),i.removeAttribute(e)}}return t}function ze(t,e){let i=e.parentInfo&&ze(t,e.parentInfo);if(!i)return t;for(let t=i.firstChild,s=0;t;t=t.nextSibling)if(e.parentIndex===s++)return t}function Me(t,e,i,s){s.id&&(e[s.id]=i)}function Re(t,e,i){if(i.events&&i.events.length)for(let s,o=0,r=i.events;o<r.length&&(s=r[o]);o++)t._addMethodEventListenerToNode(e,s.name,s.value,t)}function Ve(t,e,i,s){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=s)}const He=Ut((t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(e),i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let s=!1,o=t;return"template"!=o.localName||o.hasAttribute("preserve-content")?"slot"===o.localName&&(e.hasInsertionPoint=!0):s=this._parseTemplateNestedTemplate(o,e,i)||s,Ne(o),o.firstChild&&this._parseTemplateChildNodes(o,e,i),o.hasAttributes&&o.hasAttributes()&&(s=this._parseTemplateNodeAttributes(o,e,i)||s),s||i.noted}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName)for(let s,o=t.firstChild,r=0;o;o=s){if("template"==o.localName&&(o=De(o)),s=o.nextSibling,o.nodeType===Node.TEXT_NODE){let i=s;for(;i&&i.nodeType===Node.TEXT_NODE;)o.textContent+=i.textContent,s=i.nextSibling,t.removeChild(i),i=s;if(e.stripWhiteSpace&&!o.textContent.trim()){t.removeChild(o);continue}}let n={parentIndex:r,parentInfo:i};this._parseTemplateNode(o,e,n)&&(n.infoIndex=e.nodeInfoList.push(n)-1),o.parentNode&&r++}}static _parseTemplateNestedTemplate(t,e,i){let s=t,o=this._parseTemplate(s,e);return(o.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),i.templateInfo=o,!0}static _parseTemplateNodeAttributes(t,e,i){let s=!1,o=Array.from(t.attributes);for(let r,n=o.length-1;r=o[n];n--)s=this._parseTemplateNodeAttribute(t,e,i,r.name,r.value)||s;return s}static _parseTemplateNodeAttribute(t,e,i,s,o){return"on-"===s.slice(0,3)?(t.removeAttribute(s),i.events=i.events||[],i.events.push({name:s.slice(3),value:o}),!0):"id"===s&&(i.id=o,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let i=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,s=e.content||t.content,o=document.importNode(s,!0);o.__noInsertionPoint=!e.hasInsertionPoint;let r=o.nodeList=new Array(i.length);o.$={};for(let t,s=0,n=i.length;s<n&&(t=i[s]);s++){let i=r[s]=ze(o,t);Me(0,o.$,i,t),Ve(0,i,t,e),Re(this,i,t)}return o}_addMethodEventListenerToNode(t,e,i,s){let o=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(s=s||t,0,i);return this._addEventListenerToNode(t,e,o),o}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Be=0;const Fe=[],qe={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ue="__computeInfo",je=/[A-Z]/;function Ye(t,e,i){let s=t[e];if(s){if(!t.hasOwnProperty(e)&&(s=t[e]=Object.create(t[e]),i))for(let t in s){let e=s[t],i=s[t]=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]}}else s=t[e]={};return s}function We(t,e,i,s,o,r){if(e){let n=!1;const a=Be++;for(let l in i){let d=e[o?re(l):l];if(d)for(let e,c=0,h=d.length;c<h&&(e=d[c]);c++)e.info&&e.info.lastRun===a||o&&!Ke(l,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,l,i,s,e.info,o,r),n=!0)}return n}return!1}function Ge(t,e,i,s,o,r,n,a){let l=!1,d=e[n?re(s):s];if(d)for(let e,c=0,h=d.length;c<h&&(e=d[c]);c++)e.info&&e.info.lastRun===i||n&&!Ke(s,e.trigger)||(e.info&&(e.info.lastRun=i),e.fn(t,s,o,r,e.info,n,a),l=!0);return l}function Ke(t,e){if(e){let i=e.name;return i==t||!(!e.structured||!function(t,e){return 0===t.indexOf(e+".")}(i,t))||!(!e.wildcard||!ne(i,t))}return!0}function Je(t,e,i,s,o){let r="string"==typeof o.method?t[o.method]:o.method,n=o.property;r?r.call(t,t.__data[n],s[n]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function Ze(t,e,i){let s=re(e);if(s!==e){return Xe(t,_e(s)+"-changed",i[e],e),!0}return!1}function Xe(t,e,i,s){let o={value:i,queueProperty:!0};s&&(o.path=s),se(t).dispatchEvent(new CustomEvent(e,{detail:o}))}function Qe(t,e,i,s,o,r){let n=(r?re(e):e)!=e?e:null,a=n?ce(t,n):t.__data[e];n&&void 0===a&&(a=i[e]),Xe(t,o.eventName,a,n)}function ti(t,e,i,s,o){let r=t.__data[e];kt&&(r=kt(r,o.attrName,"attribute",t)),t._propertyToAttribute(e,o.attrName,r)}function ei(t,e,i,s){let o=t[qe.COMPUTE];if(o)if(Vt){Be++;const r=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[qe.COMPUTE];let s,{counts:o,ready:r,total:n}=function(t){const e=t[Ue],i={},s=t[qe.COMPUTE],o=[];let r=0;for(let t in e){const s=e[t];r+=i[t]=s.args.filter((t=>!t.literal)).length+(s.dynamicFn?1:0)}for(let t in s)e[t]||o.push(t);return{counts:i,ready:o,total:r}}(t);for(;s=r.shift();){e.set(s,e.size);const t=i[s];t&&t.forEach((t=>{const e=t.info.methodInfo;--n,0==--o[e]&&r.push(e)}))}if(0!==n){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),n=[];for(let t in e)si(t,o,n,r,s);let a;for(;a=n.shift();)oi(t,"",e,i,a)&&si(a.methodInfo,o,n,r,s);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;We(t,o,r,i,s);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const ii=(t,e,i)=>{let s=0,o=e.length-1,r=-1;for(;s<=o;){const n=s+o>>1,a=i.get(e[n].methodInfo)-i.get(t.methodInfo);if(a<0)s=n+1;else{if(!(a>0)){r=n;break}o=n-1}}r<0&&(r=o+1),e.splice(r,0,t)},si=(t,e,i,s,o)=>{const r=e[o?re(t):t];if(r)for(let e=0;e<r.length;e++){const n=r[e];n.info.lastRun===Be||o&&!Ke(t,n.trigger)||(n.info.lastRun=Be,ii(n.info,i,s))}};function oi(t,e,i,s,o){let r=hi(t,e,i,s,o);if(r===Fe)return!1;let n=o.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[n]?t._setPendingProperty(n,r,!0):(t[n]=r,!1)}function ri(t,e,i,s,o,r,n){i.bindings=i.bindings||[];let a={kind:s,target:o,parts:r,literal:n,isCompound:1!==r.length};if(i.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||_e(o)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let s=a.parts[i];s.compoundIndex=i,ni(t,e,a,s,l)}}function ni(t,e,i,s,o){if(!s.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=s.dependencies,n={index:o,binding:i,part:s,evaluator:t};for(let i=0;i<r.length;i++){let s=r[i];"string"==typeof s&&(s=gi(s),s.wildcard=!0),t._addTemplatePropertyEffect(e,s.rootProperty,{fn:ai,info:n,trigger:s})}}}function ai(t,e,i,s,o,r,n){let a=n[o.index],l=o.binding,d=o.part;if(r&&d.source&&e.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let s=i[e];e=ae(d.source,l.target,e),a._setPendingPropertyOrPath(e,s,!1,!0)&&t._enqueueClient(a)}else{let n=o.evaluator._evaluateBinding(t,d,e,i,s,r);n!==Fe&&function(t,e,i,s,o){o=function(t,e,i,s){if(i.isCompound){let o=t.__dataCompoundStorage[i.target];o[s.compoundIndex]=e,e=o.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,o,i,s),kt&&(o=kt(o,i.target,i.kind,e));if("attribute"==i.kind)t._valueToNodeAttribute(e,o,i.target);else{let s=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[s]?e[qe.READ_ONLY]&&e[qe.READ_ONLY][s]||e._setPendingProperty(s,o)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,s,o)}}(t,a,l,d,n)}}function li(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),s=e.parts,o=new Array(s.length);for(let t=0;t<s.length;t++)o[t]=s[t].literal;let r=e.target;i[r]=o,e.literal&&"property"==e.kind&&("className"===r&&(t=se(t)),t[r]=e.literal)}}function di(t,e,i){if(i.listenerEvent){let s=i.parts[0];t.addEventListener(i.listenerEvent,(function(t){!function(t,e,i,s,o){let r,n=t.detail,a=n&&n.path;a?(s=ae(i,s,a),r=n&&n.value):r=t.currentTarget[i],r=o?!r:r,e[qe.READ_ONLY]&&e[qe.READ_ONLY][s]||!e._setPendingPropertyOrPath(s,r,!0,Boolean(a))||n&&n.queueProperty||e._invalidateProperties()}(t,e,i.target,s.source,s.negate)}))}}function ci(t,e,i,s,o,r){r=e.static||r&&("object"!=typeof r||r[e.methodName]);let n={methodName:e.methodName,args:e.args,methodInfo:o,dynamicFn:r};for(let o,r=0;r<e.args.length&&(o=e.args[r]);r++)o.literal||t._addPropertyEffect(o.rootProperty,i,{fn:s,info:n,trigger:o});return r&&t._addPropertyEffect(e.methodName,i,{fn:s,info:n}),n}function hi(t,e,i,s,o){let r=t._methodHost||t,n=r[o.methodName];if(n){let s=t._marshalArgs(o.args,e,i);return s===Fe?Fe:n.apply(r,s)}o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const ui=[],pi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",mi="(?:("+pi+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",fi=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?"+("("+pi+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+mi+"(?:,\\s*"+mi+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g");function _i(t){let e="";for(let i=0;i<t.length;i++){e+=t[i].literal||""}return e}function vi(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:ui};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let i=gi(t);return i.literal||(e.static=!1),i}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function gi(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},s=e[0];switch("-"===s&&(s=e[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=re(e),i.structured=oe(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function bi(t,e,i){let s=ce(t,i);return void 0===s&&(s=e[i]),s}function yi(t,e,i,s){const o={indexSplices:s};Rt&&!t._overrideLegacyUndefined&&(e.splices=o),t.notifyPath(i+".splices",o),t.notifyPath(i+".length",e.length),Rt&&!t._overrideLegacyUndefined&&(o.indexSplices=[])}function xi(t,e,i,s,o,r){yi(t,e,i,[{index:s,addedCount:o,removed:r,object:e,type:"splice"}])}const wi=Ut((t=>{const e=He($e(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return qe}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Ai.length){let t=Ai[Ai.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[qe.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==qe.READ_ONLY);let s=Ye(this,e,!0)[t];s||(s=this[e][t]=[]),s.push(i)}_removePropertyEffect(t,e,i){let s=Ye(this,e,!0)[t],o=s.indexOf(i);o>=0&&s.splice(o,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,qe.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,qe.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,qe.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,qe.COMPUTE)}_setPendingPropertyOrPath(t,e,i,s){if(s||re(Array.isArray(t)?t[0]:t)!==t){if(!s){let i=ce(this,t);if(!(t=he(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let s=t.__dataLinkedPaths;if(s){let o;for(let r in s){let n=s[r];ne(r,e)?(o=ae(r,n,e),t._setPendingPropertyOrPath(o,i,!0,!0)):ne(n,e)&&(o=ae(n,r,e),t._setPendingPropertyOrPath(o,i,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||("className"===e&&(t=se(t)),t[e]=i)}_setPendingProperty(t,e,i){let s=this.__dataHasPaths&&oe(t),o=s?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,o[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),s?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(s||this[qe.NOTIFY]&&this[qe.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let i in t)!e&&this[qe.READ_ONLY]&&this[qe.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,i){let s,o=this.__dataHasPaths;this.__dataHasPaths=!1,ei(this,e,i,o),s=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,i,o),this._flushClients(),We(this,this[qe.REFLECT],e,i,o),We(this,this[qe.OBSERVE],e,i,o),s&&function(t,e,i,s,o){let r,n,a=t[qe.NOTIFY],l=Be++;for(let n in e)e[n]&&(a&&Ge(t,a,l,n,i,s,o)||o&&Ze(t,n,i))&&(r=!0);r&&(n=t.__dataHost)&&n._invalidateProperties&&n._invalidateProperties()}(this,s,e,i,o),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,i){this[qe.PROPAGATE]&&We(this,this[qe.PROPAGATE],t,e,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,i)}_runEffectsForTemplate(t,e,i,s){const o=(e,s)=>{We(this,t.propertyEffects,e,i,s,t.nodeList);for(let o=t.firstChild;o;o=o.nextSibling)this._runEffectsForTemplate(o,e,i,s)};t.runEffects?t.runEffects(o,e,s):o(e,s)}linkPaths(t,e){t=le(t),e=le(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=le(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let i={path:""};yi(this,ce(this,t,i),i.path,e)}get(t,e){return ce(e||this,t)}set(t,e,i){i?he(i,t,e):this[qe.READ_ONLY]&&this[qe.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},s=ce(this,t,i),o=s.length,r=s.push(...e);return e.length&&xi(this,s,i.path,o,e.length,[]),r}pop(t){let e={path:""},i=ce(this,t,e),s=Boolean(i.length),o=i.pop();return s&&xi(this,i,e.path,i.length,0,[o]),o}splice(t,e,i,...s){let o,r={path:""},n=ce(this,t,r);return e<0?e=n.length-Math.floor(-e):e&&(e=Math.floor(e)),o=2===arguments.length?n.splice(e):n.splice(e,i,...s),(s.length||o.length)&&xi(this,n,r.path,e,s.length,o),o}shift(t){let e={path:""},i=ce(this,t,e),s=Boolean(i.length),o=i.shift();return s&&xi(this,i,e.path,0,0,[o]),o}unshift(t,...e){let i={path:""},s=ce(this,t,i),o=s.unshift(...e);return e.length&&xi(this,s,i.path,0,e.length,[]),o}notifyPath(t,e){let i;if(1==arguments.length){let s={path:""};e=ce(this,t,s),i=s.path}else i=Array.isArray(t)?le(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,qe.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let s={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,qe.OBSERVE,{fn:Je,info:s,trigger:{name:t}}),i&&this._addPropertyEffect(e,qe.OBSERVE,{fn:Je,info:s,trigger:{name:e}})}_createMethodObserver(t,e){let i=vi(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");ci(this,i,qe.OBSERVE,hi,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,qe.NOTIFY,{fn:Qe,info:{eventName:_e(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,qe.REFLECT,{fn:ti,info:{attrName:e}})}_createComputedProperty(t,e,i){let s=vi(e);if(!s)throw new Error("Malformed computed expression '"+e+"'");const o=ci(this,s,qe.COMPUTE,oi,t,i);Ye(this,Ue)[t]=o}_marshalArgs(t,e,i){const s=this.__data,o=[];for(let r=0,n=t.length;r<n;r++){let{name:n,structured:a,wildcard:l,value:d,literal:c}=t[r];if(!c)if(l){const t=ne(n,e),o=bi(s,i,t?e:n);d={path:t?e:n,value:o,base:t?ce(s,n):o}}else d=a?bi(s,i,n):s[n];if(Rt&&!this._overrideLegacyUndefined&&void 0===d&&t.length>1)return Fe;o[r]=d}return o}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),s=this.__preBoundTemplateInfo==i;if(!s)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e)if(i=Object.create(i),i.wasPreBound=s,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,s=e.lastChild;i.parent=e,e.lastChild=i,i.previousSibling=s,s?s.nextSibling=i:e.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let s=t.propertyEffects=t.propertyEffects||{};(s[e]=s[e]||[]).push(i)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),Ai.push(this);let i=super._stampTemplate(t,e);if(Ai.pop(),e.nodeList=i.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=i.firstChild;e;e=e.nextSibling)t.push(e)}return i.templateInfo=e,function(t,e){let{nodeList:i,nodeInfoList:s}=e;if(s.length)for(let e=0;e<s.length;e++){let o=s[e],r=i[e],n=o.bindings;if(n)for(let e=0;e<n.length;e++){let i=n[e];li(r,i),di(r,t,i)}r.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:i,nextSibling:s,parent:o}=e;i?i.nextSibling=s:o&&(o.firstChild=s),s?s.previousSibling=i:o&&(o.lastChild=i),e.nextSibling=e.previousSibling=null;let r=e.childNodes;for(let t=0;t<r.length;t++){let e=r[t];se(se(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,i,s){let o=e._parseTemplateNode.call(this,t,i,s);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,i);e&&(t.textContent=_i(e)||" ",ri(this,i,s,"text","textContent",e),o=!0)}return o}static _parseTemplateNodeAttribute(t,i,s,o,r){let n=this._parseBindings(r,i);if(n){let e=o,r="property";je.test(o)?r="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),r="attribute");let a=_i(n);return a&&"attribute"==r&&("class"==o&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(o)),t.setAttribute(o,a)),"attribute"==r&&"disable-upgrade$"==e&&t.setAttribute(o,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===r&&(o=fe(o)),ri(this,i,s,r,o,n,a),!0}return e._parseTemplateNodeAttribute.call(this,t,i,s,o,r)}static _parseTemplateNestedTemplate(t,i,s){let o=e._parseTemplateNestedTemplate.call(this,t,i,s);const r=t.parentNode,n=s.templateInfo,a="dom-if"===r.localName,l="dom-repeat"===r.localName;Ht&&(a||l)&&(r.removeChild(t),(s=s.parentInfo).templateInfo=n,s.noted=!0,o=!1);let d=n.hostProps;if(Bt&&a)d&&(i.hostProps=Object.assign(i.hostProps||{},d),Ht||(s.parentInfo.noted=!0));else{let t="{";for(let e in d){ri(this,i,s,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return o}static _parseBindings(t,e){let i,s=[],o=0;for(;null!==(i=fi.exec(t));){i.index>o&&s.push({literal:t.slice(o,i.index)});let r=i[1][0],n=Boolean(i[2]),a=i[3].trim(),l=!1,d="",c=-1;"{"==r&&(c=a.indexOf("::"))>0&&(d=a.substring(c+2),a=a.substring(0,c),l=!0);let h=vi(a),u=[];if(h){let{args:t,methodName:i}=h;for(let e=0;e<t.length;e++){let i=t[e];i.literal||u.push(i)}let s=e.dynamicFns;(s&&s[i]||h.static)&&(u.push(i),h.dynamicFn=!0)}else u.push(a);s.push({source:a,mode:r,negate:n,customEvent:l,signature:h,dependencies:u,event:d}),o=fi.lastIndex}if(o&&o<t.length){let e=t.substring(o);e&&s.push({literal:e})}return s.length?s:null}static _evaluateBinding(t,e,i,s,o,r){let n;return n=e.signature?hi(t,i,s,0,e.signature):i!=e.source?ce(t,e.source):r&&oe(i)?ce(t,i):t.__data[i],e.negate&&(n=!n),n}}})),Ai=[];const Ci=Ut((t=>{const e=Pe(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof o?e:null}function s(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let i in t){const s=t[i];e[i]="function"==typeof s?{type:s}:s}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class o extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const t=this._properties;this.__observedAttributes=t?Object.keys(t).map((t=>this.prototype._addPropertyToAttributeMap(t))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=s(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,s(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o})),Pi=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ei=Ut((t=>{const e=Ci(wi(t));function i(t,e,i,s){i.computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,i.computed,s)),i.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===i.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),i.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===i.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),i.observer&&t._createPropertyObserver(e,i.observer,s[i.observer]),t._addPropertyToAttributeMap(e)}function s(t,e,i,s){if(!Pi){const o=e.content.querySelectorAll("style"),r=ee(e),n=function(t){let e=Zt(t);return e?ie(e):[]}(i),a=e.content.firstElementChild;for(let i=0;i<n.length;i++){let o=n[i];o.textContent=t._processStyleText(o.textContent,s),e.content.insertBefore(o,a)}let l=0;for(let e=0;e<r.length;e++){let i=r[e],n=o[l];n!==i?(i=i.cloneNode(!0),n.parentNode.insertBefore(i,n)):l++,i.textContent=t._processStyleText(i.textContent,s)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i),Ft&&Pi&&Ot){const i=e.content.querySelectorAll("style");if(i){let e="";Array.from(i).forEach((t=>{e+=t.textContent,t.parentNode.removeChild(t)})),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}return class extends e{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):Dt||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)i(this.prototype,e,t[e],t)}static createObservers(t,e){const i=this.prototype;for(let s=0;s<t.length;s++)i._createMethodObserver(t[s],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof t&&(t=t()),this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!Nt||Lt)&&(e=Kt.import(t,"template"),Nt&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Tt(t.url);else{const t=Kt.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=It,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let s=e[i];"value"in s&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=s)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return St(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;s(this,e,t,i?Et(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=se(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Mt&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Et(this.importPath)),Et(t,e)}static _parseTemplateContent(t,i,s){return i.dynamicFns=i.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,i,s)}static _addTemplatePropertyEffect(t,i,s){return!zt||i in this._properties||s.info.part.signature&&s.info.part.signature.static||s.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,i,s)}}})),Si=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */class Ti{constructor(t,e){Ii(t,e);const i=e.reduce(((e,i,s)=>e+$i(i)+t[s+1]),t[0]);this.value=i.toString()}toString(){return this.value}}function $i(t){if(t instanceof Ti)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const Oi=function(t,...e){Ii(t,e);const i=document.createElement("template");let s=e.reduce(((e,i,s)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Ti)return $i(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(i)+t[s+1]),t[0]);return Si&&(s=Si.createHTML(s)),i.innerHTML=s,i},Ii=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")},ki=Ei(HTMLElement),Ni=Ut((t=>class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((t=>{t.hostConnected&&t.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((t=>{t.hostDisconnected&&t.hostDisconnected()}))}addController(t){this.__controllers.add(t),void 0!==this.$&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}})),Li=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Di=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function zi(t,e){if("function"!=typeof t)return;const i=Li.exec(t.toString());if(i)try{t=new Function(i[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const Mi=function(t,e){if(window.Vaadin.developmentMode)return zi(t,e)};function Ri(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Di?!(Di&&Object.keys(Di).map((t=>Di[t])).filter((t=>t.productionMode)).length>0):!zi((function(){return!0})))}catch(t){return!1}}());
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
let Vi=0,Hi=0;const Bi=[];let Fi=0,qi=!1;const Ui=document.createTextNode("");new window.MutationObserver((function(){qi=!1;const t=Bi.length;for(let e=0;e<t;e++){const t=Bi[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}Bi.splice(0,t),Hi+=t})).observe(Ui,{characterData:!0});const ji={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},Yi={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},Wi={run(t){qi||(qi=!0,Ui.textContent=Fi,Fi+=1),Bi.push(t);const e=Vi;return Vi+=1,e},cancel(t){const e=t-Hi;if(e>=0){if(!Bi[e])throw new Error(`invalid async handle: ${t}`);Bi[e]=null}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Gi{static debounce(t,e,i){return t instanceof Gi?t._cancelAsync():t=new Gi,t.setConfig(e,i),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run((()=>{this._timer=null,Ki.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Ki.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}let Ki=new Set;
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Ji{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,i){const{scrollLeft:s}=i;if("rtl"!==e||!t)return s;switch(t){case"negative":return i.scrollWidth-i.clientWidth+s;case"reverse":return i.scrollWidth-i.clientWidth-s;default:return s}}static setNormalizedScrollLeft(t,e,i,s){if("rtl"===e&&t)switch(t){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+s;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-s;break;default:i.scrollLeft=s}else i.scrollLeft=s}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zi=[];let Xi;function Qi(t,e,i=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=i&&t.removeAttribute("dir")}function ts(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const t=ts();Zi.forEach((e=>{Qi(e,t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const es=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>""===t?null:t}}}}static finalize(){super.finalize(),Xi||(Xi=Ji.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),Qi(this,ts(),null))}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"dir"!==t)return;const s=ts(),o=i===s&&-1===Zi.indexOf(this),r=!i&&e&&-1===Zi.indexOf(this),n=i!==s&&e===s;o||r?(this.__subscribe(),Qi(this,s,i)):n&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Zi.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,i){("dir"!==i||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,i)}_attributeToProperty(t,e,i){"dir"!==t||e?super._attributeToProperty(t,e,i):this.dir=""}__subscribe(){Zi.includes(this)||Zi.push(this)}__unsubscribe(){Zi.includes(this)&&Zi.splice(Zi.indexOf(this),1)}__getNormalizedScrollLeft(t){return Ji.getNormalizedScrollLeft(Xi,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return Ji.setNormalizedScrollLeft(Xi,this.getAttribute("dir")||"ltr",t,e)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;let is;window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Mi(Ri)};const ss=new Set,os=t=>class extends(es(t)){static get version(){return"23.3.2"}static finalize(){super.finalize();const{is:t}=this;var e;t&&!ss.has(t)&&(window.Vaadin.registrations.push(this),ss.add(t),window.Vaadin.developmentModeCallback&&(is=Gi.debounce(is,Yi,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),e=is,Ki.add(e)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;function rs(t,e,i){return{index:t,removed:e,addedCount:i}}function ns(t,e,i,s,o,r){let n,a=0,l=0,d=Math.min(i-e,r-o);if(0==e&&0==o&&(a=function(t,e,i){for(let s=0;s<i;s++)if(!as(t[s],e[s]))return s;return i}(t,s,d)),i==t.length&&r==s.length&&(l=function(t,e,i){let s=t.length,o=e.length,r=0;for(;r<i&&as(t[--s],e[--o]);)r++;return r}(t,s,d-a)),o+=a,r-=l,(i-=l)-(e+=a)==0&&r-o==0)return[];if(e==i){for(n=rs(e,[],0);o<r;)n.removed.push(s[o++]);return[n]}if(o==r)return[rs(e,[],i-e)];let c=function(t){let e=t.length-1,i=t[0].length-1,s=t[e][i],o=[];for(;e>0||i>0;){if(0==e){o.push(2),i--;continue}if(0==i){o.push(3),e--;continue}let r,n=t[e-1][i-1],a=t[e-1][i],l=t[e][i-1];r=a<l?a<n?a:n:l<n?l:n,r==n?(n==s?o.push(0):(o.push(1),s=n),e--,i--):r==a?(o.push(3),e--,s=a):(o.push(2),i--,s=l)}return o.reverse(),o}(function(t,e,i,s,o,r){let n=r-o+1,a=i-e+1,l=new Array(n);for(let t=0;t<n;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let i=1;i<n;i++)for(let r=1;r<a;r++)if(as(t[e+r-1],s[o+i-1]))l[i][r]=l[i-1][r-1];else{let t=l[i-1][r]+1,e=l[i][r-1]+1;l[i][r]=t<e?t:e}return l}(t,e,i,s,o,r));n=void 0;let h=[],u=e,p=o;for(let t=0;t<c.length;t++)switch(c[t]){case 0:n&&(h.push(n),n=void 0),u++,p++;break;case 1:n||(n=rs(u,[],0)),n.addedCount++,u++,n.removed.push(s[p]),p++;break;case 2:n||(n=rs(u,[],0)),n.addedCount++,u++;break;case 3:n||(n=rs(u,[],0)),n.removed.push(s[p]),p++}return n&&h.push(n),h}function as(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ls(t){return"slot"===t.localName}let ds=class{static getFlattenedNodes(t){const e=se(t);return ls(t)?e.assignedNodes({flatten:!0}):Array.from(e.childNodes).map((t=>ls(t)?se(t).assignedNodes({flatten:!0}):[t])).reduce(((t,e)=>t.concat(e)),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){ls(this._target)?this._listenSlots([this._target]):se(this._target).children&&(this._listenSlots(se(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(t=>{this._processMutations(t)})):(this._nativeChildrenObserver=new MutationObserver((t=>{this._processMutations(t)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ls(this._target)?this._unlistenSlots([this._target]):se(this._target).children&&(this._unlistenSlots(se(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ae.run((()=>this.flush())))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=(s=e,o=this._effectiveNodes,ns(s,0,s.length,o,0,o.length));var s,o;for(let e,s=0;s<i.length&&(e=i[s]);s++)for(let i,s=0;s<e.removed.length&&(i=e.removed[s]);s++)t.removedNodes.push(i);for(let s,o=0;o<i.length&&(s=i[o]);o++)for(let i=s.index;i<s.index+s.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let r=!1;return(t.addedNodes.length||t.removedNodes.length)&&(r=!0,this.callback.call(this._target,t)),r}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];ls(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];ls(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}},cs=0;
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class hs extends EventTarget{static generateId(t,e){return`${t||"default"}-${e.localName}-${cs++}`}constructor(t,e,i,s,o){super(),this.host=t,this.slotName=e,this.slotFactory=i,this.slotInitializer=s,o&&(this.defaultId=hs.generateId(e,t))}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:i}=this;let s=this.defaultNode;return!s&&i&&(s=i(t),s instanceof Element&&(""!==e&&s.setAttribute("slot",e),this.node=s,this.defaultNode=s)),s&&t.appendChild(s),s}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find((e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t))}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,i=this.host.shadowRoot.querySelector(e);this.__slotObserver=new ds(i,(t=>{const e=this.node,i=t.addedNodes.find((t=>t!==e));t.removedNodes.length&&t.removedNodes.forEach((t=>{this.teardownNode(t)})),i&&(e&&e.isConnected&&this.host.removeChild(e),this.node=i,i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i)))}))}}
/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class us extends hs{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,void 0!==this.context&&(t.context=this.context),void 0!==this.manual&&(t.manual=this.manual),void 0!==this.opened&&(t.opened=this.opened),void 0!==this.position&&(t._position=this.position),void 0!==this.shouldShow&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ps=Ut((t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),ms="string"==typeof document.head.style.touchAction,fs="__polymerGestures",_s="__polymerGesturesHandled",vs="__polymerGesturesTouchAction",gs=["mousedown","mousemove","mouseup","click"],bs=[0,1,4,2],ys=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function xs(t){return gs.indexOf(t)>-1}let ws=!1;function As(t){xs(t)}!function(){try{const t=Object.defineProperty({},"passive",{get(){ws=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const Cs=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),Ps={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Es(t){const e=t.type;if(!xs(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!ys&&(e=bs[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}const Ss={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Ts(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function $s(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const Os=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Is={},ks=[];function Ns(t){const e=Os(t);return e.length>0?e[0]:t.target}function Ls(t){const e=t.type,i=t.currentTarget[fs];if(!i)return;const s=i[e];if(!s)return;if(!t[_s]&&(t[_s]={},e.startsWith("touch"))){const i=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(Ss.touch.id=i.identifier),Ss.touch.id!==i.identifier)return;ms||"touchstart"!==e&&"touchmove"!==e||function(t){const e=t.changedTouches[0],i=t.type;if("touchstart"===i)Ss.touch.x=e.clientX,Ss.touch.y=e.clientY,Ss.touch.scrollDecided=!1;else if("touchmove"===i){if(Ss.touch.scrollDecided)return;Ss.touch.scrollDecided=!0;const i=function(t){let e="auto";const i=Os(t);for(let t,s=0;s<i.length;s++)if(t=i[s],t[vs]){e=t[vs];break}return e}(t);let s=!1;const o=Math.abs(Ss.touch.x-e.clientX),r=Math.abs(Ss.touch.y-e.clientY);t.cancelable&&("none"===i?s=!0:"pan-x"===i?s=r>o:"pan-y"===i&&(s=o>r)),s?t.preventDefault():Rs("track")}}(t)}const o=t[_s];if(!o.skip){for(let e,i=0;i<ks.length;i++)e=ks[i],s[e.name]&&!o[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let i,r=0;r<ks.length;r++)i=ks[r],s[i.name]&&!o[i.name]&&(o[i.name]=!0,i[e](t))}}function Ds(t,e,i){return!!Is[e]&&(function(t,e,i){const s=Is[e],o=s.deps,r=s.name;let n=t[fs];n||(t[fs]=n={});for(let e,i,s=0;s<o.length;s++)e=o[s],Cs&&xs(e)&&"click"!==e||(i=n[e],i||(n[e]=i={_count:0}),0===i._count&&t.addEventListener(e,Ls,As(e)),i[r]=(i[r]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),s.touchAction&&function(t,e){ms&&t instanceof HTMLElement&&Wi.run((()=>{t.style.touchAction=e}));t[vs]=e}(t,s.touchAction)}(t,e,i),!0)}function zs(t){ks.push(t);for(let e=0;e<t.emits.length;e++)Is[t.emits[e]]=t}function Ms(t,e,i){const s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,t.dispatchEvent(s),s.defaultPrevented){const t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function Rs(t){const e=function(t){for(let e,i=0;i<ks.length;i++){e=ks[i];for(let i,s=0;s<e.emits.length;s++)if(i=e.emits[s],i===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Vs(t,e,i,s){e&&Ms(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:t=>Rs(t)})}function Hs(t,e,i){if(t.prevent)return!1;if(t.started)return!0;const s=Math.abs(t.x-e),o=Math.abs(t.y-i);return s>=5||o>=5}function Bs(t,e,i){if(!e)return;const s=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],r=o.x-t.x,n=o.y-t.y;let a,l=0;s&&(a=o.x-s.x,l=o.y-s.y),Ms(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:r,dy:n,ddx:a,ddy:l,sourceEvent:i,hover:()=>function(t,e){let i=document.elementFromPoint(t,e),s=i;for(;s&&s.shadowRoot&&!window.ShadyDOM;){const o=s;if(s=s.shadowRoot.elementFromPoint(t,e),o===s)break;s&&(i=s)}return i}(i.clientX,i.clientY)})}function Fs(t,e,i){const s=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y),r=Ns(i||e);!r||Ps[r.localName]&&r.hasAttribute("disabled")||(isNaN(s)||isNaN(o)||s<=25&&o<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;const e=Ns(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const i=e.getBoundingClientRect(),s=t.pageX,o=t.pageY;return!(s>=i.left&&s<=i.right&&o>=i.top&&o<=i.bottom)}return!1}(e))&&(t.prevent||Ms(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */zs({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){$s(this.info)},mousedown(t){if(!Es(t))return;const e=Ns(t),i=this;Ts(this.info,(t=>{Es(t)||(Vs("up",e,t),$s(i.info))}),(t=>{Es(t)&&Vs("up",e,t),$s(i.info)})),Vs("down",e,t)},touchstart(t){Vs("down",Ns(t),t.changedTouches[0],t)},touchend(t){Vs("up",Ns(t),t.changedTouches[0],t)}}),zs({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,$s(this.info)},mousedown(t){if(!Es(t))return;const e=Ns(t),i=this,s=t=>{const s=t.clientX,o=t.clientY;Hs(i.info,s,o)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&Rs("tap"),i.info.addMove({x:s,y:o}),Es(t)||(i.info.state="end",$s(i.info)),e&&Bs(i.info,e,t),i.info.started=!0)};Ts(this.info,s,(t=>{i.info.started&&s(t),$s(i.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=Ns(t),i=t.changedTouches[0],s=i.clientX,o=i.clientY;Hs(this.info,s,o)&&("start"===this.info.state&&Rs("tap"),this.info.addMove({x:s,y:o}),Bs(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend(t){const e=Ns(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Bs(this.info,e,i))}}),zs({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){Es(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){Es(t)&&Fs(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){Fs(this.info,t.changedTouches[0],t)}});const qs=Ut((t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",(t=>{this._onKeyDown(t)})),this.addEventListener("keyup",(t=>{this._onKeyUp(t)}))}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t)}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}})),Us=t=>class extends(ps(qs(t))){get _activeKeys(){return[" "]}ready(){super.ready(),Ds(this,"down",(t=>{this._shouldSetActive(t)&&this._setActive(!0)})),Ds(this,"up",(()=>{this._setActive(!1)}))}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",(t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)}),{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let js=!1;window.addEventListener("keydown",(()=>{js=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{js=!1}),{capture:!0});
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Ys=Ut((t=>class extends t{get _keyboardActive(){return js}ready(){this.addEventListener("focusin",(t=>{this._shouldSetFocus(t)&&this._setFocused(!0)})),this.addEventListener("focusout",(t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}})),Ws=t=>class extends(ps(t)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),t?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):e&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&-1!==t&&(this._lastTabIndex=t,this.tabindex=-1)}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Gs=t=>class extends(Us(Ws(Ys(t)))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ks extends(Gs(os(ct(Ni(ki))))){static get is(){return"vaadin-button"}static get template(){return Oi`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new us(this),this.addController(this._tooltipController)}}customElements.define(Ks.is,Ks),ot("vaadin-input-container",r`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Js extends(ct(es(ki))){static get is(){return"vaadin-input-container"}static get template(){return Oi`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",(t=>{t.target===this&&t.preventDefault()})),this.addEventListener("click",(t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach((t=>t.focus&&t.focus()))}))}}customElements.define(Js.is,Js);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Zs=document.createElement("template");Zs.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n',document.head.appendChild(Zs.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Xs=r`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;ot("",Xs,{moduleId:"lumo-field-button"});
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Qs=r`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,to=r`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;ot("",to,{moduleId:"lumo-required-field"});
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const eo=[to,Xs,Qs,r`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`];ot("",eo,{moduleId:"lumo-input-field-shared-styles"}),
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
ot("vaadin-text-field",eo,{moduleId:"lumo-text-field-styles"});
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class io extends hs{constructor(t,e){super(t,"input",(()=>document.createElement("input")),((t,i)=>{t.value&&i.setAttribute("value",t.value),t.type&&i.setAttribute("type",t.type),i.id=this.defaultId,"function"==typeof e&&e(i)}),!0)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const so=Ut((t=>class extends(Ys(Ws(t))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){void 0!==t&&this.focusElement&&(this.focusElement.tabIndex=t,-1!==t&&(this.tabindex=void 0)),this.disabled&&t&&(-1!==t&&(this._lastTabIndex=t),this.tabindex=void 0)}}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class oo extends hs{constructor(t){super(t,"error-message",(()=>document.createElement("div")),((t,e)=>{this.__updateErrorId(e),this.__updateHasError()}),!0)}get errorId(){return this.node&&this.node.id}setErrorMessage(t){this.errorMessage=t,this.__updateHasError()}setInvalid(t){this.invalid=t,this.__updateHasError()}initCustomNode(t){this.__updateErrorId(t),t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),this.__updateHasError()}teardownNode(t){let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e)),this.__updateHasError()}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__updateHasError(){const t=this.node,e=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));t&&(t.textContent=e?this.errorMessage:"",t.hidden=!e,e?t.setAttribute("role","alert"):t.removeAttribute("role")),this.host.toggleAttribute("has-error-message",e)}__updateErrorId(t){t.id||(t.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ro(t){return t?new Set(t.split(" ")):new Set}function no(t){return[...t].join(" ")}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class ao{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}__setAriaAttributeId(t,e,i){this.__target&&(i&&function(t,e,i){const s=ro(t.getAttribute(e));s.delete(i),0!==s.size?t.setAttribute(e,no(s)):t.removeAttribute(e)}(this.__target,t,i),e&&function(t,e,i){const s=ro(t.getAttribute(e));s.add(i),t.setAttribute(e,no(s))}(this.__target,t,e))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lo extends hs{constructor(t){super(t,"helper",null,null,!0)}get helperId(){return this.node&&this.node.id}initCustomNode(t){this.__updateHelperId(t),this.__observeHelper(t);const e=this.__hasHelper(t);this.__toggleHasHelper(e)}teardownNode(t){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const e=this.getSlotChild();if(e&&e!==this.defaultNode){const t=this.__hasHelper(e);this.__toggleHasHelper(t)}else this.__applyDefaultHelper(this.helperText,e)}setHelperText(t){this.helperText=t;const e=this.getSlotChild();e&&e!==this.defaultNode||this.__applyDefaultHelper(t,e)}__hasHelper(t){return!!t&&(t.children.length>0||t.nodeType===Node.ELEMENT_NODE&&customElements.get(t.localName)||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return t&&""!==t.trim()}__applyDefaultHelper(t,e){const i=this.__isNotEmpty(t);i&&!e&&(this.slotFactory=()=>document.createElement("div"),e=this.attachDefaultNode(),this.__updateHelperId(e),this.__observeHelper(e)),e&&(e.textContent=t),this.__toggleHasHelper(i)}__observeHelper(t){this.__helperObserver=new MutationObserver((t=>{t.forEach((t=>{const e=t.target,i=e===this.node;if("attributes"===t.type)i&&e.id!==this.defaultId&&this.__updateHelperId(e);else if(i||e.parentElement===this.node){const t=this.__hasHelper(this.node);this.__toggleHasHelper(t)}}))})),this.__helperObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(t){this.host.toggleAttribute("has-helper",t),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:t,node:this.node}}))}__updateHelperId(t){t.id||(t.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class co extends hs{constructor(t){super(t,"label",(()=>document.createElement("label")),((t,e)=>{this.__updateLabelId(e),this.__updateDefaultLabel(this.label),this.__observeLabel(e)}),!0)}get labelId(){return this.node.id}initCustomNode(t){this.__updateLabelId(t);const e=this.__hasLabel(t);this.__toggleHasLabel(e)}teardownNode(t){this.__labelObserver&&this.__labelObserver.disconnect();let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e));const i=this.__hasLabel(e);this.__toggleHasLabel(i)}setLabel(t){this.label=t,this.__updateDefaultLabel(t)}__hasLabel(t){return!!t&&(t.children.length>0||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__observeLabel(t){this.__labelObserver=new MutationObserver((t=>{t.forEach((t=>{const e=t.target,i=e===this.node;if("attributes"===t.type)i&&e.id!==this.defaultId&&this.__updateLabelId(e);else if(i||e.parentElement===this.node){const t=this.__hasLabel(this.node);this.__toggleHasLabel(t)}}))})),this.__labelObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(t){this.host.toggleAttribute("has-label",t),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:t,node:this.node}}))}__updateDefaultLabel(t){if(this.defaultNode&&(this.defaultNode.textContent=t,this.defaultNode===this.node)){const e=this.__isNotEmpty(t);this.__toggleHasLabel(e)}}__updateLabelId(t){t.id||(t.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ho=Ut((t=>class extends(Ni(t)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new co(this)}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}})),uo=Ut((t=>class extends t{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}})),po=t=>class extends(uo(ho(Ni(t)))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new ao(this),this._helperController=new lo(this),this._errorController=new oo(this),this._labelController.addEventListener("label-changed",(t=>{const{hasLabel:e,node:i}=t.detail;this.__labelChanged(e,i)})),this._helperController.addEventListener("helper-changed",(t=>{const{hasHelper:e,node:i}=t.detail;this.__helperChanged(e,i)}))}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,e){t?this._fieldAriaController.setHelperId(e.id):this._fieldAriaController.setHelperId(null)}__labelChanged(t,e){t?this._fieldAriaController.setLabelId(e.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout((()=>{t?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)}))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,mo=Ut((t=>class extends t{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((t=>{this._delegateAttribute(t,this[t])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((t=>{this._delegateProperty(t,this[t])}))}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach(((e,i)=>{this._delegateAttribute(e,t[i])}))}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach(((e,i)=>{this._delegateProperty(e,t[i])}))}_delegateAttribute(t,e){this.stateTarget&&("invalid"===t&&this._delegateAttribute("aria-invalid",!!e&&"true"),"boolean"==typeof e?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}})),fo=Ut((t=>class extends t{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this.inputElement.value=null!=t?t:"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_hasInputValueChanged(t,e){(t||e)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(t){this._setHasInputValue(t),this._onInput(t)}_onInput(t){const e=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=e.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(this._hasValue),""===t&&void 0===e||this.__userInput||this._forwardInputValue(t)}get _hasValue(){return null!=this.value&&""!==this.value}_setHasInputValue(t){const e=t.composedPath()[0];this._hasInputValue=e.value.length>0}})),_o=Ut((t=>class extends(mo(uo(fo(t)))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map((t=>this[t])))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some((t=>this.__isValidConstraint(t)))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...e){if(!t)return;const i=this._hasValidConstraints(e),s=this.__previousHasConstraints&&!i;(this._hasValue||this.invalid)&&i?this.validate():s&&this._setInvalid(!1),this.__previousHasConstraints=i}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return Boolean(t)||0===t}})),vo=new WeakMap;
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const go=Ut((t=>class extends t{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),e=function(t){return vo.has(t)||vo.set(t,new Set),vo.get(t)}(t);this.slotStyles.forEach((i=>{e.has(i)||(!function(t,e){const i=document.createElement("style");i.textContent=t,e===document?document.head.appendChild(i):e.insertBefore(i,e.firstChild)}(i,t),e.add(i))}))}})),bo=t=>class extends(go(so(_o(po(qs(t)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}get slotStyles(){return["\n          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {\n            font: inherit;\n            color: inherit;\n          }\n        "]}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",(t=>this._onClearButtonClick(t)))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&(t.stopPropagation(),this.__clear())}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=Gi.debounce(this._preventInputDebouncer,ji.after(200),(()=>{this.removeAttribute("input-prevented")}))}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||1!==t.key.length||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const e=t.clipboardData.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const e=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`),this.__allowedTextRegExp=new RegExp(`^${t}*$`)}catch(t){console.error(t)}}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,yo=t=>class extends(bo(t)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_setFocused(t){super._setFocused(t),t||this.validate()}_onInput(t){super._onInput(t),this.invalid&&this.validate()}_valueChanged(t,e){super._valueChanged(t,e),void 0!==e&&this.invalid&&this.validate()}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xo{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",(t=>{this.__initLabel(t.detail.node)})),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wo=t=>class extends(_o(t)){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean,observer:"_preventInvalidInputChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const t=this.inputElement;t&&t.value.length>0&&!this.checkValidity()&&(t.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=Gi.debounce(this._inputDebouncer,ji.after(200),(()=>{this.removeAttribute("input-prevented")})))}}_onInput(t){this._checkInputValue(),super._onInput(t)}_preventInvalidInputChanged(t){t&&console.warn('WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.')}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Ao=r`[part=clear-button]{display:none;cursor:default}[part=clear-button]::before{content:'✕'}:host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part=clear-button]{display:block}`
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Co=[r`:host{display:inline-flex;outline:0}:host::before{content:'\\2003';width:0;display:inline-block}:host([hidden]){display:none!important}:host(:not([has-label])) [part=label]{display:none}`
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,r`[class$=container]{display:flex;flex-direction:column;min-width:100%;max-width:100%;width:var(--vaadin-field-default-width,12em)}`
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Ao];
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
ot("vaadin-text-field",Co,{moduleId:"vaadin-text-field-styles"});class Po extends(wo(yo(ct(os(ki))))){static get is(){return"vaadin-text-field"}static get template(){return Oi`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new io(this,(t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}))),this.addController(new xo(this.inputElement,this._labelController)),this._tooltipController=new us(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(Po.is,Po);var Eo=r`.grid{display:grid;gap:1rem}.grid-rows-3{grid-template-rows:repeat(3,minmax(12px,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(50px,1fr))}.grid-cols-2{grid-template-columns:1fr 1fr}.grid-rows-2{grid-template-columns:1fr 1fr}.grid-template-cols-auto{grid-template-columns:repeat(auto-fit,minmax(100px,1fr))}.grid-template-rows-auto{grid-template-rows:repeat(auto-fit,minmax(50px,1fr))}.gap-0{gap:0}.flex{display:flex}.flex-cols{flex-direction:column}label{text-transform:uppercase}.pw-input{padding:8px;height:12px}.mbe-1{margin-block-end:8px}.mbe-2{margin-block-end:16px}.mbe-3{margin-block-end:24px}.mbe-4{margin-block-end:32px}.border{border:1px solid #ccc}.p-2{padding:16px}.text-lg{font-size:24px}button{border:none;padding:0;margin:0;background:0 0}.datos-propietario-container{margin-top:1rem;border-radius:.5rem;border:1px solid rgba(0,0,0,.4);padding:.5rem}.actions{display:flex;justify-content:space-between}`
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;ot("vaadin-custom-field",[to,Qs,r`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`],{moduleId:"lumo-custom-field"});
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class So extends(po(Ys(qs(ct(os(ki)))))){static get is(){return"vaadin-custom-field"}static get template(){return Oi`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
          /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-custom-field-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .inputs-wrapper {
          flex: none;
        }
      </style>

      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" on-change="__onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},formatValue:{type:Function},parseValue:{type:Function},i18n:{type:Object,value:()=>({parseValue:t=>t.split("\t"),formatValue:t=>t.join("\t")})}}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__setInputsFromSlot(),this.__observer=new ds(this.$.slot,(()=>{this.__setInputsFromSlot()})),this._tooltipController=new us(this),this.addController(this._tooltipController),this._tooltipController.setShouldShow((t=>!(t.inputs||[]).some((t=>t.opened))))}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){const{relatedTarget:e}=t;return!this.inputs.some((t=>e===(t.focusElement||t)))}checkValidity(){return!(this.inputs.filter((t=>!(t.validate||t.checkValidity).call(t))).length||this.required&&!this.value.trim())}_onKeyDown(t){"Tab"===t.key&&(this.inputs.indexOf(t.target)<this.inputs.length-1&&!t.shiftKey||this.inputs.indexOf(t.target)>0&&t.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue())}__onInputChange(t){t.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0;const t=this.formatValue||this.i18n.formatValue;this.value=t.apply(this,[this.inputs.map((t=>t.value))]),this.__settingValue=!1}__queryAllAssignedElements(t){const e=[];let i;return"SLOT"===t.tagName?i=t.assignedElements({flatten:!0}):(e.push(t),i=Array.from(t.children)),i.forEach((t=>e.push(...this.__queryAllAssignedElements(t)))),e}__isInput(t){return!("input"===t.getAttribute("slot")||"textarea"===t.getAttribute("slot"))&&(t.validate||t.checkValidity)}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter((t=>this.__isInput(t)))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(t){this.toggleAttribute("has-value",null!==t&&""!==t.trim())}__valueChanged(t,e){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(t);const i=(this.parseValue||this.i18n.parseValue).apply(this,[t]);i&&0!==i.length?(this.inputs.forEach(((t,e)=>{t.value=i[e]})),void 0!==e&&this.validate()):console.warn("Value parser has not provided values array")}}customElements.define(So.is,So);ot("vaadin-number-field",[eo,Xs,r`
  :host {
    width: 8em;
  }

  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input),
  :host([has-controls]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'],
  :host([has-controls]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`],{moduleId:"lumo-number-field"}),
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
ot("vaadin-number-field",Co,{moduleId:"vaadin-number-field-styles"});class To extends(yo(ct(os(ki)))){static get is(){return"vaadin-number-field"}static get template(){return Oi`
      <style>
        :host([readonly]) [part$='button'] {
          pointer-events: none;
        }

        [part='decrease-button']::before {
          content: '−';
        }

        [part='increase-button']::before {
          content: '+';
        }

        [part='decrease-button'],
        [part='increase-button'] {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_allowed(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_decreaseValue"
            on-touchend="_decreaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_allowed(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_increaseValue"
            on-touchend="_increaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number},max:{type:Number},step:{type:Number}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const t=this.localName;return[...super.slotStyles,`\n        ${t} input[type="number"]::-webkit-outer-spin-button,\n        ${t} input[type="number"]::-webkit-inner-spin-button {\n          -webkit-appearance: none;\n          margin: 0;\n        }\n\n        ${t} input[type="number"] {\n          -moz-appearance: textfield;\n        }\n\n        ${t}[dir='rtl'] input[type="number"]::placeholder {\n          direction: rtl;\n        }\n\n        ${t}[dir='rtl']:not([step-buttons-visible]):not([has-controls]) input[type="number"]::placeholder {\n          text-align: left;\n        }\n      `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new io(this,(t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}))),this.addController(new xo(this.inputElement,this._labelController)),this._tooltipController=new us(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top")}checkValidity(){return(!this.inputElement||!this.inputElement.validity.badInput)&&super.checkValidity()}_decreaseButtonTouchend(t){t.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(t){t.preventDefault(),this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(t){if(this.disabled||this.readonly)return;const e=this.step||1;let i=parseFloat(this.value);this.value?i<this.min?(t=0,i=this.min):i>this.max&&(t=0,i=this.max):0===this.min&&t<0||0===this.max&&t>0||0===this.max&&0===this.min?(t=0,i=0):(null==this.max||this.max>=0)&&(null==this.min||this.min<=0)?i=0:this.min>0?(i=this.min,this.max<0&&t<0&&(i=this.max),t=0):this.max<0&&(i=this.max,t<0?t=0:this._getIncrement(1,i-e)>this.max?i-=2*e:i-=e);const s=this._getIncrement(t,i);this.value&&0!==t&&!this._incrementIsInsideTheLimits(t,i)||this._setValue(s)}_setValue(t){this.value=this.inputElement.value=String(parseFloat(t)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(t,e){let i=this.step||1,s=this.min||0;const o=Math.max(this._getMultiplier(e),this._getMultiplier(i),this._getMultiplier(s));i*=o,s*=o;const r=((e=Math.round(e*o))-s)%i;return t>0?(e-r+i)/o:t<0?(e-(r||i))/o:e/o}_getDecimalCount(t){const e=String(t),i=e.indexOf(".");return-1===i?1:e.length-i-1}_getMultiplier(t){if(!isNaN(t))return 10**this._getDecimalCount(t)}_incrementIsInsideTheLimits(t,e){return t<0?null==this.min||this._getIncrement(t,e)>=this.min:t>0?null==this.max||this._getIncrement(t,e)<=this.max:this._getIncrement(t,e)<=this.max&&this._getIncrement(t,e)>=this.min}_allowed(t){const e=t*(this.step||1),i=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(e,i)}_stepChanged(t,e){e&&(e.step=t||"any")}_valueChanged(t,e){t&&isNaN(parseFloat(t))?this.value="":"string"!=typeof this.value&&(this.value=String(this.value)),super._valueChanged(this.value,e)}_onKeyDown(t){"ArrowUp"===t.key?(t.preventDefault(),this._increaseValue()):"ArrowDown"===t.key&&(t.preventDefault(),this._decreaseValue()),super._onKeyDown(t)}_isStepButtonVisible(t,e){return t||e}_setHasInputValue(t){const e=t.composedPath()[0];this._hasInputValue=e.value.length>0||e.validity.badInput}}function $o(t){const{target:e}=t,{name:i,value:s}=e;Oo(e,i,s)}function Oo(t,e,i){const s=new CustomEvent("pw-field-changed",{composed:!0,detail:{[e]:i}});t.dispatchEvent(s)}function Io(t){const{target:e}=t,{name:i,valueAsNumber:s,value:o}=e;Oo(e,i,{value:o,valueAsNumber:s})}function ko(t){return L` <section class="grid grid-template-cols-auto"> <div class="flex flex-cols"> <vaadin-text-field label="clave" name="clave" required .value="${t.clave}" placeholder="La clave" @input="${$o}" ?disabled="${t.isDisabled}" error-message="La clave es obligatoria"> </vaadin-text-field> </div> <div class="flex flex-cols"> <vaadin-custom-field label="Fecha"> <input type="date" @input="${Io}" .value="${t.fecha.value}" id="fecha" name="fecha" required ?disabled="${t.isDisabled}" class="pw-input"> </vaadin-custom-field> </div> <div class="flex flex-cols"> <vaadin-custom-field label="Hora"> <input type="time" @input="${$o}" .value="${t.hora}" id="hora" name="hora" required ?disabled="${t.isDisabled}" class="pw-input"> </vaadin-custom-field> </div> <div class="flex flex-cols"> <vaadin-text-field label="periodo" name="periodo" required .value="${t.periodo}" placeholder="El periodo" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El periodo es obligatorio"> </vaadin-text-field> </div> <div class="flex flex-cols"> <vaadin-text-field label="tipo de verif.:" name="tipoVerif" required .value="${t.tipoVerif}" placeholder="Tipo Verif." @input="${$o}" ?disabled="${t.isDisabled}" error-message="El tipo de verificación es obligatorio"> </vaadin-text-field> </div> <div class="flex flex-cols"> <vaadin-text-field label="Insp. visual" @input="${$o}" .value="${t.inspVisual}" name="inspVisual" ?disabled="${t.isDisabled}" required error-message="La inspección visual es obligatoria"> </vaadin-text-field> </div> <div class="flex flex-cols"> <vaadin-number-field label="Pago" @input="${$o}" .value="${t.pago}" name="pago" ?disabled="${t.isDisabled}" required error-message="El pago es obligatorio"> <div slot="prefix">$</div> </vaadin-number-field> </div> <div class="flex flex-cols"> <vaadin-number-field label="Pago multa" @input="${$o}" .value="${t.pagoMulta}" name="pagoMulta" ?disabled="${t.isDisabled}"> <div slot="prefix">$</div> </vaadin-number-field> </div> </section> `}customElements.define(To.is,To);customElements.define("pw-verificacion-form",class extends Q{static get properties(){return{title:{type:String},hasPlacaAtCenter:Boolean,isDisabled:{type:Boolean,attribute:"is-disabled"},fields:Object}}static get styles(){return[Eo,r`:host{display:grid;row-gap:3rem;margin-block-end:3rem}`]}constructor(){super(),this.hasPlacaAtCenter=!1,this.isDisabled=!1,this.fields={}}render(){return L` <form @submit="${this.print}"> <header> ${this.title?L`<h1>${this.title}</h1>`:null} <section class="actions"> ${this.renderPrintButton()} ${this.renderPrintButton()} </section> </header> ${ko({clave:this.fields.clave,fecha:this.fields.fecha,hora:this.fields.hora,periodo:this.fields.periodo,tipoVerif:this.fields.tipoVerif,inspVisual:this.fields.inspVisual,pago:this.fields.pago,pagoMulta:this.fields.pagoMulta,isDisabled:this.isDisabled})} <section class="grid grid-cols-2 mbe-2"> <div class="datos-propietario-container"> <h3 class="subtitle">DATOS DEL PROPIETARIO</h3> <div class="grid grid-template-cols-auto"> ${t={nombre:this.fields.nombre,direccion:this.fields.direccion,codigoPostal:this.fields.codigoPostal,municipio:this.fields.municipio,estado:this.fields.estado,isDisabled:this.isDisabled},L` <section> <div> <vaadin-text-field label="nombre" name="nombre" required .value="${t.nombre}" placeholder="Nombre Completo" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El Nombre es obligatorio"></vaadin-text-field> <br> <vaadin-text-field label="direccion" name="direccion" required .value="${t.direccion}" placeholder="Dirección" @input="${$o}" ?disabled="${t.isDisabled}" error-message="La dirección es obligatoria"></vaadin-text-field> </div> <div> <vaadin-text-field label="c.p." name="codigoPostal" required .value="${t.codigoPostal}" placeholder="Código postal" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El código postal es obligatorio"></vaadin-text-field> <vaadin-text-field label="municipio" name="municipio" required .value="${t.municipio}" placeholder="Ingrese el municipio" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El nombre del municipio es obligatorio"></vaadin-text-field> <vaadin-text-field label="estado" name="estado" required .value="${t.estado}" placeholder="Ingrese el estado" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El nombre del estado es obligatorio"></vaadin-text-field> </div> </section> `} </div> </div> <div class="vehiculo"> <h3 class="subtitle">DATOS DEL VEHÍCULO</h3> ${function(t){return L` <section> <vaadin-text-field label="marca" name="marca" required .value="${t.marca}" placeholder="Marca" @input="${$o}" ?disabled="${t.isDisabled}" error-message="La marca es obligatoria"></vaadin-text-field> <vaadin-text-field label="submarca" name="submarca" required .value="${t.submarca}" placeholder="Ingrese la submarca" @input="${$o}" ?disabled="${t.isDisabled}" error-message="La submarca es obligatoria"></vaadin-text-field> <vaadin-text-field label="modelo" name="modelo" required .value="${t.modelo}" placeholder="Modelo" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El modelo es obligatorio"></vaadin-text-field> <vaadin-text-field label="modeloDSL" name="modeloDSL" .value="${t.modeloDSL}" placeholder="Modelo DSL" @input="${$o}" ?disabled="${t.isDisabled}"></vaadin-text-field> <vaadin-text-field label="serie" name="serie" required .value="${t.serie}" placeholder="Número de serie" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El número de serie es obligatorio"></vaadin-text-field> <vaadin-text-field label="placas" name="placas" required .value="${t.placas}" placeholder="Placas" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El número de placa es obligatorio"></vaadin-text-field> <vaadin-text-field label="pesoBruto" name="pesoBruto" required .value="${t.pesoBruto}" placeholder="Peso bruto" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El peso bruto del vehículo es obligatorio"></vaadin-text-field> <vaadin-text-field label="combustible" name="combustible" required .value="${t.combustible}" placeholder="Ingrese el combustible que corresponde" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El tipo de combustible es obligatorio"></vaadin-text-field> <vaadin-text-field label="clase" name="clase" required .value="${t.clase}" placeholder="Clase" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El dato de clase es obligatorio"></vaadin-text-field> <vaadin-text-field label="servicio" name="servicio" required .value="${t.servicio}" placeholder="Ingrese el tipo de servicio" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El tipo de servicio es obligatorio"></vaadin-text-field> </section> `}({marca:this.fields.marca,submarca:this.fields.submarca,modelo:this.fields.modelo,modeloDSL:this.fields.modeloDSL,serie:this.fields.serie,placas:this.fields.placas,pesoBruto:this.fields.pesoBruto,combustible:this.fields.combustible,clase:this.fields.clase,servicio:this.fields.servicio,isDisabled:this.isDisabled})} </div> </section> <section class="grid grid-template-cols-auto mbe-2"> ${function(t){return L` <section class="grid grid-template-cols-auto"> <div class="flex flex-cols"> <vaadin-text-field label="Equipo" name="Equipo" required .value="${t.equipo}" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El equipo es obligatorio"> </vaadin-text-field> </div> <div class="flex flex-cols"> <vaadin-text-field label="tecnico" name="tecnico" required .value="${t.tecnico}" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El técnico es obligatorio"> </vaadin-text-field> </div> <div class="flex flex-cols"> <vaadin-text-field label="folio ant" name="folioAnt" required .value="${t.folioAnt}" placeholder="Número de folio" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El número de folio es obligatorio"> </vaadin-text-field> </div> </section> `}({equipo:this.fields.equipo,tecnico:this.fields.tecnico,folio:this.fields.folioAnt,isDisabled:this.isDisabled})} </section> <section class="grid grid-cols-2 mbe-2"> <div> <vaadin-text-field label="Próxima verificación" name="proximaVerif" required .value="${this.fields.proximaVerif}" placeholder="Próxima verificación" @input="${$o}" ?disabled="${this.isDisabled}" error-message="La próxima verificación es obligatoria"> </vaadin-text-field> </div> ${function(t){return L` <div class="grid grid-rows-3 grid-cols-3 gap-0"> <div class="border p-2 text-lg">Estatal diesel</div> <div class="border p-2"> Coeficiente de absorción de Luz (m<sup>-1</sup>) </div> <div class="border p-2">Porcentaje de opacidad (%)</div> <div class="border p-2">Límite</div> <div class="border p-2"> <vaadin-number-field name="limiteLuz" required .value="${t.clave}" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El Límite de luz es obligatorio"> </vaadin-number-field> </div> <div class="border p-2"> <vaadin-number-field name="limiteOpacidad" required .value="${t.limiteOpacidad}" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El Límite de opacidad es obligatorio"> </vaadin-number-field> </div> <div class="border p-2">Resultado</div> <div class="border p-2"> <vaadin-number-field name="resultadoLuz" required .value="${t.resultadoLuz}" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El resultado de luz es obligatorio"> </vaadin-number-field> </div> <div class="border p-2"> <vaadin-number-field name="resultadoOpacidad" required .value="${t.resultadoOpacidad}" @input="${$o}" ?disabled="${t.isDisabled}" error-message="El resultado de opacidad es obligatorio"> </vaadin-number-field> </div> </div> `}({limiteLuz:this.fields.limiteLuz,limiteOpacidad:this.fields.limiteOpacidad,resultadoLuz:this.fields.resultadoLuz,resultadoOpacidad:this.fields.resultadoOpacidad,isDisabled:this.isDisabled})} </section> <footer class="footer print:hidden"> <section class="actions"> ${this.renderPrintButton()} ${this.renderPrintButton()} </section> </footer> </form> `;var t}renderPrintButton(){return L`<button> <vaadin-button class="btn">Imprimir</vaadin-button> </button>`}print(t){t.preventDefault(),window.print()}});var No=r`.flex{display:flex}@media print{.first-row{margin-block-start:calc(18mm - var(--pw-print-margin-block));margin-inline-start:calc(20mm - var(--pw-print-margin-inline))}.value{height:10mm;width:13mm;display:flex;align-items:center;justify-content:center;overflow:hidden;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;font-size:7.2pt;font-weight:700;border:1px solid rgba(0,0,0,.2)}.fecha{margin-inline-start:8mm}.hora{margin-inline-start:8mm;width:10mm}.periodo{margin-inline-start:12mm;width:17mm}.tipoVerif{margin-inline-start:18mm}.inspVisual{margin-inline-start:15mm;width:9mm}.pago{margin-inline-start:7mm;width:12mm}.pagoMulta{margin-inline-start:16mm;width:14mm}.first-row-repetition-one{margin-block-start:26mm}.first-row-repetition-two{margin-block-start:26mm}.datos-propietario{margin-inline-start:calc(15mm - var(--pw-print-margin-inline));margin-block-start:5mm}.direccion,.nombre{height:5mm;width:100%;justify-content:flex-start}.direccion{margin-block-start:3mm}.datos-propietario-bottom{margin-block-start:3mm}.codigoPostal{width:16mm}.codigoPostal,.estado,.municipio{height:5mm}.municipio{margin-inline-start:13mm;width:24mm}.estado{margin-inline-start:10mm;width:26mm}.datos-vehiculo{margin-block-start:5mm;margin-inline-start:6mm;row-gap:2mm}.marcasYmodelos{display:flex}.marca{width:22mm;margin-inline-start:9mm}.submarca{margin-inline-start:14mm;width:18mm}.marca,.submarca{height:5mm}.modelo,.modeloDSL{height:3mm}.modelo{margin-inline-start:10mm}.modeloDSL{margin-inline-start:16mm}.h-1{height:5mm}.serie{margin-inline-start:8mm;width:28mm}.placas{margin-inline-start:10mm;width:23mm}.pesoBruto{margin-inline-start:16mm;width:12mm}.combustible{margin-inline-start:18mm;width:36mm}.clase{margin-inline-start:10mm;width:10mm}.servicio{margin-inline-start:11mm;width:16mm}.equipoTecnicoFolioAnt{margin-inline-start:calc(12mm - var(--pw-print-margin-inline))}.equipo{width:19mm}.tecnico{margin-inline-start:0;width:52mm}.folioAnt{width:23mm}.proximaVerif{margin-inline-start:15mm;margin-block-start:10mm;height:5mm;width:40mm}.repeatedPlacas{margin-inline-start:23mm;margin-block-start:5mm;height:5mm;width:23mm}.estatalDiesel{display:grid;grid-template-columns:35mm 35mm;grid-template-rows:5mm 5mm;margin-inline-start:22mm;margin-block-start:16mm;align-items:center;justify-items:center}.statalDieselValue{height:5mm;width:100%}[hidden]{opacity:0}}`;class Lo extends Q{static get is(){return"pw-verificacion-print"}static get styles(){return[Eo,No]}static get properties(){return{fields:Object}}constructor(){super(),this.fields={}}render(){return L` ${this.renderValues({hasDuplicatedPlaca:!0})} ${this.renderValues({repeat:"one"})} ${this.renderValues({repeat:"two"})} `}renderValues({hasDuplicatedPlaca:t=!1,repeat:e=""}){const{clave:i,fecha:s,hora:o,periodo:r,tipoVerif:n,inspVisual:a,pago:l,pagoMulta:d,marca:c,submarca:h,modelo:u,modeloDSL:p,serie:m,placas:f,pesoBruto:_,combustible:v,clase:g,servicio:b,limiteLuz:y,limiteOpacidad:x,resultadoLuz:w,resultadoOpacidad:A,proximaVerif:C,nombre:P,direccion:E,codigoPostal:S,municipio:T,estado:$,equipo:O,folioAnt:I,tecnico:k}=this.fields;return L` <section class="flex first-row ${e?`first-row-repetition-${e}`:""}"> <div class="value clave">${i}</div> <div class="value fecha">${this.formatDate(s.valueAsNumber)}</div> <div class="value hora">${o}</div> <div class="value periodo">${r}</div> <div class="value tipoVerif">${n}</div> <div class="value inspVisual">${a}</div> <div class="value pago">${l?`$${l}`:""}</div> <div class="value pagoMulta">${d?`$${d}`:""}</div> </section> <section class="flex"> <div class="datos-propietario"> <div class="value nombre">${P}</div> <div class="value direccion">${E}</div> <div class="flex datos-propietario-bottom"> <div class="value codigoPostal">${S}</div> <div class="value municipio">${T}</div> <div class="value estado">${$}</div> </div> </div> <div class="grid datos-vehiculo"> <div class="marcasYmodelos"> <div class="value marca">${c}</div> <div class="value submarca">${h}</div> <div class="flex flex-cols modelos"> <div class="value modelo">${u}</div> <div class="value modeloDSL">${p}</div> </div> </div> <div class="flex"> <div class="value h-1 serie">${m}</div> <div class="value h-1 placas">${f}</div> <div class="value h-1 pesoBruto">${_}</div> </div> <div class="flex"> <div class="value h-1 combustible">${v}</div> <div class="value h-1 clase">${g}</div> <div class="value h-1 servicio">${b}</div> </div> </div> </section> <section class="flex equipoTecnicoFolioAnt"> <div class="value h-1 equipo">${O}</div> <div class="value h-1 tecnico">${k}</div> <div class="value h-1 folioAnt">${I}</div> </section> <section class="flex"> <div class="value proximaVerif">${C}</div> <div class="value repeatedPlacas" ?hidden="${!t}">${f}</div> <div class="estatalDiesel"> <div class="value statalDieselValue">${y}</div> <div class="value statalDieselValue">${x}</div> <div class="value statalDieselValue">${w}</div> <div class="value statalDieselValue">${A}</div> </div> </section>`}formatDate(t){return t?new Date(t).toLocaleString("es-MX",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"UTC"}):""}}customElements.define(Lo.is,Lo);var Do=r`:host{display:block;text-transform:uppercase}.hidden{display:none}.actions{display:flex;justify-content:space-between;margin-bottom:1rem}@media print{.print\\:hidden{display:none}.print\\:visible{display:block}}`;customElements.define("pw-verificacion",class extends Q{static get properties(){return{title:{type:String},fields:{type:Object}}}static get styles(){return[Do]}constructor(){super(),this.title="Verificación",this.fields={clave:"",fecha:"",hora:"",periodo:"",tipoVerif:"",inspVisual:"",pago:"",pagoMulta:"",marca:"",submarca:"",modelo:"",modeloDSL:"",serie:"",placas:"",pesoBruto:"",combustible:"",clase:"",servicio:"",equipo:"TECNOTEST",tecnico:"Mario Alberto Pérez Salinas",folioAnt:"",limiteLuz:"",limiteOpacidad:"",resultadoLuz:"",resultadoOpacidad:"",proximaVerif:"",nombre:"",direccion:"",codigoPostal:"",municipio:"",estado:""}}render(){return L` <header class="print:hidden"> <h1>${this.title}</h1> </header> <main> <pw-verificacion-form .fields="${this.fields}" @pw-field-changed="${this.onFieldChanged}" data-testid="form" class="print:hidden"></pw-verificacion-form> <pw-verificacion-form title="Repeticion 1" .fields="${this.fields}" data-testid="form-disabled-1" class="print:hidden" is-disabled></pw-verificacion-form> <pw-verificacion-form title="Repeticion 2" .fields="${this.fields}" data-testid="form-disabled-2" class="print:hidden" is-disabled></pw-verificacion-form> <pw-verificacion-print .fields="${this.fields}" data-testid="print" class="hidden print:visible"></pw-verificacion-print> </main> `}onFieldChanged(t){this.fields={...this.fields,...t.detail}}});
