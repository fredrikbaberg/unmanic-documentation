"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[653],{9845:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(2004),s=["components"],l={title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},d=void 0,c={unversionedId:"installation/unraid",id:"installation/unraid",isDocsHomePage:!1,title:"Installation on Unraid",description:"Unmanic Installation on Unraid",source:"@site/docs/installation/unraid.mdx",sourceDirName:"installation",slug:"/installation/unraid",permalink:"/docs/installation/unraid",tags:[],version:"current",frontMatter:{title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},sidebar:"docs",previous:{title:"Installation via Docker",permalink:"/docs/installation/docker"},next:{title:"Installation on Synology",permalink:"/docs/installation/synology"}},u=[{value:"Video Guide:",id:"video-guide",children:[]},{value:"Instructions:",id:"instructions",children:[]},{value:"Some optional configuration steps:",id:"some-optional-configuration-steps",children:[{value:"Multiple libraries:",id:"multiple-libraries",children:[]},{value:"Nvidia GPU hardware encoding: DEPRECATED",id:"nvidia-gpu-hardware-encoding-deprecated",children:[]}]}],p={toc:u};function m(e){var t=e.components,l=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"video-guide"},"Video Guide:"),(0,o.kt)(r.Z,{url:"https://www.youtube.com/watch?v=8_t_DJ6azkw",light:!0,controls:!0,mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"instructions"},"Instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("strong",{parentName:"li"},"Docker"),' tab and scroll down to the bottom where it says "Template Repositories".'),(0,o.kt)("li",{parentName:"ol"},"Enter in a URL of ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Josh5/unraid-docker-templates"},"https://github.com/Josh5/unraid-docker-templates"),' in the "Template repositories" field.'),(0,o.kt)("li",{parentName:"ol"},'Click on the "Save" button')),(0,o.kt)("img",{className:"screenshot",src:n(7334).Z}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Scroll back to the bottom of the ",(0,o.kt)("strong",{parentName:"li"},"Docker"),' tab and then click on the "Add Container" button.'),(0,o.kt)("li",{parentName:"ol"},'Click on the "Template" drop-down menu and select the ',(0,o.kt)("em",{parentName:"li"},"unmanic")," template.")),(0,o.kt)("img",{className:"screenshot",src:n(4280).Z}),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Modify the WebUI variables as desired:")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note:\nThe Encoding Cache Directory is where files are written while they are being transcoded.\nSetting this to /dev/shm/unmanic will cause the files to be written to a RAM tmpfs. Set this to whatever you like.")),(0,o.kt)("img",{className:"screenshot",src:n(3151).Z}),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},'Scroll to the bottom and click the "APPLY" button')),(0,o.kt)("p",null,"Once the image is downloaded you should see it appear in the ",(0,o.kt)("strong",{parentName:"p"},"Docker")," tab."),(0,o.kt)("h2",{id:"some-optional-configuration-steps"},"Some optional configuration steps:"),(0,o.kt)("h3",{id:"multiple-libraries"},"Multiple libraries:"),(0,o.kt)("img",{className:"screenshot",src:n(6735).Z}),(0,o.kt)("h3",{id:"nvidia-gpu-hardware-encoding-deprecated"},"Nvidia GPU hardware encoding: ","[DEPRECATED]"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only use the below instructions if you are running Unraid version older than 6.9.0.\nMore recent versions of Unraid ship with NVIDIA drivers already installed."))),(0,o.kt)("p",null,"To use your NVIDIA GPU for hardware encoding in this container, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the Unraid Nvidia Plugin to install a version of Unraid with the Nvidia Drivers installed.\n",(0,o.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/77813-plugin-linuxserverio-unraid-nvidia/"},"Linuxserverio Unraid NVIDIA Plugin"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Toggle this Docker Container template editor to "Advanced View".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'In the "Extra Parameters" field, add "--runtime=nvidia".'))),(0,o.kt)("img",{className:"screenshot",src:n(306).Z}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Expand the template "Show more settings..." section near the bottom.'),(0,o.kt)("li",{parentName:"ol"},'In the "NVIDIA_VISIBLE_DEVICES" variable, copy your GPU UUID (can be found in the Unraid Nvidia Plugin. See that forum thread for details)')),(0,o.kt)("img",{className:"screenshot",src:n(1962).Z}),(0,o.kt)("p",null,"Once you have completed these steps, you should be able to use the ",(0,o.kt)("strong",{parentName:"p"},"h264_nvenc")," and ",(0,o.kt)("strong",{parentName:"p"},"hvec_nvenc")," encoders."))}m.isMDXComponent=!0},7334:function(e,t,n){t.Z=n.p+"assets/images/unraid-docker-templates-42aba77f97844ea92c531eeb6b4f373b.png"},306:function(e,t,n){t.Z=n.p+"assets/images/unraid-nvidia-plugin_6.8-da64a318fd36d8aa6910ec45acbcd2c0.png"},4280:function(e,t,n){t.Z=n.p+"assets/images/unraid-select-unmanic-template-304d9c9f7ff233f834c4d35693bc0d99.png"},6735:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-multiple-libraries-47a58e38e3fac055cbdef0d31380ce1e.png"},1962:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-nvidia-gpu-1f2d09896e31d11bb4a5ab75e4d13c58.png"},3151:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-volumes-aac0c1ede49256a5691ce087d45f89b1.png"}}]);