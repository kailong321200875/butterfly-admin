var c=(p,e,i)=>new Promise((r,o)=>{var n=t=>{try{a(i.next(t))}catch(l){o(l)}},m=t=>{try{a(i.throw(t))}catch(l){o(l)}},a=t=>t.done?r(t.value):Promise.resolve(t.value).then(n,m);a((i=i.apply(p,e)).next())});import{_ as u}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BQQVoJIW.js";import{c as _}from"./index-XQEkcq4y.js";import{_ as b}from"./Table.vue_vue_type_script_lang-B_-9S-i8.js";import{g}from"./index-Cm1LNZ_g.js";/* empty css               */import{p as v}from"./element-plus-B-YefleC.js";import{v as D,M as f,r as d,x as w,J as y,K as T,u as s}from"./vue-chunks-COp0tDkU.js";/* empty css                *//* empty css                  *//* empty css                        *//* empty css                    *//* empty css                      *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-radio-button-C00vQ8JQ.js";/* empty css                         *//* empty css                  */import"./index-PN9SczcD.js";const G=D({__name:"TableImagePreview",setup(p){const{t:e}=_(),i=[{field:"title",label:e("tableDemo.title")},{field:"image_uri",label:e("tableDemo.preview")},{field:"author",label:e("tableDemo.author")},{field:"display_time",label:e("tableDemo.displayTime")},{field:"importance",label:e("tableDemo.importance"),formatter:(m,a,t)=>f(v,{type:t===1?"success":t===2?"warning":"danger"},{default:()=>[e(t===1?"tableDemo.important":t===2?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:e("tableDemo.pageviews")}],r=d(!0),o=d([]);return(m=>c(this,null,function*(){const a=yield g({pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{r.value=!1});a&&(o.value=a.data.list)}))(),(m,a)=>(w(),y(s(u),{title:s(e)("router.PicturePreview")},{default:T(()=>[f(s(b),{columns:i,data:o.value,loading:r.value,"image-preview":["image_uri"]},null,8,["data","loading"])]),_:1},8,["title"]))}});export{G as default};
