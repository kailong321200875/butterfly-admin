var c=(p,e,i)=>new Promise((l,o)=>{var n=a=>{try{t(i.next(a))}catch(m){o(m)}},r=a=>{try{t(i.throw(a))}catch(m){o(m)}},t=a=>a.done?l(a.value):Promise.resolve(a.value).then(n,r);t((i=i.apply(p,e)).next())});import{_ as u}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BQQVoJIW.js";import{c as f}from"./index-XQEkcq4y.js";import{_}from"./Table.vue_vue_type_script_lang-B_-9S-i8.js";import{g as b}from"./index-Cm1LNZ_g.js";import{v,r as d,x as g,J as w,K as D,M as h,u as s}from"./vue-chunks-COp0tDkU.js";/* empty css                *//* empty css                  */import"./element-plus-B-YefleC.js";/* empty css                        *//* empty css                    *//* empty css               *//* empty css                      *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-radio-button-C00vQ8JQ.js";/* empty css                         *//* empty css                  */import"./index-PN9SczcD.js";const E=v({__name:"TableVideoPreview",setup(p){const{t:e}=f(),i=[{field:"title",label:e("tableDemo.title")},{field:"video_uri",label:e("tableDemo.videoPreview")},{field:"author",label:e("tableDemo.author")},{field:"display_time",label:e("tableDemo.displayTime")},{field:"pageviews",label:e("tableDemo.pageviews")}],l=d(!0),o=d([]);return(r=>c(this,null,function*(){const t=yield b({pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{l.value=!1});t&&(o.value=t.data.list)}))(),(r,t)=>(g(),w(s(u),{title:s(e)("router.PicturePreview")},{default:D(()=>[h(s(_),{columns:i,data:o.value,loading:l.value,"video-preview":["image_uri","video_uri"]},null,8,["data","loading"])]),_:1},8,["title"]))}});export{E as default};
