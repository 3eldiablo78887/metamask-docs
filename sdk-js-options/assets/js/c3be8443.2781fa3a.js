"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={description:"Learn about convenience libraries.",sidebar_position:4},i="Convenience libraries",s={unversionedId:"concepts/convenience-libraries",id:"concepts/convenience-libraries",title:"Convenience libraries",description:"Learn about convenience libraries.",source:"@site/wallet/concepts/convenience-libraries.md",sourceDirName:"concepts",slug:"/concepts/convenience-libraries",permalink:"/sdk-js-options/wallet/concepts/convenience-libraries",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/convenience-libraries.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn about convenience libraries.",sidebar_position:4},sidebar:"walletSidebar",previous:{title:"About the MetaMask APIs",permalink:"/sdk-js-options/wallet/concepts/apis"},next:{title:"Signing methods",permalink:"/sdk-js-options/wallet/concepts/signing-methods"}},c={},p=[],l={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"convenience-libraries"},"Convenience libraries"),(0,a.kt)("p",null,"Various convenience libraries exist for dapp developers.\nSome of them simplify the creation of specific user interface elements, some entirely manage the\nuser account onboarding, and others give you a variety of methods for interacting with smart\ncontracts, for a variety of API preferences (for example, promises, callbacks, and strong types)."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/sdk-js-options/wallet/reference/provider-api"},"MetaMask Ethereum provider API")," is very simple, and wraps\n",(0,a.kt)("a",{parentName:"p",href:"/sdk-js-options/wallet/reference/rpc-api"},"Ethereum JSON-RPC")," formatted messages, which is why\nsome developers use a convenience library for interacting with the provider, such as\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ethers"},"Ethers"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3"},"web3.js"),", and\n",(0,a.kt)("a",{parentName:"p",href:"https://framework.embarklabs.io/"},"Embark"),".\nYou can refer to those tools' documentation to use them."),(0,a.kt)("admonition",{title:"Use MetaMask SDK",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We recommend using ",(0,a.kt)("a",{parentName:"p",href:"/sdk-js-options/wallet/concepts/sdk/"},"MetaMask SDK"),", which provides a reliable, secure, and seamless\nconnection from your dapp to the MetaMask wallet.\nIt onboards users smoothly from multiple dapp platforms using the MetaMask browser extension or\nMetaMask Mobile, and your dapp can call any ",(0,a.kt)("a",{parentName:"p",href:"/sdk-js-options/wallet/reference/provider-api"},"provider API method"),"\nwith the SDK installed."),(0,a.kt)("p",{parentName:"admonition"},"Get started by ",(0,a.kt)("a",{parentName:"p",href:"/sdk-js-options/wallet/how-to/connect/set-up-sdk/"},"setting up the SDK"),".")))}d.isMDXComponent=!0}}]);