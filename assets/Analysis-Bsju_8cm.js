var p=(A,i,o)=>new Promise((m,d)=>{var c=l=>{try{r(o.next(l))}catch(f){d(f)}},g=l=>{try{r(o.throw(l))}catch(f){d(f)}},r=l=>l.done?m(l.value):Promise.resolve(l.value).then(c,g);r((o=o.apply(A,i)).next())});import{P as w,g as b,a as O,b as E}from"./PanelGroup-JWg8OZKJ.js";import{c as S}from"./index-XQEkcq4y.js";/* empty css               *//* empty css                *//* empty css                         */import{p as k,b as D,l as C,_ as h}from"./Echart.vue_vue_type_script_setup_true_lang-Ba0qgc1a.js";import{s as y,t as _,u as v,v as U,w as u}from"./element-plus-B-YefleC.js";import{v as M,r as P,V as x,x as B,y as I,M as t,K as n,u as s,H as V}from"./vue-chunks-COp0tDkU.js";import"./CountTo.vue_vue_type_script_setup_true_lang-COpHdsNp.js";import"./echarts-whH8FFdn.js";const z=M({__name:"Analysis",setup(A){const{t:i}=S(),o=P(!0),m=x(k),d=()=>p(this,null,function*(){const e=yield b().catch(()=>{});e&&(u(m,"legend.data",e.data.map(a=>i(a.name))),m.series[0].data=e.data.map(a=>({name:i(a.name),value:a.value})))}),c=x(D),g=()=>p(this,null,function*(){const e=yield O().catch(()=>{});e&&(u(c,"xAxis.data",e.data.map(a=>i(a.name))),u(c,"series",[{name:i("analysis.activeQuantity"),data:e.data.map(a=>a.value),type:"bar"}]))}),r=x(C),l=()=>p(this,null,function*(){const e=yield E().catch(()=>{});e&&(u(r,"xAxis.data",e.data.map(a=>i(a.name))),u(r,"series",[{name:i("analysis.estimate"),smooth:!0,type:"line",data:e.data.map(a=>a.estimate),animationDuration:2800,animationEasing:"cubicInOut"},{name:i("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:e.data.map(a=>a.actual),animationDuration:2800,animationEasing:"quadraticOut"}]))});return p(this,null,function*(){yield Promise.all([d(),g(),l()]),o.value=!1}),(e,a)=>(B(),I(V,null,[t(w),t(s(U),{gutter:20,justify:"space-between"},{default:n(()=>[t(s(y),{xl:10,lg:10,md:24,sm:24,xs:24},{default:n(()=>[t(s(_),{shadow:"hover",class:"mb-20px"},{default:n(()=>[t(s(v),{loading:o.value,animated:""},{default:n(()=>[t(s(h),{options:m,height:300},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),t(s(y),{xl:14,lg:14,md:24,sm:24,xs:24},{default:n(()=>[t(s(_),{shadow:"hover",class:"mb-20px"},{default:n(()=>[t(s(v),{loading:o.value,animated:""},{default:n(()=>[t(s(h),{options:c,height:300},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),t(s(y),{span:24},{default:n(()=>[t(s(_),{shadow:"hover",class:"mb-20px"},{default:n(()=>[t(s(v),{loading:o.value,animated:"",rows:4},{default:n(()=>[t(s(h),{options:r,height:350},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})],64))}});export{z as default};
