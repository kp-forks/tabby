"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3882],{35468:function(e,t,n){let r;n.d(t,{XB:function(){return v}});var u=n(65122),o=n(3546),l=n(65727),i=n(72205),s=n(79869),a=n(17957),c=n(11364);let d="dismissableLayer.update",f=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),v=(0,o.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:v=!1,onEscapeKeyDown:p,onPointerDownOutside:b,onFocusOutside:y,onInteractOutside:h,onDismiss:w,...L}=e,C=(0,o.useContext)(f),[T,g]=(0,o.useState)(null),P=null!==(n=null==T?void 0:T.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,D]=(0,o.useState)({}),O=(0,s.e)(t,e=>g(e)),F=Array.from(C.layers),[W]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),N=F.indexOf(W),S=T?F.indexOf(T):-1,R=C.layersWithOutsidePointerEventsDisabled.size>0,k=S>=N,I=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,a.W)(e),r=(0,o.useRef)(!1),u=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function o(){m("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",u.current),u.current=o,t.addEventListener("click",u.current,{once:!0})):o()}r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",u.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!k||n||(null==b||b(e),null==h||h(e),e.defaultPrevented||null==w||w())},P),K=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,a.W)(e),r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{e.target&&!r.current&&m("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));n||(null==y||y(e),null==h||h(e),e.defaultPrevented||null==w||w())},P);return(0,c.e)(e=>{let t=S===C.layers.size-1;t&&(null==p||p(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},P),(0,o.useEffect)(()=>{if(T)return v&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=P.body.style.pointerEvents,P.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(T)),C.layers.add(T),E(),()=>{v&&1===C.layersWithOutsidePointerEventsDisabled.size&&(P.body.style.pointerEvents=r)}},[T,P,v,C]),(0,o.useEffect)(()=>()=>{T&&(C.layers.delete(T),C.layersWithOutsidePointerEventsDisabled.delete(T),E())},[T,C]),(0,o.useEffect)(()=>{let e=()=>D({});return document.addEventListener(d,e),()=>document.removeEventListener(d,e)},[]),(0,o.createElement)(i.WV.div,(0,u.Z)({},L,{ref:O,style:{pointerEvents:R?k?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,K.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,K.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,I.onPointerDownCapture)}))});function E(){let e=new CustomEvent(d);document.dispatchEvent(e)}function m(e,t,n,{discrete:r}){let u=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),r?(0,i.jH)(u,o):u.dispatchEvent(o)}},97742:function(e,t,n){let r;n.d(t,{M:function(){return f}});var u=n(65122),o=n(3546),l=n(79869),i=n(72205),s=n(17957);let a="focusScope.autoFocusOnMount",c="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=(0,o.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:b,...y}=e,[h,w]=(0,o.useState)(null),L=(0,s.W)(f),C=(0,s.W)(b),T=(0,o.useRef)(null),g=(0,l.e)(t,e=>w(e)),P=(0,o.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,o.useEffect)(()=>{if(r){function e(e){if(P.paused||!h)return;let t=e.target;h.contains(t)?T.current=t:m(T.current,{select:!0})}function t(e){if(P.paused||!h)return;let t=e.relatedTarget;null===t||h.contains(t)||m(T.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=h&&h.contains(t))&&m(h)});return h&&n.observe(h,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,h,P.paused]),(0,o.useEffect)(()=>{if(h){p.add(P);let e=document.activeElement,t=h.contains(e);if(!t){let t=new CustomEvent(a,d);h.addEventListener(a,L),h.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(v(h).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(h))}return()=>{h.removeEventListener(a,L),setTimeout(()=>{let t=new CustomEvent(c,d);h.addEventListener(c,C),h.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),h.removeEventListener(c,C),p.remove(P)},0)}}},[h,L,C,P]);let D=(0,o.useCallback)(e=>{if(!n&&!r||P.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,u=document.activeElement;if(t&&u){let t=e.currentTarget,[r,o]=function(e){let t=v(e),n=E(t,e),r=E(t.reverse(),e);return[n,r]}(t),l=r&&o;l?e.shiftKey||u!==o?e.shiftKey&&u===r&&(e.preventDefault(),n&&m(o,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):u===t&&e.preventDefault()}},[n,r,P.paused]);return(0,o.createElement)(i.WV.div,(0,u.Z)({tabIndex:-1},y,{ref:g,onKeyDown:D}))});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function E(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let p=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=b(r,e)).unshift(e)},remove(e){var t;null===(t=(r=b(r,e))[0])||void 0===t||t.resume()}});function b(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},86759:function(e,t,n){n.d(t,{h:function(){return i}});var r=n(65122),u=n(3546),o=n(30171),l=n(72205);let i=(0,u.forwardRef)((e,t)=>{var n;let{container:i=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...s}=e;return i?o.createPortal((0,u.createElement)(l.WV.div,(0,r.Z)({},s,{ref:t})),i):null})}}]);