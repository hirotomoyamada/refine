"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(r),y=a,m=c["".concat(s,".").concat(y)]||c[y]||l[y]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},46975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>l});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"hasura",title:"Hasura","example-tags":["data-provider","live-provider"]},s=void 0,u={unversionedId:"examples/data-provider/hasura",id:"examples/data-provider/hasura",title:"Hasura",description:"Any REST or GraphQL custom backend work integrated with Refine. Refine Hasura GraphQL Data Provider comes out-of-the-box. Thanks to Refine, you can connect to your Hasura database and create special queries and use your data easily. This example shows in detail how you can use the data in your Hasura database with Refine project.",source:"@site/docs/examples/data-provider/hasura.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/hasura",permalink:"/docs/examples/data-provider/hasura",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/data-provider/hasura.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1705661487,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{id:"hasura",title:"Hasura","example-tags":["data-provider","live-provider"]},sidebar:"mainSidebar",previous:{title:"Elide",permalink:"/docs/examples/data-provider/elide"},next:{title:"Multiple Providers",permalink:"/docs/examples/data-provider/multiple"}},d={},l=[{value:"ID Data Type",id:"id-data-type",level:2},{value:"Passing &#39;Int&#39; or &#39;uuid&#39; to <code>idType</code>",id:"passing-int-or-uuid-to-idtype",level:4},{value:"Passing function to <code>idType</code>",id:"passing-function-to-idtype",level:4}],c=(y="CodeSandboxExample",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var y;const m={toc:l};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Any REST or GraphQL custom backend work integrated with Refine. Refine ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/"},"Hasura")," GraphQL Data Provider comes out-of-the-box. Thanks to Refine, you can connect to your Hasura database and create special queries and use your data easily. This example shows in detail how you can use the data in your Hasura database with Refine project."),(0,n.kt)("h2",{id:"id-data-type"},"ID Data Type"),(0,n.kt)("p",null,"By default, the data provider assume that your ",(0,n.kt)("inlineCode",{parentName:"p"},"ID")," type is ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid"),", you can change this behavior by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"idType")," option. You can pass ",(0,n.kt)("inlineCode",{parentName:"p"},"Int")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid")," as the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"idType")," option or use function to determine the ",(0,n.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,n.kt)("h4",{id:"passing-int-or-uuid-to-idtype"},"Passing 'Int' or 'uuid' to ",(0,n.kt)("inlineCode",{parentName:"h4"},"idType")),(0,n.kt)("p",null,"This will allow you to determine the ",(0,n.kt)("inlineCode",{parentName:"p"},"idType")," for all resources."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const myDataProvider = dataProvider(client, {\n  idType: "Int",\n});\n')),(0,n.kt)("h4",{id:"passing-function-to-idtype"},"Passing function to ",(0,n.kt)("inlineCode",{parentName:"h4"},"idType")),(0,n.kt)("p",null,"This will allow you to determine the ",(0,n.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const idTypeMap: Record<string, "Int" | "uuid"> = {\n  users: "Int",\n  posts: "uuid",\n};\n\nconst myDataProvider = dataProvider(client, {\n  idType: (resource) => idTypeMap[resource] ?? "uuid",\n});\n')),(0,n.kt)(c,{path:"data-provider-hasura",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);