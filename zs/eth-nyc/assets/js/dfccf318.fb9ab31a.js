"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,c(c({ref:t},l),{},{components:n})):a.createElement(k,c({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"React",sidebar_position:1},c="Use MetaMask SDK with React",s={unversionedId:"how-to/connect/set-up-sdk/javascript/react/index",id:"how-to/connect/set-up-sdk/javascript/react/index",title:"Use MetaMask SDK with React",description:"You can import MetaMask SDK into your React dapp to enable your users to",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/react/index.md",sourceDirName:"how-to/connect/set-up-sdk/javascript/react",slug:"/how-to/connect/set-up-sdk/javascript/react/",permalink:"/zs/eth-nyc/wallet/how-to/connect/set-up-sdk/javascript/react/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/react/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"React",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"JavaScript",permalink:"/zs/eth-nyc/wallet/how-to/connect/set-up-sdk/javascript/"},next:{title:"React UI",permalink:"/zs/eth-nyc/wallet/how-to/connect/set-up-sdk/javascript/react/react-ui"}},i={},p=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Wrap your project with MetaMaskProvider",id:"3-wrap-your-project-with-metamaskprovider",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3}],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-react"},"Use MetaMask SDK with React"),(0,r.kt)("p",null,"You can import ",(0,r.kt)("a",{parentName:"p",href:"/zs/eth-nyc/wallet/concepts/sdk"},"MetaMask SDK")," into your React dapp to enable your users to\neasily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for React has the ",(0,r.kt)("a",{parentName:"p",href:"/zs/eth-nyc/wallet/how-to/connect/set-up-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,r.kt)("admonition",{title:"React UI",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This page provides instructions for using the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/sdk-react")," package.\nAlternatively, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/zs/eth-nyc/wallet/how-to/connect/set-up-sdk/javascript/react/react-ui"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/sdk-react-ui"))," package to easily use\n",(0,r.kt)("a",{parentName:"p",href:"https://wagmi.sh/"},"wagmi")," hooks and a pre-styled UI button component for connecting to MetaMask.")),(0,r.kt)("admonition",{title:"Examples",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"MetaMask JavaScript SDK examples"),"\nfor advanced use cases.")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk-react\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk-react\n")),(0,r.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { MetaMaskProvider } from '@metamask/sdk-react';\n")),(0,r.kt)("h3",{id:"3-wrap-your-project-with-metamaskprovider"},"3. Wrap your project with MetaMaskProvider"),(0,r.kt)("p",null,"Wrap your root component in a ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskProvider"),".\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport { MetaMaskProvider } from '@metamask/sdk-react';\n\nconst root = ReactDOM.createRoot(\n  document.getElementById('root') as HTMLElement\n);\n\nroot.render(\n  <React.StrictMode>\n    <MetaMaskProvider debug={false} sdkOptions={{\n      logging:{\n          developerMode: false,\n        },\n        communicationServerUrl: process.env.REACT_APP_COMM_SERVER_URL,\n        checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load\n        dappMetadata: {\n          name: \"Demo React App\",\n          url: window.location.host,\n        }\n    }}>\n      <App />\n    </MetaMaskProvider>\n  </React.StrictMode>\n);\n")),(0,r.kt)("p",null,"When initializing ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskProvider"),", setting ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," activates debug mode.\nFor the full list of options you can set for ",(0,r.kt)("inlineCode",{parentName:"p"},"sdkOptions"),", see the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/eth-nyc/wallet/reference/sdk-js-options"},"JavaScript SDK options reference"),"."),(0,r.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,r.kt)("p",null,"Use the SDK by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSDK")," hook in your React components.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useSDK } from '@metamask/sdk-react';\nimport React, { useState } from 'react';\n\nexport const App = () => {\n  const [account, setAccount] = useState<string>();\n  const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n  const connect = async () => {\n    try {\n      const accounts = await sdk?.connect();\n      setAccount(accounts?.[0]);\n    } catch(err) {\n      console.warn(`failed to connect..`, err);\n    }\n  };\n\n  return (\n    <div className=\"App\">\n      <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n        Connect\n      </button>\n      {connected && (\n        <div>\n          <>\n            {chainId && `Connected chain: ${chainId}`}\n            <p></p>\n            {account && `Connected account: ${account}`}\n          </>\n        </div>\n      )}\n    </div>\n  );\n};\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"useSDK return values"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sdk"),": Main SDK object that facilitates connection and actions related to MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connected"),": Boolean value indicating if the dapp is connected to MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connecting"),": Boolean value indicating if a connection is in process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"provider"),": The provider object which can be used for lower-level interactions with the Ethereum blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainId"),": Currently connected blockchain's chain ID.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk.connect()")," method initiates a connection to MetaMask and returns an array of connected accounts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const connect = async () => {\n  try {\n    const accounts = await sdk?.connect();\n    setAccount(accounts?.[0]);\n  } catch(err) {\n    console.warn(`failed to connect..`, err);\n  }\n};\n")),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"MetaMask JavaScript SDK examples"),"\nfor advanced use cases."))}u.isMDXComponent=!0}}]);