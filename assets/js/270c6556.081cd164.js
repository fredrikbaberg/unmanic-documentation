(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/unmanic-plugins-overview-fafb5bbfe5827cd7deda88af8adf912a.gif"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(95)),l={title:"Plugins Overview",description:"Unmanic Plugins > Overview",id:"overview"},o={unversionedId:"plugins/overview",id:"plugins/overview",isDocsHomePage:!1,title:"Plugins Overview",description:"Unmanic Plugins > Overview",source:"@site/docs/plugins/overview.mdx",slug:"/plugins/overview",permalink:"/docs/plugins/overview",version:"current",sidebar:"docs",previous:{title:"Configuration > General",permalink:"/docs/configuration/general"},next:{title:"Introduction to Writing Plugins",permalink:"/docs/plugins/writing_plugins/introduction"}},s=[{value:"What is a Plugin",id:"what-is-a-plugin",children:[]},{value:"Types of Plugins",id:"types-of-plugins",children:[]}],c={toc:s};function u(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"plugins overview",src:n(144).default,title:"plugins overview"})),Object(i.b)("p",null,"Unmanic features a Plugin system that enables extensibility to various sections of\nUnmnanic's task processing."),Object(i.b)("p",null,"This site hosts an official repository of Plugins available to download within the\nUnmanic application."),Object(i.b)("p",null,"Users are able to ",Object(i.b)("a",{parentName:"p",href:"/docs/plugins/writing_plugins/introduction"},"develop their own Plugins"),"\nand either host them within their own repo or submit them to be included into the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/tree/official"},"official repository"),"."),Object(i.b)("h2",{id:"what-is-a-plugin"},"What is a Plugin"),Object(i.b)("p",null,"Plugins are stand-alone Python modules that are executed at defined stages during\nthe library optimisation process."),Object(i.b)("p",null,"At these specific stages of the library optimisation process, Unmanic will call\neach enabled Plugin in turn and then, upon completion of the Plugin execution,\nUnmanic will continue with subsequent process for that stage."),Object(i.b)("p",null,"During a call to a Plugin, said plugin will be given a set of data pertaining to the state\nof a task or the information regarding the process about to be carried out.\nA Plugin may use this data to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Manipulate the subsequent process."),Object(i.b)("li",{parentName:"ul"},"Use that data to carry out functions outside of the scope of the Unmanic application.")),Object(i.b)("p",null,"A Plugin may be written such that it is executed at multiple stages of the library\noptimisation process, however it is best practice to write a Plugin to carry out\nonly a single task."),Object(i.b)("h2",{id:"types-of-plugins"},"Types of Plugins"),Object(i.b)("p",null,"The current list of supported types:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Stage"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Runner"),Object(i.b)("th",{parentName:"tr",align:null},"Documentation"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Library Management"),Object(i.b)("td",{parentName:"tr",align:null},"File test"),Object(i.b)("td",{parentName:"tr",align:null},"on_library_management_file_test"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/docs/plugins/writing_plugins/plugin_runner_types#library-management---file-test"},"LINK"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Worker"),Object(i.b)("td",{parentName:"tr",align:null},"Processing file"),Object(i.b)("td",{parentName:"tr",align:null},"on_worker_process"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/docs/plugins/writing_plugins/plugin_runner_types#worker---processing-file"},"LINK"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Post-processor"),Object(i.b)("td",{parentName:"tr",align:null},"File movements"),Object(i.b)("td",{parentName:"tr",align:null},"on_postprocessor_file_movement"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/docs/plugins/writing_plugins/plugin_runner_types#post-processor---file-movements"},"LINK"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Post-processor"),Object(i.b)("td",{parentName:"tr",align:null},"Marking task success/failure"),Object(i.b)("td",{parentName:"tr",align:null},"on_postprocessor_task_results"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/docs/plugins/writing_plugins/plugin_runner_types#post-processor---marking-task-successfailure"},"LINK"))))))}u.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,m=p["".concat(l,".").concat(g)]||p[g]||b[g]||i;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);