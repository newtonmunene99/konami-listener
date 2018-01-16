/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='konami-listener']");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t){const e=n.n(t);e.t&&e.t.forEach(e=>{e.e||n.i.o(t,e.c,l(t,e.l),e.u,e.f)})}function l(n,t){return e=>{n.r?n.r[t](e):(n.s=n.s||[]).push(t,e)}}function u(n,t,e,o,i){if(t){const c=t.a,l=n.n(c);if(l&&l.t)if(o){const o=l.t.find(n=>n.c===e);o&&n.i.o(c,e,n=>t[o.l](n),o.u,o.f,i)}else n.i.d(c,e)}}function f(n,t){const e=n.s;if(e){for(t=0;t<e.length;t+=2)n.r[e[t]](e[t+1]);n.s=null}}function r(n,t,e,o){if(t.m){e.$defaultHolder||n.p(e,e.$defaultHolder=n.v(""),o[0]);let t,c,l,u=0;for(;u<o.length;u++){var i=o[u];1===n.b(i)&&null!=(t=n.h(i,"slot"))?(l=l||{})[t]?l[t].push(i):l[t]=[i]:c?c.push(i):c=[i]}e.y={w:c,g:l}}}function s(n,t,e){const o=new WeakMap,i={C:t.documentElement,N:t.head,j:t.body,b:n=>n.nodeType,T:n=>t.createElement(n),x:(n,e)=>t.createElementNS(n,e),O:n=>t.createTextNode(n),v:n=>t.createComment(n),p:(n,t,e)=>n.insertBefore(t,e),k:(n,t)=>n.removeChild(t),M:(n,t)=>n.appendChild(t),A:n=>n.childNodes,S:n=>n.parentNode,P:n=>n.nextSibling,B:n=>ln(n.tagName),L:n=>n.textContent,R:(n,t)=>n.textContent=t,h:(n,t)=>n.getAttribute(t),q:(n,t,e)=>n.setAttribute(t,e),D:(n,t,e,o)=>n.setAttributeNS(t,e,o),H:(n,t)=>n.removeAttribute(t),I:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.z(e):"body"===o?i.j:"document"===o?t:"window"===o?n:e,o:(n,t,e,c,l,u,f,r)=>{const s=t;let a=n,d=o.get(n);if(d&&d[s]&&d[s](),"string"==typeof u?a=i.I(n,u):"object"==typeof u?a=u:(r=t.split(":")).length>1&&(a=i.I(n,r[0]),t=r[1]),!a)return;let m=e;(r=t.split(".")).length>1&&(t=r[0],m=(n=>{n.keyCode===en[r[1]]&&e(n)})),f=i.F?{capture:!!c,passive:!!l}:!!c,a.addEventListener(t,m,f),d||o.set(n,d={}),d[s]=(()=>{a&&a.removeEventListener(t,m,f),d[s]=null})},d:(n,t)=>{const e=o.get(n);e&&(t?e[t]&&e[t]():(Object.keys(e).forEach(n=>{e[n]&&e[n]()}),o.delete(n)))}};i.W=((n,t)=>n.attachShadow(t)),i.Z=!!i.C.attachShadow,e=n.CustomEvent;try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.F=!0}))}catch(n){}return i._=((n,t,o)=>n&&n.dispatchEvent(new e(t,o))),i.z=((n,t)=>(t=i.S(n))&&11===i.b(t)?t.host:t),i}function a(n,t,e,o,i){const c=11===e.G.nodeType&&e.G.host?e.G.host:e.G,l=t&&t.J||nn,u=e.J||nn;for(i in l)u&&null!=u[i]||null==l[i]||d(n,c,i,l[i],void 0,o);for(i in u)i in l&&u[i]===("value"===i||"checked"===i?c[i]:l[i])||d(n,c,i,l[i],u[i],o)}function d(n,t,e,o,i,c,l,u){if("class"!==e||c)if("style"===e){o=o||nn,i=i||nn;for(l in o)i[l]||(t.style[l]="");for(l in i)i[l]!==o[l]&&(t.style[l]=i[l])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.n(t);o&&o.K&&e in o.K?m(t,e,i):"ref"!==e&&(m(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(l=e!==(e=e.replace(/^xlink\:?/,"")),1!==rn[e]||i&&"false"!==i?"function"!=typeof i&&(l?t.setAttributeNS(sn,ln(e),i):t.setAttribute(e,i)):l?t.removeAttributeNS(sn,ln(e)):t.removeAttribute(e));else e=ln(e.substring(2)),i?o||n.i.o(t,e,i):n.i.d(t,e);else if(o!==i){const n=null==o||""===o?tn:o.trim().split(/\s+/),e=null==i||""===i?tn:i.trim().split(/\s+/);let c=null==t.className||""===t.className?tn:t.className.trim().split(/\s+/);for(l=0,u=n.length;l<u;l++)-1===e.indexOf(n[l])&&(c=c.filter(t=>t!==n[l]));for(l=0,u=e.length;l<u;l++)-1===n.indexOf(e[l])&&(c=[...c,e[l]]);t.className=c.join(" ")}}function m(n,t,e){try{n[t]=e}catch(n){}}function p(n,t){function e(o,i,c){let l=0;if("function"==typeof o.Q&&(o=o.Q(Object.assign({},o.J,{U:o.V}))),"slot"===o.Q&&!d){if(s){m&&t.q(i,m+"-slot","");let e,c=o.J&&o.J.name;if(e=on(c)?s.g&&s.g[c]:s.w,on(e)){for(n.X=!0;l<e.length;l++)t.M(i,t.k(t.S(e[l]),e[l]));n.X=!1}}return null}if(on(o.Y))o.G=t.O(o.Y);else{const i=o.G=t.T(o.Q);a(n,null,o,an),null!==m&&i.nn!==m&&t.q(i,i.nn=m,"");const c=o.V;if(c){let n;for(;l<c.length;++l)(n=e(c[l],i,l))&&t.M(i,n)}}return o.G}function o(n,o,i,c,l){const u=n.$defaultHolder&&t.S(n.$defaultHolder)||n;let f;for(;c<=l;++c){var r=i[c];on(r)&&(f=on(r.Y)?t.O(r.Y):e(r,n,c),on(f)&&(r.G=f,t.p(u,f,o)))}}function i(n,e,o,i){for(;o<=i;++o)on(e[o])&&t.k(n,e[o].G)}function c(n,c,r){let s,a,d,m,p=0,v=0,b=c.length-1,h=c[0],y=c[b],$=r.length-1,w=r[0],g=r[$];for(;p<=b&&v<=$;)null==h?h=c[++p]:null==y?y=c[--b]:null==w?w=r[++v]:null==g?g=r[--$]:l(h,w)?(f(h,w),h=c[++p],w=r[++v]):l(y,g)?(f(y,g),y=c[--b],g=r[--$]):l(h,g)?(f(h,g),t.p(n,h.G,t.P(y.G)),h=c[++p],g=r[--$]):l(y,w)?(f(y,w),t.p(n,y.G,h.G),y=c[--b],w=r[++v]):(cn(s)&&(s=u(c,p,b)),a=s[w.tn],cn(a)?(m=e(w,n,v),w=r[++v]):((d=c[a]).Q!==w.Q?m=e(w,n,a):(f(d,w),c[a]=void 0,m=d.G),w=r[++v]),m&&t.p(n,m,h.G));p>b?o(n,null==r[$+1]?null:r[$+1].G,r,v,$):v>$&&i(n,c,p,b)}function l(n,t){return n.Q===t.Q&&n.tn===t.tn}function u(n,t,e){let o,i,c,l={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.tn)&&(l.en=o);return l}function f(e,l){const u=l.G=e.G,f=e.V,r=l.V;if(cn(l.Y))"slot"!==l.Q&&a(n,e,l,an),on(f)&&on(r)?c(u,f,r):on(r)?(on(e.Y)&&t.R(u,""),o(u,null,r,0,r.length-1)):on(f)&&i(u,f,0,f.length-1);else if(u.y&&u.y.w){let n=u.y.w[0].parentElement;t.R(n,l.Y),u.y.w=[n.childNodes[0]]}else e.Y!==l.Y&&t.R(u,l.Y)}let r,s,d,m;return function n(e,o,i,c,l,u){return r=i,s=c,m=2===l||1===l&&!t.Z?"data-"+t.B(e.G):null,d=1===l&&t.Z,r||(d?e.G=t.W(e.G,{mode:"open"}):m&&t.q(e.G,m+"-host","")),f(e,o),o}}function v(n,t){n&&(n.on&&n.on(t?null:n.G),n.V&&n.V.forEach(n=>{v(n,t)}))}function b(n,t,e){for(var o,i=!1,c=!1,l=arguments.length;l-- >2;)mn.push(arguments[l]);for(;mn.length;)if((e=mn.pop())&&void 0!==e.pop)for(l=e.length;l--;)mn.push(e[l]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].Y+=e:void 0===o?o=[c?h(e):e]:o.push(c?h(e):e),i=c;const u=new dn;if(u.Q=n,u.V=o,t&&(u.J=t,u.tn=t.in,u.on=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(l in t.class)t.class[l]&&mn.push(l);t.class=mn.join(" "),mn.length=0}return u}function h(n){const t=new dn;return t.Y=n,t}function y(n,t){var e,o,i,c,l,u,f=t.querySelectorAll(`[${X}]`),r=f.length;if(t.cn=r>0)for(c=0;c<r;c++)for(e=f[c],o=n.h(e,X),(i=e.ln=new dn).Q=n.B(i.G=e),l=0,u=e.childNodes.length;l<u;l++)$(n,e.childNodes[l],i,o,!0)}function $(n,t,e,o,i){var c,l,u,f,r=n.b(t);if(i&&1===r){(l=n.h(t,Y))&&(u=l.split("."))[0]===o&&((f=new dn).Q=n.B(f.G=t),e.V||(e.V=[]),e.V[u[1]]=f,e=f,i=""!==u[2]);for(var s=0;s<t.childNodes.length;s++)$(n,t.childNodes[s],e,o,i)}else 3===r&&(c=t.previousSibling)&&8===n.b(c)&&"s"===(u=n.L(c).split("."))[0]&&u[1]===o&&((f=h(n.L(t))).G=t,e.V||(e.V=[]),e.V[u[2]]=f)}function w(n,t,e,o){function i(){for(;f.length>0;)f.shift()();e=!1}function c(e){for(e=t(),i();r.length>0&&t()-e<40;)r.shift()();(o=r.length>0)&&n(l)}function l(e){for(i(),e=4+t();r.length>0&&t()<e;)r.shift()();(o=r.length>0)&&n(c)}const u=Promise.resolve(),f=[],r=[];return{add:(t,l)=>{3===l?(f.push(t),e||(e=!0,u.then(i))):(r.push(t),o||(o=!0,n(c)))}}}function g(n,t,e){const o={un:n[0],K:{mode:{fn:1},color:{fn:1,rn:"color"}}};return o.sn=n[1],N(o,n[3],e),o.an=n[4],o.m=n[5],n[6]&&(o.t=n[6].map(C)),o.dn=n[7],t[o.un]=o}function C(n){return{c:n[0],l:n[1],e:!!n[2],f:!!n[3],u:!!n[4]}}function N(n,t,e){if(t){n.K=n.K||{};for(var o=0;o<t.length;o++){var i=t[o];n.K[i[0]]={fn:i[1],rn:i[2]?1===e?ln(i[0]):un(i[0]):0,mn:i[3],pn:i[4]}}}}function j(n,t,e,o){const i=n[e[0]];i.vn=t[e[0]],N(i,e[1],o),i.bn=e[2],e[3]&&(i.hn=e[3].map(T)),i.yn=e[4],i.$n=e[5]}function T(n){return{c:n[0],l:n[1]||n[0],wn:!n[2],gn:!n[3],Cn:!n[4]}}function x(n,t){if(on(t)){if(3===n)return"false"!==t&&(""===t||!!t);if(4===n)return parseFloat(t)}return t}function E(n,t,e){t&&t.forEach(t=>{e[t.l]={emit:o=>{const i={bubbles:t.wn,composed:t.Cn,cancelable:t.gn,detail:o};n.Nn(e.a,t.c,i)}}})}function O(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].fn;1===i||2===i?P(e,o,function n(){return(this.jn=this.jn||{})[o]},function t(e){A(n,this,o,e)}):6===i&&S(e,o,fn)})}function k(n,t,e,o){o.a=e,e.jn=e.jn||{},t.K&&Object.keys(t.K).forEach(i=>{M(n,t,e,o,i)})}function M(n,t,e,o,i){const c=t.K[i],l=c.fn;if(1===l||5===l||2===l){if(5!==l){if(c.rn&&(void 0===e.jn[i]||""===e.jn[i])){const n=e.getAttribute(c.rn);null!=n&&(e.jn[i]=x(c.mn,n))}e.hasOwnProperty(i)&&(void 0===e.jn[i]&&(e.jn[i]=e[i]),n.isClient&&delete e[i])}o.hasOwnProperty(i)&&void 0===e.jn[i]&&(e.jn[i]=o[i]),P(o,i,function u(){const n=this.a;return n&&n.jn&&n.jn[i]},function f(t){const e=this.a;e&&1!==l&&A(n,e,i,t)})}else 7===l&&S(o,i,e)}function A(n,t,e,o){const i=t.jn=t.jn||{};o!==i[e]&&(i[e]=o,t.r&&!n.Tn&&z(n,t))}function S(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function P(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function B(n,t,e){return{create:R(n,t,e,"create"),componentOnReady:R(n,t,e,"componentOnReady")}}function L(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.j.querySelector(e)),i||(i=t[e]=n.T(e),n.M(n.j,i)),i.componentOnReady(o)})}function R(n,t,e,o){return function(){const i=arguments;return L(n,t,e).then(n=>n[o].apply(n,i))}}function q(n,t,e){try{e=n.n(t),t.r=new e.vn,k(n,e,t,t.r),E(n,e.hn,t.r);try{f(t)}catch(e){n.xn(e,2,t)}}catch(e){t.r={},n.xn(e,7,t,!0)}}function D(n,t,e){if(t.r&&!t.En&&(!t.$activeLoading||!t.$activeLoading.length)){t.$activeLoading=null,t.cn=!0;try{v(t.ln),t.On&&(t.On.forEach(n=>n(t)),t.On=null)}catch(e){n.xn(e,4,t)}t.classList.add(e),H(t)}}function H(n,t,e){n.kn&&((e=n.kn.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.kn.$initLoad()),n.kn=null)}function I(n,t,e,o){const i=t.r,c=e.bn;if(i.render||i.hostData||c){n.Tn=!0;const c=i.render&&i.render();n.Tn=!1;const l=t.ln||new dn;l.G=t,t.ln=n.render(l,b(null,void 0,c),o,t.y,e.an)}n.Mn(e,i.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}function z(n,t){t.An||(t.An=!0,n.Sn.add(()=>{t.An=!1,F(n,t)}))}function F(n,t){if(!t.En){const e=!t.r;if(e){const e=t.kn;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{F(n,t)});q(n,t)}W(n,t,e)}}function W(n,t,e){try{I(n,t,n.n(t),!e)}catch(e){n.xn(e,8,t,!0)}try{e&&t.$initLoad()}catch(e){n.xn(e,6,t,!0)}}function Z(n,t,e){e.$connected||(e.$connected=!0,e.En=null,c(n,e),_(n,e),n.Sn.add(()=>{n.Pn(t,e),n.Bn(t,e,()=>z(n,e))},3))}function _(n,t,e){for(e=t;e=n.i.z(e);)if(n.Ln(e)){e.cn||(t.kn=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}function G(n,t){!n.X&&J(n.i,t)&&(t.En=!0,H(t),v(t.ln,!0),n.i.d(t),t.y&&(t.y=t.y.w=t.y.g=null),t.r&&(t.r=t.r.a=null),t.$activeLoading=t.$connected=t.$defaultHolder=t.Rn=t.jn=t.ln=t.kn=t.cn=t.An=t.qn=null)}function J(n,t){for(;t;){if(!n.S(t))return 9!==n.b(t);t=n.S(t)}}function K(n,t,e,o){e.connectedCallback=function(){Z(n,t,this)},e.disconnectedCallback=function(){G(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),Q(this,n),t},e.$initLoad=function(){D(n,this,o)},e.Dn=function(){z(n,this)},O(n,t.K,e)}function Q(n,t){n.En||(n.cn?t(n):(n.On=n.On||[]).push(t))}function U(n,t){return n&&1===t.an}function V(n,t){return 2===t.an||1===t.an&&!n}const X="data-ssrv",Y="data-ssrc",nn={},tn=[],en={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},on=n=>void 0!==n&&null!==n,cn=n=>void 0===n||null===n,ln=n=>n.toLowerCase(),un=n=>n.replace(/([A-Z])/g,n=>" "+ln(n[0])).trim().replace(/ /g,"-"),fn=()=>{},rn={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},sn="http://www.w3.org/1999/xlink";let an=!1;class dn{}const mn=[],pn=n[o]=n[o]||{},vn=function bn(t,e,o,i,c,l){function f(n,t,e,o,i){function l(){clearTimeout(o),i.onerror=i.onload=null,N.k(N.S(i),i),$[e]=!1}e=c+t+(V(N.Z,n)?".sc":"")+".js",$[e]||($[e]=!0,(i=N.T("script")).charset="utf-8",i.async=!0,i.src=e,o=setTimeout(l,12e4),i.onerror=i.onload=l,N.M(N.N,i))}const a={html:{}},d={},m={},v={},h={},$={},C={},N=s(o,i);t.enableListener=((n,t,e,o)=>u(x,n,t,e,o)),t.emit=((n,e,o)=>N._(n,t.eventNameFn?t.eventNameFn(e):e,o)),t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=c;const T=o.Hn=o.Hn||{},x={Pn:function E(n,e){e.mode||(e.mode=N.h(e,"mode")||t.mode),N.h(e,X)||U(N.Z,n)||r(N,n,e,e.childNodes),N.Z||1!==n.an||(e.shadowRoot=e)},i:N,In:function O(n,t){const e=n.un;T[e]||(T[e]=!0,K(x,n,t.prototype,l),o.customElements.define(e,t))},Nn:t.emit,n:n=>a[N.B(n)],zn:n=>t[n],isClient:!0,Ln:n=>!(!T[N.B(n)]&&!x.n(n)),Bn:function k(n,t,e,o){o=(n.sn[t.mode]||n.sn)[0],v[o]?e():((m[o]=m[o]||[]).push(e),f(n,o))},xn:(n,t,e)=>void 0,Fn:n=>B(N,C,n),Sn:w(t=>n.requestAnimationFrame(t),()=>o.performance.now()),Wn:n=>(n||[]).map(n=>g(n,a))};x.render=p(x,N);const M=N.C;return M.$rendered=!0,M.$activeLoading=[],M.$initLoad=(()=>M.cn=!0),y(N,M),e.loadComponents=function n(e,o){const i=arguments;o(d,b,t,c);for(var l=2;l<i.length;l++)j(a,d,i[l]);var u=m[e];if(u){for(l=0;l<u.length;l++)u[l]();m[e]=null}v[e]=!0},e.loadStyles=function n(){const t=arguments;let e;for(var o=0;o<t.length;o+=2)h[t[o]]=e=N.T("template"),e.innerHTML=`<style>${t[o+1]}</style>`,e.id=`tmp-${t[o]}`,N.M(N.N,e)},x.Mn=((n,t,e)=>{{const o=h[n.un+"_"+t]||h[n.un];if(o){let t=N.N;if(N.Z)if(1===n.an)t=e.shadowRoot;else for(;e=N.S(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}const i=t.Zn=t.Zn||{};if(!i[o.id]){{const n=o.content.cloneNode(!0),e=t.querySelector("[data-visibility]");N.p(t,n,e&&e.nextSibling||t._n)}i[o.id]=!0}}}}),x}(e,pn,n,t,i,hydratedCssClass);vn.Wn(pn.components).forEach(n=>vn.In(n,class extends HTMLElement{}))})(window,document,Context,appNamespace,publicPath);
})({},"konami-listener","hydrated","/build/konami-listener/");