var i=(n,s,e)=>new Promise((l,o)=>{var p=a=>{try{r(e.next(a))}catch(m){o(m)}},c=a=>{try{r(e.throw(a))}catch(m){o(m)}},r=a=>a.done?l(a.value):Promise.resolve(a.value).then(p,c);r((e=e.apply(n,s)).next())});import{F as x}from"./Form-CLuZAwqB.js";import{u as g}from"./useForm-ddPxPGgM.js";import{c as I}from"./index-XQEkcq4y.js";import{u as _}from"./useValidator-aWbiMX7P.js";import{v as w,V as u,w as y,x as F,J as H,u as f}from"./vue-chunks-COp0tDkU.js";const B=w({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(n,{expose:s}){const{required:e}=_(),l=n,{t:o}=I(),{formRegister:p,formMethods:c}=g(),{setValues:r,getFormData:a,getElFormExpose:m,setSchema:d}=c,v=u([{field:"title",label:o("exampleDemo.title"),component:"Input",formItemProps:{rules:[e()]},colProps:{span:24}},{field:"author",label:o("exampleDemo.author"),component:"Input",formItemProps:{rules:[e()]}},{field:"display_time",label:o("exampleDemo.displayTime"),component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"},formItemProps:{rules:[e()]}},{field:"importance",label:o("exampleDemo.importance"),component:"Select",formItemProps:{rules:[e()]},componentProps:{options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},{field:"pageviews",label:o("exampleDemo.pageviews"),component:"InputNumber",value:0,formItemProps:{rules:[e()]}},{field:"content",component:"Editor",colProps:{span:24},componentProps:{defaultHtml:"",onChange:t=>{r({content:t.getHtml()})}},label:o("exampleDemo.content")}]),b=u({title:[e()],author:[e()],importance:[e()],pageviews:[e()],display_time:[e()],content:[e()]}),h=()=>i(this,null,function*(){const t=yield m();if(yield t==null?void 0:t.validate().catch(P=>{}))return yield a()});return y(()=>l.currentRow,t=>{t&&(r(t),d([{field:"content",path:"componentProps.defaultHtml",value:t.content}]))},{deep:!0,immediate:!0}),s({submit:h}),(t,D)=>(F(),H(f(x),{rules:b,onRegister:f(p),schema:v},null,8,["rules","onRegister","schema"]))}});export{B as _};
