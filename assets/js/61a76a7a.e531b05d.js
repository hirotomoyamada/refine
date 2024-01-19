"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),c=o,m=h["".concat(p,".").concat(c)]||h[c]||d[c]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"auth-pages",title:"3. Auth Pages",tutorial:{prev:"tutorial/understanding-authprovider/create-authprovider",next:!1}},p=void 0,u={unversionedId:"tutorial/understanding-authprovider/chakra-ui/auth-pages",id:"tutorial/understanding-authprovider/chakra-ui/auth-pages",title:"3. Auth Pages",description:"In this section, we will learn how to create auth pages such as login, signup, forgot password and reset password using the `` component.",source:"@site/docs/tutorial/5-understanding-authprovider/chakra-ui/2-auth-pages.md",sourceDirName:"tutorial/5-understanding-authprovider/chakra-ui",slug:"/tutorial/understanding-authprovider/chakra-ui/auth-pages",permalink:"/docs/tutorial/understanding-authprovider/chakra-ui/auth-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/5-understanding-authprovider/chakra-ui/2-auth-pages.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1705661487,formattedLastUpdatedAt:"Jan 19, 2024",sidebarPosition:2,frontMatter:{id:"auth-pages",title:"3. Auth Pages",tutorial:{prev:"tutorial/understanding-authprovider/create-authprovider",next:!1}}},l={},d=[{value:"Login Page",id:"login-page",level:2},{value:"Register Page",id:"register-page",level:2},{value:"Forgot Password Page",id:"forgot-password-page",level:2},{value:"Update Password Page",id:"update-password-page",level:2},{value:"Customizing Auth Pages",id:"customizing-auth-pages",level:2}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=h("Checklist"),m=h("ChecklistItem"),g={toc:d};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'window.__refineAuthStatus = false;\n\nconst authProvider = {\n  login: async () => {\n    window.__refineAuthStatus = true;\n    return {\n      success: true,\n      redirectTo: "/",\n    };\n  },\n  register: async () => {\n    return {\n      success: true,\n    };\n  },\n  forgotPassword: async () => {\n    return {\n      success: true,\n    };\n  },\n  updatePassword: async () => {\n    return {\n      success: true,\n    };\n  },\n  logout: async () => {\n    window.__refineAuthStatus = false;\n    return {\n      success: true,\n      redirectTo: "/",\n    };\n  },\n  check: async () => {\n    return {\n      authenticated: window.__refineAuthStatus ? true : false,\n      redirectTo: window.__refineAuthStatus ? undefined : "/login",\n    };\n  },\n  onError: async (error) => {\n    console.error(error);\n    return { error };\n  },\n  getPermissions: async () => null,\n  getIdentity: async () => null,\n};\n\nimport { Refine, Authenticated } from "@refinedev/core";\nimport routerBindings, { CatchAllNavigate, NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { ErrorComponent, ThemedLayoutV2, refineTheme, notificationProvider, AuthPage } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <BrowserRouter>\n        <Refine\n          authProvider={authProvider}\n          routerProvider={routerBindings}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={notificationProvider}\n          resources={[\n            {\n              name: "blog_posts",\n              list: "/blog-posts",\n              show: "/blog-posts/show/:id",\n              edit: "/blog-posts/edit/:id",\n              create: "/blog-posts/create",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route index element={<NavigateToResource resource="blog_posts" />} />\n              <Route path="blog-posts">\n                <Route index element={<ChakraUIInferencer />} />\n                <Route path="show/:id" element={<ChakraUIInferencer />} />\n                <Route path="edit/:id" element={<ChakraUIInferencer />} />\n                <Route path="create" element={<ChakraUIInferencer />} />\n              </Route>\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <NavigateToResource />\n                </Authenticated>\n              }\n            >\n              <Route path="/login" element={<AuthPage type="login" />} />\n              <Route path="/register" element={<AuthPage type="register" />} />\n              <Route path="/forgot-password" element={<AuthPage type="forgotPassword" />} />\n              <Route path="/update-password" element={<AuthPage type="updatePassword" />} />\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </ChakraProvider>\n  );\n};\n')),(0,r.kt)("p",null,"In this section, we will learn how to create auth pages such as login, signup, forgot password and reset password using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage/>")," component."),(0,r.kt)("p",null,"It will allow us to easily create and customize them with various props. Though we do need to have an auth provider to use it, since we already created one in the previous section, we will just use that."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/chakra-ui/components/auth-page"},(0,r.kt)("inlineCode",{parentName:"a"},"<AuthPage/>")," documentation ","\u2192"))),(0,r.kt)("h2",{id:"login-page"},"Login Page"),(0,r.kt)("p",null,"Login page is used for authenticating the users. It provides a basic form to enter email, password and remember, which it sends to auth provider\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method via the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," hook."),(0,r.kt)("p",null,"To implement the page, open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file and import the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage/>")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AuthPage } from "@refinedev/chakra-ui";\n')),(0,r.kt)("p",null,"Then place the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to the respective route inside your router."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refin, Authenticated } from "@refinedev/core";\nimport routerBindings, { CatchAllNavigate, NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n  ErrorComponent,\n  ThemedLayoutV2,\n  refineTheme,\n  notificationProvider,\n  //highlight-next-line\n  AuthPage,\n} from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { BlogPostList } from "pages/blog-posts/list";\n\nimport { authProvider } from "./authProvider";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <BrowserRouter>\n        <Refine\n          authProvider={authProvider}\n          routerProvider={routerBindings}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={notificationProvider}\n          resources={[\n            {\n              name: "blog_posts",\n              list: "/blog-posts",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route index element={<NavigateToResource resource="blog_posts" />} />\n              <Route path="blog-posts">\n                <Route index element={<BlogPostList />} />\n              </Route>\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <NavigateToResource />\n                </Authenticated>\n              }\n            >\n              {/* highlight-start */}\n              <Route path="/login" element={<AuthPage type="login" />} />\n              {/* highlight-end */}\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </ChakraProvider>\n  );\n};\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component renders the login page by default, so we don't need to pass any props to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage/>")," component."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Email, password and remember are passed to the auth provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method like below upon login:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const authProvider = {\n    login: ({ email, password, remember }) => {\n        ...\n    },\n    ...\n};\n"))),(0,r.kt)("p",null,"Finally, run the app and navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/login")," page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/login",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\nrender(<App />);\n')),(0,r.kt)("h2",{id:"register-page"},"Register Page"),(0,r.kt)("p",null,"Register page is used to register new users. It provides a basic form to enter email and password, which it sends to the auth provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," method via the ",(0,r.kt)("inlineCode",{parentName:"p"},"useRegister")," hook."),(0,r.kt)("p",null,"To implement the page, place the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to the respective route inside your router."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, Authenticated } from "@refinedev/core";\nimport routerBindings, { CatchAllNavigate, NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n  ErrorComponent,\n  ThemedLayoutV2,\n  refineTheme,\n  notificationProvider,\n  //highlight-next-line\n  AuthPage,\n} from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { BlogPostList } from "pages/blog-posts/list";\n\nimport { authProvider } from "./authProvider";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <BrowserRouter>\n        <Refine\n          authProvider={authProvider}\n          routerProvider={routerBindings}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={notificationProvider}\n          resources={[\n            {\n              name: "blog_posts",\n              list: "/blog-posts",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route index element={<NavigateToResource resource="blog_posts" />} />\n              <Route path="blog-posts">\n                <Route index element={<BlogPostList />} />\n              </Route>\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <NavigateToResource />\n                </Authenticated>\n              }\n            >\n              <Route path="/login" element={<AuthPage type="login" />} />\n              {/* highlight-start */}\n              <Route path="/register" element={<AuthPage type="register" />} />\n              {/* highlight-end */}\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </ChakraProvider>\n  );\n};\n')),(0,r.kt)("p",null,"We need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to render the register page."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Email and password are passed to the auth provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," method like below:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const authProvider = {\n    register: ({ email, password }) => {\n        ...\n    },\n    ...\n};\n"))),(0,r.kt)("p",null,"Then run the app and navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/register")," page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/register",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/register"},'setInitialRoutes(["/register"]);\n\nrender(<App />);\n')),(0,r.kt)("h2",{id:"forgot-password-page"},"Forgot Password Page"),(0,r.kt)("p",null,"Forgot password page is used to send a reset password link to the user's email. It provides a basic form to enter email, which it sends to the auth provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method via the ",(0,r.kt)("inlineCode",{parentName:"p"},"useForgotPassword")," hook."),(0,r.kt)("p",null,"To implement the page, place the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to the respective route inside your router:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, Authenticated } from "@refinedev/core";\nimport routerBindings, { CatchAllNavigate, NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n  ErrorComponent,\n  ThemedLayoutV2,\n  refineTheme,\n  notificationProvider,\n  //highlight-next-line\n  AuthPage,\n} from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nimport { BlogPostList } from "pages/blog-posts/list";\n\nimport { authProvider } from "./authProvider";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <BrowserRouter>\n        <Refine\n          authProvider={authProvider}\n          routerProvider={routerBindings}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={notificationProvider}\n          resources={[\n            {\n              name: "blog_posts",\n              list: "/blog-posts",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route index element={<NavigateToResource resource="blog_posts" />} />\n              <Route path="blog-posts">\n                <Route index element={<BlogPostList />} />\n              </Route>\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <NavigateToResource />\n                </Authenticated>\n              }\n            >\n              <Route path="/login" element={<AuthPage type="login" />} />\n              <Route path="/register" element={<AuthPage type="register" />} />\n              {/* highlight-start */}\n              <Route path="/forgot-password" element={<AuthPage type="forgotPassword" />} />\n              {/* highlight-end */}\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </ChakraProvider>\n  );\n};\n')),(0,r.kt)("p",null,"We need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"forgotPassword")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to render the forgot password page."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The email is passed to the auth provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method like below:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\nconst authProvider = {\n    forgotPassword: ({ email }) => {\n        ...\n    },\n    ...\n};\n"))),(0,r.kt)("p",null,"Then run the app and navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/forgot-password")," page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/forgot-password",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/forgot-password"},'setInitialRoutes(["/forgot-password"]);\n\nrender(<App />);\n')),(0,r.kt)("h2",{id:"update-password-page"},"Update Password Page"),(0,r.kt)("p",null,"Update password page is used to update the user's password. It provides a basic form to enter new password and confirm password, which it sends to the auth provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"updatePassword")," method via ",(0,r.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook."),(0,r.kt)("p",null,"To implement this page, place the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to the respective route inside your router:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, Authenticated } from "@refinedev/core";\nimport routerBindings, { CatchAllNavigate, NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n  ErrorComponent,\n  ThemedLayoutV2,\n  refineTheme,\n  notificationProvider,\n  //highlight-next-line\n  AuthPage,\n} from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { BlogPostList } from "pages/blog-posts/list";\n\nimport { authProvider } from "./authProvider";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <BrowserRouter>\n        <Refine\n          authProvider={authProvider}\n          routerProvider={routerBindings}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={notificationProvider}\n          resources={[\n            {\n              name: "blog_posts",\n              list: "/blog-posts",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route index element={<NavigateToResource resource="blog_posts" />} />\n              <Route path="blog-posts">\n                <Route index element={<BlogPostList />} />\n              </Route>\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <NavigateToResource />\n                </Authenticated>\n              }\n            >\n              <Route path="/login" element={<AuthPage type="login" />} />\n              <Route path="/register" element={<AuthPage type="register" />} />\n              <Route path="/forgot-password" element={<AuthPage type="forgotPassword" />} />\n              {/* highlight-start */}\n              <Route path="/update-password" element={<AuthPage type="updatePassword" />} />\n              {/* highlight-end */}\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </ChakraProvider>\n  );\n};\n')),(0,r.kt)("p",null,"We need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"updatePassword")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage/>")," component to render the update password page."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The new password and confirm password are passed to the auth provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"updatePassword")," method like below:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const authProvider = {\n    updatePassword: ({ password, confirmPassword }) => {\n        ...\n    },\n    ...\n};\n"))),(0,r.kt)("p",null,"Then run the app and navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/update-password")," page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/update-password",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/update-password"},'setInitialRoutes(["/update-password"]);\n\nrender(<App />);\n')),(0,r.kt)("h2",{id:"customizing-auth-pages"},"Customizing Auth Pages"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"refine-cli"))," to ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages#swizzle"},"swizzle")," the auth pages and customize them:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command in the project directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    npm run refine swizzle\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," package:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"        ? Which package do you want to swizzle?\n        UI Framework\n        \u276f  @refinedev/chakra-ui\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthPage")," component:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"        ? Which component do you want to swizzle?\n        Pages\n        ErrorPage\n        \u276f  AuthPage\n")))),(0,r.kt)("p",null,"After swizzling the auth pages, you should see a success message like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    Successfully swizzled AuthPage\n\n    Files created:\n    - src/components/pages/auth/index.tsx\n    - src/components/pages/auth/components/forgotPassword.tsx\n    - src/components/pages/auth/components/login.tsx\n    - src/components/pages/auth/components/register.tsx\n    - src/components/pages/auth/components/updatePassword.tsx\n    - src/components/pages/auth/components/index.tsx\n    - src/components/pages/auth/components/styles.ts\n    ...\n")),(0,r.kt)("p",null,"Now, you can customize the auth pages by editing the files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components/pages/auth")," folder."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also customize the auth pages by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component's props."),(0,r.kt)("p",{parentName:"admonition"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/chakra-ui/components/auth-page#props"},"component props section of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<AuthPage/>")," documentation ","\u2192"))),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Checklist"},(0,r.kt)(m,{id:"auth-provider-chakra-ui-auth-pages",mdxType:"ChecklistItem"},"I understood how to use AuthPage component to render auth pages."),(0,r.kt)(m,{id:"auth-provider-chakra-ui-auth-pages-2",mdxType:"ChecklistItem"},"I understood how to customize auth pages.")))}f.isMDXComponent=!0}}]);