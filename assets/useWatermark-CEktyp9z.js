import{_ as y}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BquNNVBn.js";import{u as g,c as x}from"./index-DYXSuqj4.js";import{v,c as w,R as _,x as h,J as C,K as c,M as u,a3 as p,P as f,u as a,ad as W}from"./vue-chunks-COp0tDkU.js";/* empty css                *//* empty css                  */import"./element-plus-B-YefleC.js";const B=Symbol("watermark-dom");function E(d=document.body){let s=()=>{};const r=B.toString(),i=()=>{const o=document.getElementById(r);if(o){const e=d;e&&e.removeChild(o)}window.removeEventListener("resize",s)},m=o=>{i();const e=document.createElement("canvas");e.width=300,e.height=240;const n=e.getContext("2d");n&&(n.rotate(-20*Math.PI/120),n.font="15px Vedana",n.fillStyle="rgba(0, 0, 0, 0.15)",n.textAlign="left",n.textBaseline="middle",n.fillText(o,e.width/20,e.height));const t=document.createElement("div");t.id=r,t.style.pointerEvents="none",t.style.top="0px",t.style.left="0px",t.style.position="absolute",t.style.zIndex="100000000",t.style.width=document.documentElement.clientWidth+"px",t.style.height=document.documentElement.clientHeight+"px",t.style.background="url("+e.toDataURL("image/png")+") left top repeat";const k=d;return k&&k.appendChild(t),r};function l(o){m(o),s=()=>{m(o)},window.addEventListener("resize",s)}return{setWatermark:l,clear:i}}const L=v({__name:"useWatermark",setup(d){const s=g(),r=w(()=>s.getTitle),{setWatermark:i,clear:m}=E(),{t:l}=x();return _(()=>{m()}),(o,e)=>{const n=W("BaseButton");return h(),C(a(y),{title:"useWatermark"},{default:c(()=>[u(n,{type:"primary",onClick:e[0]||(e[0]=t=>a(i)(r.value))},{default:c(()=>[p(f(a(l)("watermarkDemo.createdWatermark")),1)]),_:1}),u(n,{type:"danger",onClick:a(m)},{default:c(()=>[p(f(a(l)("watermarkDemo.clearWatermark")),1)]),_:1},8,["onClick"]),u(n,{type:"warning",onClick:e[1]||(e[1]=t=>a(i)(`New${r.value}`))},{default:c(()=>[p(f(a(l)("watermarkDemo.resetWatermark")),1)]),_:1})]),_:1})}}});export{L as default};
