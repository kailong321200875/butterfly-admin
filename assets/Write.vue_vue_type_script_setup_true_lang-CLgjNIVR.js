var p=(s,n,e)=>new Promise((i,c)=>{var m=t=>{try{r(e.next(t))}catch(o){c(o)}},u=t=>{try{r(e.throw(t))}catch(o){c(o)}},r=t=>t.done?i(t.value):Promise.resolve(t.value).then(m,u);r((e=e.apply(s,n)).next())});import{F as w}from"./Form-DnUf-p7A.js";import{u as g}from"./useForm-DynmhF2f.js";import{u as v}from"./useValidator-DCFvVrv-.js";import{v as _,V as x,w as y,x as F,J as R,u as f}from"./vue-chunks-COp0tDkU.js";const E=_({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(s,{expose:n}){const{required:e}=v(),i=s,c=x({title:[e()],author:[e()],importance:[e()],pageviews:[e()],display_time:[e()],content:[e()]}),{formRegister:m,formMethods:u}=g(),{setValues:r,getFormData:t,getElFormExpose:o}=u,l=()=>p(this,null,function*(){const a=yield o();if(yield a==null?void 0:a.validate().catch(h=>{}))return yield t()});return y(()=>i.currentRow,a=>{a&&r(a)},{deep:!0,immediate:!0}),n({submit:l}),(a,d)=>(F(),R(f(w),{rules:c,onRegister:f(m),schema:s.formSchema},null,8,["rules","onRegister","schema"]))}});export{E as _};
