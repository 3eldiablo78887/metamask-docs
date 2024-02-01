"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=s,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:s,r[1]=i;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const o={description:"Develop, test, and publish a Snap.",sidebar_position:1},r="Develop a Snap",i={unversionedId:"how-to/develop-a-snap",id:"how-to/develop-a-snap",title:"Develop a Snap",description:"Develop, test, and publish a Snap.",source:"@site/snaps/how-to/develop-a-snap.md",sourceDirName:"how-to",slug:"/how-to/develop-a-snap",permalink:"/zs/snap-getclientstatus/snaps/how-to/develop-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/develop-a-snap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Develop, test, and publish a Snap.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"How to",permalink:"/zs/snap-getclientstatus/snaps/how-to"},next:{title:"Request permissions",permalink:"/zs/snap-getclientstatus/snaps/how-to/request-permissions"}},p={},l=[{value:"Detect the user&#39;s MetaMask version",id:"detect-the-users-metamask-version",level:2},{value:"Test your Snap",id:"test-your-snap",level:2},{value:"Debug your Snap",id:"debug-your-snap",level:2},{value:"Publish your Snap",id:"publish-your-snap",level:2},{value:"Distribute your Snap",id:"distribute-your-snap",level:2},{value:"Resources",id:"resources",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"develop-a-snap"},"Develop a Snap"),(0,s.kt)("p",null,"A Snap can integrate with and extend the functionality of MetaMask using the\n",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/reference/entry-points"},"Snaps entry points"),", ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/reference/snaps-api"},"Snaps API"),", and\n",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/how-to/request-permissions"},"permissions"),"."),(0,s.kt)("admonition",{title:"important",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Before developing a Snap, make sure you understand the following concepts and guidelines:"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/snaps/concepts/overview"},"Snaps overview")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/snaps/concepts/apis"},"Snaps APIs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/snaps/concepts/files"},"Snaps files")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/snaps/concepts/design-guidelines"},"Snaps design guidelines")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/snaps/concepts/security-guidelines"},"Snaps security guidelines")))),(0,s.kt)("p",null,"You can get started by ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/get-started/quickstart"},"creating a new Snap project")," or following a\n",(0,s.kt)("a",{parentName:"p",href:"/snaps/tutorials"},"tutorial"),".\nThis page describes additional important steps when developing a Snap."),(0,s.kt)("h2",{id:"detect-the-users-metamask-version"},"Detect the user's MetaMask version"),(0,s.kt)("p",null,"When developing a dapp that depends on ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/get-started/install-flask#install-metamask-flask"},"MetaMask Flask"),",\nyou first need to know whether the user has it installed."),(0,s.kt)("p",null,"The following example uses the\n",(0,s.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@metamask/detect-provider"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," package to get\nthe provider object from MetaMask first:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import detectEthereumProvider from '@metamask/detect-provider';\n\n// This resolves to the value of window.ethereum or null\nconst provider = await detectEthereumProvider();\n\n// web3_clientVersion returns the installed MetaMask version as a string\nconst isFlask = (\n  await provider?.request({ method: 'web3_clientVersion' })\n)?.includes('flask');\n\nif (provider && isFlask) {\n  console.log('MetaMask Flask successfully detected!');\n\n  // Now you can use Snaps!\n} else {\n  console.error('Please install MetaMask Flask!', error);\n}\n")),(0,s.kt)("h2",{id:"test-your-snap"},"Test your Snap"),(0,s.kt)("p",null,"Test your Snap by hosting it locally using ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn start"),", installing it in Flask, and calling its\nAPI methods from a dapp."),(0,s.kt)("p",null,"For end-to-end Snap testing, ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/how-to/test-a-snap"},"use the ",(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/snaps-jest")," package"),"."),(0,s.kt)("h2",{id:"debug-your-snap"},"Debug your Snap"),(0,s.kt)("p",null,"To debug your Snap, use ",(0,s.kt)("inlineCode",{parentName:"p"},"console.log")," and inspect the MetaMask background process.\nYou can add your log statements in your source code and build your Snap, or add them directly\nto your Snap bundle and use ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/reference/cli/subcommands#m-manifest"},(0,s.kt)("inlineCode",{parentName:"a"},"yarn mm-snap manifest --fix")),"\nto update the ",(0,s.kt)("inlineCode",{parentName:"p"},"shasum")," in your Snap manifest file.\nThe manifest ",(0,s.kt)("inlineCode",{parentName:"p"},"shasum")," must match the contents of your bundle at the time MetaMask fetches your Snap."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Because adding logs modifies the Snap source code, you must re-install the Snap whenever you add a\nlog statement.")),(0,s.kt)("p",null,"The Snap log output is only visible in the extension background process console.\nIf you're using a Chromium browser, use the following steps to inspect the background process and\nview its console:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Go to ",(0,s.kt)("inlineCode",{parentName:"li"},"chrome://extensions"),"."),(0,s.kt)("li",{parentName:"ol"},"Toggle ",(0,s.kt)("strong",{parentName:"li"},"Developer mode")," on in the top right corner."),(0,s.kt)("li",{parentName:"ol"},"Find MetaMask Flask, and select ",(0,s.kt)("strong",{parentName:"li"},"Details"),"."),(0,s.kt)("li",{parentName:"ol"},"Under ",(0,s.kt)("strong",{parentName:"li"},"Inspect views"),", select ",(0,s.kt)("inlineCode",{parentName:"li"},"background.html"),".")),(0,s.kt)("p",null,"The log output displays in the console that pops up."),(0,s.kt)("h2",{id:"publish-your-snap"},"Publish your Snap"),(0,s.kt)("p",null,"Snaps are npm packages, so publishing a Snap is as simple as publishing an npm package.\nRefer to the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-publish"},"npm CLI documentation")," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The version in ",(0,s.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"repository.url")," field in ",(0,s.kt)("inlineCode",{parentName:"li"},"package.json")," should match the correct repository for your Snap."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"source.location.npm.packageName")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match the name in ",(0,s.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"proposedName")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"snap.manifest.json"),' should be a human-readable name and should not include\nthe words "MetaMask" or "Snap." '),(0,s.kt)("li",{parentName:"ul"},"The image specified in ",(0,s.kt)("inlineCode",{parentName:"li"},"iconPath")," in the manifest file is used as the icon displayed when\ninstalling the Snap, in custom dialogs, and in the settings menu.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"This icon should be a valid SVG."),(0,s.kt)("li",{parentName:"ul"},"The icon will be cropped in a circle when displayed in MetaMask; you do not need to make the icon circular.")))),(0,s.kt)("p",null,"After publishing the Snap, any dapp can connect to the Snap by using the Snap ID ",(0,s.kt)("inlineCode",{parentName:"p"},"npm:[packageName]"),"."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If you are using the Snap monorepo project generated in the ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/get-started/quickstart"},"quickstart"),",\nmake sure to only publish the Snap package in ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/snap"),".\nYou can use the ",(0,s.kt)("a",{parentName:"p",href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest"},"Snaps Simulator")," to verify\nthat your Snap was published correctly ","\u2014"," just select ",(0,s.kt)("strong",{parentName:"p"},"localhost")," in the top right corner and change the\nSnap location to ",(0,s.kt)("strong",{parentName:"p"},"npm")," and the ID of your Snap. "),(0,s.kt)("p",{parentName:"admonition"},"Also, make sure to update the manifest file, icon file, and README to differentiate your Snap from the template.")),(0,s.kt)("h2",{id:"distribute-your-snap"},"Distribute your Snap"),(0,s.kt)("p",null,"You should deploy a dapp where users can learn about your Snap and install it, or integrate with your existing dapp."),(0,s.kt)("p",null,"If your Snap is designed to communicate with dapps, you can encourage other dapp developers to ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/how-to/use-3rd-party-snaps"},"integrate your Snap"),"."),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("p",null,"See the full list of ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/snaps/reference/resources"},"Snaps resources")," for more information on developer\ntools, example Snaps, and more."))}d.isMDXComponent=!0}}]);