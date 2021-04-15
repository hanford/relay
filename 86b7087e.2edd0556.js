(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{1142:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(a),O=n,j=m["".concat(c,".").concat(O)]||m[O]||u[O]||l;return a?r.a.createElement(j,b(b({ref:t},i),{},{components:a})):r.a.createElement(j,b({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var i=2;i<l;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},661:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),l=(a(0),a(1142)),c={id:"compatibility-cheatsheet",title:"Compatibility Cheatsheet",original_id:"compatibility-cheatsheet"},b={unversionedId:"compatibility-cheatsheet",id:"version-v10.0.0/compatibility-cheatsheet",isDocsHomePage:!1,title:"Compatibility Cheatsheet",description:"What works with what? Relay Compat ('react-relay/compat') is the most flexible.",source:"@site/versioned_docs/version-v10.0.0/Modern-CompatibilityCheatsheet.md",slug:"/compatibility-cheatsheet",permalink:"/docs/v10.0.0/compatibility-cheatsheet",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.0.0/Modern-CompatibilityCheatsheet.md",version:"v10.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1618499745},o=[{value:"Can RelayRootContainer use:",id:"can-relayrootcontainer-use",children:[]},{value:"Can QueryRenderer using Classic Environment (<code>Store</code> in <code>react-relay/classic</code>) use:",id:"can-queryrenderer-using-classic-environment-store-in-react-relayclassic-use",children:[]},{value:"Can QueryRenderer using Modern Environment use:",id:"can-queryrenderer-using-modern-environment-use",children:[]},{value:"Can React Modern Component use:",id:"can-react-modern-component-use",children:[]},{value:"Can React Compat Component use:",id:"can-react-compat-component-use",children:[]},{value:"Can React Classic Component use:",id:"can-react-classic-component-use",children:[]}],i={toc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"What works with what? Relay Compat (",Object(l.b)("inlineCode",{parentName:"p"},"'react-relay/compat'"),") is the most flexible.\nCompat components and mutations can be used by everything. Compat components can also have any kind of children."),Object(l.b)("p",null,"However components using the Relay Modern API (",Object(l.b)("inlineCode",{parentName:"p"},"'react-relay'"),") and the Relay Classic API (",Object(l.b)("inlineCode",{parentName:"p"},"'react-relay/classic'"),") cannot be used with each other."),Object(l.b)("h3",{id:"can-relayrootcontainer-use"},"Can RelayRootContainer use:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("h3",{id:"can-queryrenderer-using-classic-environment-store-in-react-relayclassic-use"},"Can QueryRenderer using Classic Environment (",Object(l.b)("inlineCode",{parentName:"h3"},"Store")," in ",Object(l.b)("inlineCode",{parentName:"h3"},"react-relay/classic"),") use:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("h3",{id:"can-queryrenderer-using-modern-environment-use"},"Can QueryRenderer using Modern Environment use:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(l.b)("h3",{id:"can-react-modern-component-use"},"Can React Modern Component use:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(l.b)("h3",{id:"can-react-compat-component-use"},"Can React Compat Component use:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes","*"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(l.b)("p",null,"*"," Modern API doesn't support mutation fragments. You might have to inline the mutation fragments from your legacy mutation in the fragment of the component."),Object(l.b)("h3",{id:"can-react-classic-component-use"},"Can React Classic Component use:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Component"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Classic Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compat Mutation"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modern Mutation"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))))}p.isMDXComponent=!0}}]);