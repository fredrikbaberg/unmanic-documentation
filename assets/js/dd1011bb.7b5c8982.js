"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[473],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(f,s(s({ref:r},c),{},{components:t})):n.createElement(f,s({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},5064:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(7294),a=t(9443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var u=function(e){var r,t=e.lazy,a=e.block,u=e.defaultValue,c=e.values,d=e.groupId,p=e.className,m=n.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=u?u:null==(r=m.find((function(e){return e.props.default})))?void 0:r.props.value,g=o(),h=g.tabGroupChoices,b=g.setTabGroupChoices,v=(0,n.useState)(k),y=v[0],w=v[1],N=[];if(null!=d){var O=h[d];null!=O&&O!==y&&f.some((function(e){return e.value===O}))&&w(O)}var P=function(e){var r=e.currentTarget,t=N.indexOf(r),n=f[t].value;w(n),null!=d&&(b(d,n),setTimeout((function(){var e,t,n,a,o,s,i,u;(e=r.getBoundingClientRect(),t=e.top,n=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,u=s.innerWidth,t>=0&&o<=u&&a<=i&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(l),setTimeout((function(){return r.classList.remove(l)}),2e3))}),150))},E=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.target)+1;t=N[n]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},p)},f.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:y===r?0:-1,"aria-selected":y===r,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":y===r}),key:r,ref:function(e){return N.push(e)},onKeyDown:E,onFocus:P,onClick:P},null!=t?t:r)}))),t?(0,n.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==y})}))))}},9443:function(e,r,t){var n=(0,t(7294).createContext)(void 0);r.Z=n},3746:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),s=(t(5064),t(8215),["components"]),i={title:"Dashboard Workers",description:"Workers",id:"workers"},l=void 0,u={unversionedId:"dashboard/workers",id:"dashboard/workers",isDocsHomePage:!1,title:"Dashboard Workers",description:"Workers",source:"@site/docs/dashboard/workers.mdx",sourceDirName:"dashboard",slug:"/dashboard/workers",permalink:"/docs/dashboard/workers",tags:[],version:"current",frontMatter:{title:"Dashboard Workers",description:"Workers",id:"workers"},sidebar:"docs",previous:{title:"Dashboard Pending Tasks",permalink:"/docs/dashboard/pending_tasks"},next:{title:"Library Settings",permalink:"/docs/configuration/library_settings"}},c=[{value:"What Are Workers",id:"what-are-workers",children:[]},{value:"Worker States",id:"worker-states",children:[]},{value:"Worker Status",id:"worker-status",children:[]}],d={toc:c};function p(e){var r=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("img",{className:"screenshot",src:t(8237).Z}),(0,o.kt)("h2",{id:"what-are-workers"},"What Are Workers"),(0,o.kt)("p",null,"Workers carry out the main processing against your tasks.\nYour workers run simultaneously, and you can configure Unmanic to have up to 12 concurrent workers at any time.\nThe number of workers that you choose to spawn should be determined based on your needs."),(0,o.kt)("h2",{id:"worker-states"},"Worker States"),(0,o.kt)("p",null,"Workers can be in a number of states:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"State"),(0,o.kt)("th",{parentName:"tr",align:null},"Colour"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Idle"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{color:"var(--ifm-color-warning)"}},"YELLOW"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Processing - progress known"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{color:"var(--ifm-color-info)"}},"BLUE")," (percent shown)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Processing - progress indeterminate"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{color:"var(--ifm-color-info)"}},"BLUE")," (progress dialog spinning)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Paused - idle"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{color:"var(--ifm-color-danger)"}},"RED"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Paused - processing"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{color:"var(--ifm-color-danger)"}},"RED")," (progress dialog spinning)")))),(0,o.kt)("h4",{id:"idle"},"Idle"),(0,o.kt)("p",null,"An idle worker is ready to accept another task from the Pending Task queue."),(0,o.kt)("h4",{id:"processing---progress-known"},"Processing - progress known"),(0,o.kt)("p",null,"The worker is currently processing a task.\nThe progress of the Plugin's command is able to be parsed."),(0,o.kt)("h4",{id:"processing---progress-indeterminate"},"Processing - progress indeterminate"),(0,o.kt)("p",null,"The worker is currently processing a task.\nThe progress of the Plugin's command is not able to be parsed."),(0,o.kt)("h4",{id:"paused---idle"},"Paused - idle"),(0,o.kt)("p",null,"The worker is paused and it currently has no task."),(0,o.kt)("h4",{id:"paused---processing"},"Paused - processing"),(0,o.kt)("p",null,"The worker is paused. It does currently have a task assigned to it being processed."),(0,o.kt)("h2",{id:"worker-status"},"Worker Status"),(0,o.kt)("p",null,"You may expand each worker card display more in-depth information about its current status."),(0,o.kt)("img",{className:"screenshot",src:t(7918).Z}),(0,o.kt)("p",null,"Once expanded you will see, among other things, a live tail of the current command's log output."),(0,o.kt)("p",null,"You will also have an ",(0,o.kt)("strong",{parentName:"p"},"Options")," dropdown for pausing/resuming or terminating this individual worker and its current subprocess."))}p.isMDXComponent=!0},6010:function(e,r,t){function n(e){var r,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(a&&(a+=" "),a+=t);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function a(){for(var e,r,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(a&&(a+=" "),a+=r);return a}t.d(r,{Z:function(){return a}})},7918:function(e,r,t){r.Z=t.p+"assets/images/unmanic-dashboard-workers-status-b415d0b9fbaa30665431a0825c3e32e3.png"},8237:function(e,r,t){r.Z=t.p+"assets/images/unmanic-dashboard-workers-6b6c7f4cd7de100b1a67cf4dd68978dd.png"}}]);