var e=Object.assign;import{o as t,c as a,a as n,w as s,v as o,t as l,b as r,d as i,p as c,e as d,r as u,f as h,g as p,h as f,i as v,j as g,m,F as b,k as y,l as w,n as k,u as C,G as x,q as _,s as S,x as T,y as I}from"./vendor.92dd91de.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const l=new URL(e,n);if(self[t].moduleMap[l])return a(self[t].moduleMap[l]);const r=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){o(new Error(`Failed to import: ${e}`)),s(i)},onload(){a(self[t].moduleMap[l]),s(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");const j={name:"VueToggles",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},checkedText:{type:String,default:null},uncheckedText:{type:String,default:null},width:{type:[Number,String],default:75},height:{type:[Number,String],default:25},uncheckedBg:{type:String,default:"#939393"},checkedBg:{type:String,default:"#5850ec"},dotColor:{type:String,default:"#fff"},dotClass:{type:String,default:""},fontSize:{type:[Number,String],default:"12"},checkedColor:{type:String,default:"#fff"},uncheckedColor:{type:String,default:"#fff"},fontWeight:{type:[Number,String],default:"normal"},unit:{type:String,default:"px"}},emits:["click"],computed:{bgStyle(){return{width:this.width+this.unit,height:this.height+this.unit,background:this.value&&!this.disabled?this.checkedBg:this.uncheckedBg}},dotStyle(){const e={background:this.dotColor,width:this.height-8+this.unit,height:this.height-8+this.unit,"min-width":this.height-8+this.unit,"min-height":this.height-8+this.unit,"margin-left":this.value?this.width-(this.height-3)+this.unit:"5px"};return(!this.value&&this.reverse||this.value&&!this.reverse)&&(e.marginLeft=this.width-(this.height-3)+this.unit),(this.value&&this.reverse||!this.value&&!this.reverse)&&(e.marginLeft="5px"),e},textStyle(){const e={"font-weight":this.fontWeight,"font-size":this.fontSize+this.unit,color:this.value&&!this.disabled?this.checkedColor:this.uncheckedColor,right:this.value?this.height-3+this.unit:"auto",left:this.value?"auto":this.height-3+this.unit};return!this.value&&this.reverse&&(e.right=this.height-3+this.unit,e.left="auto"),this.value&&this.reverse&&(e.left=this.height-3+this.unit,e.right="auto"),e}}};j.render=function(e,c,d,u,h,p){return t(),a("span",{class:"vue-toggles",style:p.bgStyle,role:"switch",tabindex:"0","aria-checked":d.value?"true":"false","aria-readonly":d.disabled?"true":"false",onClick:c[1]||(c[1]=t=>d.disabled?null:e.$emit("click",d.value)),onKeyup:[c[2]||(c[2]=r(i((t=>d.disabled?null:e.$emit("click",d.value)),["prevent"]),["enter"])),c[3]||(c[3]=r(i((t=>d.disabled?null:e.$emit("click",d.value)),["prevent"]),["space"]))]},[n("span",{"aria-hidden":"true",style:p.dotStyle,class:["dot",d.dotClass]},[s(n("span",{style:p.textStyle,class:"text"},l(d.checkedText),5),[[o,d.checkedText&&d.value]]),s(n("span",{style:p.textStyle,class:"text"},l(d.uncheckedText),5),[[o,d.uncheckedText&&!d.value]])],6)],44,["aria-checked","aria-readonly"])};const J={},$=h("data-v-0f8d055a");c("data-v-0f8d055a");const R={class:"social"};d();const L=$(((e,n)=>(t(),a("div",R,[u(e.$slots,"default")]))));J.render=L,J.__scopeId="data-v-0f8d055a";const M={},B=h("data-v-1df0a795");c("data-v-1df0a795");const D={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",style:{width:"32rem"}},H=n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"},null,-1);d();const E=B(((e,n)=>(t(),a("svg",D,[H]))));M.render=E,M.__scopeId="data-v-1df0a795";const G=h("data-v-319fbe85");c("data-v-319fbe85");const N={class:"nav"},A={class:"github-anchor",href:"https://github.com/JonathanDn/vue-companies-israel"};d();const V={expose:[],setup(e){const s=p(!0);return G(((e,o)=>(t(),a("nav",N,[n(j,{disabled:"",unit:"rem",width:"50",height:"25",fontSize:"14",checkedText:"🌜",uncheckedText:"🌞",dotClass:"toggle-dot",dotColor:"currentColor",checkedBg:"var(--color-secondary2)",uncheckedBg:"var(--color-secondary2)",value:s.value,onClick:o[1]||(o[1]=e=>s.value=!s.value)},null,8,["value"]),n(J,null,{default:G((()=>[n("a",A,[n(M)])])),_:1})]))))}};function O(t){const a=[];return Array.from(t.rows).reduce(((n,s)=>{const o=[];return Array.from(s.children).map(z).forEach(((l,r)=>{"th"===l.tagName.toLowerCase()?(n.thead.push(l),r===q(t).length-1&&a.push(...function(e){return q(e).map((e=>e.innerText))}(t))):0===t.tHead.rows.length?n.tbody.push(l):(o.push(l),o.length===s.children.length&&(n.tbody.push(function(t,a){return t.reduce(((t,n,s)=>e(e({},t),{[n]:a[s]})),{})}(a,o)),o.length=0))})),n}),{thead:[],tbody:[]})}function q(e){return Array.from(e.tHead.rows[0].children)}function z(e){const{tagName:t,innerText:a,innerHTML:n}=e;return{tagName:t,innerText:a,innerHTML:n}}V.__scopeId="data-v-319fbe85";const U={setup(e,t){const a=p(null),n=p(null),s=f({thead:[],tbody:[],ascending:!1,sortColumn:null}),o=()=>new Promise((async e=>{const t=function(e){const t=localStorage.getItem(e);if(!t)return null;const a=JSON.parse(t);return(new Date).getTime()>a.expiry?(localStorage.removeItem(e),null):a.value}("table");if(t)e(t);else{const t=await async function(...e){try{const a=await window.fetch(...e),n=(t=a.body.getReader(),{start:e=>async function a(){const{done:n,value:s}=await t.read();if(!n)return e.enqueue(s),a();e.close()}()}),s=new ReadableStream(n),o=await new Response(s).blob();return await o.text()}catch(a){console.error(a)}var t}("https://raw.githubusercontent.com/JonathanDn/vue-companies-israel/main/README.md"),a=m(t),n=document.createElement("template");n.innerHTML=a,window.requestAnimationFrame((()=>{const t=O(n.content.querySelector("table"));!function(e,t,a=864e5){const n={value:t,expiry:(new Date).getTime()+a};localStorage.setItem(e,JSON.stringify(n))}("table",t),e(t)}))}})),l=(e,{ascending:t=!0}={})=>{s.sortColumn===e?s.ascending=!s.ascending:(s.ascending=t,s.sortColumn=e),s.tbody.sort(((t,a)=>t[e].innerText>a[e].innerText?s.ascending?1:-1:t[e].innerText<a[e].innerText?s.ascending?-1:1:0))},r=v((()=>({width:100/s.thead.length+"%"})));return g((async()=>{const e=await o();var a,n;s.thead=e.thead,s.tbody=e.tbody,a=1,n={ascending:!1},l(s.thead[a].innerText,n),t.emit("ready",{length:s.tbody.length})})),{root:a,scrollContainer:n,state:s,getRef:()=>a.value,sortTable:l,tdStyle:r}}},F=h("data-v-5047dc6e");c("data-v-5047dc6e");const W={ref:"root",class:"table"},P={class:"scroll-container"},K={key:0};d();const Y=F(((e,s,o,r,i,c)=>(t(),a("div",W,[n("div",P,[n("table",null,[n("thead",null,[n("tr",null,[(t(!0),a(b,null,y(r.state.thead,((e,n)=>(t(),a("th",{key:n,style:r.tdStyle,onClick:t=>r.sortTable(e.innerText)},[w(l(e.innerText)+" ",1),e.innerText===r.state.sortColumn?(t(),a("span",K,l(r.state.ascending?"↑":"↓"),1)):k("",!0)],12,["onClick"])))),128))])]),n("tbody",null,[(t(!0),a(b,null,y(r.state.tbody,((e,n)=>(t(),a("tr",{key:n},[(t(!0),a(b,null,y(e,((e,n)=>(t(),a("td",{innerHTML:e.innerHTML,style:r.tdStyle,key:n},null,12,["innerHTML"])))),128))])))),128))])])])],512))));U.render=Y,U.__scopeId="data-v-5047dc6e";const Z=h("data-v-04189e2a");c("data-v-04189e2a");const Q={class:"button"},X={class:"icon"};d();const ee={expose:[],props:{icon:String},setup:e=>Z(((s,o)=>(t(),a("button",Q,[n("span",X,l(e.icon),1),u(s.$slots,"default")])))),__scopeId:"data-v-04189e2a"};const te={},ae=h("data-v-0bfd2249");c("data-v-0bfd2249");const ne={href:"#/",class:"animate__animated animate__fadeInDown"},se=n("svg",{class:"logo",version:"1.1",viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"},[n("defs",null,[n("linearGradient",{id:"Gradient1",x1:"0",x2:"0",y1:"0",y2:"1"},[n("stop",{offset:"0%","stop-color":"#2d805b"}),n("stop",{offset:"80%","stop-color":"#ffffff"})]),n("linearGradient",{id:"Gradient2",x1:"0",x2:"0",y1:"0",y2:"1"},[n("stop",{offset:"0%","stop-color":"#ffffff"}),n("stop",{offset:"120%","stop-color":"#2d805b"})])]),n("g",{transform:"matrix(1.3333 0 0 -1.3333 -76.311 313.34)"},[n("g",{transform:"translate(178.06 235.01)"},[n("path",{fill:"url(#Gradient1)",d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"})]),n("g",{transform:"translate(178.06 235.01)"},[n("path",{fill:"url(#Gradient2)",d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"})])])],-1);d();const oe=ae(((e,n)=>(t(),a("a",ne,[se]))));te.render=oe,te.__scopeId="data-v-0bfd2249";const le=h("data-v-f597c568"),re={expose:[],props:{content:Boolean},setup:e=>le(((n,s)=>(t(),a("div",{class:["container",{"has-content":e.content}]},[u(n.$slots,"default")],2)))),__scopeId:"data-v-f597c568"};const ie={setup:(e,t)=>({style:v((()=>({"grid-template-columns":`repeat(${t.slots.default().length}, minmax(0, 1fr))`})))})},ce=h("data-v-7f83ba76")(((e,n,s,o,l,r)=>(t(),a("div",{class:"button-group",style:o.style},[u(e.$slots,"default")],4))));ie.render=ce,ie.__scopeId="data-v-7f83ba76";const de=h("data-v-770a8aa6");c("data-v-770a8aa6");const ue={class:"header animate__animated animate__fadeIn"},he=n("div",{class:"stars"},null,-1),pe=n("a",{href:"https://vuejs.org/"},"Vue.js",-1),fe=w("Get Started"),ve={href:"https://github.com/JonathanDn/vue-companies-israel/pulls"},ge=w("Add Company");d();const me={expose:[],setup:e=>de(((e,s)=>(t(),a("header",ue,[he,n(re,{class:"container"},{default:de((()=>[n(te),n("h1",null,[w(" A curated list of "+l(e.$attrs.companies)+" companies who hire Israelis - that work with ",1),pe]),n(ie,null,{default:de((()=>[n(ee,{icon:"🙋🏻‍♀️",onClick:s[1]||(s[1]=t=>e.$emit("get-started"))},{default:de((()=>[fe])),_:1}),n("a",ve,[n(ee,{icon:"👨🏻‍🌾"},{default:de((()=>[ge])),_:1})])])),_:1})])),_:1})])))),__scopeId:"data-v-770a8aa6"};const be=h("data-v-17bfbb52");c("data-v-17bfbb52");const ye=w("Star ");d();const we={expose:[],props:{packageJson:{type:Object,required:!0}},setup:e=>be(((n,s)=>{var o;return t(),a(C(x),{class:"github-stars","data-show-count":"true","data-icon":"octicon-star",href:null==(o=e.packageJson.repository)?void 0:o.url,"aria-label":`Star ${e.packageJson.author}/${e.packageJson.name} on GitHub`},{default:be((()=>[ye])),_:1},8,["href","aria-label"])})),__scopeId:"data-v-17bfbb52"};var ke={name:"vite-project",version:"0.0.0",license:"MIT",repository:{url:"https://github.com/JonathanDn/vue-companies-israel"},scripts:{dev:"vite",build:"vite build",serve:"vite preview",prerelease2:"yarn && yarn version --patch --no-git-tag-version && yarn build",prerelease:"yarn build",release:"node ./scripts/gh-pages",postrelease2:"node ./scripts/post-release"},dependencies:{"animate.css":"^4.1.1",marked:"^2.0.1","prism-themes":"^1.5.0",prismjs:"^1.23.0",vue:"^3.0.5","vue-github-button":"^3.0.0","vue-toggles":"^1.1.0","vue-use-web":"^1.0.1"},devDependencies:{"@vitejs/plugin-vue":"^1.1.4","@vue/compiler-sfc":"^3.0.5","gh-pages":"^3.1.0",sass:"^1.32.8",vite:"^2.0.1","vite-plugin-markdown":"^2.0.0"}};const Ce=h("data-v-6914764c");c("data-v-6914764c");const xe={class:"footer"},_e=n("div",null,[w(" Made with 💜 by "),n("a",{href:"https://www.facebook.com/groups/1062801280495598"},"Vue.js Israel")],-1),Se=n("li",null,[n("a",{href:"https://github.com/JonathanDn"},"About")],-1),Te=n("li",null,[n("a",{href:"https://github.com/JonathanDn/vue-companies-israel/graphs/contributors"},"Contributors")],-1),Ie=n("li",null,[n("a",{href:"https://github.com/JonathanDn/vue-companies-israel"},"GitHub")],-1),je={class:"version"};d();const Je={expose:[],setup:e=>Ce(((e,s)=>(t(),a("footer",xe,[n(re,{class:"container"},{default:Ce((()=>[_e,n("ul",null,[Se,Te,Ie,n("li",null,[n(we,{packageJson:C(ke)},null,8,["packageJson"])])]),n("small",je,l(C(ke).version),1)])),_:1})])))),__scopeId:"data-v-6914764c"};const $e={},Re=h("data-v-500712fa");c("data-v-500712fa");const Le={class:"search"},Me=n("input",{type:"text",placeholder:"Search... 🔎"},null,-1);d();const Be=Re(((e,n)=>(t(),a("div",Le,[Me]))));$e.render=Be,$e.__scopeId="data-v-500712fa";var De={name:"ScrollToTopScope",setup(){const e=p(!1),{y:t}=_();return S((()=>t.value),(async()=>e.value=await new Promise((e=>window.requestAnimationFrame((()=>{e(window.innerHeight+t.value>=.667*document.body.scrollHeight)})))))),{isScrollEndRef:e,scrollToTop:()=>window.scrollTo({top:0,behavior:"smooth"})}},render(){var e,t;const{isScrollEndRef:a,scrollToTop:n}=this;return null==(t=(e=this.$slots).default)?void 0:t.call(e,{isScrollEnd:a,scrollToTop:n})}};const He=h("data-v-fbb4c2fa"),Ee={expose:[],setup:e=>He(((e,s)=>(t(),a(C(De),null,{default:He((e=>[n("div",{class:["scroll-to-top",{"is-visible":e.isScrollEnd}],onClick:e.scrollToTop}," ↑ ",10,["onClick"])])),_:1})))),__scopeId:"data-v-fbb4c2fa"};const Ge=n("h3",null,"What is Vue.js?",-1),Ne=n("p",null,[n("a",{href:"https://vuejs.org/"},"Vue.js"),w(" is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. "),n("a",{href:"https://en.wikipedia.org/wiki/Vue.js"},"Wikipedia")],-1),Ae=n("p",null,[n("small",{class:"opacity-50"},[w(" * Table does NOT contain freelancers, consultancies, software contractors or open source projects working with "),n("a",{href:"https://vuejs.org/"},"Vue.js"),w(". ")])],-1),Ve=n("h3",null,"Contributing",-1),Oe=n("p",null,[w(" If your company is currently working with "),n("a",{href:"https://vuejs.org/"},"Vue.js"),w(", open a "),n("a",{href:"https://github.com/JonathanDn/vue-companies-israel/pulls"},"pull request"),w(" to add it to the table above. If it's also currently recruiting, make sure to check the "),n("b",null,"Recruiting"),w(" column. ")],-1);I({expose:[],setup(e){const s=p(null),o=p(null),l=()=>{const e=s.value.getRef();e&&e.scrollIntoView({behavior:"smooth"})},r=({length:e})=>o.value=e;return(e,i)=>(t(),a(b,null,[n(V),n(me,{companies:o.value,onGetStarted:l},null,8,["companies"]),n(re,{content:""},{default:T((()=>[Ge,Ne])),_:1}),n(re,{content:""},{default:T((()=>[n($e),n(U,{ref:s,onReady:r},null,512),Ae])),_:1}),n(re,{content:""},{default:T((()=>[Ve,Oe])),_:1}),n(Je),n(Ee)],64))}}).mount("#app");
