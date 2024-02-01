"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6139],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),c=u(n),m=a,d=c["".concat(p,".").concat(m)]||c[m]||y[m]||i;return n?r.createElement(d,o(o({ref:e},l),{},{components:n})):r.createElement(d,o({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[c]="string"==typeof t?t:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81604:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={description:"Set up MetaMask SDK with Infura in your Unity game.",sidebar_position:3,tags:["Unity SDK"]},o="Set up Infura in Unity",s={unversionedId:"how-to/use-3rd-party-integrations/unity-infura",id:"how-to/use-3rd-party-integrations/unity-infura",title:"Set up Infura in Unity",description:"Set up MetaMask SDK with Infura in your Unity game.",source:"@site/wallet/how-to/use-3rd-party-integrations/unity-infura.md",sourceDirName:"how-to/use-3rd-party-integrations",slug:"/how-to/use-3rd-party-integrations/unity-infura",permalink:"/zs/snap-getclientstatus/wallet/how-to/use-3rd-party-integrations/unity-infura",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-3rd-party-integrations/unity-infura.md",tags:[{label:"Unity SDK",permalink:"/zs/snap-getclientstatus/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{description:"Set up MetaMask SDK with Infura in your Unity game.",sidebar_position:3,tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Make read-only requests in JavaScript",permalink:"/zs/snap-getclientstatus/wallet/how-to/use-3rd-party-integrations/js-infura-api"},next:{title:"Enable human-readable addresses in Unity",permalink:"/zs/snap-getclientstatus/wallet/how-to/use-3rd-party-integrations/unity-dweb"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}],l={toc:u},c="wrapper";function y(t){let{components:e,...i}=t;return(0,a.kt)(c,(0,r.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-up-infura-in-unity"},"Set up Infura in Unity"),(0,a.kt)("p",null,"You can set up ",(0,a.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/wallet/concepts/sdk/"},"MetaMask SDK")," with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/"},"Infura")," in\nyour Unity game."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An Infura API key.\nCreate one by following the first two steps in the\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/getting-started"},"Infura getting started guide"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"An allowlist configured for your API key.")),(0,a.kt)("admonition",{parentName:"li",title:"important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Your API key, when used with the SDK, is vulnerable to exposure.\nIf someone inspects your dapp's code, they can potentially retrieve your API key and submit\nrequests to Infura, impersonating your account."),(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"allowlists"),"\nto protect against this vulnerability.\nYou can restrict interactions with your API key to specific addresses, origins, user agents, and request methods.\nWe recommend using all allowlist options to maximize the security of your API key and dapp."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/wallet/how-to/connect/set-up-sdk/gaming/unity"},"MetaMask SDK set up")," in your Unity game."))),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your Unity project with the SDK installed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the game object in your scene (or the Prefab instance) that currently stores the\n",(0,a.kt)("inlineCode",{parentName:"p"},"MetaMask Unity")," script.\nIn the ",(0,a.kt)("inlineCode",{parentName:"p"},"Demo")," scene, this is the ",(0,a.kt)("inlineCode",{parentName:"p"},"MetaMaskUnitySDK")," game object.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"MetaMaskUnitySDK")," Prefab to view its properties in the ",(0,a.kt)("strong",{parentName:"p"},"Inspector")," window. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"MetaMask Unity (Script)")," section, enter your Infura API key into the ",(0,a.kt)("strong",{parentName:"p"},"Infura Project\nId")," field."))),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MetaMask Unity script",src:n(812).Z,width:"600",height:"512"}))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Save your changes.\nThis automatically configures all RPC URLs that Infura supports.")))}y.isMDXComponent=!0},812:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/unity-infura-9adaae27bdb7cf33527d987bedffce2e.png"}}]);