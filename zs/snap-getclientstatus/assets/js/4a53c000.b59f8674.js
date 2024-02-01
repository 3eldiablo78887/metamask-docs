"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5048],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),l=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),g=r,y=m["".concat(o,".").concat(g)]||m[g]||u[g]||i;return t?a.createElement(y,p(p({ref:n},c),{},{components:t})):a.createElement(y,p({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:r,p[1]=s;for(var l=2;l<i;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},81312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},p="Create an account management companion dapp",s={unversionedId:"how-to/use-keyring-api/create-companion-dapp",id:"how-to/use-keyring-api/create-companion-dapp",title:"Create an account management companion dapp",description:"Call Keyring API methods from your companion dapp.",source:"@site/snaps/how-to/use-keyring-api/create-companion-dapp.md",sourceDirName:"how-to/use-keyring-api",slug:"/how-to/use-keyring-api/create-companion-dapp",permalink:"/zs/snap-getclientstatus/snaps/how-to/use-keyring-api/create-companion-dapp",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-keyring-api/create-companion-dapp.md",tags:[{label:"Keyring API",permalink:"/zs/snap-getclientstatus/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Create an account management Snap",permalink:"/zs/snap-getclientstatus/snaps/how-to/use-keyring-api/create-account-snap"},next:{title:"Security guidelines",permalink:"/zs/snap-getclientstatus/snaps/how-to/use-keyring-api/security"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Create the KeyringSnapRpcClient",id:"2-create-the-keyringsnaprpcclient",level:3},{value:"3. Call Keyring API methods",id:"3-call-keyring-api-methods",level:3},{value:"Example",id:"example",level:2}],c={toc:l},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-account-management-companion-dapp"},"Create an account management companion dapp"),(0,r.kt)("p",null,"Create a companion dapp to provide a user interface for your account management Snap.\nUse the ",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/reference/keyring-api/classes/KeyringSnapRpcClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapRpcClient"))," to\ncall Keyring API methods from your companion dapp, enabling users to create and interact with custom\nEVM accounts."),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("admonition",{title:"see also",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/snaps/how-to/use-keyring-api/create-account-snap"},"Create an account management Snap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/snaps/concepts/keyring-api"},"About the Keyring API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/how-to/use-keyring-api/create-account-snap"},"account management Snap")," set up."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-keyring-api"},"1. Install the Keyring API"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/keyring-api")," in your project directory using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.kt)("h3",{id:"2-create-the-keyringsnaprpcclient"},"2. Create the KeyringSnapRpcClient"),(0,r.kt)("p",null,"Create the ",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/reference/keyring-api/classes/KeyringSnapRpcClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapRpcClient")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { KeyringSnapRpcClient } from \"@metamask/keyring-api\";\nimport { defaultSnapOrigin as snapId } from '../config';\n\nlet client = new KeyringSnapRpcClient(snapId, window.ethereum);\n")),(0,r.kt)("h3",{id:"3-call-keyring-api-methods"},"3. Call Keyring API methods"),(0,r.kt)("p",null,"You can now use the ",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/reference/keyring-api/classes/KeyringSnapRpcClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapRpcClient")),"\nto invoke Keyring API methods on your Snap."),(0,r.kt)("p",null,"For example, to call ",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#listaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"keyring_listAccounts")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accounts = await client.listAccounts();\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/site"},"example companion dapp source code"),"\nfor more information."))}u.isMDXComponent=!0}}]);