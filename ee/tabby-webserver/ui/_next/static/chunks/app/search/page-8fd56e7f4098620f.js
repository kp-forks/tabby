(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2797],{72845:function(e,t,n){Promise.resolve().then(n.bind(n,4294))},4294:function(e,t,n){"use strict";n.r(t),n.d(t,{Search:function(){return G},SearchContext:function(){return F}});var r=n(36164),s=n(3546),l=n(42891),o=n.n(l),a=n(11978),i={src:"/_next/static/media/default-favicon.a2df8fbb.png",height:16,width:16,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42mOAAqaMgrXeIYlL2jwjF7WZey7wBolB5eyZotNX1PdMO/Br466r/89dfvx/w7aLv6LSlteDFem5zPPesPXir20Hbv7ftPfGrz9///969urL/xkLj/0KjlvqzZCct6rt9r3X/w+cvP/r8fOP/0Hg/uN3vzbsvPq/rmVzG0Nk+oq2J8/f///89devOw/f/n/7/uv/T19+/Dpx7uH/3NK1bQwMarO8tu66/Auk89qd17/mrzn/682H7//3H7rxi4FhsheDDYMhU0DC0vqde6/+On/lyf/5q878X7Tq9M+E7JX1cJ/4MpgzMajO9ApNXtoWl7mszc5nvhdMEgB1uZJfA01kRAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},c=n(62226),d=n.n(c),u=n(6797),m=n.n(u),f=n(66686),h=n(56575),x=n(64148),p=n(93668),g=n(21808),v=n(93877),j=n(9010),b=n(16784),w=n(80605),N=n(49142),y=n(3765),S=n(74248),_=n(31458),k=n(90958),A=n(90615),E=n(81565),z=n(57830),C=n(11208),L=n(3448),I=n(72657),T=n(68172),R=n(48537),O=n(30601),q=n(73033),H=n(94529),M=n(63743),Z=n(52569),D=n(7449);n(2489);let F=(0,s.createContext)({}),P=(e,t)=>(0,y.Z)(e,{...t,responseFormatter:e=>e,errorHandler(e){throw Error(e?String(e.status):"Fail to fetch")}}),B={compress:5.3,expand:6.3};function G(){let e;let t=(0,w.xG)(),[n]=(0,v.Ot)(),[l,o]=(0,s.useState)([]),[i,c]=(0,s.useState)(!0),[d,u]=(0,s.useState)(null),[m,f]=(0,s.useState)(""),[x,p]=(0,s.useState)(!1),[y,k]=(0,s.useState)(""),A=(0,s.useRef)(null),[L,R]=(0,s.useState)(!1),[q]=(0,O.Hb)(),B=(0,a.useRouter)(),G=(0,s.useRef)(!1),{theme:J}=(0,j.X)(),{triggerRequest:V,isLoading:X,error:Y,answer:$,stop:Q}=(0,N.t)({fetcher:P}),W=(0,b.d)(X);(0,s.useEffect)(()=>{if(G.current)return;G.current=!0;let e=sessionStorage.getItem(g.$6.SEARCH_INITIAL_MSG);if(e){sessionStorage.removeItem(g.$6.SEARCH_INITIAL_MSG),p(!0),ee(e);return}let t=sessionStorage.getItem(g.$6.SEARCH_LATEST_MSG);if(t){let e=JSON.parse(t);o(e),e[0]&&f(e[0].content);let n=e.findIndex(e=>e.isLoading);if(-1!==n){let t=e[n];t&&et(t.id,e)}p(!0);return}B.replace("/")},[]),(0,s.useEffect)(()=>{m&&(document.title=m)},[m]),(0,s.useEffect)(()=>{x&&setTimeout(()=>{R(!0)},300)},[x]),(0,s.useEffect)(()=>{var e;u(null==A?void 0:null===(e=A.current)||void 0===e?void 0:e.children[1])},[null==A?void 0:A.current]),(0,s.useEffect)(()=>{let e=[...l],t=e.find(e=>e.id===y);t&&(t.content=(null==$?void 0:$.answer_delta)||"",t.relevant_documents=null==$?void 0:$.relevant_documents,t.relevant_questions=null==$?void 0:$.relevant_questions,t.isLoading=X,o(e))},[X,$]),(0,s.useEffect)(()=>{if(Y){let e=[...l],t=e.find(e=>e.id===y);t&&(t.error="401"===Y.message?"Unauthorized":"Fail to fetch",t.isLoading=!1)}},[Y]),(0,s.useEffect)(()=>(W.current&&(e=window.setTimeout(()=>{if(W.current&&(c(!0),d)){let e=y===l[l.length-1].id;e&&d.scrollTo({top:d.scrollHeight,behavior:"smooth"})}},300)),W.current||c(!1),()=>{window.clearTimeout(e)}),[X]),(0,s.useEffect)(()=>()=>{W.current&&Q()},[]),(0,s.useEffect)(()=>{sessionStorage.setItem(g.$6.SEARCH_LATEST_MSG,JSON.stringify(l))},[l]);let ee=e=>{let t=l.map(e=>({role:e.role,id:e.id,content:e.content})),n=t.length>0&&t[0].id,r=(0,h.x0)(),s={id:n||(0,h.x0)(),role:"user",content:e},a={messages:[...t,s],doc_query:!0,generate_relevant_questions:!0};k(r),o([...l].concat([s,{id:r,role:"assistant",content:"",isLoading:!0}])),V(a),m||f(e)},et=(e,t)=>{let n=t||l,r=n.findIndex(t=>t.id===e);if(r<1)return;let s=r-1,a=n[s],i=n.slice(0,s).map(e=>({role:e.role,id:e.id,content:e.content})),c={role:"user",id:a.id,content:a.content},d={messages:[...i,c],doc_query:!0,generate_relevant_questions:!0},u=[...n],m=u[r];m.content="",m.relevant_documents=void 0,m.error=void 0,m.isLoading=!0,k(m.id),o(u),V(d)};if(!n.value||!t||!x)return(0,r.jsx)(r.Fragment,{});let en=q?{height:"calc(100vh - ".concat(O.wt,")")}:{height:"100vh"};return(0,r.jsx)(F.Provider,{value:{isLoading:X,onRegenerateResponse:et,onSubmitSearch:ee},children:(0,r.jsxs)("div",{className:"transition-all",style:en,children:[(0,r.jsxs)("header",{className:"flex h-16 items-center justify-between px-4",children:[(0,r.jsx)("div",{className:"flex items-center gap-x-6",children:(0,r.jsxs)(_.z,{variant:"ghost",className:"-ml-1 pl-0 text-sm text-muted-foreground",onClick:()=>B.back(),children:[(0,r.jsx)(E.IconChevronLeft,{className:"mr-1 h-5 w-5"}),"Home"]})}),(0,r.jsxs)("div",{className:"flex items-center gap-x-6",children:[(0,r.jsx)(T.q,{children:(0,r.jsx)(M.T,{})}),(0,r.jsx)(D.Z,{showHome:!1,showSetting:!0,children:(0,r.jsx)(Z.Y,{className:"h-10 w-10 border"})})]})]}),(0,r.jsxs)("main",{className:"h-[calc(100%-4rem)] overflow-auto pb-8 lg:pb-0",children:[(0,r.jsx)(z.ScrollArea,{className:"h-full",ref:A,children:(0,r.jsx)("div",{className:"mx-auto px-4 pb-24 lg:max-w-4xl lg:px-0",children:(0,r.jsx)("div",{className:"flex flex-col",children:l.map((e,t)=>"user"===e.role?(0,r.jsxs)("div",{children:[0!==t&&(0,r.jsx)(C.Z,{}),(0,r.jsx)("div",{className:"pb-2 pt-8",children:(0,r.jsx)(U,{message:e.content,headline:!0})})]},e.id+t):"assistant"===e.role?(0,r.jsx)("div",{className:"pb-8 pt-2",children:(0,r.jsx)(K,{answer:e,showRelatedQuestion:t===l.length-1})},e.id+t):(0,r.jsx)(r.Fragment,{}))})})}),d&&(0,r.jsx)(I.K,{className:"!fixed !bottom-[5.4rem] !right-4 !top-auto border-muted-foreground lg:!bottom-[2.85rem]",container:d,offset:100,style:"dark"===J?{"--background":"0 0% 12%"}:{}}),(0,r.jsxs)("div",{className:(0,S.cn)("fixed bottom-5 left-0 flex min-h-[5rem] w-full flex-col items-center gap-y-2",{"opacity-100 translate-y-0":L,"opacity-0 translate-y-10":!L}),style:Object.assign({transition:"all 0.35s ease-out"},"dark"===J?{"--background":"0 0% 12%"}:{}),children:[(0,r.jsxs)(_.z,{className:(0,S.cn)("bg-background",{"opacity-0 pointer-events-none":!i,"opacity-100":i}),style:{transition:"opacity 0.55s ease-out"},variant:"outline",onClick:Q,children:[(0,r.jsx)(E.IconStop,{className:"mr-2"}),"Stop generating"]}),(0,r.jsx)("div",{className:"relative z-20 flex justify-center self-stretch px-4",children:(0,r.jsx)(H.Z,{onSearch:ee,className:"lg:max-w-4xl",placeholder:"Ask a follow up question",isLoading:X})})]})]})]})})}function K(e){var t;let{answer:n,showRelatedQuestion:l}=e,{onRegenerateResponse:o,onSubmitSearch:a,isLoading:i}=(0,s.useContext)(F),[c,d]=(0,s.useState)(!1),u=n.isLoading?E.IconSpinner:E.IconSparkles,m=n.relevant_documents?Math.ceil(n.relevant_documents.length/4)*B.expand+.5*Math.floor(n.relevant_documents.length/4):0;return(0,r.jsxs)("div",{className:"flex flex-col gap-y-5",children:[n.relevant_documents&&n.relevant_documents.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"mb-1 flex items-center gap-x-2",children:[(0,r.jsx)(E.IconBlocks,{className:"relative",style:{top:"-0.04rem"}}),(0,r.jsx)("p",{className:"text-sm font-bold leading-normal",children:"Sources"})]}),(0,r.jsx)("div",{className:"gap-sm grid grid-cols-3 gap-2 overflow-hidden md:grid-cols-4",style:{transition:"height 0.25s ease-out",height:c?"".concat(m,"rem"):"".concat(B.compress,"rem")},children:n.relevant_documents.map((e,t)=>(0,r.jsx)(V,{source:e,showMore:c},e.link+t))}),(0,r.jsxs)(_.z,{variant:"ghost",className:"-ml-1.5 mt-1 flex items-center gap-x-1 px-1 py-2 text-sm font-normal text-muted-foreground",onClick:()=>d(!c),children:[(0,r.jsx)(E.IconChevronRight,{className:(0,S.cn)({"-rotate-90":c,"rotate-90":!c})}),(0,r.jsx)("p",{children:c?"Show less":"Show more"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"mb-1 flex items-center gap-x-1.5",children:[(0,r.jsx)(u,{className:(0,S.cn)({"animate-spinner":n.isLoading})}),(0,r.jsx)("p",{className:"text-sm font-bold leading-none",children:"Answer"})]}),n.isLoading&&!n.content&&(0,r.jsx)(L.O,{className:"mt-1 h-40 w-full"}),(0,r.jsx)(U,{message:n.content,sources:n.relevant_documents}),n.error&&(0,r.jsx)(Y,{error:n.error}),!n.isLoading&&(0,r.jsxs)("div",{className:"mt-3 flex items-center gap-x-3 text-sm",children:[(0,r.jsx)(R.q,{className:"-ml-1.5 gap-x-1 px-1 font-normal text-muted-foreground",value:(e=>{if(!e.relevant_documents)return e.content;let t=e.content.replace(/\[\[?citation:\s*\d+\]?\]/g,(e,t)=>{let n=null==e?void 0:e.match(/\d+/);return"[".concat(n,"]")}).trim(),n=e.relevant_documents.map((e,t)=>"[".concat(t+1,"] ").concat(e.link)).join("\n");return"".concat(t,"\n\nCitations:\n").concat(n)})(n),text:"Copy"}),!i&&(0,r.jsxs)(_.z,{className:"flex items-center gap-x-1 px-1 font-normal text-muted-foreground",variant:"ghost",onClick:()=>o(n.id),children:[(0,r.jsx)(E.IconRefresh,{}),(0,r.jsx)("p",{children:"Regenerate"})]})]})]}),l&&!n.isLoading&&n.relevant_questions&&n.relevant_questions.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex items-center gap-x-1.5",children:[(0,r.jsx)(E.IconLayers,{}),(0,r.jsx)("p",{className:"text-sm font-bold leading-none",children:"Suggestions"})]}),(0,r.jsx)("div",{className:"mt-2 flex flex-col gap-y-3",children:null===(t=n.relevant_questions)||void 0===t?void 0:t.map((e,t)=>(0,r.jsxs)("div",{className:"flex cursor-pointer items-center justify-between rounded-lg border p-4 py-3 transition-opacity hover:opacity-70",onClick:a.bind(null,e),children:[(0,r.jsx)("p",{className:"w-full overflow-hidden text-ellipsis text-sm",children:e}),(0,r.jsx)(E.IconPlus,{})]},t))})]})]})}let J=e=>{let t=d().sanitize(e,{ALLOWED_TAGS:[],ALLOWED_ATTR:[]}),n=f.TU.parse(t),r=m().decode(n),s=r.replace(/<\/?[^>]+(>|$)/g,"");return s};function V(e){let{source:t,showMore:n}=e,{hostname:s}=new URL(t.link);return(0,r.jsxs)("div",{className:"flex cursor-pointer flex-col justify-between gap-y-1 rounded-lg border bg-card p-3 hover:bg-card/60",style:{height:n?"".concat(B.expand,"rem"):"".concat(B.compress,"rem"),transition:"all 0.25s ease-out"},onClick:()=>window.open(t.link),children:[(0,r.jsxs)("div",{className:"flex flex-col gap-y-0.5",children:[(0,r.jsx)("p",{className:"line-clamp-1 w-full overflow-hidden text-ellipsis break-all text-xs font-semibold",children:t.title}),(0,r.jsx)("p",{className:(0,S.cn)(" w-full overflow-hidden text-ellipsis break-all text-xs text-muted-foreground",{"line-clamp-2":n,"line-clamp-1":!n}),children:J(t.snippet)})]}),(0,r.jsx)("div",{className:"flex items-center text-xs text-muted-foreground",children:(0,r.jsxs)("div",{className:"flex w-full flex-1 items-center",children:[(0,r.jsx)(X,{hostname:s}),(0,r.jsx)("p",{className:"ml-1 overflow-hidden text-ellipsis",children:s.replace("www.","").split("/")[0]})]})})]})}function U(e){let{message:t,headline:n=!1,sources:s}=e,l=(e,t)=>{let n=/\[\[?citation:\s*\d+\]?\]/g,l=e.split(n),o=e.match(n);return(0,r.jsx)("span",{children:l.map((e,t)=>{let n=null==o?void 0:o[t],l=null==n?void 0:n.match(/\d+/),a=l?parseInt(l[0],10):null,i=null!==a?null==s?void 0:s[a-1]:null,c=i?new URL(i.link):null;return(0,r.jsxs)("span",{children:[e&&(0,r.jsx)("span",{children:e}),i&&(0,r.jsxs)(A.zs,{children:[(0,r.jsx)(A.Yi,{children:(0,r.jsx)("span",{className:"relative -top-2 mr-0.5 inline-block h-4 w-4 cursor-pointer rounded-full bg-muted text-center text-xs",onClick:()=>window.open(i.link),children:a})}),(0,r.jsx)(A.bZ,{className:"w-96 text-sm",children:(0,r.jsxs)("div",{className:"flex w-full flex-col gap-y-1",children:[(0,r.jsxs)("div",{className:"m-0 flex items-center space-x-1 text-xs leading-none text-muted-foreground",children:[(0,r.jsx)(X,{hostname:c.hostname,className:"m-0 mr-1 leading-none"}),(0,r.jsx)("p",{className:"m-0 leading-none",children:c.hostname})]}),(0,r.jsx)("p",{className:"m-0 cursor-pointer font-bold leading-none transition-opacity hover:opacity-70",onClick:()=>window.open(i.link),children:i.title}),(0,r.jsx)("p",{className:"m-0 line-clamp-4 leading-none",children:J(i.snippet)})]})})]})]},t)})},t)};return(0,r.jsx)(q.s,{className:"prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[x.Z,p.Z],components:{p(e){let{children:t}=e;return n?(0,r.jsx)("h3",{className:"break-anywhere cursor-text scroll-m-20 text-xl font-semibold tracking-tight",children:t}):t.length?(0,r.jsx)("div",{className:"mb-2 inline-block leading-relaxed last:mb-0",children:t.map((e,t)=>"string"==typeof e?l(e,t):(0,r.jsx)("span",{children:e},t))}):(0,r.jsx)("p",{className:"mb-2 last:mb-0",children:t})},li(e){let{children:t}=e;return t&&t.length?(0,r.jsx)("li",{children:t.map((e,t)=>"string"==typeof e?l(e,t):(0,r.jsx)("span",{children:e},t))}):(0,r.jsx)("li",{children:t})},code(e){let{node:t,inline:n,className:s,children:l,...o}=e;if(l.length){if("▍"==l[0])return(0,r.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});l[0]=l[0].replace("`▍`","▍")}let a=/language-(\w+)/.exec(s||"");return n?(0,r.jsx)("code",{className:s,...o,children:l}):(0,r.jsx)(k.dn,{language:a&&a[1]||"",value:String(l).replace(/\n$/,""),...o},Math.random())}},children:t})}function X(e){let{hostname:t,className:n}=e,[l,a]=(0,s.useState)(!1);return(0,r.jsxs)("div",{className:"relative h-3.5 w-3.5",children:[(0,r.jsx)(o(),{src:i,alt:t,width:14,height:14,className:(0,S.cn)("absolute left-0 top-0 z-0 h-3.5 w-3.5 rounded-full leading-none",n)}),(0,r.jsx)(o(),{src:"https://s2.googleusercontent.com/s2/favicons?sz=128&domain_url=".concat(t),alt:t,width:14,height:14,className:(0,S.cn)("relative z-10 h-3.5 w-3.5 rounded-full bg-card leading-none",n,{"opacity-0":!l}),onLoad:()=>{a(!0)}})]})}function Y(e){let{error:t="Fail to fetch"}=e,n=(0,s.useMemo)(()=>"```\n"+JSON.stringify({error:!0,message:t},null,2)+"\n```",[t]);return(0,r.jsx)(q.s,{className:"prose-full-width prose break-words text-sm dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[x.Z,p.Z],components:{code(e){let{node:t,inline:n,className:s,children:l,...o}=e;return(0,r.jsx)("div",{...o,className:(0,S.cn)(s,"bg-zinc-950 p-2"),children:l})}},children:n})}},72657:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var r=n(36164);n(3546);var s=n(12624),l=n(74248),o=n(31458),a=n(81565);function i(e){let{className:t,container:n,offset:i,...c}=e,d=(0,s.e)(i||0,n);return(0,r.jsxs)(o.z,{variant:"outline",size:"icon",className:(0,l.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",d?"opacity-0":"opacity-100",t),onClick:()=>{n?n.scrollTo({top:n.scrollHeight,behavior:"smooth"}):window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})},...c,children:[(0,r.jsx)(a.IconArrowDown,{}),(0,r.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}},48537:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var r=n(36164);n(3546);var s=n(28312),l=n(31458),o=n(81565);function a(e){let{className:t,value:n,onCopyContent:a,text:i,...c}=e,{isCopied:d,copyToClipboard:u}=(0,s.m)({timeout:2e3,onCopyContent:a});return n?(0,r.jsxs)(l.z,{variant:"ghost",size:i?"default":"icon",className:t,onClick:()=>{d||u(n)},...c,children:[d?(0,r.jsx)(o.IconCheck,{className:"text-green-600"}):(0,r.jsx)(o.IconCopy,{}),i&&(0,r.jsx)("span",{children:i}),!i&&(0,r.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},73033:function(e,t,n){"use strict";n.d(t,{s:function(){return l}});var r=n(3546),s=n(52991);let l=(0,r.memo)(s.D,(e,t)=>e.children===t.children&&e.className===t.className)},94529:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(36164),s=n(3546),l=n(23455),o=n(9010),a=n(74248),i=n(81565);function c(e){let{onSearch:t,className:n,placeholder:c,showBetaBadge:d,isLoading:u,autoFocus:m,loadingWithSpinning:f,cleanAfterSearch:h=!0}=e,[x,p]=(0,s.useState)(!1),[g,v]=(0,s.useState)(!1),[j,b]=(0,s.useState)(""),{theme:w}=(0,o.X)();(0,s.useEffect)(()=>{p(!0)},[]);let N=()=>{j&&!u&&(t(j),h&&b(""))};return(0,r.jsxs)("div",{className:(0,a.cn)("relative flex w-full items-center overflow-hidden rounded-lg border border-muted-foreground bg-background px-4 transition-all hover:border-muted-foreground/60",{"!border-primary":g,"py-0":d},n),children:[d&&(0,r.jsx)("span",{className:"absolute -right-8 top-1 mr-3 rotate-45 rounded-none border-none py-0.5 pl-6 pr-5 text-xs text-primary",style:{background:"dark"===w?"#333":"#e8e1d3"},children:"Beta"}),(0,r.jsx)(l.Z,{className:(0,a.cn)("text-area-autosize flex-1 resize-none rounded-lg !border-none bg-transparent !shadow-none !outline-none !ring-0 !ring-offset-0",{"!h-[48px]":!x,"py-4":!d,"py-5":d}),placeholder:c||"Ask anything...",maxRows:5,onKeyDown:e=>{if("Enter"===e.key&&!e.shiftKey)return e.preventDefault()},onKeyUp:e=>{if("Enter"===e.key&&!e.shiftKey)return N()},onFocus:()=>v(!0),onBlur:()=>v(!1),onChange:e=>b(e.target.value),value:j,autoFocus:m}),(0,r.jsxs)("div",{className:(0,a.cn)("mr-6 flex items-center rounded-lg p-1 transition-all",{"bg-primary text-primary-foreground cursor-pointer":j.length>0,"!bg-muted !text-primary !cursor-default":u||0===j.length,"mr-6":d,"mr-1.5":!d}),onClick:N,children:[f&&u&&(0,r.jsx)(i.IconSpinner,{className:"h-3.5 w-3.5"}),(!f||!u)&&(0,r.jsx)(i.IconArrowRight,{className:"h-3.5 w-3.5"})]})]})}},90958:function(e,t,n){"use strict";n.d(t,{dn:function(){return d}});var r=n(36164),s=n(3546),l=n(73162),o=n(83008),a=n(28312),i=n(31458),c=n(81565);let d=(0,s.memo)(e=>{let{language:t,value:n,onCopyContent:s}=e,{isCopied:d,copyToClipboard:u}=(0,a.m)({timeout:2e3,onCopyContent:s});return(0,r.jsxs)("div",{className:"codeblock relative w-full bg-zinc-950 font-sans",children:[(0,r.jsxs)("div",{className:"flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100",children:[(0,r.jsx)("span",{className:"text-xs lowercase",children:t}),(0,r.jsx)("div",{className:"flex items-center space-x-1",children:(0,r.jsxs)(i.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{d||u(n)},children:[d?(0,r.jsx)(c.IconCheck,{}):(0,r.jsx)(c.IconCopy,{}),(0,r.jsx)("span",{className:"sr-only",children:"Copy code"})]})})]}),(0,r.jsx)(l.Z,{language:"toml"===t?"bash":t,style:o.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:n})]})});d.displayName="CodeBlock"},90615:function(e,t,n){"use strict";n.d(t,{Yi:function(){return i},bZ:function(){return c},zs:function(){return a}});var r=n(36164),s=n(3546),l=n(38421),o=n(74248);let a=l.fC,i=l.xz,c=s.forwardRef((e,t)=>{let{className:n,align:s="center",sideOffset:a=4,...i}=e;return(0,r.jsx)(l.VY,{ref:t,align:s,sideOffset:a,className:(0,o.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i})});c.displayName=l.VY.displayName},57830:function(e,t,n){"use strict";n.r(t),n.d(t,{ScrollArea:function(){return a},ScrollBar:function(){return i}});var r=n(36164),s=n(3546),l=n(50778),o=n(74248);let a=s.forwardRef((e,t)=>{let{className:n,children:s,...a}=e;return(0,r.jsxs)(l.fC,{ref:t,className:(0,o.cn)("relative overflow-hidden",n),...a,children:[(0,r.jsx)(l.l_,{className:"h-full w-full rounded-[inherit] [&>div]:!block",children:s}),(0,r.jsx)(i,{}),(0,r.jsx)(l.Ns,{})]})});a.displayName=l.fC.displayName;let i=s.forwardRef((e,t)=>{let{className:n,orientation:s="vertical",...a}=e;return(0,r.jsx)(l.gb,{ref:t,orientation:s,className:(0,o.cn)("flex touch-none select-none transition-colors","vertical"===s&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===s&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...a,children:(0,r.jsx)(l.q4,{className:"relative flex-1 rounded-full bg-border"})})});i.displayName=l.gb.displayName},11208:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(36164),s=n(3546),l=n(74225),o=n(74248);let a=s.forwardRef((e,t)=>{let{className:n,orientation:s="horizontal",decorative:a=!0,...i}=e;return(0,r.jsx)(l.f,{ref:t,decorative:a,orientation:s,className:(0,o.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",n),...i})});a.displayName=l.f.displayName},21808:function(e,t,n){"use strict";n.d(t,{$6:function(){return l},L8:function(){return s},o0:function(){return r}});let r="name@yourcompany.com",s=20,l={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_LATEST_MSG:"_tabby_search_latest_msg"}},93877:function(e,t,n){"use strict";n.d(t,{BT:function(){return i},Ds:function(){return c},Ot:function(){return u}});var r=n(3546);let s=(e,t)=>{let[n,s]=(0,r.useState)(t),[l,o]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let t=localStorage.getItem(e);t&&s(JSON.parse(t)),o(!1)},[]),[n,t=>{s(t),localStorage.setItem(e,JSON.stringify(t))},l]};class l{get value(){if("undefined"!=typeof localStorage){let e=localStorage.getItem(this.storageKey);if(e)return"true"===e}return this.defaultValue}constructor(e,t,n,r){this.storageKey=e,this.title=t,this.description=n,this.defaultValue=r}}class o{defineGlobalVar(){return new l(this.storageKey,this.title,this.description,this.defaultValue)}defineHook(){return()=>{let[e,t,n]=s(this.storageKey,this.defaultValue);return[{value:e,title:this.title,description:this.description,loading:n},()=>{t(!e)}]}}constructor(e,t,n,r){this.storageKey="EXP_".concat(e),this.title=t,this.description=n,this.defaultValue=null!=r&&r}}let a=new o("enable_code_browser_quick_action_bar","Quick Action Bar","Enable Quick Action Bar to display a convenient toolbar when you select code, offering options to explain the code, add unit tests, and more.",!0),i=a.defineGlobalVar(),c=a.defineHook(),d=new o("enable_search","Search","Enable the search on the home page to search for anything you want to know using the local chat model.",!0);d.defineGlobalVar();let u=d.defineHook()},12624:function(e,t,n){"use strict";n.d(t,{e:function(){return l}});var r=n(3546),s=n(62940);function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,[n,l]=r.useState(!1);return r.useEffect(()=>{if(t)return;let n=(0,s.Z)(()=>{l(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)},100,{leading:!0});return window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n,{passive:!0}),n(),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}},[e,t]),r.useEffect(()=>{if(!t)return;let n=(0,s.Z)(()=>{let{scrollTop:n,clientHeight:r,scrollHeight:s}=t;l(n+r>=s-e)},100,{leading:!0});return t.addEventListener("scroll",n,{passive:!0}),t.addEventListener("resize",n,{passive:!0}),n(),()=>{t.removeEventListener("scroll",n),t.removeEventListener("resize",n)}},[e,t]),n}},28312:function(e,t,n){"use strict";n.d(t,{m:function(){return a}});var r=n(3546),s=n(61200),l=n.n(s),o=n(2578);function a(e){let{timeout:t=2e3,onError:n,onCopyContent:s}=e,[a,i]=r.useState(!1),c=()=>{i(!0),setTimeout(()=>{i(!1)},t)},d=e=>{if("function"==typeof n){null==n||n(e);return}o.A.error("Failed to copy.")};return{isCopied:a,copyToClipboard:e=>{var t;if(e){if(s){s(e),c();return}if(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)navigator.clipboard.writeText(e).then(c).catch(d);else{let t=l()(e);t?c():d()}}}}}},16784:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(3546);function s(e){let t=r.useRef(e);return t.current=e,t}},49142:function(e,t,n){"use strict";n.d(t,{t:function(){return l}});var r=n(3546),s=n(15696);function l(e){let{api:t="/v1beta/answer",onError:n,headers:l,fetcher:o}=e,[a,i]=r.useState(!1),[c,d]=r.useState(),[u,m]=r.useState(),f=r.useRef(null),h=e=>{if("event"===e.type&&"data"in e){let t=JSON.parse(e.data);t&&d(e=>x(e,t))}},x=(e,t)=>{var n,r;return e?{...e,answer_delta:"".concat(null!==(n=null==e?void 0:e.answer_delta)&&void 0!==n?n:"").concat(null!==(r=null==t?void 0:t.answer_delta)&&void 0!==r?r:""),relevant_documents:(null==t?void 0:t.relevant_documents)||e.relevant_documents,relevant_questions:(null==t?void 0:t.relevant_questions)||e.relevant_questions}:t},p=async e=>{try{i(!0),m(void 0),d(void 0);let n=new AbortController;f.current=n;let r=null!=o?o:window.fetch,a=await r(t,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",...l},signal:null==n?void 0:n.signal}).catch(e=>{throw e});if(!(null==a?void 0:a.ok))throw Error(String(a.status));if(null==a.body)throw Error("The response body is empty");let c=a.body.pipeThrough(new TextDecoderStream).pipeThrough(new s.m).getReader();for(;;){let{done:e,value:t}=await c.read();if(e)break;h(t)}}catch(e){if((null==e?void 0:e.name)==="AbortError")return f.current=null,null;n&&e instanceof Error&&n(e),m(e)}finally{i(!1)}};return{isLoading:a,answer:c,error:u,setError:m,triggerRequest:p,stop:()=>{f.current&&(f.current.abort(),f.current=null)}}}},2489:function(){}},function(e){e.O(0,[7998,5498,6312,5384,1283,3449,2578,9421,1454,4546,9275,7680,9610,9148,778,5606,6806,1687,2439,9736,1565,3396,1969,3375,5289,1744],function(){return e(e.s=72845)}),_N_E=e.O()}]);