"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3967],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=p(t),g=r,y=l["".concat(c,".").concat(g)]||l[g]||m[g]||i;return t?a.createElement(y,s(s({ref:n},u),{},{components:t})):a.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[l]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},82059:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const i={description:"See the Keyring API reference.",sidebar_position:7,tags:["Keyring API"]},s="Keyring API",o={unversionedId:"reference/keyring-api/index",id:"reference/keyring-api/index",title:"Keyring API",description:"See the Keyring API reference.",source:"@site/snaps/reference/keyring-api/index.md",sourceDirName:"reference/keyring-api",slug:"/reference/keyring-api/",permalink:"/snaps-initial-connections/snaps/reference/keyring-api/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/index.md",tags:[{label:"Keyring API",permalink:"/snaps-initial-connections/snaps/tags/keyring-api"}],version:"current",sidebarPosition:7,frontMatter:{description:"See the Keyring API reference.",sidebar_position:7,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Snaps known errors",permalink:"/snaps-initial-connections/snaps/reference/known-errors"},next:{title:"Account Management API",permalink:"/snaps-initial-connections/snaps/reference/keyring-api/account-management/"}},c={},p=[],u={toc:p},l="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(l,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"keyring-api"},"Keyring API"),(0,r.yg)("p",null,"This section provides a detailed reference on the Keyring API methods, objects, and events that\nenable ",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/snaps/features/custom-evm-accounts/"},"custom EVM accounts"),".\nThe Keyring API consists of:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-initial-connections/snaps/reference/keyring-api/account-management/"},(0,r.yg)("strong",{parentName:"a"},"Account Management API"))," \u2013 An API for dapps to communicate with\naccount management Snaps.\nDapps can manage accounts and signature requests using this API."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-initial-connections/snaps/reference/keyring-api/chain-methods"},(0,r.yg)("strong",{parentName:"a"},"Chain Methods API"))," - An API that contains chain-specific EVM methods that\naccount management Snaps can choose to implement to support dapp requests from custom accounts.")),(0,r.yg)("admonition",{title:"See also",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-initial-connections/snaps/features/custom-evm-accounts/create-account-snap"},"Create an account management Snap"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-initial-connections/snaps/features/custom-evm-accounts/security"},"Account management Snap security guidelines")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-initial-connections/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create an account management companion dapp")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-initial-connections/snaps/features/custom-evm-accounts/"},"Custom EVM accounts")))))}m.isMDXComponent=!0}}]);