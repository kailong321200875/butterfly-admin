var d=(x,c,e)=>new Promise((u,m)=>{var s=t=>{try{n(e.next(t))}catch(o){m(o)}},p=t=>{try{n(e.throw(t))}catch(o){m(o)}},n=t=>t.done?u(t.value):Promise.resolve(t.value).then(s,p);n((e=e.apply(x,c)).next())});import{_ as k}from"./Write.vue_vue_type_script_setup_true_lang-DlSm-GkO.js";import{_ as D}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-Cx_YYeG0.js";import{c as b}from"./index-XQEkcq4y.js";import{v as C,r as _,x as R,J as T,K as l,M as v,a3 as g,P as w,u as i,az as $,aH as E,ad as A}from"./vue-chunks-COp0tDkU.js";import{c as N,s as V}from"./index-Cm1LNZ_g.js";import{u as h}from"./useEventBus-BNkogk2f.js";import"./Form-CLuZAwqB.js";/* empty css                     *//* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import"./el-radio-button-C00vQ8JQ.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-C-8gBQ8J.js";import"./element-plus-B-YefleC.js";import"./style.css_vue_type_style_index_0_src_true_lang-BkIF2Ynl.js";import"./wang-editor-FTv6NaqD.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-CMD0eGIv.js";import"./IconPicker-Cu-tHVs4.js";/* empty css                      */import"./IAgree.vue_vue_type_script_setup_true_lang-Ceryvg5Z.js";import"./Highlight.vue_vue_type_script_lang-BuZwKqcA.js";import"./useForm-ddPxPGgM.js";import"./useValidator-aWbiMX7P.js";/* empty css                */const ct=C({__name:"ExampleEdit",setup(x){const{emit:c}=h(),{push:e,go:u}=$(),{query:m}=E(),{t:s}=b(),p=_(null);d(this,null,function*(){const a=yield N(m.id);a&&(p.value=a.data)});const t=_(),o=_(!1),y=()=>d(this,null,function*(){const a=i(t),r=yield a==null?void 0:a.submit();r&&(o.value=!0,(yield V(r).catch(()=>{}).finally(()=>{o.value=!1}))&&(c("getList","editor"),e("/example/example-page")))});return(a,r)=>{const f=A("BaseButton");return R(),T(i(D),{title:i(s)("exampleDemo.edit"),onBack:r[1]||(r[1]=B=>i(e)("/example/example-page"))},{header:l(()=>[v(f,{onClick:r[0]||(r[0]=B=>i(u)(-1))},{default:l(()=>[g(w(i(s)("common.back")),1)]),_:1}),v(f,{type:"primary",loading:o.value,onClick:y},{default:l(()=>[g(w(i(s)("exampleDemo.save")),1)]),_:1},8,["loading"])]),default:l(()=>[v(k,{ref_key:"writeRef",ref:t,"current-row":p.value},null,8,["current-row"])]),_:1},8,["title"])}}});export{ct as default};
