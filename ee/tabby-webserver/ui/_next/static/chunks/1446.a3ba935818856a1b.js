(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1446],{81446:function(e,t,r){"use strict";let n;r.r(t),r.d(t,{default:function(){return en}});var o=r(36164),i=r(3546),l=r(30352),a=r(88105),s=r(81974),c=r(74630),u=r(28242),d=r(93877),m=r(28312),f=r(11978),h=r(16784),p=r(74248),g=r(94559),v=r(14679),b=r(99641),x=r(1853),y=r(79720);let w=[(0,a.AE)(),(0,y.sW)(),g.yy.allowMultipleSelections.of(!0),(0,l.nF)(l.R_,{fallback:!0}),(0,a.Zs)()];r(65001);let k=g.q6.define(),_=i.forwardRef((e,t)=>{let{value:r,theme:n,language:s,readonly:c=!0,extensions:u,height:d=null,width:m=null,viewDidUpdate:f}=e,h=i.useRef(!1),p=i.useRef(null),[y,_]=i.useState(null),C=a.tk.theme({"&":{height:d,width:m,outline:"none !important",background:"hsl(var(--background))"},"& .cm-scroller":{height:"100% !important"},"& .cm-gutters":{background:"hsl(var(--background))"},"&.cm-focused .cm-selectionLayer .cm-selectionBackground":{backgroundColor:"hsl(var(--cm-selection-bg)) !important"},".cm-selectionLayer .cm-selectionBackground":{backgroundColor:"hsl(var(--cm-selection-bg)) !important"}}),E=[C,w,g.yy.readOnly.of(c)],N=()=>{let e=(0,x.Z)([...E,(0,b.vf)(function(e,t){switch(e){case"javascript-typescript":return"tsx";case"shellscript":case"bash":return"shell";default:return e}}(s))]);return"dark"===n?(e.push(v.pD),e.push((0,l.nF)(v.VE))):e.push((0,l.nF)(l.R_)),Array.isArray(u)&&(e=e.concat(u)),e};return i.useEffect(()=>{(()=>{if(!h.current&&p.current){h.current=!0;let e=g.yy.create({doc:r,extensions:N()}),t=new a.tk({state:e,parent:p.current});_(t)}})()},[]),i.useEffect(()=>{y&&y.dispatch({effects:g.Py.reconfigure.of(N())})},[d,m,n,s,u]),i.useEffect(()=>{(()=>{if(void 0===r||!y)return;let e=y?y.state.doc.toString():"";y&&r!==e&&y.dispatch({changes:{from:0,to:e.length,insert:r||""},annotations:[k.of(!0)]})})()},[r]),i.useEffect(()=>()=>{y&&(y.destroy(),_(null))},[]),i.useEffect(()=>{null==f||f(y)},[y]),i.useImperativeHandle(t,()=>({getView:()=>y}),[y]),(0,o.jsx)("div",{className:"codemirror-editor h-full",ref:p})});function C(e,t){let r=e.doc,{span:n,utf16_column_range:o}=t;try{let e=r.line(n.start.row+1),t=e.from+o.start,i=e.from+o.end;return{start:t,end:i}}catch(e){return null}}_.displayName="CodeMirrorEditor";let E=a.p.mark({class:"cm-tag-mark"}),N=a.tk.baseTheme({".cm-tag-mark":{border:"1px solid hsla(var(--tag-blue-border))",padding:"0px 4px",borderRadius:"4px",backgroundColor:"hsla(var(--tag-blue-bg))",color:"hsla(var(--tag-blue-text)) !important"},".cm-tag-mark > span":{color:"hsla(var(--tag-blue-text)) !important"}});function j(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=e.state.doc,n=r.length;if(!n)return a.p.none;let o=[];for(let r of t){let t=C(e.state,r);try{t&&t.start<=n&&t.end<=n&&o.push(E.range(t.start,t.end))}catch(e){}}return o.length?a.p.set(o):a.p.none}let T=e=>{let t=a.lg.fromClass(class{update(t){(t.docChanged||t.viewportChanged)&&(this.marks=j(t.view,e))}constructor(t){this.marks=j(t,e)}},{decorations:e=>e.marks});return[t,N]},S=a.p.mark({class:"cm-range-highlight"}),R=a.tk.baseTheme({".cm-range-highlight":{backgroundColor:"hsl(var(--selection))"}});function M(e,t){let r;let n=e.selection.ranges;e:for(let o of n)for(let n of t){let t=C(e,n);if(!t)continue;let i=t.start-n.name_range.start;if(o.from>=t.start&&o.to<=t.end){r={from:n.range.start+i,to:n.range.end+i};break e}}return r?a.p.set([S.range(r.from,r.to)]):a.p.none}let L=g.Py.define(),z=e=>{let t=a.lg.fromClass(class{update(t){if(t.selectionSet)this.triggerType="cursor",this.highlight=M(t.view.state,e);else if("cursor"!==this.triggerType)for(let e of t.transactions)for(let t of e.effects)t.is(L)&&t.value&&(this.highlight=t.value,this.triggerType="hover")}handleMouseListener(t){if(-1!==this.timeout&&clearTimeout(this.timeout),!this.highlight.size){let r=setTimeout(()=>{let r=this.view.posAtCoords({x:t.clientX,y:t.clientY});if(null!==r){let t=function(e,t){let r;for(let n of t)if(e>=n.name_range.start&&e<=n.name_range.end){r={from:n.range.start,to:n.range.end};break}return r?a.p.set([S.range(r.from,r.to)]):a.p.none}(r,e);if(t.size)this.triggerType="hover";else if("cursor"===this.triggerType)return;this.view.dispatch({effects:L.of(t)})}},100);this.timeout=r}}destroy(){}constructor(t){this.view=t,this.highlight=M(t.state,e),this.timeout=-1,this.triggerType="hover"}},{decorations:e=>e.highlight});return[t,R]},A=a.tk.baseTheme({".cm-tooltip":{border:"none !important"},".cm-tooltip-cursor":{backgroundColor:"hsl(var(--popover))",color:"hsl(var(--popover-foreground))",border:"none !important",padding:"2px 7px",borderRadius:"4px"}}),Z=e=>[(0,a.bF)((t,r,n)=>{for(let n of e){let e=C(t.state,n);if(e&&r>=e.start&&r<=e.end)return{pos:r,above:!0,create(e){let t=document.createElement("div");return t.className="cm-tooltip-cursor",t.textContent="".concat(n.syntax_type_name),{dom:t,offset:{x:-20,y:4}}}}}return null}),A];var U=r(27064),X=r(87279),F=r(42891),D=r.n(F),B=r(23342),H=r(31458),P=r(62202),Q=r(81565);let V=e=>{let{className:t,text:r,language:n,path:i,lineFrom:l,lineTo:a,gitUrl:s,...c}=e,u=e=>{U.u.emit("code_browser_quick_action",{action:e,code:r,language:n,path:i,lineFrom:l,lineTo:a,gitUrl:s})};return(0,o.jsxs)("div",{className:(0,p.cn)("mt-2 flex items-center gap-2 rounded-md border bg-background px-2 py-1",t),...c,children:[(0,o.jsx)(D(),{src:B.Z,width:32,alt:"logo"}),(0,o.jsx)(H.z,{size:"sm",variant:"outline",onClick:e=>u("explain"),children:"Explain"}),(0,o.jsxs)(P.h_,{modal:!1,children:[(0,o.jsx)(P.$F,{asChild:!0,children:(0,o.jsxs)(H.z,{size:"sm",variant:"outline",children:["Generate",(0,o.jsx)(Q.IconChevronUpDown,{className:"ml-1"})]})}),(0,o.jsxs)(P.AW,{align:"start",children:[(0,o.jsx)(P.Xi,{className:"cursor-pointer",onSelect:()=>u("generate_unittest"),children:"Unit Test"}),(0,o.jsx)(P.Xi,{className:"cursor-pointer",onSelect:()=>u("generate_doc"),children:"Documentation"})]})]})]})},I=g.Py.define(),O=g.QQ.define({create:()=>g.Xs.empty,update(e,t){for(let r of(e=e.map(t.changes),t.effects))r.is(I)&&(e=-1===r.value.pos?g.Xs.empty:g.Xs.empty.update({add:[G.range(r.value.pos)]}));return e}}),G=new class extends a.SJ{toDOM(){let e=document.createElement("div"),t=X.createRoot(e);return t.render((0,o.jsxs)(P.h_,{modal:!1,children:[(0,o.jsx)(P.$F,{asChild:!0,children:(0,o.jsx)(H.z,{className:"ml-1 h-5",size:"icon",variant:"secondary",children:(0,o.jsx)(Q.IconMore,{})})}),(0,o.jsxs)(P.AW,{align:"start",children:[(0,o.jsx)(P.Xi,{className:"cursor-pointer",onSelect:e=>{U.u.emit("line_menu_action",{action:"copy_line"})},children:"Copy line"}),(0,o.jsx)(P.Xi,{className:"cursor-pointer",onSelect:e=>{U.u.emit("line_menu_action",{action:"copy_permalink"})},children:"Copy link"})]})]})),e}},J=a.tk.theme({".cm-lineMenuGutter":{width:"40px"},".cm-lineNumbers":{cursor:"pointer",color:"var(--line-number-color)","& .cm-gutterElement:hover":{textDecoration:"underline"}}});function W(e,t){let r=e.state.field(O),n=!1;if(r.between(t,t+1,()=>{n=!0}),n)return -1;{let r=e.state.doc.lineAt(t);return e.dispatch({effects:[I.of({pos:t}),Y.of({line:r.number,highlight:!0})]}),r.number}}let Y=g.Py.define(),$=g.QQ.define({create:()=>a.p.none,update(e,t){for(let r of(e=e.map(t.changes),t.effects))if(r.is(Y)){if(r.value.highlight&&!(0,c.Z)(r.value.line)){let n=a.p.line({class:"cm-selectedLine"}),o=t.state.doc.line(r.value.line);e=a.p.none.update({add:[n.range(o.from)]})}else e=a.p.none}return e},provide:e=>a.tk.decorations.from(e)}),q=new class extends a.SJ{constructor(...e){super(...e),this.elementClass="cm-selectedLineGutter"}},K=a.v7.compute([O],e=>{let t=[];return e.field(O).between(0,e.doc.length,(e,r)=>{t.push(q.range(e))}),g.Xs.of(t)}),ee=e=>{let{onSelectLine:t}=e;return[J,O,$,(0,a.v5)({class:"cm-lineMenuGutter",markers:e=>e.state.field(O),initialSpacer:()=>G,domEventHandlers:{mousedown(e,r){let n=W(e,r.from);return null==t||t(n),!0}}}),(0,a.Eu)({domEventHandlers:{mousedown(e,r){let n=W(e,r.from);return null==t||t(n),!1}}}),K]};var et=r(19622),er=r(48048);r(85223);var en=e=>{var t,r;let{value:v,language:b}=e,{theme:x}=(0,u.F)(),y=i.useMemo(()=>[],[]),{copyToClipboard:w}=(0,m.m)({}),[k,C]=function(){let e=(0,f.useParams)(),[t,r]=i.useState(""),n=(0,h.d)(t),o=i.useCallback(e=>{window.location.hash=e},[]),l=()=>{let e=window.location.hash;n.current!==e&&r(e)};return i.useEffect(()=>(window.addEventListener("hashchange",l),()=>{window.removeEventListener("hashchange",l)}),[]),i.useEffect(l,[e]),[t,o]}(),E=null===(t=(0,er.kQ)(k))||void 0===t?void 0:t.start,[N,j]=i.useState(null),{isChatEnabled:S,activePath:R,activeEntryInfo:M,activeRepo:L}=i.useContext(et.SourceCodeBrowserContext),{basename:A}=M,F=null!==(r=null==L?void 0:L.gitUrl)&&void 0!==r?r:"",D=i.useMemo(()=>{let e=[a.tk.baseTheme({".cm-scroller":{fontSize:"14px"},".cm-gutters":{backgroundColor:"transparent",borderRight:"none"}}),ee({onSelectLine:e=>{-1===e||(0,s.Z)(e)||C((0,p.nO)({start:e}))}}),(0,l.mi)({markerDOM(e){let t=document.createElement("div");return t.style.cursor="pointer",e?t.innerHTML='<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg>':t.innerHTML='<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"></path></svg>',t}}),(0,a.Uw)()];if(d.BT.value&&S&&R&&A){var t;e.push((t={language:b,path:A,gitUrl:F},g.QQ.define({create:()=>null,update(e,r){if(r.newSelection.main.empty)return clearTimeout(n),null;if(r.selection){if(function(e){let t=!!e.selection&&!e.selection.main.empty;return t&&e.isUserEvent("select")}(r)){let e=function(e,t){let{selection:r}=e,i=e.doc.lineAt(r.main.from),l=e.doc.lineAt(r.main.to),a=i.number!==l.number,s=a?l.from:r.main.from,c=e.doc.sliceString(e.selection.main.from,e.selection.main.to)||"";return{pos:s,above:!1,strictSide:!0,arrow:!1,create(){let e=document.createElement("div");e.style.background="transparent",e.style.border="none";let r=X.createRoot(e);return e.onclick=e=>e.stopImmediatePropagation(),n&&clearTimeout(n),n=window.setTimeout(()=>{r.render((0,o.jsx)(V,{text:c,language:null==t?void 0:t.language,lineFrom:i.number,lineTo:l.number,path:null==t?void 0:t.path,gitUrl:null==t?void 0:t.gitUrl}))},1e3),{dom:e}}}}(r.state,t);return e}return clearTimeout(n),null}return e},provide:e=>a.hJ.compute([e],t=>t.field(e))})))}return v&&y&&e.push(T(y),Z(y),z(y)),e},[v,y,b]);return i.useEffect(()=>{let e=e=>{if("number"==typeof E){if("copy_permalink"===e.action){w(window.location.href);return}if("copy_line"===e.action){var t,r;let e=null==N?void 0:null===(r=N.state)||void 0===r?void 0:null===(t=r.doc)||void 0===t?void 0:t.line(E);e&&w(e.text)}}};return U.u.on("line_menu_action",e),()=>{U.u.off("line_menu_action",e)}},[v,E]),i.useEffect(()=>{if(!(0,c.Z)(E)&&N&&v)try{var e,t;let r=null==N?void 0:null===(t=N.state)||void 0===t?void 0:null===(e=t.doc)||void 0===e?void 0:e.line(E);if(r){let e=r.from;if(W(N,e),function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.domAtPos(t).node,o=3===n.nodeType?n.parentElement:n;if(o){let e=o.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight;return e.top>=r&&e.bottom<=t}return!1}(N,e,90))return;N.dispatch({effects:a.tk.scrollIntoView(e,{y:"start",yMargin:200})})}}catch(e){}},[v,E,N]),(0,o.jsx)(_,{value:v,theme:x,language:b,readonly:!0,extensions:D,viewDidUpdate:e=>j(e)})}},62202:function(e,t,r){"use strict";r.d(t,{$F:function(){return s},AW:function(){return u},Ju:function(){return m},VD:function(){return f},Xi:function(){return d},h_:function(){return a}});var n=r(36164),o=r(3546),i=r(19148),l=r(74248);let a=i.fC,s=i.xz;i.ZA,i.Uv,i.Tr,i.Ee;let c=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(i.tu,{ref:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",r),...o})});c.displayName=i.tu.displayName;let u=o.forwardRef((e,t)=>{let{className:r,sideOffset:o=4,...a}=e;return(0,n.jsx)(i.Uv,{children:(0,n.jsx)(i.VY,{ref:t,sideOffset:o,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...a})})});u.displayName=i.VY.displayName;let d=o.forwardRef((e,t)=>{let{className:r,inset:o,...a}=e;return(0,n.jsx)(i.ck,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o&&"pl-8",r),...a})});d.displayName=i.ck.displayName;let m=o.forwardRef((e,t)=>{let{className:r,inset:o,...a}=e;return(0,n.jsx)(i.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",o&&"pl-8",r),...a})});m.displayName=i.__.displayName;let f=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(i.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",r),...o})});f.displayName=i.Z0.displayName},85223:function(){},65001:function(){}}]);