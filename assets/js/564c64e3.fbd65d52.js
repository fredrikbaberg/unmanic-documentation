(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(89)),c=n(96),o=n(97),s={title:"Python pip",description:"Unmanic Installation - PIP",id:"pip"},l={unversionedId:"installation/pip",id:"installation/pip",isDocsHomePage:!1,title:"Python pip",description:"Unmanic Installation - PIP",source:"@site/docs/installation/pip.mdx",slug:"/installation/pip",permalink:"/docs/installation/pip",version:"current",sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/requirements"},next:{title:"Docker",permalink:"/docs/installation/docker"}},u=[{value:"Instructions",id:"instructions",children:[]},{value:"Running Unmanic",id:"running-unmanic",children:[]},{value:"Automatically starting Unmanic",id:"automatically-starting-unmanic",children:[]}],m={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"instructions"},"Instructions"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install unmanic\n")),Object(i.b)("h2",{id:"running-unmanic"},"Running Unmanic"),Object(i.b)("p",null,"To run unmanic, simply run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"unmanic\n")),Object(i.b)("h2",{id:"automatically-starting-unmanic"},"Automatically starting Unmanic"),Object(i.b)("p",null,"You may wish to automatically start Unmanic when you PC starts."),Object(i.b)("p",null,"This can be achieved in a few ways:"),Object(i.b)(c.a,{defaultValue:"systemd",values:[{label:"Systemd",value:"systemd"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"systemd",mdxType:"TabItem"},Object(i.b)("p",null,"Run the following commands as root"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'mkdir -p \\\n/usr/local/lib/systemd/system \\\n/opt/unmanic\n\nchown -R nobody:video /opt/unmanic\n\ncat << EOF > /usr/local/lib/systemd/system/unmanic.service\n[Unit]\nDescription= Unmanic - Library Optimiser\nAfter=network-online.target\nStartLimitInterval=200\nStartLimitBurst=3\n\n[Service]\nType=simple\nUser=nobody\nGroup=video\nEnvironment="HOME_DIR=/opt/unmanic"\nWorkingDirectory=/opt/unmanic\nExecStart=/usr/local/bin/unmanic\nRestart=always\nRestartSec=30\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl enable unmanic.service\nsystemctl start unmanic.service\n')),Object(i.b)("p",null,"You can view the status of the running process with"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"systemctl status unmanic.service\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This example runs unmanic as the user:group nobody:video.\nMake sure that your library is accessible by this group."),Object(i.b)("p",{parentName:"div"},"Alternatively, if you already have a user:group configured\nfor accessing your library, modify the above systemd unit with those details."))))))}p.isMDXComponent=!0},87:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),b=a,d=m["".concat(c,".").concat(b)]||m[b]||p[b]||i;return n?r.a.createElement(d,o(o({ref:t},l),{},{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";var a=n(0),r=n(92);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},92:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},96:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(91),c=n(87),o=n(56),s=n.n(o);const l=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:p,className:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[y,v]=Object(a.useState)(o),O=a.Children.toArray(e.children),h=[];if(null!=p){const e=d[p];null!=e&&e!==y&&m.some((t=>t.value===e))&&v(e)}const g=e=>{const t=e.target,n=h.indexOf(t),a=O[n].props.value;v(a),null!=p&&(f(p,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:c}=window;return t>=0&&r<=c&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((()=>t.classList.remove(s.a.tabItemActive)),2e3))}),150))},j=e=>{var t;let n;switch(e.keyCode){case u:{const t=h.indexOf(e.target)+1;n=h[t]||h[0];break}case l:{const t=h.indexOf(e.target)-1;n=h[t]||h[h.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},m.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>h.push(e),onKeyDown:j,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(O.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},97:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);