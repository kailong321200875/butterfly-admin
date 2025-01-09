import{c as s}from"./index-XQEkcq4y.js";const{t:o}=s(),f=()=>({required:r=>({required:!0,message:r||o("common.required")}),lengthRange:r=>{const{min:n,max:t,message:e}=r;return{min:n,max:t,message:e||o("common.lengthRange",{min:n,max:t})}},notSpace:r=>({validator:(n,t,e)=>{(t==null?void 0:t.indexOf(" "))!==-1?e(new Error(r||o("common.notSpace"))):e()}}),notSpecialCharacters:r=>({validator:(n,t,e)=>{/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/gi.test(t)?e(new Error(r||o("common.notSpecialCharacters"))):e()}}),phone:r=>({validator:(n,t,e)=>{if(!t)return e();/^1[3456789]\d{9}$/.test(t)?e():e(new Error(r||"请输入正确的手机号码"))}}),email:r=>({validator:(n,t,e)=>{if(!t)return e();/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(t)?e():e(new Error(r||"请输入正确的邮箱"))}}),maxlength:r=>({max:r,message:"长度不能超过"+r+"个字符"}),check:r=>({validator:(n,t,e)=>{t?e():e(new Error(r||o("common.required")))}})});export{f as u};
