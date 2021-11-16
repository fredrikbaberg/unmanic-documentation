"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[936],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return p}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(r),p=o,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return r?t.createElement(f,i(i({ref:n},s),{},{components:r})):t.createElement(f,i({ref:n},s))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,n,r){var t=r(7294);n.Z=function(e){var n=e.children,r=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:o},n)}},6396:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(3117),o=r(7294),a=r(2389),i=r(9443);var u=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=r(9521),l=r(6010),s="tabItem_1uMI";function m(e){var n,r,t,a=e.lazy,i=e.block,m=e.defaultValue,d=e.values,p=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),_=(0,c.lx)(b,(function(e,n){return e.value===n.value}));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(n=null!=m?m:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(t=v[0])?void 0:t.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=u(),I=y.tabGroupChoices,g=y.setTabGroupChoices,k=(0,o.useState)(h),O=k[0],D=k[1],P=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var w=I[p];null!=w&&w!==O&&b.some((function(e){return e.value===w}))&&D(w)}var C=function(e){var n=e.currentTarget,r=P.indexOf(n),t=b[r].value;t!==O&&(E(n),D(t),null!=p&&g(p,t))},T=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=P.indexOf(e.currentTarget)+1;r=P[t]||P[0];break;case"ArrowLeft":var o=P.indexOf(e.currentTarget)-1;r=P[o]||P[P.length-1]}null==(n=r)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},b.map((function(e){var n=e.value,r=e.label;return o.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":O===n}),key:n,ref:function(e){return P.push(e)},onKeyDown:T,onFocus:C,onClick:C},null!=r?r:n)}))),a?(0,o.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,a.Z)();return o.createElement(m,(0,t.Z)({key:String(n)},e))}},9443:function(e,n,r){var t=(0,r(7294).createContext)(void 0);n.Z=t},234:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var t=r(3117),o=r(102),a=(r(7294),r(3905)),i=r(6396),u=r(8215),c=["components"],l={title:"Docker-Compose SMB/CIFS mounts",description:"Unmanic Installation - Docker-Compose with CIFS mounts",id:"docker_compose_cifs_mounts"},s=void 0,m={unversionedId:"advanced/docker_compose_cifs_mounts",id:"advanced/docker_compose_cifs_mounts",isDocsHomePage:!1,title:"Docker-Compose SMB/CIFS mounts",description:"Unmanic Installation - Docker-Compose with CIFS mounts",source:"@site/docs/advanced/docker_compose_cifs_mounts.mdx",sourceDirName:"advanced",slug:"/advanced/docker_compose_cifs_mounts",permalink:"/docs/advanced/docker_compose_cifs_mounts",tags:[],version:"current",frontMatter:{title:"Docker-Compose SMB/CIFS mounts",description:"Unmanic Installation - Docker-Compose with CIFS mounts",id:"docker_compose_cifs_mounts"},sidebar:"docs",previous:{title:"Docker Hardware Acceleration - VAAPI",permalink:"/docs/advanced/hardware_accelerated_encoding_vaapi"}},d=[{value:"Overview",id:"overview",children:[],level:2}],p={toc:d};function f(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Mounting a remote Windows share is possible with Docker, but requires a little more configuration."),(0,a.kt)(i.Z,{defaultValue:"docker_run",values:[{label:"Docker run",value:"docker_run"},{label:"Docker-compose",value:"docker_compose"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"docker_run",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  PUID=$(id -u)\n  PGID=$(id -g)\n\n  # CONFIG_DIR - Where you settings are saved\n  CONFIG_DIR=/config\n\n  # CACHE_DIR - A tmpfs or and folder for temporary conversion files\n  CACHE_DIR=/tmp/unmanic\n  \n  # CIFS Mount params\n  REMOTE_IP=192.168.0.20\n  PATH_TO_LIBRARY=/library\n  USERNAME=user\n  PASSWORD=password\n\n  # First create the docker volume mounting the CIFS remote share\n  docker volume create \\\n      --driver local \\\n      --opt type=cifs \\\n      --opt device=//${REMOTE_IP}${PATH_TO_LIBRARY} \\\n      --opt o=username=${USERNAME},password=${PASSWORD},vers=3.0,uid=${PUID},gid=${PGID} \\\n      --name cifs_mount\n\n  # Now create the docker container using the created CIFS volume\n  docker run -ti --rm \\\n      -e PUID=${PUID} \\\n      -e PGID=${PGID} \\\n      -p 8888:8888 \\\n      -v ${CONFIG_DIR}:/config \\\n      -v cifs_mount:/library \\\n      -v ${CACHE_DIR}:/tmp/unmanic \\\n      josh5/unmanic:latest\n"))),(0,a.kt)(u.Z,{value:"docker_compose",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  # Variables that will need to be changed:\n  #     <PUID>                            -  User id for folder/file permissions\n  #     <PGID>                            -  Group id for folder/file permissions\n  #     <PATH_TO_CONFIG>                  -  Path where Unmanic will store config files\n  #     <PATH_TO_ENCODE_CACHE>            -  Cache path for in-progress encoding tasks\n  #     <REMOTE_IP>                       -  Remote IP address of CIFS mount\n  #     <PATH_TO_LIBRARY>                 -  Path in remote machine to be mounted as your library \n  #     <USERNAME>                        -  Remote mount username\n  #     <PASSWORD>                        -  Remote mount password\n  #\n\n  ---\n  version: '2.4'\n  services:\n    unmanic:\n      container_name: unmanic\n      image: josh5/unmanic:latest\n      ports:\n        - 8888:8888\n      environment:\n        - PUID=<PUID>\n        - PGID=<PGID>\n      volumes:\n        - <PATH_TO_CONFIG>:/config\n        - cifs_mount:/library\n        - <PATH_TO_ENCODE_CACHE>:/tmp/unmanic\n\n  volumes:\n    cifs_mount:\n      driver: local\n      driver_opts:\n        type: cifs    \n        device: //<REMOTE_IP>/<PATH_TO_LIBRARY>\n        o: \"username=<USERNAME>,password=<PASSWORD>,vers=3.0,uid=<PUID>,gid=<PGID>\"\n\n\n")))))}f.isMDXComponent=!0}}]);