"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2124],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),c=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(a),k=n,f=d["".concat(o,".").concat(k)]||d[k]||u[k]||i;return a?r.createElement(f,s(s({ref:e},p),{},{components:a})):r.createElement(f,s({ref:e},p))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,s=new Array(i);s[0]=k;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[d]="string"==typeof t?t:n,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},45306:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:1,description:"Get started by setting up the SDK in your dapp.",tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},s="Set up MetaMask SDK",l={unversionedId:"how-to/connect/set-up-sdk/index",id:"how-to/connect/set-up-sdk/index",title:"Set up MetaMask SDK",description:"Get started by setting up the SDK in your dapp.",source:"@site/wallet/how-to/connect/set-up-sdk/index.md",sourceDirName:"how-to/connect/set-up-sdk",slug:"/how-to/connect/set-up-sdk/",permalink:"/zs/snap-getclientstatus/wallet/how-to/connect/set-up-sdk/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/index.md",tags:[{label:"JavaScript SDK",permalink:"/zs/snap-getclientstatus/wallet/tags/java-script-sdk"},{label:"iOS SDK",permalink:"/zs/snap-getclientstatus/wallet/tags/i-os-sdk"},{label:"Android SDK",permalink:"/zs/snap-getclientstatus/wallet/tags/android-sdk"},{label:"Unity SDK",permalink:"/zs/snap-getclientstatus/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Get started by setting up the SDK in your dapp.",tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Connect to MetaMask",permalink:"/zs/snap-getclientstatus/wallet/how-to/connect"},next:{title:"JavaScript",permalink:"/zs/snap-getclientstatus/wallet/how-to/connect/set-up-sdk/javascript/"}},o={},c=[],p={toc:c},d="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"set-up-metamask-sdk"},"Set up MetaMask SDK"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/wallet/concepts/sdk/"},"MetaMask SDK")," is a library that provides a reliable, secure, and seamless\nconnection from your dapp to the MetaMask browser extension and MetaMask Mobile.\nIt supports the following dapp platforms:"),(0,n.kt)("div",{class:"cards"},(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,"\ud83d\udcbb ",(0,n.kt)("a",{href:"javascript"},"JavaScript"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react"},"React")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/pure-js"},"Pure JavaScript")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/other-web-frameworks"},"Other web frameworks")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react-native"},"React Native")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/nodejs"},"Node.js")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/electron"},"Electron"))))),(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,"\ud83d\udcf1 ",(0,n.kt)("a",{href:"mobile"},"Mobile"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react-native"},"React Native")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"mobile/ios"},"iOS")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"mobile/android"},"Android"))))),(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,"\ud83c\udfae ",(0,n.kt)("a",{href:"gaming"},"Gaming"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"gaming/unity"},"Unity")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"gaming/unreal-engine"},"Unreal Engine")," (coming soon)"))))),(0,n.kt)("div",{class:"card margin-bottom--lg"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,"\u2194\ufe0f ",(0,n.kt)("a",{href:"../../use-3rd-party-integrations"},"Third-party integrations"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"../../use-3rd-party-integrations/web3-onboard"},"Web3-Onboard")),(0,n.kt)("li",null,"Wagmi (coming soon)")))))}u.isMDXComponent=!0}}]);