var K=Object.defineProperty,Q=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var S=(e,t,a)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,H=(e,t)=>{for(var a in t||(t={}))U.call(t,a)&&S(e,a,t[a]);if(N)for(var a of N(t))X.call(t,a)&&S(e,a,t[a]);return e},I=(e,t)=>Q(e,q(t));var O=(e,t,a)=>new Promise((M,v)=>{var s=o=>{try{i(a.next(o))}catch(g){v(g)}},x=o=>{try{i(a.throw(o))}catch(g){v(g)}},i=o=>o.done?M(o.value):Promise.resolve(o.value).then(s,x);i((a=a.apply(e,t)).next())});import{p as u,H as Y,J as Z,b as _,M as B,G as ee,c as te}from"./index-DYXSuqj4.js";import{I as ae}from"./element-plus-B-YefleC.js";import{v as J,r as h,w as le,j as se,u as l,y as m,Q as k,H as R,a2 as z,B as L,P as V,G as ne,I as A,x as d,n as G,J as oe,K as re,M as ie}from"./vue-chunks-COp0tDkU.js";import{_ as ce}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BquNNVBn.js";/* empty css                *//* empty css                  */const ue=["src"],fe=["src"],de=J({__name:"Waterfall",props:{data:u.arrayOf(u.any),reset:u.bool.def(!0),width:u.number.def(200),gap:u.number.def(20),props:u.objectOf(u.string).def({src:"src",height:"height"}),cols:u.number.def(void 0),loadingText:u.string.def("加载中..."),loading:u.bool.def(!1),end:u.bool.def(!1),endText:u.string.def("没有更多了"),autoCenter:u.bool.def(!0),layout:u.oneOf(["javascript","flex"]).def("flex")},emits:["loadMore"],setup(e,{emit:t}){const{getPrefixCls:a}=_(),M=a("waterfall"),v=t,s=e,x=h(),i=h([]),o=h(0),g=h(0),j=h(),y=h(0),p=h([]),P=()=>O(this,null,function*(){var T;p.value=[];const{props:f,width:w,gap:n}=s,r=s.data;yield G();const $=l(x);if(!$)return;y.value=(T=s.cols)!=null?T:Math.floor($.clientWidth/(w+n));const b=r.length;for(let c=0;c<b;c++)if(c<l(y))i.value[c]=r[c][f.height],p.value.push(I(H({},r[c]),{top:0,left:c*(w+n)}));else{let C=i.value[0],E=0;for(let W=1;W<l(y);W++)l(i)[W]<C&&(C=l(i)[W],E=W);i.value[E]+=r[c][f.height]+n,p.value.push(I(H({},r[c]),{top:C+n,left:E*(w+n)}))}o.value=Math.max(...l(i)),g.value=l(y)*(w+n)-n}),F=()=>O(this,null,function*(){var T;const{width:f,gap:w}=s,n=s.data;yield G();const r=l(x);if(!r)return;y.value=(T=s.cols)!=null?T:Math.floor(r.clientWidth/(f+w));const $=n.length,b=new Array(l(y)).fill([]);for(let c=0;c<$;c++){const C=c%l(y);b[C]=[...b[C],n[c]]}p.value=b}),D=()=>{const{layout:f}=s;f==="javascript"?P():f==="flex"&&F()};return le(()=>[s.data,s.cols],()=>{D()},{immediate:!0}),se(()=>{l(s.reset)&&Y(window,"resize",ae(D,300)),Z(l(j),([{isIntersecting:f}])=>{f&&!s.loading&&!s.end&&v("loadMore")},{threshold:.1})}),(f,w)=>(d(),m("div",{class:A([l(M),"flex","items-center",{"justify-center":e.autoCenter}]),ref_key:"wrapEl",ref:x,style:k({height:`${e.layout==="javascript"?o.value+40:"auto"}px`})},[e.layout==="javascript"?(d(),m("div",{key:0,class:"relative",style:k({width:`${g.value}px`,height:`${o.value+40}px`})},[(d(!0),m(R,null,z(p.value,(n,r)=>(d(),m("div",{class:A([`${l(M)}-item__${r}`,{absolute:e.layout==="javascript"}]),key:`water-${r}`,style:k({width:`${e.width}px`,height:`${n[e.props.height]}px`,top:`${n.top}px`,left:`${n.left}px`})},[L("img",{src:n[e.props.src],class:"w-full h-full block",alt:"",srcset:""},null,8,ue)],6))),128)),L("div",{ref_key:"loadMore",ref:j,class:"h-40px flex justify-center absolute w-full",style:k({top:`${o.value+e.gap}px`})},V(e.end?e.endText:e.loadingText),5)],4)):e.layout==="flex"?(d(),m("div",{key:1,class:"relative flex pb-40px",style:k({width:e.cols?"100%":"auto"})},[(d(!0),m(R,null,z(p.value,(n,r)=>(d(),m("div",{key:`waterWrap-${r}`,class:"flex-1",style:k({marginRight:r===p.value.length-1?"0":`${e.gap}px`})},[(d(!0),m(R,null,z(n,($,b)=>(d(),m("div",{key:`waterWrap-${r}-${b}`,style:k({marginBottom:`${e.gap}px`,width:e.cols?"100%":`${e.width}px`,height:e.cols?"auto":`${$[e.props.height]}px`})},[L("img",{src:$[e.props.src],class:"w-full h-full block",alt:"",srcset:""},null,8,fe)],4))),128))],4))),128)),L("div",{ref_key:"loadMore",ref:j,class:"h-40px flex justify-center absolute w-full items-center",style:{bottom:0}},V(e.end?e.endText:e.loadingText),513)],4)):ne("",!0)],6))}}),we=J({__name:"Waterfall",setup(e){const t=h([]),a=()=>{const i=[];for(let o=0;o<20;o++){const g=B.Random.integer(100,500),j=B.Random.integer(100,500);i.push(B.mock({width:j,height:g,id:ee(),image_uri:B.Random.image(`${j}x${g}`).replace("http://","https://")}))}t.value=[...l(t),...i],l(t).length>=60&&(s.value=!0)};a();const{t:M}=te(),v=h(!1),s=h(!1),x=()=>{v.value=!0,setTimeout(()=>{a(),v.value=!1},1e3)};return(i,o)=>(d(),oe(l(ce),{title:l(M)("router.waterfall")},{default:re(()=>[ie(l(de),{data:t.value,loading:v.value,end:s.value,props:{src:"image_uri",height:"height"},onLoadMore:x},null,8,["data","loading","end"])]),_:1},8,["title"]))}});export{we as default};
