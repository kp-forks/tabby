(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6806],{61200:function(e,t,n){"use strict";var r=n(90275),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,c,u,l,s,f,d=!1;t||(t={}),a=t.debug||!1;try{if(u=r(),l=document.createRange(),s=document.getSelection(),(f=document.createElement("span")).textContent=e,f.ariaHidden="true",f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(f),l.selectNodeContents(f),s.addRange(l),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(r){a&&console.error("unable to copy using execCommand: ",r),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(r){a&&console.error("unable to copy using clipboardData: ",r),a&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",c=n.replace(/#{\s*key\s*}/g,i),window.prompt(c,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),f&&document.body.removeChild(f),u()}return d}},75403:function(e,t){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case c:case a:case d:case p:return e;default:switch(e=e&&e.$$typeof){case s:case l:case f:case y:case m:case u:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference"),t.ContextConsumer=l,t.ContextProvider=u,t.Element=r,t.ForwardRef=f,t.Fragment=i,t.Lazy=y,t.Memo=m,t.Portal=o,t.Profiler=c,t.StrictMode=a,t.Suspense=d,t.SuspenseList=p,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return b(e)===l},t.isContextProvider=function(e){return b(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return b(e)===f},t.isFragment=function(e){return b(e)===i},t.isLazy=function(e){return b(e)===y},t.isMemo=function(e){return b(e)===m},t.isPortal=function(e){return b(e)===o},t.isProfiler=function(e){return b(e)===c},t.isStrictMode=function(e){return b(e)===a},t.isSuspense=function(e){return b(e)===d},t.isSuspenseList=function(e){return b(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===a||e===d||e===p||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===u||e.$$typeof===l||e.$$typeof===f||e.$$typeof===n||void 0!==e.getModuleId)},t.typeOf=b},19379:function(e,t,n){"use strict";e.exports=n(75403)},23455:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(65122),o=n(73037),i=n(3546),a=i.useLayoutEffect,c=function(e){var t=i.useRef(e);return a(function(){t.current=e}),t},u=function(e,t){if("function"==typeof e){e(t);return}e.current=t},l=function(e,t){var n=(0,i.useRef)();return(0,i.useCallback)(function(r){e.current=r,n.current&&u(n.current,null),n.current=t,t&&u(t,r)},[t])},s={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},f=function(e){Object.keys(s).forEach(function(t){e.style.setProperty(t,s[t],"important")})},d=null,p=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize},m=function(){},y=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],g=!!document.documentElement.currentStyle,b=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n=y.reduce(function(e,n){return e[n]=t[n],e},{}),r=n.boxSizing;if(""===r)return null;g&&"border-box"===r&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var o=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),i=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:o,borderSize:i}};function h(e,t,n){var r=c(n);i.useLayoutEffect(function(){var n=function(e){return r.current(e)};if(e)return e.addEventListener(t,n),function(){return e.removeEventListener(t,n)}},[])}var v=function(e){h(window,"resize",e)},x=function(e){h(document.fonts,"loadingdone",e)},S=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],w=i.forwardRef(function(e,t){var n=e.cacheMeasurements,a=e.maxRows,c=e.minRows,u=e.onChange,s=void 0===u?m:u,y=e.onHeightChange,g=void 0===y?m:y,h=(0,o.Z)(e,S),w=void 0!==h.value,C=i.useRef(null),E=l(C,t),R=i.useRef(0),z=i.useRef(),$=function(){var e,t,r,o,i,u,l,s,m,y,h,v=C.current,x=n&&z.current?z.current:b(v);if(x){z.current=x;var S=(e=v.value||v.placeholder||"x",void 0===(t=c)&&(t=1),void 0===(r=a)&&(r=1/0),d||((d=document.createElement("textarea")).setAttribute("tabindex","-1"),d.setAttribute("aria-hidden","true"),f(d)),null===d.parentNode&&document.body.appendChild(d),o=x.paddingSize,i=x.borderSize,l=(u=x.sizingStyle).boxSizing,Object.keys(u).forEach(function(e){d.style[e]=u[e]}),f(d),d.value=e,s=p(d,x),d.value=e,s=p(d,x),d.value="x",y=(m=d.scrollHeight-o)*t,"border-box"===l&&(y=y+o+i),s=Math.max(y,s),h=m*r,"border-box"===l&&(h=h+o+i),[s=Math.min(h,s),m]),w=S[0],E=S[1];R.current!==w&&(R.current=w,v.style.setProperty("height",w+"px","important"),g(w,{rowHeight:E}))}};return i.useLayoutEffect($),v($),x($),i.createElement("textarea",(0,r.Z)({},h,{onChange:function(e){w||$(),s(e)},ref:E}))})},90275:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},73037:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},74225:function(e,t,n){"use strict";n.d(t,{f:function(){return s}});var r=n(65122),o=n(3546),i=n(72205);let a="horizontal",c=["horizontal","vertical"],u=(0,o.forwardRef)((e,t)=>{let{decorative:n,orientation:c=a,...u}=e,s=l(c)?c:a;return(0,o.createElement)(i.WV.div,(0,r.Z)({"data-orientation":s},n?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},u,{ref:t}))});function l(e){return c.includes(e)}u.propTypes={orientation(e,t,n){let r=e[t],o=String(r);return r&&!l(r)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${a}\`.`):null}};let s=u},62940:function(e,t,n){"use strict";var r=n(45391),o=n(84639);t.Z=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw TypeError("Expected a function");return(0,o.Z)(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),(0,r.Z)(e,t,{leading:i,maxWait:t,trailing:a})}}}]);