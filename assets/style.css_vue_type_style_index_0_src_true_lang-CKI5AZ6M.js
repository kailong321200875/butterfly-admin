var b=(n,f,a)=>new Promise((m,i)=>{var r=o=>{try{t(a.next(o))}catch(l){i(l)}},u=o=>{try{t(a.throw(o))}catch(l){i(l)}},t=o=>o.done?m(o.value):Promise.resolve(o.value).then(r,u);t((a=a.apply(n,f)).next())});import{z as k,T as E,E as I}from"./wang-editor-FTv6NaqD.js";import{p as g,w as x,D as O}from"./index-DYXSuqj4.js";import{b as d}from"./element-plus-B-YefleC.js";import{v as S,c as p,u as s,s as R,r as T,w as h,R as z,y as B,M as v,Q as L,n as N,x as _}from"./vue-chunks-COp0tDkU.js";const j={class:"border-1 border-solid border-[var(--el-border-color)] z-10"},P=S({__name:"Editor",props:{editorId:g.string.def("wangeEditor-1"),height:g.oneOfType([Number,String]).def("500px"),editorConfig:{type:Object,default:()=>{}},modelValue:g.string.def("")},emits:["change","update:modelValue"],setup(n,{expose:f,emit:a}){const m=x(),i=p(()=>m.getCurrentLocale);k(s(i).lang);const r=n,u=a,t=R(),o=T("");h(()=>r.modelValue,e=>{e!==s(o)&&(o.value=e)}),h(()=>o.value,e=>{u("update:modelValue",e)});const l=e=>{t.value=e,o.value=r.modelValue},y=p(()=>Object.assign({readOnly:!1,customAlert:(e,c)=>{switch(c){case"success":d.success(e);break;case"info":d.info(e);break;case"warning":d.warning(e);break;case"error":d.error(e);break;default:d.info(e);break}},autoFocus:!1,scroll:!0,uploadImgShowBase64:!0},r.editorConfig||{})),C=p(()=>({height:O(r.height)?`${r.height}px`:r.height})),w=e=>{u("change",e)};return z(()=>{const e=s(t.value);e==null||e.destroy()}),f({getEditorRef:()=>b(this,null,function*(){return yield N(),s(t.value)})}),(e,c)=>(_(),B("div",j,[v(s(E),{editor:t.value,editorId:n.editorId,class:"border-0 b-b-1 border-solid border-[var(--el-border-color)]"},null,8,["editor","editorId"]),v(s(I),{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=V=>o.value=V),editorId:n.editorId,defaultConfig:y.value,style:L(C.value),onOnChange:w,onOnCreated:l},null,8,["modelValue","editorId","defaultConfig","style"])]))}});export{P as _};
