"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[576],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7462),a=t(7294),o=t(2389),i=t(5979),l=t(6010),c="tabItem_LplD";function u(e){var n,t,o,u=e.lazy,s=e.block,d=e.defaultValue,m=e.values,p=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),g=y.tabGroupChoices,w=y.setTabGroupChoices,I=(0,a.useState)(k),N=I[0],_=I[1],D=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var T=g[p];null!=T&&T!==N&&h.some((function(e){return e.value===T}))&&_(T)}var P=function(e){var n=e.currentTarget,t=D.indexOf(n),r=h[t].value;r!==N&&(O(n),_(r),null!=p&&w(p,r))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=D.indexOf(e.currentTarget)+1;t=D[r]||D[0];break;case"ArrowLeft":var a=D.indexOf(e.currentTarget)-1;t=D[a]||D[D.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return D.push(e)},onKeyDown:E,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function s(e){var n=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},9987:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(9877),l=t(8215),c=["components"],u={title:"Installation via Docker",description:"Unmanic Installation via Docker",id:"docker"},s=void 0,d={unversionedId:"installation/docker",id:"installation/docker",title:"Installation via Docker",description:"Unmanic Installation via Docker",source:"@site/docs/installation/docker.mdx",sourceDirName:"installation",slug:"/installation/docker",permalink:"/docs/installation/docker",tags:[],version:"current",frontMatter:{title:"Installation via Docker",description:"Unmanic Installation via Docker",id:"docker"},sidebar:"docs",previous:{title:"Installation via Python pip",permalink:"/docs/installation/pip"},next:{title:"Installation on Unraid",permalink:"/docs/installation/unraid"}},m={},p=[{value:"Supported Architectures",id:"supported-architectures",level:2},{value:"Running Unmanic",id:"running-unmanic",level:2}],f={toc:p};function v(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"supported-architectures"},"Supported Architectures"),(0,o.kt)("p",null,"The Unmanic docker image is built for the following architectures:"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It may work on others such as Windows or MacOS but they will not be officially supported at this time."),(0,o.kt)("p",{parentName:"div"},"Follow the community provided ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/unmanic_windows_install"},"Windows 10 installation guide")," if you wish to\nattempt installing and running Unmanic on Windows 10 or 11."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"linux/amd64"),(0,o.kt)("li",{parentName:"ul"},"linux/armv7"),(0,o.kt)("li",{parentName:"ul"},"linux/arm64")),(0,o.kt)("h2",{id:"running-unmanic"},"Running Unmanic"),(0,o.kt)("p",null,"There are a number of ways you may start Unmanic with Docker."),(0,o.kt)("p",null,"The most basic method is shown below:"),(0,o.kt)(i.Z,{defaultValue:"docker_run",values:[{label:"Docker run",value:"docker_run"},{label:"Docker-compose",value:"docker_compose"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"docker_run",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  PUID=$(id -u)\n  PGID=$(id -g)\n\n  # CONFIG_DIR - Where you settings are saved\n  CONFIG_DIR=/config\n\n  # LIBRARY_DIR - The location/locations of your library\n  LIBRARY_DIR=/library\n\n  # CACHE_DIR - A tmpfs or and folder for temporary conversion files\n  CACHE_DIR=/tmp/unmanic\n\n  docker run -ti --rm \\\n      -e PUID=${PUID} \\\n      -e PGID=${PGID} \\\n      -p 8888:8888 \\\n      -v ${CONFIG_DIR}:/config \\\n      -v ${LIBRARY_DIR}:/library \\\n      -v ${CACHE_DIR}:/tmp/unmanic \\\n      josh5/unmanic:latest\n"))),(0,o.kt)(l.Z,{value:"docker_compose",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  # Variables that will need to be changed:\n  #     <PUID>                            -  User id for folder/file permissions\n  #     <PGID>                            -  Group id for folder/file permissions\n  #     <PATH_TO_CONFIG>                  -  Path where Unmanic will store config files\n  #     <PATH_TO_LIBRARY>                 -  Path where you store the files that Unmanic will scan\n  #     <PATH_TO_ENCODE_CACHE>            -  Cache path for in-progress encoding tasks\n  #\n\n  ---\n  version: '2.4'\n  services:\n    unmanic:\n      container_name: unmanic\n      image: josh5/unmanic:latest\n      ports:\n        - 8888:8888\n      environment:\n        - PUID=<PUID>\n        - PGID=<PGID>\n      volumes:\n        - <PATH_TO_CONFIG>:/config\n        - <PATH_TO_LIBRARY>:/library\n        - <PATH_TO_ENCODE_CACHE>:/tmp/unmanic\n")))),(0,o.kt)("p",null,"For more advanced methods using hardware acceleration, see these articles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/advanced/hardware_accelerated_encoding_nvenc"},"NVENC Hardware Acceleration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/advanced/hardware_accelerated_encoding_vaapi"},"VAAPI Hardware Acceleration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/advanced/docker_compose_cifs_mounts"},"Mounting Windows Samba/CIFS Shares"))))}v.isMDXComponent=!0}}]);