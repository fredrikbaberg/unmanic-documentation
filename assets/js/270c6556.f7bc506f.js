(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),c=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,d=p["".concat(o,".").concat(g)]||p[g]||b[g]||a;return n?i.a.createElement(d,l(l({ref:t},u),{},{components:n})):i.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},149:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/unmanic-plugins-overview-fafb5bbfe5827cd7deda88af8adf912a.gif"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),i=n(7),a=(n(0),n(100)),o={title:"Plugins Overview",description:"Unmanic Plugins > Overview",id:"overview"},l={unversionedId:"plugins/overview",id:"plugins/overview",isDocsHomePage:!1,title:"Plugins Overview",description:"Unmanic Plugins > Overview",source:"@site/docs/plugins/overview.mdx",sourceDirName:"plugins",slug:"/plugins/overview",permalink:"/docs/plugins/overview",version:"current",frontMatter:{title:"Plugins Overview",description:"Unmanic Plugins > Overview",id:"overview"},sidebar:"docs",previous:{title:"Video Encoding Settings",permalink:"/docs/configuration/video_encoder_settings"},next:{title:"Introduction to Writing Plugins",permalink:"/docs/plugins/writing_plugins/introduction"}},s=[{value:"What is a Plugin",id:"what-is-a-plugin",children:[]},{value:"Types of Plugins",id:"types-of-plugins",children:[]},{value:"Plugins repositories",id:"plugins-repositories",children:[]}],u={toc:s};function c(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{alt:"plugins overview",src:n(149).default,title:"plugins overview"})),Object(a.b)("p",null,"Unmanic features a Plugin system that enables extensibility to various sections of\nUnmnanic's task processing."),Object(a.b)("p",null,"This site hosts an official repository of Plugins available to download within the\nUnmanic application."),Object(a.b)("p",null,"Users are able to ",Object(a.b)("a",{parentName:"p",href:"/docs/plugins/writing_plugins/introduction"},"develop their own Plugins"),"\nand either host them within their own repo or submit them to be included into the\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/tree/official"},"official repository"),"."),Object(a.b)("h2",{id:"what-is-a-plugin"},"What is a Plugin"),Object(a.b)("p",null,"Plugins are stand-alone Python modules that are executed at defined stages during\nthe library optimisation process."),Object(a.b)("p",null,"At these specific stages of the library optimisation process, Unmanic will call\neach enabled Plugin in turn and then, upon completion of the Plugin execution,\nUnmanic will continue with subsequent process for that stage."),Object(a.b)("p",null,"During a call to a Plugin, said plugin will be given a set of data pertaining to the state\nof a task or the information regarding the process about to be carried out.\nA Plugin may use this data to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Manipulate the subsequent process."),Object(a.b)("li",{parentName:"ul"},"Use that data to carry out functions outside of the scope of the Unmanic application.")),Object(a.b)("p",null,"A Plugin may be written such that it is executed at multiple stages of the library\noptimisation process, however it is best practice to write a Plugin to carry out\nonly a single task."),Object(a.b)("h2",{id:"types-of-plugins"},"Types of Plugins"),Object(a.b)("p",null,"The current list of supported types:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Stage"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Runner"),Object(a.b)("th",{parentName:"tr",align:null},"Documentation"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Library Management"),Object(a.b)("td",{parentName:"tr",align:null},"File test"),Object(a.b)("td",{parentName:"tr",align:null},"on_library_management_file_test"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/docs/plugins/writing_plugins/plugin_runner_types#library-management---file-test"},"LINK"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Worker"),Object(a.b)("td",{parentName:"tr",align:null},"Processing file"),Object(a.b)("td",{parentName:"tr",align:null},"on_worker_process"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/docs/plugins/writing_plugins/plugin_runner_types#worker---processing-file"},"LINK"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Post-processor"),Object(a.b)("td",{parentName:"tr",align:null},"File movements"),Object(a.b)("td",{parentName:"tr",align:null},"on_postprocessor_file_movement"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/docs/plugins/writing_plugins/plugin_runner_types#post-processor---file-movements"},"LINK"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Post-processor"),Object(a.b)("td",{parentName:"tr",align:null},"Marking task success/failure"),Object(a.b)("td",{parentName:"tr",align:null},"on_postprocessor_task_results"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/docs/plugins/writing_plugins/plugin_runner_types#post-processor---marking-task-successfailure"},"LINK"))))),Object(a.b)("h2",{id:"plugins-repositories"},"Plugins repositories"),Object(a.b)("p",null,"Unmanic hosts an official repository of plugins for Unmanic."),Object(a.b)("p",null,"This is hosted on ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/tree/official"},"GitHub"),' under the "',Object(a.b)("em",{parentName:"p"},"official"),'" branch.'),Object(a.b)("p",null,"Anyone is able to provide Pull Request to update existing plugins or add new plugins to this repository.\nAny additions will be vetted and tested to ensure they uphold the standard expected of official plugins."),Object(a.b)("p",null,"If you wish to create your own repository to host or develop your own plugins, follow the guide here:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/plugins/plugin_repos/creating_your_own_repo"},"Creating Your Own Repository")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/plugins/plugin_repos/adding_a_custom_repo"},"Adding a Custom Repository to Unmanic"))))}c.isMDXComponent=!0}}]);