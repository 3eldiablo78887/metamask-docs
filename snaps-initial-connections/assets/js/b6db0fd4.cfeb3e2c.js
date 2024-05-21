"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3235],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(58168),r=n(96540),o=n(20053),i=n(23104),s=n(47751),c=n(92303);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==s&&(d(t),c(a))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:m},i,{className:(0,o.A)("tabs__item",l.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function u(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,s.u)(e);return r.createElement("div",{className:(0,o.A)("tabs-container",l.tabList)},r.createElement(p,(0,a.A)({},e,t)),r.createElement(u,(0,a.A)({},e,t)))}function m(e){const t=(0,c.A)();return r.createElement(d,(0,a.A)({key:String(t)},e))}},47751:(e,t,n)=>{n.d(t,{u:()=>d});var a=n(96540),r=n(56347),o=n(57485),i=n(31682),s=n(89466);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function l(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=l(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,m]=u({queryString:n,groupId:r}),[g,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,s.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=d??g;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),y(e)}),[m,y,o]),tabValues:o}}},26790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(58168),r=(n(96540),n(15680)),o=n(4865),i=n(19365);const s={sidebar_label:"React",sidebar_position:1,description:"Set up the SDK in your React dapp.",tags:["JavaScript SDK"]},c="Use MetaMask SDK with React",l={unversionedId:"how-to/use-sdk/javascript/react/index",id:"how-to/use-sdk/javascript/react/index",title:"Use MetaMask SDK with React",description:"Set up the SDK in your React dapp.",source:"@site/wallet/how-to/use-sdk/javascript/react/index.md",sourceDirName:"how-to/use-sdk/javascript/react",slug:"/how-to/use-sdk/javascript/react/",permalink:"/snaps-initial-connections/wallet/how-to/use-sdk/javascript/react/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/react/index.md",tags:[{label:"JavaScript SDK",permalink:"/snaps-initial-connections/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"React",sidebar_position:1,description:"Set up the SDK in your React dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"JavaScript",permalink:"/snaps-initial-connections/wallet/how-to/use-sdk/javascript/"},next:{title:"React UI",permalink:"/snaps-initial-connections/wallet/how-to/use-sdk/javascript/react/react-ui"}},p={},u=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Wrap your project with <code>MetaMaskProvider</code>",id:"3-wrap-your-project-with-metamaskprovider",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}],d={toc:u},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"use-metamask-sdk-with-react"},"Use MetaMask SDK with React"),(0,r.yg)("p",null,"Import ",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/wallet/concepts/sdk/"},"MetaMask SDK")," into your React dapp to enable your users to\neasily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for React has the ",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,r.yg)("admonition",{title:"React UI",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This page provides instructions for using the standard ",(0,r.yg)("inlineCode",{parentName:"p"},"@metamask/sdk-react")," package.\nAlternatively, you can use the ",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/wallet/how-to/use-sdk/javascript/react/react-ui"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/sdk-react-ui"))," package to easily use\n",(0,r.yg)("a",{parentName:"p",href:"https://wagmi.sh/"},"wagmi")," hooks and a pre-styled UI button component for connecting to MetaMask.")),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.yg)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk-react\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk-react\n")),(0,r.yg)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.yg)("p",null,"In your project script, add the following to import the SDK:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.tsx"',title:'"index.tsx"'},'import { MetaMaskProvider } from "@metamask/sdk-react";\n')),(0,r.yg)("h3",{id:"3-wrap-your-project-with-metamaskprovider"},"3. Wrap your project with ",(0,r.yg)("inlineCode",{parentName:"h3"},"MetaMaskProvider")),(0,r.yg)("p",null,"Wrap your root component in a ",(0,r.yg)("inlineCode",{parentName:"p"},"MetaMaskProvider"),".\nFor example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.tsx"',title:'"index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskProvider } from "@metamask/sdk-react";\n\nconst root = ReactDOM.createRoot(\n  document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n  <React.StrictMode>\n    <MetaMaskProvider\n      debug={false}\n      sdkOptions={{\n        dappMetadata: {\n          name: "Example React Dapp",\n          url: window.location.href,\n        },\n        infuraAPIKey: process.env.INFURA_API_KEY,\n        // Other options.\n      }}\n    >\n      <App />\n    </MetaMaskProvider>\n  </React.StrictMode>\n);\n')),(0,r.yg)("p",null,"When initializing ",(0,r.yg)("inlineCode",{parentName:"p"},"MetaMaskProvider"),", set ",(0,r.yg)("inlineCode",{parentName:"p"},"debug")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," to activate debug mode.\nFor the full list of options you can set for ",(0,r.yg)("inlineCode",{parentName:"p"},"sdkOptions"),", see the\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/wallet/reference/sdk-js-options"},"JavaScript SDK options reference"),".\nImportant options include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-initial-connections/wallet/reference/sdk-js-options#dappmetadata"},(0,r.yg)("inlineCode",{parentName:"a"},"dappMetadata"))," - Use this to display information\nabout your dapp in the MetaMask connection modal."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-initial-connections/wallet/reference/sdk-js-options#infuraapikey"},(0,r.yg)("inlineCode",{parentName:"a"},"infuraAPIKey"))," - Use this to\n",(0,r.yg)("a",{parentName:"li",href:"/snaps-initial-connections/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"make read-only RPC requests")," from your dapp."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/snaps-initial-connections/wallet/reference/sdk-js-options#modals"},(0,r.yg)("inlineCode",{parentName:"a"},"modals"))," - Use this to ",(0,r.yg)("a",{parentName:"li",href:"/snaps-initial-connections/wallet/how-to/use-sdk/javascript/display-custom-modals"},"customize the logic and UI of\nthe displayed modals"),".")),(0,r.yg)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,r.yg)("p",null,"Use the SDK by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"useSDK")," hook in your React components.\nFor example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { useSDK } from "@metamask/sdk-react";\nimport React, { useState } from "react";\n\nexport const App = () => {\n  const [account, setAccount] = useState<string>();\n  const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n  const connect = async () => {\n    try {\n      const accounts = await sdk?.connect();\n      setAccount(accounts?.[0]);\n    } catch (err) {\n      console.warn("failed to connect..", err);\n    }\n  };\n\n  return (\n    <div className="App">\n      <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n        Connect\n      </button>\n      {connected && (\n        <div>\n          <>\n            {chainId && `Connected chain: ${chainId}`}\n            <p></p>\n            {account && `Connected account: ${account}`}\n          </>\n        </div>\n      )}\n    </div>\n  );\n};\n')),(0,r.yg)("details",null,(0,r.yg)("summary",null,"useSDK return values"),(0,r.yg)("p",null,(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"sdk"),": Main SDK object that facilitates connection and actions related to MetaMask."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"connected"),": Boolean value indicating if the dapp is connected to MetaMask."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"connecting"),": Boolean value indicating if a connection is in process."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"provider"),": The provider object which can be used for lower-level interactions with the Ethereum blockchain."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"chainId"),": Currently connected blockchain's chain ID.")))),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"connect")," method initiates a connection to MetaMask and returns an array of connected accounts."),(0,r.yg)("p",null,"You can also ",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/wallet/how-to/use-sdk/javascript/connect-and-sign"},"use the ",(0,r.yg)("inlineCode",{parentName:"a"},"connectAndSign")," method")," to\nconnect to MetaMask and sign data in a single interaction:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'const connectAndSign = async () => {\n  try {\n    const signResult = await sdk?.connectAndSign({\n      msg: "Connect + Sign message",\n    });\n    setResponse(signResult);\n  } catch (err) {\n    console.warn("failed to connect..", err);\n  }\n};\n')),(0,r.yg)("p",null,"You can also ",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"},"batch multiple JSON-RPC requests")," using the\n",(0,r.yg)("inlineCode",{parentName:"p"},"metamask_batch")," method."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"You can copy the full React example to get started:"),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Root component",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.tsx"',title:'"index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskProvider } from "@metamask/sdk-react";\n\nconst root = ReactDOM.createRoot(\n  document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n  <React.StrictMode>\n    <MetaMaskProvider\n      debug={false}\n      sdkOptions={{\n        dappMetadata: {\n          name: "Example React Dapp",\n          url: window.location.href,\n        },\n        infuraAPIKey: process.env.INFURA_API_KEY,\n        // Other options\n      }}\n    >\n      <App />\n    </MetaMaskProvider>\n  </React.StrictMode>\n);\n'))),(0,r.yg)(i.A,{value:"React component",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { useSDK } from "@metamask/sdk-react";\nimport React from "react";\n\nexport const App = () => {\n  const [account, setAccount] = useState<string>();\n  const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n  const connect = async () => {\n    try {\n      const accounts = await sdk?.connect();\n      setAccount(accounts?.[0]);\n    } catch (err) {\n      console.warn("failed to connect..", err);\n    }\n  };\n\n  return (\n    <div className="App">\n      <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n        Connect\n      </button>\n      {connected && (\n        <div>\n          <>\n            {chainId && "Connected chain: ${chainId}"}\n            <p></p>\n            {account && "Connected account: ${account}"}\n          </>\n        </div>\n      )}\n    </div>\n  );\n};\n')))),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/create-react-app"},"example React dapp"),"\nin the JavaScript SDK GitHub repository for more information."))}g.isMDXComponent=!0}}]);