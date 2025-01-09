var X=Object.defineProperty;var _=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var D=(o,r,a)=>r in o?X(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a,T=(o,r)=>{for(var a in r||(r={}))Y.call(r,a)&&D(o,a,r[a]);if(_)for(var a of _(r))Z.call(r,a)&&D(o,a,r[a]);return o};var g=(o,r,a)=>new Promise((u,h)=>{var m=d=>{try{b(a.next(d))}catch(p){h(p)}},f=d=>{try{b(a.throw(d))}catch(p){h(p)}},b=d=>d.done?u(d.value):Promise.resolve(d.value).then(m,f);b((a=a.apply(o,r)).next())});import{F as ee,i as oe}from"./Form-CLuZAwqB.js";import{p as i,c as te,A as W,B as se,C as ae}from"./index-XQEkcq4y.js";import{u as ne}from"./useForm-ddPxPGgM.js";import{u as R}from"./useIcon-DnfoCtzh.js";import{v as z,y as F,J as L,K as V,u as n,G as x,H as G,ad as ie,x as w,a3 as S,P as C,r as v,c as B,w as le,j as re,M as y,Q as ce}from"./vue-chunks-COp0tDkU.js";import{c as de,w as ue}from"./element-plus-B-YefleC.js";const q=z({__name:"ActionButton",props:{showSearch:i.bool.def(!0),showReset:i.bool.def(!0),showExpand:i.bool.def(!1),visible:i.bool.def(!0),searchLoading:i.bool.def(!1),resetLoading:i.bool.def(!1)},emits:["search","reset","expand"],setup(o,{emit:r}){const a=r,{t:u}=te(),h=()=>{a("search")},m=()=>{a("reset")},f=()=>{a("expand")};return(b,d)=>{const p=ie("BaseButton");return w(),F(G,null,[o.showSearch?(w(),L(p,{key:0,type:"primary",loading:o.searchLoading,icon:n(R)({icon:"vi-ep:search"}),onClick:h},{default:V(()=>[S(C(n(u)("common.query")),1)]),_:1},8,["loading","icon"])):x("",!0),o.showReset?(w(),L(p,{key:1,loading:o.resetLoading,plain:"",icon:n(R)({icon:"vi-ep:refresh-right"}),onClick:m},{default:V(()=>[S(C(n(u)("common.reset")),1)]),_:1},8,["loading","icon"])):x("",!0),o.showExpand?(w(),L(p,{key:2,icon:n(R)({icon:o.visible?"vi-ep:arrow-up":"vi-ep:arrow-down"}),text:"",onClick:f},{default:V(()=>[S(C(n(u)(o.visible?"common.shrink":"common.expand")),1)]),_:1},8,["icon"])):x("",!0)],64)}}}),ke=z({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:i.bool.def(!1),labelWidth:i.oneOfType([String,Number]).def("auto"),layout:i.string.validate(o=>["inline","bottom"].includes(o)).def("inline"),buttonPosition:i.string.validate(o=>["left","center","right"].includes(o)).def("center"),showSearch:i.bool.def(!0),showReset:i.bool.def(!0),showExpand:i.bool.def(!1),expandField:i.string.def(""),inline:i.bool.def(!0),removeNoValueItem:i.bool.def(!0),model:{type:Object,default:()=>({})},searchLoading:i.bool.def(!1),resetLoading:i.bool.def(!1)},emits:["search","reset","register","validate"],setup(o,{expose:r,emit:a}){const u=o,h=a,m=v(!0),f=v(u.model),b=B(()=>{const e=n(c);let t=de(e.schema);if(e.showExpand&&e.expandField&&!n(m)){const s=W(t,l=>l.field===e.expandField);t.map((l,U)=>(U>=s?l.hidden=!0:l.hidden=!1,l))}return e.layout==="inline"&&(t=t.concat([{field:"action",formItemProps:{labelWidth:"0px",slots:{default:()=>y("div",null,[y(q,{showSearch:e.showSearch,showReset:e.showReset,showExpand:e.showExpand,searchLoading:e.searchLoading,resetLoading:e.resetLoading,visible:m.value,onExpand:N,onReset:M,onSearch:I},null)]),label:()=>y("span",null,[S(" ")])}}}])),t}),{formRegister:d,formMethods:p}=ne(),{getElFormExpose:k,getFormData:j,getFormExpose:H}=p,J=v({}),E=v({}),c=B(()=>{const e=T({},u);return Object.assign(e,n(E)),e}),K=(e={})=>{E.value=Object.assign(n(E),e),J.value=e},O=v([]);le(()=>n(b),(...t)=>g(this,[...t],function*(e=[]){f.value=oe(e,n(f)),O.value=e}),{immediate:!0,deep:!0});const P=()=>g(this,null,function*(){const e=yield j();return n(c).removeNoValueItem?Object.keys(e).reduce((t,s)=>{const l=e[s];return se(l)||(ae(l)?Object.keys(l).length>0&&(t[s]=l):t[s]=l),t},{}):e}),I=()=>g(this,null,function*(){const e=yield k();yield e==null?void 0:e.validate(t=>g(this,null,function*(){if(t){const s=yield P();h("search",s)}}))}),M=()=>g(this,null,function*(){const e=yield k();e==null||e.resetFields();const t=yield P();h("reset",t)}),Q=B(()=>({textAlign:n(c).buttonPosition})),N=()=>g(this,null,function*(){m.value=!n(m)}),A={getElFormExpose:k,setProps:K,setSchema:e=>{const{schema:t}=n(c);for(const s of t)for(const l of e)s.field===l.field&&ue(s,l.path,l.value)},setValues:(...t)=>g(this,[...t],function*(e={}){f.value=Object.assign(u.model,n(f),e);const s=yield H();s==null||s.setValues(e)}),delSchema:e=>{const{schema:t}=n(c),s=W(t,l=>l.field===e);s>-1&&t.splice(s,1)},addSchema:(e,t)=>{const{schema:s}=n(c);if(t!==void 0){s.splice(t,0,e);return}s.push(e)},getFormData:j};re(()=>{h("register",A)}),r(A);const $=(e,t,s)=>{h("validate",e,t,s)};return(e,t)=>(w(),F(G,null,[y(n(ee),{model:f.value,"is-custom":!1,"label-width":c.value.labelWidth,"hide-required-asterisk":"",inline:c.value.inline,"is-col":c.value.isCol,schema:O.value,onRegister:n(d),onValidate:$},null,8,["model","label-width","inline","is-col","schema","onRegister"]),o.layout==="bottom"?(w(),F("div",{key:0,style:ce(Q.value)},[y(q,{"show-reset":c.value.showReset,"show-search":c.value.showSearch,"show-expand":c.value.showExpand,"search-loading":c.value.searchLoading,"reset-loading":c.value.resetLoading,visible:m.value,onExpand:N,onReset:M,onSearch:I},null,8,["show-reset","show-search","show-expand","search-loading","reset-loading","visible"])],4)):x("",!0)],64))}});export{ke as _};
