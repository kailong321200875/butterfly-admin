var c=(i,e,l)=>new Promise((s,r)=>{var p=t=>{try{a(l.next(t))}catch(o){r(o)}},n=t=>{try{a(l.throw(t))}catch(o){r(o)}},a=t=>t.done?s(t.value):Promise.resolve(t.value).then(p,n);a((l=l.apply(i,e)).next())});import{_ as d}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BquNNVBn.js";import{i as u,c as _}from"./index-DYXSuqj4.js";import{_ as g}from"./Table.vue_vue_type_script_lang-pBUJRQ3Y.js";import{g as D}from"./index-DYopgkFh.js";/* empty css               */import{p as y}from"./element-plus-B-YefleC.js";import{v,ac as h,M as f,r as b,x as T,J as w,K as x,u as m,a7 as L}from"./vue-chunks-COp0tDkU.js";/* empty css                *//* empty css                  *//* empty css                        *//* empty css                    *//* empty css                      *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-radio-button-DoHwUJND.js";/* empty css                         *//* empty css                  */import"./index-Bho-iFbT.js";function S(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!L(i)}const R=v({__name:"DefaultTable",setup(i){const{t:e}=_(),l=[{field:"title",label:e("tableDemo.title")},{field:"author",label:e("tableDemo.author")},{field:"display_time",label:e("tableDemo.displayTime"),sortable:!0},{field:"importance",label:e("tableDemo.importance"),formatter:(a,t,o)=>h(y,{type:o===1?"success":o===2?"warning":"danger"},()=>e(o===1?"tableDemo.important":o===2?"tableDemo.good":"tableDemo.commonly"))},{field:"pageviews",label:e("tableDemo.pageviews")},{field:"action",label:e("tableDemo.action"),slots:{default:a=>{let t;return f(u,{type:"primary",onClick:()=>n(a)},S(t=e("tableDemo.action"))?t:{default:()=>[t]})}}}],s=b(!0),r=b([]);(a=>c(this,null,function*(){const t=yield D({pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{s.value=!1});t&&(r.value=t.data.list)}))();const n=a=>{};return(a,t)=>(T(),w(m(d),{title:m(e)("tableDemo.table"),message:m(e)("tableDemo.tableDes")},{default:x(()=>[f(m(g),{columns:l,data:r.value,loading:s.value,defaultSort:{prop:"display_time",order:"descending"}},null,8,["data","loading"])]),_:1},8,["title","message"]))}});export{R as default};
