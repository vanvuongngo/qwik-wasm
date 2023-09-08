import{j as u,_ as re,a as ae,F as E,s as ce,c as V,i as Z,u as le,b as de,d as h,e as b,f as me,g as w,h as B,S as ue,R as pe,Q as fe}from"./assets/@qwik-city-plan-4ff488f5.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.10
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var _e=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function be(e,n){const t=n==null?void 0:n.mapper,s=e.symbolMapper?e.symbolMapper:i=>{var a;if(t){const r=N(i),c=t[r];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",t)}return c}};return{isServer:!0,async importSymbol(i,a,r){var g;const c=N(r),l=(g=globalThis.__qwik_reg_symbols)==null?void 0:g.get(c);if(l)return l;let m=String(a);m.endsWith(".js")||(m+=".js");const v=_e(m);if(!(r in v))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${m}'.`);return v[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return s(i,t)}}}async function ye(e,n){const t=be(e,n);ce(t)}var N=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function k(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function X(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var qe=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,he=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,ge=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,ve=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function we(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?ve:ge).replace("window.qEvents",JSON.stringify(e.events)):e.debug?he:qe}function xe(e,n,t){if(!t)return[];const s=n.prefetchStrategy,o=X(n);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return je(e,t,o);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:t.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function je(e,n,t){const s=[],o=e==null?void 0:e.qrls,{mapper:i,manifest:a}=n,r=new Map;if(Array.isArray(o))for(const c of o){const l=c.getHash(),m=i[l];m&&W(a,r,s,t,m[1])}return s}function W(e,n,t,s,o){const i=s+o;let a=n.get(i);if(!a){a={url:i,imports:[]},n.set(i,a);const r=e.bundles[o];if(r&&Array.isArray(r.imports))for(const c of r.imports)W(e,n,a.imports,s,c)}t.push(a)}function ke(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function z(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function Ne(e){const n={bundles:x(e).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(n)}}))`}function x(e){const n=[],t=s=>{if(Array.isArray(s))for(const o of s)n.includes(o.url)||(n.push(o.url),t(o.imports))};return t(e),n}function ze(e){const n=new Map;let t=0;const s=(r,c)=>{if(Array.isArray(r))for(const l of r){const m=n.get(l.url)||0;n.set(l.url,m+1),t++,c.has(l.url)||(c.add(l.url),s(l.imports,c))}},o=new Set;for(const r of e)o.clear(),s(r.imports,o);const i=t/n.size*2,a=Array.from(n.entries());return a.sort((r,c)=>c[1]-r[1]),a.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function Ee(e,n,t){const s=Fe(e==null?void 0:e.implementation),o=[];return s.prefetchEvent==="always"&&Ce(o,n,t),s.linkInsert==="html-append"&&Se(o,n,s),s.linkInsert==="js-append"?Ie(o,n,s,t):s.workerFetchInsert==="always"&&Ae(o,n,t),o.length>0?u(E,{children:o}):null}function Ce(e,n,t){const s=ze(n);for(const o of s)e.push(u("link",{rel:"modulepreload",href:o,nonce:t}));e.push(u("script",{dangerouslySetInnerHTML:Ne(n),nonce:t}))}function Se(e,n,t){const s=x(n),o=t.linkRel||"prefetch";for(const i of s){const a={};a.href=i,a.rel=o,(o==="prefetch"||o==="preload")&&i.endsWith(".js")&&(a.as="script"),e.push(u("link",a,void 0))}}function Ie(e,n,t,s){const o=t.linkRel||"prefetch";let i="";t.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(x(n))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${o}");`,t.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${o}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",t.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=z(),i+="}"),t.workerFetchInsert==="always"&&(i+=z()),e.push(u("script",{type:"module",dangerouslySetInnerHTML:i,nonce:s}))}function Ae(e,n,t){let s=`const u=${JSON.stringify(x(n))};`;s+=z(),e.push(u("script",{type:"module",dangerouslySetInnerHTML:s,nonce:t}))}function Fe(e){return e&&typeof e=="object"?e:Le}var Le={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Re="<!DOCTYPE html>";async function Pe(e,n){var R;let t=n.stream,s=0,o=0,i=0,a=0,r="",c;const l=((R=n.streaming)==null?void 0:R.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},m=n.containerTagName??"html",v=n.containerAttributes??{},g=t,G=k(),ee=X(n),p=Te(n.manifest);function C(){r&&(g.write(r),r="",s=0,i++,i===1&&(a=G()))}function S(d){const f=d.length;s+=f,o+=f,r+=d}switch(l.strategy){case"disabled":t={write:S};break;case"direct":t=g;break;case"auto":let d=0,f=!1;const P=l.maximunChunk??0,j=l.maximunInitialChunk??0;t={write(q){q==="<!--qkssr-f-->"?f||(f=!0):q==="<!--qkssr-pu-->"?d++:q==="<!--qkssr-po-->"?d--:S(q),d===0&&(f||s>=(i===0?j:P))&&(f=!1,C())}};break}m==="html"?t.write(Re):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await ye(n,p);const I=p==null?void 0:p.manifest.injections,ne=I?I.map(d=>u(d.tag,d.attributes??{})):void 0,te=k(),A=[];let F=0,L=0;await re(e,{stream:t,containerTagName:m,containerAttributes:v,serverData:n.serverData,base:ee,beforeContent:ne,beforeClose:async(d,f,P,j)=>{var O,Q,$,U,Y,J,M;F=te();const q=k();c=await ae(d,f,void 0,j);const y=[];if(n.prefetchStrategy!==null){const _=xe(c,n,p);if(_.length>0){const H=Ee(n.prefetchStrategy,_,(O=n.serverData)==null?void 0:O.nonce);H&&y.push(H)}}const ie=JSON.stringify(c.state,void 0,void 0);y.push(u("script",{type:"qwik/json",dangerouslySetInnerHTML:Ke(ie),nonce:(Q=n.serverData)==null?void 0:Q.nonce})),c.funcs.length>0&&y.push(u("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Oe(c.funcs),nonce:($=n.serverData)==null?void 0:$.nonce}));const oe=!c||c.mode!=="static",T=((U=n.qwikLoader)==null?void 0:U.include)??"auto",K=T==="always"||T==="auto"&&oe;if(K){const _=we({events:(Y=n.qwikLoader)==null?void 0:Y.events,debug:n.debug});y.push(u("script",{id:"qwikloader",dangerouslySetInnerHTML:_,nonce:(J=n.serverData)==null?void 0:J.nonce}))}const D=Array.from(f.$events$,_=>JSON.stringify(_));if(D.length>0){let _=`window.qwikevents.push(${D.join(", ")})`;K||(_=`window.qwikevents||=[];${_}`),y.push(u("script",{dangerouslySetInnerHTML:_,nonce:(M=n.serverData)==null?void 0:M.nonce}))}return De(A,d),L=q(),u(E,{children:y})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"}),m!=="html"&&t.write("<!--/cq-->"),C();const se=c.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:p==null?void 0:p.manifest,size:o,isStatic:!se,timing:{render:F,snapshot:L,firstFlush:a},_symbols:A}}function Te(e){if(e){if("mapper"in e)return e;if(e=ke(e),e){const n={};return Object.entries(e.mapping).forEach(([t,s])=>{n[N(t)]=[t,s]}),{mapper:n,manifest:e}}}}var Ke=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function De(e,n){var t;for(const s of n){const o=(t=s.$componentQrl$)==null?void 0:t.getSymbol();o&&!e.includes(o)&&e.push(o)}}function Oe(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const Qe={manifestHash:"9yiykw",symbols:{s_02wMImzEAbk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[24662,33625]},s_LQPhZ0qOjrk:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useVisibleTask",canonicalFilename:"s_lqphz0qojrk",hash:"LQPhZ0qOjrk",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_PxZ05oEiFy8",loc:[391,623]},s_3sccYCDd1Z0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_3sccycdd1z0",hash:"3sccYCDd1Z0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[268,793]},s_5Go3iiHXUB4:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component",canonicalFilename:"s_5go3iihxub4",hash:"5Go3iiHXUB4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[162,732]},s_7gzriUtQs98:{origin:"components/starter/gauge/index.tsx",displayName:"gauge_component",canonicalFilename:"s_7gzriutqs98",hash:"7gzriUtQs98",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[116,1127]},s_8gdLBszqbaM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35578,37229]},s_J4V2qsF7Yxo:{origin:"routes/demo/todolist/index.tsx",displayName:"todolist_component",canonicalFilename:"s_j4v2qsf7yxo",hash:"J4V2qsF7Yxo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[565,1631]},s_Nk9PlpjQm9Y:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[47183,48534]},s_PxZ05oEiFy8:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component",canonicalFilename:"s_pxz05oeify8",hash:"PxZ05oEiFy8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,1545]},s_TxCFOy819ag:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[21392,33912]},s_VkLNXphUh5s:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vklnxphuh5s",hash:"VkLNXphUh5s",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[926,1066]},s_WmYC5H00wtI:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[34196,35459]},s_e0ssiDXoeAM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_fle1EaVOup8:{origin:"components/starter/hero/hero.tsx",displayName:"hero_component",canonicalFilename:"s_fle1eavoup8",hash:"fle1EaVOup8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[165,2448]},s_foRSjkQluCc:{origin:"components/starter/infobox/infobox.tsx",displayName:"infobox_component",canonicalFilename:"s_forsjkqlucc",hash:"foRSjkQluCc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[124,261]},s_kJCtKbc9zbk:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component",canonicalFilename:"s_kjctkbc9zbk",hash:"kJCtKbc9zbk",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1800,3048]},s_mBt9fIl89mc:{origin:"components/starter/header/header.tsx",displayName:"header_component",canonicalFilename:"s_mbt9fil89mc",hash:"mBt9fIl89mc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[159,1082]},s_u0bwM0i5dA8:{origin:"components/starter/footer/footer.tsx",displayName:"footer_component",canonicalFilename:"s_u0bwm0i5da8",hash:"u0bwM0i5dA8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[172,551]},s_xYL1qOwPyDI:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xyl1qowpydi",hash:"xYL1qOwPyDI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[372,3050]},s_zrbrqoaqXSY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_zrbrqoaqxsy",hash:"zrbrqoaqXSY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[244,978]},s_RPDJAz33WLA:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[21447,21481]},s_HU55RV7VfPc:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useStylesScoped",canonicalFilename:"s_hu55rv7vfpc",hash:"HU55RV7VfPc",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_PxZ05oEiFy8",loc:[270,276]},s_A5bZC7WO00A:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[38597,40231]},s_DyVc0YBIqQU:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[43245,45069]},s_BUbtvTyvVRE:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[34597,34658]},s_D04jAYuCnhM:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_div_button_onClick",canonicalFilename:"s_d04jayucnhm",hash:"D04jAYuCnhM",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_5Go3iiHXUB4",loc:[472,503]},s_JKHgMZ4xLZQ:{origin:"routes/layout.tsx",displayName:"layout_component_useStyles",canonicalFilename:"s_jkhgmz4xlzq",hash:"JKHgMZ4xLZQ",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_VkLNXphUh5s",loc:[947,953]},s_JtGc0nS5Nuo:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_div_input_onInput",canonicalFilename:"s_jtgc0ns5nuo",hash:"JtGc0nS5Nuo",ctxKind:"eventHandler",ctxName:"onInput$",captures:!0,parent:"s_PxZ05oEiFy8",loc:[938,1029]},s_LkCVrojX09Y:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_div_button_onClick_1",canonicalFilename:"s_lkcvrojx09y",hash:"LkCVrojX09Y",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_5Go3iiHXUB4",loc:[648,679]},s_NYEDprtA0Lw:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_div_button_onClick_1",canonicalFilename:"s_nyedprta0lw",hash:"NYEDprtA0Lw",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_kJCtKbc9zbk",loc:[2937,2973]},s_UxlJFslpf0s:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_useOnWindow",canonicalFilename:"s_uxljfslpf0s",hash:"UxlJFslpf0s",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_kJCtKbc9zbk",loc:[1888,1996]},s_aXA3vNn55QE:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_setCount",canonicalFilename:"s_axa3vnn55qe",hash:"aXA3vNn55QE",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_5Go3iiHXUB4",loc:[223,340]},s_eBQ0vFsFKsk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[36105,36168]},s_fX0bDjeJa0E:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[22731,24050]},s_gRRz00JItKA:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_div_button_onClick",canonicalFilename:"s_grrz00jitka",hash:"gRRz00JItKA",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_kJCtKbc9zbk",loc:[2697,2729]},s_i1Cv0pYJNR0:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[36286,36801]},s_p9MSze0ojs4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[47490,48187]},s_zwO7CtYmrPQ:{origin:"components/starter/hero/hero.tsx",displayName:"hero_component_div_div_button_onClick",canonicalFilename:"s_zwo7ctymrpq",hash:"zwO7CtYmrPQ",ctxKind:"eventHandler",ctxName:"onClick$",captures:!1,parent:"s_fle1EaVOup8",loc:[555,2190]}},mapping:{s_02wMImzEAbk:"q-a017fc5b.js",s_LQPhZ0qOjrk:"q-3ec6f13d.js",s_3sccYCDd1Z0:"q-8903e8da.js",s_5Go3iiHXUB4:"q-76ddbf63.js",s_7gzriUtQs98:"q-7b502fdd.js",s_8gdLBszqbaM:"q-2c7ff8f1.js",s_J4V2qsF7Yxo:"q-3313e0db.js",s_Nk9PlpjQm9Y:"q-2d2c31c9.js",s_PxZ05oEiFy8:"q-3ec6f13d.js",s_TxCFOy819ag:"q-a017fc5b.js",s_VkLNXphUh5s:"q-a09a1bf0.js",s_WmYC5H00wtI:"q-23e0c2b6.js",s_e0ssiDXoeAM:"q-92c37db1.js",s_fle1EaVOup8:"q-f6c36b25.js",s_foRSjkQluCc:"q-46a4832a.js",s_kJCtKbc9zbk:"q-969561ab.js",s_mBt9fIl89mc:"q-521d480f.js",s_u0bwM0i5dA8:"q-5432bba1.js",s_xYL1qOwPyDI:"q-1e819035.js",s_zrbrqoaqXSY:"q-93633a1a.js",s_RPDJAz33WLA:"q-a017fc5b.js",s_HU55RV7VfPc:"q-3ec6f13d.js",s_A5bZC7WO00A:"q-2b3fc813.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-ff66d802.js",s_BUbtvTyvVRE:"q-23e0c2b6.js",s_D04jAYuCnhM:"q-76ddbf63.js",s_JKHgMZ4xLZQ:"q-a09a1bf0.js",s_JtGc0nS5Nuo:"q-3ec6f13d.js",s_LkCVrojX09Y:"q-76ddbf63.js",s_NYEDprtA0Lw:"q-969561ab.js",s_UxlJFslpf0s:"q-969561ab.js",s_aXA3vNn55QE:"q-76ddbf63.js",s_eBQ0vFsFKsk:"q-3bdb4c2b.js",s_fX0bDjeJa0E:"q-a017fc5b.js",s_gRRz00JItKA:"q-969561ab.js",s_i1Cv0pYJNR0:"q-2c7ff8f1.js",s_p9MSze0ojs4:"q-2d2c31c9.js",s_zwO7CtYmrPQ:"q-22949cf9.js"},bundles:{"q-0a88cef5.js":{size:8750,imports:["q-46a8f38b.js"],dynamicImports:["q-2b3fc813.js","q-2d2c31c9.js","q-663033b0.js","q-92c37db1.js","q-a017fc5b.js"],origins:["@qwik-city-sw-register","node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-1284349e.js":{size:380,imports:["q-0a88cef5.js","q-46a8f38b.js"],dynamicImports:["q-a09a1bf0.js"],origins:["src/routes/layout.tsx"]},"q-13461bb7.js":{size:1667,imports:["q-46a8f38b.js"],dynamicImports:["q-969561ab.js"],origins:["src/components/starter/next-steps/next-steps.tsx"]},"q-1e819035.js":{size:2833,imports:["q-13461bb7.js","q-46a8f38b.js"],dynamicImports:["q-46a4832a.js","q-76ddbf63.js","q-f6c36b25.js"],origins:["src/components/starter/counter/counter.tsx","src/components/starter/hero/hero.tsx","src/components/starter/infobox/infobox.tsx","src/entry_routes.js","src/s_xyl1qowpydi.js"],symbols:["s_xYL1qOwPyDI"]},"q-22949cf9.js":{size:695,origins:["src/s_zwo7ctymrpq.js"],symbols:["s_zwO7CtYmrPQ"]},"q-23e0c2b6.js":{size:787,imports:["q-0a88cef5.js","q-46a8f38b.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-259f5fc4.js":{size:125,imports:["q-46a8f38b.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-2b3fc813.js":{size:746,imports:["q-46a8f38b.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-2c7ff8f1.js":{size:1144,imports:["q-0a88cef5.js","q-46a8f38b.js"],dynamicImports:["q-3bdb4c2b.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-2d2c31c9.js":{size:1037,imports:["q-0a88cef5.js","q-46a8f38b.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-3313e0db.js":{size:1202,imports:["q-0a88cef5.js","q-46a8f38b.js","q-92118a58.js"],origins:["src/entry_todolist.js","src/routes/demo/todolist/todolist.module.css?used","src/s_j4v2qsf7yxo.js"],symbols:["s_J4V2qsF7Yxo"]},"q-3bdb4c2b.js":{size:128,imports:["q-0a88cef5.js","q-46a8f38b.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-3ec6f13d.js":{size:2688,imports:["q-0a88cef5.js","q-46a8f38b.js"],origins:["src/entry_flower.js","src/routes/demo/flower/flower.css?used&inline","src/s_hu55rv7vfpc.js","src/s_jtgc0ns5nuo.js","src/s_lqphz0qojrk.js","src/s_pxz05oeify8.js"],symbols:["s_HU55RV7VfPc","s_JtGc0nS5Nuo","s_LQPhZ0qOjrk","s_PxZ05oEiFy8"]},"q-46a4832a.js":{size:261,imports:["q-46a8f38b.js"],origins:["src/components/starter/infobox/infobox.module.css?used","src/entry_infobox.js","src/s_forsjkqlucc.js"],symbols:["s_foRSjkQluCc"]},"q-46a8f38b.js":{size:49239,origins:["node_modules/.pnpm/@builder.io+qwik@1.2.10_undici@5.22.1/node_modules/@builder.io/qwik/core.min.mjs"]},"q-521d480f.js":{size:3824,imports:["q-46a8f38b.js"],origins:["src/components/starter/header/header.module.css?used","src/components/starter/icons/qwik.tsx","src/entry_header.js","src/s_mbt9fil89mc.js"],symbols:["s_mBt9fIl89mc"]},"q-5432bba1.js":{size:550,imports:["q-0a88cef5.js","q-1284349e.js","q-46a8f38b.js"],origins:["src/components/starter/footer/footer.module.css?used","src/entry_footer.js","src/s_u0bwm0i5da8.js"],symbols:["s_u0bwM0i5dA8"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-76ddbf63.js":{size:1168,imports:["q-46a8f38b.js"],dynamicImports:["q-7b502fdd.js"],origins:["src/components/starter/counter/counter.module.css?used","src/components/starter/gauge/index.tsx","src/entry_counter.js","src/s_5go3iihxub4.js","src/s_axa3vnn55qe.js","src/s_d04jayucnhm.js","src/s_lkcvrojx09y.js"],symbols:["s_5Go3iiHXUB4","s_aXA3vNn55QE","s_D04jAYuCnhM","s_LkCVrojX09Y"]},"q-7b502fdd.js":{size:955,imports:["q-46a8f38b.js"],origins:["src/components/starter/gauge/gauge.module.css?used","src/entry_gauge.js","src/s_7gzriutqs98.js"],symbols:["s_7gzriUtQs98"]},"q-7c46e662.js":{size:241,imports:["q-46a8f38b.js"],dynamicImports:["q-3ec6f13d.js"],origins:["src/routes/demo/flower/index.tsx"]},"q-8903e8da.js":{size:541,imports:["q-0a88cef5.js","q-46a8f38b.js"],dynamicImports:["q-93633a1a.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_3sccycdd1z0.js"],symbols:["s_3sccYCDd1Z0"]},"q-8ea06850.js":{size:2539,origins:["node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-92118a58.js":{size:411,imports:["q-0a88cef5.js","q-46a8f38b.js"],dynamicImports:["q-3313e0db.js"],origins:["src/routes/demo/todolist/index.tsx"]},"q-92c37db1.js":{size:467,imports:["q-0a88cef5.js","q-46a8f38b.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-93633a1a.js":{size:765,imports:["q-0a88cef5.js","q-46a8f38b.js"],origins:["src/entry_RouterHead.js","src/s_zrbrqoaqxsy.js"],symbols:["s_zrbrqoaqXSY"]},"q-969561ab.js":{size:1503,imports:["q-13461bb7.js","q-46a8f38b.js"],origins:["src/components/starter/next-steps/next-steps.module.css?used","src/entry_next_steps.js","src/s_grrz00jitka.js","src/s_kjctkbc9zbk.js","src/s_nyedprta0lw.js","src/s_uxljfslpf0s.js"],symbols:["s_gRRz00JItKA","s_kJCtKbc9zbk","s_NYEDprtA0Lw","s_UxlJFslpf0s"]},"q-a017fc5b.js":{size:5847,imports:["q-0a88cef5.js","q-46a8f38b.js"],dynamicImports:["q-1284349e.js","q-259f5fc4.js","q-7c46e662.js","q-92118a58.js","q-cfb19a4e.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-a09a1bf0.js":{size:5396,imports:["q-46a8f38b.js"],dynamicImports:["q-521d480f.js","q-5432bba1.js"],origins:["src/components/starter/footer/footer.tsx","src/components/starter/header/header.tsx","src/entry_layout.js","src/routes/styles.css?used&inline","src/s_jkhgmz4xlzq.js","src/s_vklnxphuh5s.js"],symbols:["s_JKHgMZ4xLZQ","s_VkLNXphUh5s"]},"q-cfb19a4e.js":{size:305,imports:["q-46a8f38b.js"],dynamicImports:["q-1e819035.js"],origins:["src/routes/index.tsx"]},"q-e95139c9.js":{size:207,imports:["q-46a8f38b.js"],dynamicImports:["q-8903e8da.js"],origins:["src/global.css","src/root.tsx"]},"q-f6c36b25.js":{size:1146,imports:["q-46a8f38b.js"],dynamicImports:["q-22949cf9.js"],origins:["src/components/starter/hero/hero.module.css?used","src/entry_hero.js","src/media/thunder.png?jsx","src/s_fle1eavoup8.js"],symbols:["s_fle1EaVOup8"]},"q-ff66d802.js":{size:889,imports:["q-0a88cef5.js","q-46a8f38b.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-027f67b0.css",dangerouslySetInnerHTML:`._counter-wrapper_43sys_1{margin-top:50px;display:flex;align-items:center;justify-content:center;gap:10px}@media screen and (min-width: 768px){._counter-wrapper_43sys_1{gap:30px}}._anchor_1g8hj_1{color:#fff!important;display:block;font-size:.8rem;text-align:center;text-decoration:none;line-height:1.5}._anchor_1g8hj_1 span:not(._spacer_1g8hj_10){display:block}._spacer_1g8hj_10{display:none;padding:0 15px}@media screen and (min-width: 768px){._anchor_1g8hj_1 span{display:inline!important}}._wrapper_1v6hy_1{position:relative}._gauge_1v6hy_5{width:160px}._value_1v6hy_9{position:absolute;top:50%;left:50%;color:#fff;font-size:3rem;transform:translate(-50%,-50%);width:200px;text-align:center}@media screen and (min-width: 768px){._gauge_1v6hy_5{width:400px}._value_1v6hy_9{font-size:7rem}}._wrapper_tofv3_1{display:flex;align-items:center;justify-content:space-between}._logo_tofv3_7{display:inline-block}._logo_tofv3_7 a{display:block}._header_tofv3_14 ul{margin:0;padding:0;list-style:none;display:flex;gap:30px}._header_tofv3_14 li{display:none;margin:0;padding:0;font-size:.7rem}._header_tofv3_14 li a{color:#fff;display:inline-block;padding:0;text-decoration:none}._header_tofv3_14 li a:hover{color:var(--qwik-light-blue)}@media (min-width: 450px){._header_tofv3_14 li{display:inline-block}}._hero_resu5_1{display:flex;vertical-align:middle;flex-direction:column;flex-wrap:nowrap;align-items:center;height:450px;justify-content:center;gap:40px}._hero-image_resu5_12{width:100%;position:absolute;height:auto;object-fit:cover;z-index:-1;opacity:.2;pointer-events:none}._hero_resu5_1 p{color:#fff;margin:0;font-size:1rem}._button-group_resu5_28{display:flex;flex-direction:row;gap:24px}@media screen and (min-width: 768px){._hero_resu5_1{gap:60px;height:500px}._hero_resu5_1 p{font-size:1.3rem}}._infobox_oa4r7_1{color:#fff;font-size:.8rem;line-height:2;margin:0 0 40px}._infobox_oa4r7_1 h3{font-size:1rem;font-weight:400;margin:0 0 15px;padding:0}._infobox_oa4r7_1 li{line-height:2.5}@media screen and (min-width: 600px){._infobox_oa4r7_1{margin:0}}._gettingstarted_32zqp_1{display:flex;color:#fff;flex-direction:column;justify-content:center;align-items:center;height:280px;line-height:1.5;gap:10px;max-width:600px;margin:0 auto}._gettingstarted_32zqp_1 ._intro_32zqp_14{font-size:1rem;width:100%;word-break:break-word}._gettingstarted_32zqp_1 ._hint_32zqp_19{font-size:.8rem}._gettingstarted_32zqp_1 ._hint_32zqp_19 a{color:var(--qwik-dark-purple)}@media screen and (min-width: 768px){._gettingstarted_32zqp_1{height:180px}._gettingstarted_32zqp_1 ._intro_32zqp_14{font-size:1.2rem}._gettingstarted_32zqp_1 ._hint_32zqp_19{font-size:1rem}}._list_1ofyy_1{display:flex;flex-direction:column;gap:20px;color:#fff}._list_1ofyy_1,._empty_1ofyy_9{min-height:250px}._list_1ofyy_1 li{list-style:none}._empty_1ofyy_9{color:#fff;display:block}._input_1ofyy_22{background:white;color:var(--qwik-light-blue);border:none;border-radius:8px;padding:15px 20px;margin-right:10px;font-size:.8rem}._hint_1ofyy_32{font-size:.8rem;color:#fff;margin-top:30px}@media screen and (min-width: 768px){._input_1ofyy_22{padding:23px 35px;margin-right:20px;font-size:1rem}}:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2;--qwik-dirty-black: #1d2033;--qwik-dark-background: #151934;--qwik-dark-text: #ffffff}html{line-height:1;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;margin:0;line-height:inherit}html{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;line-height:inherit}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.10",vite:"",rollup:"3.29.0",env:"node",os:"darwin",node:"18.15.0"}},$e=()=>{const e=le(),n=de();return h(E,{children:[b("title",null,null,e.title,1,null),b("link",null,{href:me(t=>t.url.href,[n],"p0.url.href"),rel:"canonical"},null,3,null),b("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),b("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),e.meta.map(t=>w("meta",{...t},null,0,t.key)),e.links.map(t=>w("link",{...t},null,0,t.key)),e.styles.map(t=>w("style",{...t.props,dangerouslySetInnerHTML:B(t,"style")},null,0,t.key)),e.scripts.map(t=>w("script",{...t.props,dangerouslySetInnerHTML:B(t,"script")},null,0,t.key))]},1,"OA_0")},Ue=V(Z($e,"s_zrbrqoaqXSY"));const Ye=()=>h(fe,{children:[b("head",null,null,[b("meta",null,{charSet:"utf-8"},null,3,null),b("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),h(Ue,null,3,"35_0"),h(ue,null,3,"35_1")],1,null),b("body",null,{lang:"en"},h(pe,null,3,"35_2"),1,null)]},1,"35_3"),Je=V(Z(Ye,"s_3sccYCDd1Z0"));function Be(e){return Pe(h(Je,null,3,"pY_0"),{manifest:Qe,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Be as default};
