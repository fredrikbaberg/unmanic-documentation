(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/unmanic-settings-general-d90c8e17c9436f30dc057ff84584db3c.jpg"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(96)),o={title:"General Settings",description:"Unmanic Configuration - General",id:"overview_and_general_settings"},l={unversionedId:"configuration/overview_and_general_settings",id:"configuration/overview_and_general_settings",isDocsHomePage:!1,title:"General Settings",description:"Unmanic Configuration - General",source:"@site/docs/configuration/overview_and_general_settings.md",sourceDirName:"configuration",slug:"/configuration/overview_and_general_settings",permalink:"/docs/configuration/overview_and_general_settings",version:"current",frontMatter:{title:"General Settings",description:"Unmanic Configuration - General",id:"overview_and_general_settings"},sidebar:"docs",previous:{title:"Installation on Unraid",permalink:"/docs/installation/unraid"},next:{title:"Plugins Overview",permalink:"/docs/plugins/overview"}},c=[{value:"Video Guide:",id:"video-guide",children:[]},{value:"Paths",id:"paths",children:[]},{value:"Workers",id:"workers",children:[]},{value:"Library Watcher",id:"library-watcher",children:[]},{value:"Library Scanner",id:"library-scanner",children:[]},{value:"Keep Filename History",id:"keep-filename-history",children:[]},{value:"Debugging",id:"debugging",children:[]}],s={toc:c};function b(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"video-guide"},"Video Guide:"),Object(a.b)("figure",{class:"video-container"},Object(a.b)("iframe",{width:"500",height:"285",src:"https://www.youtube.com/embed/vDVH0QJHJzE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"1"})),Object(a.b)("p",null,Object(a.b)("img",{alt:"Settings - General",src:n(149).default,title:"settings-general"})),Object(a.b)("p",null,'Unmanic is designed to watch a single library of content. Under the "General" tab you will find settings pertaining to how the application manages your library.'),Object(a.b)("hr",null),Object(a.b)("h2",{id:"paths"},"Paths"),Object(a.b)("h5",{id:"library-path"},"Library path:"),Object(a.b)("p",null,"Browse to the location of your library. The path selected here will be used by the library scanner and watcher as configured below."),Object(a.b)("h5",{id:"cache-path"},"Cache path:"),Object(a.b)("p",null,"Browse to a location where temporary data will be written while processing your library files."),Object(a.b)("h2",{id:"workers"},"Workers"),Object(a.b)("h5",{id:"number-of-workers-to-spawn"},"Number of workers to spawn:"),Object(a.b)("p",null,"Workers are separate threads which carry out tasks in parallel. Selecting more workers means more tasks can be carried out simultaneously. Note that this may have diminishing returns as you increase this number depending on the types of tasks to be carried out by the workers."),Object(a.b)("h2",{id:"library-watcher"},"Library Watcher"),Object(a.b)("h5",{id:"enable-watcher"},"Enable watcher"),Object(a.b)("p",null,"The library watcher monitors your selected ",Object(a.b)("em",{parentName:"p"},"Library path")," for changes written to disk. This includes newly created files, file movements ending up in that path or files edited within that path."),Object(a.b)("h2",{id:"library-scanner"},"Library Scanner"),Object(a.b)("h5",{id:"library-scan-schedule"},"Library scan schedule"),Object(a.b)("p",null,"Set the interval in in minutes that you wish to have Unmanic scan the selected ",Object(a.b)("em",{parentName:"p"},"Library path")," for files that should be added to the pending task list."),Object(a.b)("p",null,"The value entered here will be the time in minutes that Unmanic will wait before starting a library scan since the last library scan completed. Eg. If you set this to 5 and it take Unmanic 30 mins to scan your library, then 5 minutes after it completes the library scan, it will begin again."),Object(a.b)("p",null,"If you wish to disable the Library scanner, set this value to 0.\nThis will also disable the ability to perform manual scans from the Dashboard."),Object(a.b)("h5",{id:"run-scan-on-start"},"Run scan on start"),Object(a.b)("p",null,"Selecting this option to start scanning your ",Object(a.b)("em",{parentName:"p"},"Library path")," when Unmanic starts."),Object(a.b)("h2",{id:"keep-filename-history"},"Keep Filename History"),Object(a.b)("h5",{id:"keep-filename-history-1"},"Keep filename history"),Object(a.b)("p",null,"Select this option to have Unmanic write converted files to a ",Object(a.b)("inlineCode",{parentName:"p"},"file_info")," file in the original directory."),Object(a.b)("p",null,"As Unmanic may remux and rename files, it may disrupt other systems that point to those files. A common method to circumvent this disruption is to maintain a ",Object(a.b)("inlineCode",{parentName:"p"},"file_info")," file in the directory where that file was. Unmanic is able to update or create such a file so that other applications supporting the features ",Object(a.b)("inlineCode",{parentName:"p"},"file_info")," provides may associate a new file with it's original name."),Object(a.b)("h2",{id:"debugging"},"Debugging"),Object(a.b)("h5",{id:"enable-debugging"},"Enable debugging"),Object(a.b)("p",null,"Select this to enable additional debug logging to the Unmanic.log files. "),Object(a.b)("p",null,"You will need to restart Unmanic for this to take effect."))}b.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,h=u["".concat(o,".").concat(p)]||u[p]||d[p]||a;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);