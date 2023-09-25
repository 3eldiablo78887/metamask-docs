"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1},o="Android SDK architecture",c={unversionedId:"concepts/sdk/android",id:"concepts/sdk/android",title:"Android SDK architecture",description:"The Android version of MetaMask SDK enables your users to easily connect with their",source:"@site/wallet/concepts/sdk/android.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/android",permalink:"/android-concepts/wallet/concepts/sdk/android",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/android.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"walletSidebar",previous:{title:"About MetaMask SDK",permalink:"/android-concepts/wallet/concepts/sdk/"},next:{title:"About the MetaMask APIs",permalink:"/android-concepts/wallet/concepts/apis"}},l={},d=[{value:"Architecture diagram",id:"architecture-diagram",level:2},{value:"Communication flow diagram",id:"communication-flow-diagram",level:2}],s={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"android-sdk-architecture"},"Android SDK architecture"),(0,a.kt)("p",null,"The Android version of ",(0,a.kt)("a",{parentName:"p",href:"/android-concepts/wallet/"},"MetaMask SDK")," enables your users to easily connect with their\nMetaMask Mobile wallet.\n",(0,a.kt)("a",{parentName:"p",href:"/android-concepts/wallet/how-to/connect/set-up-sdk/mobile/android"},"Set up the SDK in your Android dapp")," to get\nstarted."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"#architecture-diagram"},"architecture")," and ",(0,a.kt)("a",{parentName:"p",href:"#communication-flow-diagram"},"communication flow")," of\nthe Android SDK differs from the other SDK platforms."),(0,a.kt)("h2",{id:"architecture-diagram"},"Architecture diagram"),(0,a.kt)("p",null,"The following diagram outlines the high-level architecture of the Android SDK:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Android SDK architecture diagram",src:n(58913).Z,width:"1512",height:"1122"})),(0,a.kt)("p",null,"The MetaMask Android SDK consists of two components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The client SDK"),", imported in the dapp"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The server SDK"),", an Android Native Module embedded in the MetaMask React Native wallet")),(0,a.kt)("p",null,"The client SDK communicates with the server SDK using\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/components/processes-and-threads#IPC"},"Interprocess communication (IPC)"),".\nThe JSON-RPC calls are implemented using the\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/components/aidl"},"Android Interface Definition Language (AIDL)"),".\nCommunication over IPC is encrypted using elliptic curve integrated encryption scheme (ECIES)."),(0,a.kt)("p",null,"Within MetaMask, the wallet (written in React Native) communicates with the Native Module (written\nin Kotlin) using different mechanisms depending on the direction of communication:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Native Module ","\u2192"," React Native")," - The Native Module broadcasts messages as events that the wallet\nlistens to and handles upon receipt."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"React Native ","\u2192"," Native Module")," - The wallet calls the Native Module using the ",(0,a.kt)("inlineCode",{parentName:"li"},"NativeModules")," API,\nwhich enables React Native code to call native Kotlin primitives.")),(0,a.kt)("h2",{id:"communication-flow-diagram"},"Communication flow diagram"),(0,a.kt)("p",null,"The following diagram outlines the communication flow between the Android client SDK and server SDK:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Android SDK communication diagram",src:n(6117).Z,width:"1512",height:"1334"})))}u.isMDXComponent=!0},58913:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sdk-android-architecture-37023c4faf4a70fbda21e5a463252d65.png"},6117:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sdk-android-communication-98322130942b09d72303993dd171f60f.png"}}]);