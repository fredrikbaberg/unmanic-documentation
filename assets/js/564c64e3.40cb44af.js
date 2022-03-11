"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[265],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,v=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(v,l(l({ref:n},c),{},{components:t})):a.createElement(v,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(3117),r=t(7294),i=t(2389),l=t(9553),o=t(6010),u="tabItem_LplD";function s(e){var n,t,i,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,l.lx)(y,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,r.useState)(b),O=N[0],E=N[1],T=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=k[d];null!=I&&I!==O&&y.some((function(e){return e.value===I}))&&E(I)}var P=function(e){var n=e.currentTarget,t=T.indexOf(n),a=y[t].value;a!==O&&(x(n),E(a),null!=d&&w(d,a))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},v)},y.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function c(e){var n=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},8694:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),l=t(9877),o=t(8215),u=["components"],s={title:"Installation via Python pip",description:"Unmanic Installation via Python pip",id:"pip"},c=void 0,p={unversionedId:"installation/pip",id:"installation/pip",title:"Installation via Python pip",description:"Unmanic Installation via Python pip",source:"@site/docs/installation/pip.mdx",sourceDirName:"installation",slug:"/installation/pip",permalink:"/docs/installation/pip",tags:[],version:"current",frontMatter:{title:"Installation via Python pip",description:"Unmanic Installation via Python pip",id:"pip"},sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/requirements"},next:{title:"Installation via Docker",permalink:"/docs/installation/docker"}},m={},d=[{value:"Instructions",id:"instructions",level:2},{value:"Running Unmanic",id:"running-unmanic",level:2},{value:"Automatically starting Unmanic",id:"automatically-starting-unmanic",level:2}],v={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install unmanic\n")),(0,i.kt)("h2",{id:"running-unmanic"},"Running Unmanic"),(0,i.kt)("p",null,"To run unmanic, simply run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"unmanic\n")),(0,i.kt)("p",null,"By default Unmanic's WebUI will be accessable on port 8888. You can change this by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"--port")," flag."),(0,i.kt)("p",null,"For more information run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"unmanic --help\n")),(0,i.kt)("h2",{id:"automatically-starting-unmanic"},"Automatically starting Unmanic"),(0,i.kt)("p",null,"You may wish to automatically start Unmanic when you PC starts."),(0,i.kt)("p",null,"This can be achieved in a few ways:"),(0,i.kt)(l.Z,{defaultValue:"systemd",values:[{label:"Systemd",value:"systemd"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"systemd",mdxType:"TabItem"},(0,i.kt)("p",null,"Run the following commands as root"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mkdir -p \\\n/usr/local/lib/systemd/system \\\n/opt/unmanic\n\nchown -R nobody:video /opt/unmanic\n\ncat << EOF > /usr/local/lib/systemd/system/unmanic.service\n[Unit]\nDescription= Unmanic - Library Optimiser\nAfter=network-online.target\nStartLimitInterval=200\nStartLimitBurst=3\n\n[Service]\nType=simple\nUser=nobody\nGroup=video\nEnvironment="HOME_DIR=/opt/unmanic"\nWorkingDirectory=/opt/unmanic\nExecStart=/usr/local/bin/unmanic\nRestart=always\nRestartSec=30\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl enable unmanic.service\nsystemctl start unmanic.service\n')),(0,i.kt)("p",null,"You can view the status of the running process with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status unmanic.service\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This example runs unmanic as the user:group nobody:video.\nMake sure that your library is accessible by this group."),(0,i.kt)("p",{parentName:"div"},"Alternatively, if you already have a user:group configured\nfor accessing your library, modify the above systemd unit with those details."))))))}f.isMDXComponent=!0}}]);