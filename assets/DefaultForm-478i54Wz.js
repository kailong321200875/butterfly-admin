var s=(T,k,l)=>new Promise((y,m)=>{var f=i=>{try{p(l.next(i))}catch(d){m(d)}},b=i=>{try{p(l.throw(i))}catch(d){m(d)}},p=i=>i.done?y(i.value):Promise.resolve(i.value).then(f,b);p((l=l.apply(T,k)).next())});import{F as O}from"./Form-DnUf-p7A.js";import{u as R,I as a,i as w,c as F}from"./index-DYXSuqj4.js";import{_ as M}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BquNNVBn.js";/* empty css                  */import"./el-radio-button-DoHwUJND.js";/* empty css                    */import{g as h}from"./index-B9WOoIWR.js";import{y as G,z as j,A as V,B as U,C as Y,D as J,F as H,l as K,b as C,a as W}from"./element-plus-B-YefleC.js";import{v as q,c as Q,r as g,j as X,V as Z,M as t,H as u,a3 as r,x as ee,J as le,K as oe,u as P}from"./vue-chunks-COp0tDkU.js";/* empty css                     *//* empty css               *//* empty css                  *//* empty css               *//* empty css                        *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-t8_A5YtM.js";import"./style.css_vue_type_style_index_0_src_true_lang-CKI5AZ6M.js";import"./wang-editor-FTv6NaqD.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-CCdStfWL.js";import"./IconPicker-BsgDTIUj.js";/* empty css                      */import"./IAgree.vue_vue_type_script_setup_true_lang-CumXMNlR.js";import"./Highlight.vue_vue_type_script_lang-Be9DJOXj.js";/* empty css                */const Ee=q({__name:"DefaultForm",setup(T){const k=R(),{t:l}=F(),y=Q(()=>k.getMobile),m=g([]),f=(e,o)=>{const n=e?m.value.filter(i(e)):m.value;o(n)};let b;const p=(e,o)=>{const n=e?m.value.filter(i(e)):m.value;clearTimeout(b),b=setTimeout(()=>{o(n)},3e3*Math.random())},i=e=>o=>o.value.toLowerCase().indexOf(e.toLowerCase())===0,d=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}],x=e=>{};X(()=>{m.value=d()});const A=["a","b","c","d","e","f","g","h","i","j"],I=g(Array.from({length:1e3}).map((e,o)=>({value:`Option ${o+1}`,label:`${A[o%10]}${o}`}))),E=g(Array.from({length:10}).map((e,o)=>{const n=o+1;return{value:`Group ${n}`,label:`Group ${n}`,options:Array.from({length:10}).map((te,S)=>({value:`Option ${S+1+10*n}`,label:`${A[S%10]}${S+1+10*n}`}))}})),L=[{value:"guide",label:"Guide",children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"},{value:"feedback",label:"Feedback"},{value:"efficiency",label:"Efficiency"},{value:"controllability",label:"Controllability"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"},{value:"top nav",label:"Top Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"},{value:"color",label:"Color"},{value:"typography",label:"Typography"},{value:"icon",label:"Icon"},{value:"button",label:"Button"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"},{value:"checkbox",label:"Checkbox"},{value:"input",label:"Input"},{value:"input-number",label:"InputNumber"},{value:"select",label:"Select"},{value:"cascader",label:"Cascader"},{value:"switch",label:"Switch"},{value:"slider",label:"Slider"},{value:"time-picker",label:"TimePicker"},{value:"date-picker",label:"DatePicker"},{value:"datetime-picker",label:"DateTimePicker"},{value:"upload",label:"Upload"},{value:"rate",label:"Rate"},{value:"form",label:"Form"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table"},{value:"tag",label:"Tag"},{value:"progress",label:"Progress"},{value:"tree",label:"Tree"},{value:"pagination",label:"Pagination"},{value:"badge",label:"Badge"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert"},{value:"loading",label:"Loading"},{value:"message",label:"Message"},{value:"message-box",label:"MessageBox"},{value:"notification",label:"Notification"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu"},{value:"tabs",label:"Tabs"},{value:"breadcrumb",label:"Breadcrumb"},{value:"dropdown",label:"Dropdown"},{value:"steps",label:"Steps"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog"},{value:"tooltip",label:"Tooltip"},{value:"popover",label:"Popover"},{value:"card",label:"Card"},{value:"carousel",label:"Carousel"},{value:"collapse",label:"Collapse"}]}]}],$=()=>{const e=[];for(let o=1;o<=15;o++)e.push({value:o,desc:`Option ${o}`,disabled:o%4===0});return e},N=["2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05","2021-10-06","2021-10-07"],B=({dayjs:e})=>N.includes(e.format("YYYY-MM-DD")),c=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}],_=()=>new Promise(e=>{setTimeout(()=>{e(c)},3e3)});let v=0;const D=g(""),z=Z([{field:"field1",label:l("formDemo.input"),component:"Divider"},{field:"field2",label:l("formDemo.default"),component:"Input",componentProps:{formatter:e=>`$ ${e}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:e=>e.replace(/\$\s?|(,*)/g,"")}},{field:"field3",label:`${l("formDemo.icon")}1`,component:"Input",componentProps:{suffixIcon:t(a,{icon:"vi-ep:calendar"},null),prefixIcon:t(a,{icon:"vi-ep:share"},null)}},{field:"field4",label:`${l("formDemo.icon")}2`,component:"Input",componentProps:{slots:{suffix:()=>t(a,{icon:"vi-ep:share"},null),prefix:()=>t(a,{icon:"vi-ep:calendar"},null)}}},{field:"field5",label:l("formDemo.mixed"),component:"Input",componentProps:{slots:{prepend:()=>t(a,{icon:"vi-ep:calendar"},null),append:()=>t(a,{icon:"vi-ep:share"},null)}}},{field:"input-field7",label:l("formDemo.password"),component:"Input",componentProps:{showPassword:!0}},{field:"field6",label:l("formDemo.textarea"),component:"Input",componentProps:{type:"textarea",rows:2}},{field:"field7",label:l("formDemo.autocomplete"),component:"Divider"},{field:"field8",label:l("formDemo.default"),component:"Autocomplete",componentProps:{fetchSuggestions:f,on:{select:x}}},{field:"field9",label:l("formDemo.slot"),component:"Autocomplete",componentProps:{fetchSuggestions:f,on:{select:x},slots:{default:({item:e})=>t(u,null,[t("div",{class:"value"},[e==null?void 0:e.value]),t("span",{class:"link"},[e==null?void 0:e.link])])}}},{field:"autocomplete-field10",label:l("formDemo.remoteSearch"),component:"Autocomplete",componentProps:{fetchSuggestions:p,on:{select:x}}},{field:"field10",component:"Divider",label:l("formDemo.inputNumber")},{field:"field11",label:l("formDemo.default"),component:"InputNumber",value:0},{field:"field12",label:l("formDemo.position"),component:"InputNumber",componentProps:{controlsPosition:"right"},value:10},{field:"field13",label:l("formDemo.select"),component:"Divider"},{field:"field14",label:l("formDemo.default"),component:"Select",componentProps:{options:[{disabled:!0,label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field15",label:l("formDemo.slot"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}],slots:{default:e=>e.length?e==null?void 0:e.map(o=>t(G,{key:o.value,label:o.label,value:o.value},null)):null,prefix:()=>t(a,{icon:"vi-ep:calendar"},null)}}},{field:"select-field18",label:l("formDemo.optionSlot"),component:"Select",componentProps:{options:[{value:"Beijing",label:"Beijing"},{value:"Shanghai",label:"Shanghai"},{value:"Nanjing",label:"Nanjing"},{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"}],slots:{optionDefault:e=>t(u,null,[t("span",{style:"float: left"},[e.label]),t("span",{style:"float: right; color: var(--el-text-color-secondary); font-size: 13px;"},[e.value])])}}},{field:"field16",label:l("formDemo.selectGroup"),component:"Select",componentProps:{options:[{label:"option1",options:[{disabled:!0,label:"option1-1",value:"1-1"},{label:"option1-2",value:"1-2"}]},{label:"option2",options:[{label:"option2-1",value:"2-1"},{label:"option2-2",value:"2-2"}]}]}},{field:"field17",label:`${l("formDemo.selectGroup")} ${l("formDemo.slot")}`,component:"Select",componentProps:{options:[{label:"option1",options:[{label:"option1-1",value:"1-1"},{label:"option1-2",value:"1-2"}]},{label:"option2",options:[{label:"option2-1",value:"2-1"},{label:"option2-2",value:"2-2"}]}],slots:{optionGroupDefault:e=>t(j,{key:e.label,label:`${e.label} ${e.label}`},{default:()=>{var o;return[(o=e==null?void 0:e.options)==null?void 0:o.map(n=>t(G,{key:n.value,label:n.label,value:n.value},null))]}})}}},{field:"field18",label:`${l("formDemo.selectV2")}`,component:"Divider"},{field:"field19",label:l("formDemo.default"),component:"SelectV2",componentProps:{value:void 0,options:I.value}},{field:"field20",label:l("formDemo.slot"),component:"SelectV2",componentProps:{options:I.value,slots:{default:e=>t(u,null,[t("span",{style:"margin-right: 8px"},[e==null?void 0:e.label]),t("span",{style:"color: var(--el-text-color-secondary); font-size: 13px"},[e==null?void 0:e.value])])}}},{field:"field21",label:l("formDemo.selectGroup"),component:"SelectV2",componentProps:{options:E.value}},{field:"field22",label:`${l("formDemo.selectGroup")} ${l("formDemo.slot")}`,component:"SelectV2",componentProps:{options:E.value,slots:{default:e=>t(u,null,[t("span",{style:"margin-right: 8px"},[e==null?void 0:e.label]),t("span",{style:"color: var(--el-text-color-secondary); font-size: 13px"},[e==null?void 0:e.value])])}}},{field:"field23",label:l("formDemo.cascader"),component:"Divider"},{field:"field24",label:l("formDemo.default"),component:"Cascader",componentProps:{options:L,props:{multiple:!0}}},{field:"field25",label:l("formDemo.slot"),component:"Cascader",componentProps:{options:L,slots:{default:({data:e,node:o})=>t(u,null,[t("span",null,[e.label]),o.isLeaf?null:t("span",null,[r(" ("),e.children.length,r(") ")])])}}},{field:"field26",label:l("formDemo.switch"),component:"Divider"},{field:"field27",label:l("formDemo.default"),component:"Switch",value:!1},{field:"field28",label:l("formDemo.icon"),component:"Switch",value:!1,componentProps:{activeIcon:t(a,{icon:"ep:check"},null),inactiveIcon:t(a,{icon:"ep:close"},null)}},{field:"field29",label:l("formDemo.rate"),component:"Divider"},{field:"field30",label:l("formDemo.default"),component:"Rate",value:0},{field:"field31",label:l("formDemo.icon"),component:"Rate",value:null,componentProps:{voidIcon:t(a,{icon:"vi-ep:chat-round"},null),icons:[t(a,{icon:"vi-ep:chat-round"},null),t(a,{icon:"vi-ep:chat-line-round"},null),t(a,{icon:"vi-ep:chat-dot-round"},null)]}},{field:"field32",label:l("formDemo.colorPicker"),component:"Divider"},{field:"field33",label:l("formDemo.default"),component:"ColorPicker"},{field:"field34",label:l("formDemo.transfer"),component:"Divider"},{field:"field35",label:l("formDemo.default"),component:"Transfer",componentProps:{props:{key:"value",label:"desc"},data:$()},value:[],colProps:{span:24}},{field:"field36",label:l("formDemo.slot"),component:"Transfer",componentProps:{props:{key:"value",label:"desc"},filterable:!0,leftDefaultChecked:[2,3],rightDefaultChecked:[1],titles:["Source","Target"],buttonTexts:["To Left","To Right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:$(),slots:{default:({option:e})=>t("span",null,[e.value,r(" - "),e.desc]),leftFooter:()=>t(w,{class:"transfer-footer",size:"small"},{default:()=>[r("Operation")]}),rightFooter:()=>t(w,{class:"transfer-footer",size:"small"},{default:()=>[r("Operation")]})}},value:[1],colProps:{span:24}},{field:"field37",label:`${l("formDemo.render")}`,component:"Transfer",componentProps:{props:{key:"value",label:"desc",disabled:"disabled"},leftDefaultChecked:[2,3],rightDefaultChecked:[1],data:$(),renderContent:(e,o)=>e("span",null,`${o.value} - ${o.desc}`)},value:[1],colProps:{span:24}},{field:"field38",label:l("formDemo.radio"),component:"Divider"},{field:"field39-2",label:l("formDemo.radioGroup"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field39-3",label:`${l("formDemo.radioGroup")} ${l("formDemo.slot")}`,component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}],slots:{default:e=>e==null?void 0:e.map(o=>t(V,{label:o.label+`(${o.value})`,value:o.value},null))}}},{field:"field40",label:l("formDemo.button"),component:"RadioButton",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field40-1",label:`${l("formDemo.button")} ${l("formDemo.slot")}`,component:"RadioButton",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}],slots:{default:e=>e==null?void 0:e.map(o=>t(U,{label:o.label+`(${o.value})`,value:o.value},null))}}},{field:"field41",label:l("formDemo.checkbox"),component:"Divider"},{field:"field42-2",label:l("formDemo.checkboxGroup"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field42-3",label:`${l("formDemo.checkboxGroup")} ${l("formDemo.slot")}`,component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}],slots:{default:e=>e==null?void 0:e.map(o=>t(Y,{label:o.label+`(${o.value})`,value:o.value},null))}}},{field:"field43",label:l("formDemo.button"),component:"CheckboxButton",value:[],componentProps:{options:[{disabled:!0,label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"23"}]}},{field:"field43-1",label:`${l("formDemo.button")} ${l("formDemo.slot")}`,component:"CheckboxButton",value:[],componentProps:{options:[{disabled:!0,label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"23"}],slots:{default:e=>e==null?void 0:e.map(o=>t(J,{label:o.label+`(${o.value})`,value:o.value},null))}}},{field:"field44",component:"Divider",label:l("formDemo.slider")},{field:"field45",component:"Slider",label:l("formDemo.default"),value:0},{field:"field46",component:"Divider",label:l("formDemo.datePicker")},{field:"field47",component:"DatePicker",label:l("formDemo.default"),componentProps:{type:"date"}},{field:"field48",component:"DatePicker",label:l("formDemo.shortcuts"),componentProps:{type:"date",disabledDate:e=>e.getTime()>Date.now(),shortcuts:[{text:l("formDemo.today"),value:new Date},{text:l("formDemo.yesterday"),value:()=>{const e=new Date;return e.setTime(e.getTime()-3600*1e3*24),e}},{text:l("formDemo.aWeekAgo"),value:()=>{const e=new Date;return e.setTime(e.getTime()-3600*1e3*24*7),e}}]}},{field:"field47-1",component:"DatePicker",label:l("formDemo.slot"),value:"2021-10-29",componentProps:{type:"date",slots:{default:e=>t("div",{class:{cell:!0,current:e.isCurrent}},[t("span",{class:"text"},[e.text]),B(e)?t("span",{class:"holiday"},null):null])}}},{field:"field49",component:"DatePicker",label:l("formDemo.week"),componentProps:{type:"week",format:`[${l("formDemo.week")}]`}},{field:"field50",component:"DatePicker",label:l("formDemo.year"),componentProps:{type:"year"}},{field:"field51",component:"DatePicker",label:l("formDemo.month"),componentProps:{type:"month"}},{field:"field52",component:"DatePicker",label:l("formDemo.dates"),componentProps:{type:"dates"}},{field:"field53",component:"DatePicker",label:l("formDemo.daterange"),componentProps:{type:"daterange"}},{field:"field54",component:"DatePicker",label:l("formDemo.monthrange"),componentProps:{type:"monthrange"}},{field:"field56",component:"Divider",label:l("formDemo.dateTimePicker")},{field:"field57",component:"DatePicker",label:l("formDemo.default"),componentProps:{type:"datetime"}},{field:"field58",component:"DatePicker",label:l("formDemo.shortcuts"),componentProps:{type:"datetime",shortcuts:[{text:l("formDemo.today"),value:new Date},{text:l("formDemo.yesterday"),value:()=>{const e=new Date;return e.setTime(e.getTime()-3600*1e3*24),e}},{text:l("formDemo.aWeekAgo"),value:()=>{const e=new Date;return e.setTime(e.getTime()-3600*1e3*24*7),e}}]}},{field:"field59",component:"DatePicker",label:l("formDemo.dateTimerange"),componentProps:{type:"datetimerange"}},{field:"field60",component:"Divider",label:l("formDemo.timePicker")},{field:"field61",component:"TimePicker",label:l("formDemo.default")},{field:"field62",component:"Divider",label:l("formDemo.timeSelect")},{field:"field63",component:"TimeSelect",label:l("formDemo.default")},{field:"field64",component:"Divider",label:l("formDemo.richText")},{field:"field65",component:"Editor",value:"hello world",label:l("formDemo.default"),colProps:{span:24}},{field:"field66",component:"Divider",label:l("formDemo.inputPassword")},{field:"field67",component:"InputPassword",label:l("formDemo.default"),componentProps:{strength:!0}},{field:"field68",component:"Divider",label:`${l("formDemo.form")} ${l("formDemo.slot")}`},{field:"field69",component:"Input",label:"label",formItemProps:{slots:{label:({label:e})=>t("div",{class:"custom-label"},[t("span",{class:"label-text"},[r("custom "),e])])}}},{field:"field69-1",component:"Input",label:"custom formItem",formItemProps:{slots:{default:e=>t(H,{modelValue:e["field69-1"],"onUpdate:modelValue":o=>e["field69-1"]=o},null)}}},{field:"field70",component:"Divider",label:`${l("formDemo.remoteLoading")}`},{field:"field71",label:`${l("formDemo.select")}`,component:"Select",componentProps:{options:[]},optionApi:()=>s(this,null,function*(){return(yield h()).data})},{field:"field72",label:`${l("formDemo.selectV2")}`,component:"SelectV2",componentProps:{options:[]},optionApi:()=>s(this,null,function*(){return(yield h()).data})},{field:"field73",label:`${l("formDemo.checkboxGroup")}`,component:"CheckboxGroup",componentProps:{options:[]},optionApi:()=>s(this,null,function*(){return(yield h()).data})},{field:"field74",label:`${l("formDemo.radioGroup")}`,component:"RadioGroup",componentProps:{options:[]},optionApi:()=>s(this,null,function*(){return(yield h()).data})},{field:"field82",label:`${l("formDemo.treeSelect")}`,component:"TreeSelect",optionApi:()=>s(this,null,function*(){return yield _()})},{field:"field75",component:"Divider",label:`${l("formDemo.treeSelect")}`},{field:"field76",component:"TreeSelect",label:`${l("formDemo.default")}`,componentProps:{renderAfterExpand:!1,data:c}},{field:"field76",component:"TreeSelect",label:`${l("formDemo.showCheckbox")}`,componentProps:{renderAfterExpand:!1,showCheckbox:!0,data:c}},{field:"field77",component:"TreeSelect",label:`${l("formDemo.selectAnyLevel")}`,componentProps:{renderAfterExpand:!1,showCheckbox:!0,checkStrictly:!0,checkOnClickNode:!0,data:c}},{field:"field78",component:"TreeSelect",label:`${l("formDemo.multiple")}`,componentProps:{renderAfterExpand:!1,multiple:!0,showCheckbox:!0,checkStrictly:!0,checkOnClickNode:!0,data:c}},{field:"field79",component:"TreeSelect",label:`${l("formDemo.filterable")}`,componentProps:{renderAfterExpand:!1,multiple:!0,filterable:!0,showCheckbox:!0,checkStrictly:!0,checkOnClickNode:!0,filterNodeMethod:(e,o)=>o.label.includes(e),data:c}},{field:"field80",component:"TreeSelect",label:`${l("formDemo.customContent")}`,componentProps:{renderAfterExpand:!1,multiple:!0,filterable:!0,showCheckbox:!0,checkStrictly:!0,checkOnClickNode:!0,filterNodeMethod:(e,o)=>o.label.includes(e),slots:{default:({data:{label:e}})=>t(u,null,[e,t("span",{style:"color: gray"},[r("(suffix)")])])},data:c}},{field:"field81",component:"TreeSelect",label:`${l("formDemo.lazyLoad")}`,componentProps:{renderAfterExpand:!1,lazy:!0,load:(e,o)=>{if(e.isLeaf)return o([]);setTimeout(()=>{o([{value:++v,label:`lazy load node${v}`},{value:++v,label:`lazy load node${v}`,isLeaf:!0}])},400)},multiple:!0,filterable:!0,showCheckbox:!0,checkStrictly:!0,checkOnClickNode:!0,filterNodeMethod:(e,o)=>o.label.includes(e),slots:{default:({data:{label:e}})=>t(u,null,[e,t("span",{style:"color: gray"},[r("(suffix)")])])},data:c}},{field:"field82",component:"Divider",label:`${l("formDemo.upload")}`},{field:"field83",component:"Upload",label:`${l("formDemo.default")}`,componentProps:{limit:3,action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",fileList:[{name:"element-plus-logo.svg",url:"https://element-plus.org/images/element-plus-logo.svg"},{name:"element-plus-logo2.svg",url:"https://element-plus.org/images/element-plus-logo.svg"}],multiple:!0,onPreview:e=>{},onRemove:e=>{},beforeRemove:e=>K.confirm(`Cancel the transfer of ${e.name} ?`).then(()=>!0,()=>!1),onExceed:(e,o)=>{C.warning(`The limit is 3, you selected ${e.length} files this time, add up to ${e.length+o.length} totally`)},slots:{default:()=>t(w,{type:"primary"},{default:()=>[r("Click to upload")]}),tip:()=>t("div",{class:"el-upload__tip"},[r("jpg/png files with a size less than 500KB.")])}}},{field:"field84",component:"Upload",label:`${l("formDemo.userAvatar")}`,componentProps:{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",showFileList:!1,onSuccess:(e,o)=>{D.value=URL.createObjectURL(o.raw)},beforeUpload:e=>e.type!=="image/jpeg"?(C.error("Avatar picture must be JPG format!"),!1):e.size/1024/1024>2?(C.error("Avatar picture size can not exceed 2MB!"),!1):!0,slots:{default:()=>t(u,null,[D.value?t("img",{src:D.value,class:"avatar"},null):null,D.value?null:t(W,{class:"avatar-uploader-icon",size:"large"},{default:()=>[r("add")]})])}}},{field:"field85",component:"Divider",label:l("formDemo.jsonEditor")},{field:"field86",component:"JsonEditor",label:l("formDemo.default"),value:{a:1,b:2}},{field:"field87",component:"Divider",label:l("formDemo.iconPicker")},{field:"field88",component:"IconPicker",label:l("formDemo.default"),value:"vi-tdesign:archway"},{field:"field89",component:"Divider",label:l("formDemo.iAgree")},{field:"field90",component:"IAgree",label:l("formDemo.default"),componentProps:{text:"我同意《用户协议》",link:[{text:"《用户协议》",url:"https://element-plus.org/"}]}}]);return(e,o)=>(ee(),le(P(M),{title:P(l)("formDemo.defaultForm"),message:P(l)("formDemo.formDes")},{default:oe(()=>[t(P(O),{schema:z,"label-width":"auto","label-position":y.value?"top":"right"},null,8,["schema","label-position"])]),_:1},8,["title","message"]))}});export{Ee as default};
