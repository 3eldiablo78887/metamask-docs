"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={description:"Learn about the Snaps execution environment.",sidebar_position:4},s="Snaps execution environment",o={unversionedId:"concepts/execution-environment",id:"concepts/execution-environment",title:"Snaps execution environment",description:"Learn about the Snaps execution environment.",source:"@site/snaps/concepts/execution-environment.md",sourceDirName:"concepts",slug:"/concepts/execution-environment",permalink:"/zs/snap-getclientstatus/snaps/concepts/execution-environment",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/execution-environment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn about the Snaps execution environment.",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Snaps files",permalink:"/zs/snap-getclientstatus/snaps/concepts/files"},next:{title:"Snaps design guidelines",permalink:"/zs/snap-getclientstatus/snaps/concepts/design-guidelines"}},p={},l=[{value:"Secure ECMAScript (SES)",id:"secure-ecmascript-ses",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-execution-environment"},"Snaps execution environment"),(0,r.kt)("p",null,"Snaps are untrusted JavaScript programs that execute safely in a sandboxed environment that runs\n",(0,r.kt)("a",{parentName:"p",href:"#secure-ecmascript-ses"},"Secure ECMAScript (SES)"),".\nThis allows MetaMask to restrict access to global JavaScript APIs and to isolate a Snap's code from\nother parts of the application."),(0,r.kt)("p",null,"This environment does not have a DOM, Node.js built-ins, or platform-specific APIs other than the\ndefault ",(0,r.kt)("inlineCode",{parentName:"p"},"snap")," global and MetaMask's ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," global."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A Snap can access the ",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/concepts/apis#snaps-api"},"Snaps API")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"snap")," global, and the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/concepts/apis#metamask-json-rpc-api"},"MetaMask JSON-RPC API")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," global.\nTo access the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," global, a Snap must request the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/reference/permissions#endowmentethereum-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:ethereum-provider"))," permission.")),(0,r.kt)("p",null,"Almost all\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"},"standard JavaScript globals"),"\nthat are also in Node.js are available to Snaps.\nThis includes globals such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Math"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"."),(0,r.kt)("p",null,"The following globals are also available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"console")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crypto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," (with the\n",(0,r.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/snaps/reference/permissions#endowmentnetwork-access"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"clearTimeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setInterval")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"clearInterval")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SubtleCrypto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WebAssembly")," (with the\n",(0,r.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/snaps/reference/permissions#endowmentwebassembly"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:webassembly"))," permission)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TextEncoder")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"TextDecoder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atob")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"btoa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"URL"))),(0,r.kt)("p",null,"The execution environment is designed to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prevent Snaps from influencing any other running code, including MetaMask itself.\nThat is, it prevents all Snaps from polluting the global environment and malicious Snaps from\nstealing from users."),(0,r.kt)("li",{parentName:"ul"},"Prevent Snaps from accessing sensitive JavaScript global APIs (such as ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch"),") without permission."),(0,r.kt)("li",{parentName:"ul"},'Be "fully virtualizable," or platform-independent.')),(0,r.kt)("p",null,"This allows you to safely execute Snaps anywhere, without the Snap needing to worry about where and\nhow it's executed."),(0,r.kt)("h2",{id:"secure-ecmascript-ses"},"Secure ECMAScript (SES)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/endojs/endo/tree/master/packages/ses"},"Secure ECMAScript (SES)")," is a subset of\nJavaScript designed to enable mutually suspicious programs to execute in the same JavaScript process\n(or the same ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#realm"},"realm"),").\nYou can think of it as a more severe form of\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"JavaScript strict mode"),"."))}u.isMDXComponent=!0}}]);