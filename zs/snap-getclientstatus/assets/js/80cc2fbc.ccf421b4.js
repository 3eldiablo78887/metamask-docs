"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),h=s,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const r={description:"Connect your dapp to existing, third-party Snaps.",sidebar_position:8},o="Use third-party Snaps",i={unversionedId:"how-to/use-3rd-party-snaps",id:"how-to/use-3rd-party-snaps",title:"Use third-party Snaps",description:"Connect your dapp to existing, third-party Snaps.",source:"@site/snaps/how-to/use-3rd-party-snaps.md",sourceDirName:"how-to",slug:"/how-to/use-3rd-party-snaps",permalink:"/zs/snap-getclientstatus/snaps/how-to/use-3rd-party-snaps",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-3rd-party-snaps.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Connect your dapp to existing, third-party Snaps.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Security guidelines",permalink:"/zs/snap-getclientstatus/snaps/how-to/use-keyring-api/security"},next:{title:"Troubleshoot",permalink:"/zs/snap-getclientstatus/snaps/how-to/troubleshoot"}},p={},l=[{value:"Connect to a Snap",id:"connect-to-a-snap",level:2},{value:"User rejects the installation request",id:"user-rejects-the-installation-request",level:3},{value:"User approves the installation request",id:"user-approves-the-installation-request",level:3},{value:"Snap is already installed",id:"snap-is-already-installed",level:3},{value:"Determine whether a Snap is installed",id:"determine-whether-a-snap-is-installed",level:2},{value:"Reconnect to a Snap",id:"reconnect-to-a-snap",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-third-party-snaps"},"Use third-party Snaps"),(0,s.kt)("p",null,"Some existing, third-party Snaps are designed to communicate with dapps.\nAs a dapp developer, you can use these Snaps to take advantage of new features enabled by Snaps.\nThis is possible because Snaps can expose a ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/concepts/apis#custom-json-rpc-apis"},"custom JSON-RPC API"),"."),(0,s.kt)("h2",{id:"connect-to-a-snap"},"Connect to a Snap"),(0,s.kt)("p",null,"Connect to a Snap by calling the ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestsnaps"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),"\nmethod from your dapp.\nIf a user doesn't have the Snap installed in their MetaMask wallet, MetaMask prompts the user to\ninstall the Snap.\nThe following are different possible outcomes from calling ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps"),"."),(0,s.kt)("h3",{id:"user-rejects-the-installation-request"},"User rejects the installation request"),(0,s.kt)("p",null,"If the user rejects the installation request, the call to ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," throws the following error:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ "code": 4001, "message": "User rejected the request." }\n')),(0,s.kt)("h3",{id:"user-approves-the-installation-request"},"User approves the installation request"),(0,s.kt)("p",null,"If the user approves the installation request, the call to ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," returns an object\nwith the following shape:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "SNAP_ID": {\n        "blocked": false,\n        "enabled": true,\n        "id": "SNAP_ID",\n        "initialPermissions": {\n            // ...all the permissions in the Snap\'s manifest\n        },\n        "version": "SNAP_VERSION"\n    }\n}\n')),(0,s.kt)("h3",{id:"snap-is-already-installed"},"Snap is already installed"),(0,s.kt)("p",null,"If the Snap is already installed, the call to ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," returns the same object as for a\nnew installation of the Snap, but the user won't see a confirmation pop-up asking them to install the Snap."),(0,s.kt)("admonition",{title:"important",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Snaps are installed into the MetaMask instance of each user.\nIf a Snap stores data, that data is specific to that user's MetaMask instance.\nHowever, that data can be shared with multiple dapps.\nDo not assume that data stored by a Snap is unique to your dapp. ")),(0,s.kt)("h2",{id:"determine-whether-a-snap-is-installed"},"Determine whether a Snap is installed"),(0,s.kt)("p",null,"Determine whether a Snap is installed by calling the\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_getsnaps"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_getSnaps"))," method from your dapp.\nThis method returns a list of only those Snaps that are connected to your current dapp."),(0,s.kt)("p",null,"The response is in the form of an object keyed by the ID of the Snap.\nEach value is a nested object with additional information, such as the version of the Snap that is installed."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"wallet_getSnaps")," only returns the Snaps that are connected to your dapp.\nThe user may have other Snaps installed that your dapp is not aware of. ")),(0,s.kt)("p",null,"The following example verifies whether a Snap with ID ",(0,s.kt)("inlineCode",{parentName:"p"},"npm:super-snap")," is installed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const snaps = await ethereum.request({\n  method: 'wallet_getSnaps'\n});\n\nconst isMySnapInstalled = Object.keys(snaps).includes('npm:super-snap');\n")),(0,s.kt)("p",null,"If you need to work with a specific version of a Snap, you can instead iterate over\n",(0,s.kt)("inlineCode",{parentName:"p"},"Object.values(snaps)"),", and use the ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"version")," properties inside each object to determine\nwhether the Snap is installed with the required version."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"A user cannot install multiple versions of a Snap into a single MetaMask instance.\nYou should avoid requiring a specific version of a Snap unless you absolutely need to.\nIn most cases, you should request the latest version of the Snap and architect your dapp to be able\nto work with that version.")),(0,s.kt)("h2",{id:"reconnect-to-a-snap"},"Reconnect to a Snap"),(0,s.kt)("p",null,"At any time, a user can open their MetaMask Snaps settings menu and see all the dapps connected to a Snap.\nFrom that menu they can revoke a dapp connection.\nIf your dapp loses the connection to a Snap, you can reconnect by calling\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestsnaps"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),".\nSince the Snap is already installed, this returns a success response without MetaMask showing a pop-up.\nHowever, if the user has disabled the Snap, the response has ",(0,s.kt)("inlineCode",{parentName:"p"},"enabled")," set to ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," for your ",(0,s.kt)("inlineCode",{parentName:"p"},"SNAP_ID"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "SNAP_ID": {\n        "blocked": false,\n        "enabled": false,\n        "id": "SNAP_ID",\n        "initialPermissions": {\n            // ...all the permissions in the Snap\'s manifest\n        },\n        "version": "SNAP_VERSION"\n    }\n}\n')))}d.isMDXComponent=!0}}]);