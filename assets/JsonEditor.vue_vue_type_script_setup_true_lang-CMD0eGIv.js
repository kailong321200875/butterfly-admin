import{c as M,a3 as re,M as ae,v as _,V as ce,r as ie,w as ue,e as de,J as se,u as he,x as fe}from"./vue-chunks-COp0tDkU.js";import{p as h}from"./index-XQEkcq4y.js";var E={d:(e,t)=>{for(var n in t)E.o(t,n)&&!E.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},ee={};function Q(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function te(e,t){if(e){if(typeof e=="string")return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}function A(e){return function(t){if(Array.isArray(t))return Q(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||te(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}E.d(ee,{Z:()=>me});const l=($={computed:()=>M,createTextVNode:()=>re,createVNode:()=>ae,defineComponent:()=>_,reactive:()=>ce,ref:()=>ie,watch:()=>ue,watchEffect:()=>de},H={},E.d(H,$),H),pe=(0,l.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,t=this.onClick;return(0,l.createVNode)("span",{class:"vjs-tree-brackets",onClick:t},[e])}}),ge=(0,l.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,t){var n=t.emit;return{uiType:(0,l.computed)(function(){return e.isMultiple?"checkbox":"radio"}),model:(0,l.computed)({get:function(){return e.checked},set:function(a){return n("update:modelValue",a)}})}},render:function(){var e=this.uiType,t=this.model,n=this.$emit;return(0,l.createVNode)("label",{class:["vjs-check-controller",t?"is-checked":""],onClick:function(a){return a.stopPropagation()}},[(0,l.createVNode)("span",{class:"vjs-check-controller-inner is-".concat(e)},null),(0,l.createVNode)("input",{checked:t,class:"vjs-check-controller-original is-".concat(e),type:e,onChange:function(){return n("change",t)}},null)])}}),ye=(0,l.defineComponent)({props:{nodeType:{required:!0,type:String},onClick:Function},render:function(){var e=this.nodeType,t=this.onClick,n=e==="objectStart"||e==="arrayStart";return n||e==="objectCollapsed"||e==="arrayCollapsed"?(0,l.createVNode)("span",{class:"vjs-carets vjs-carets-".concat(n?"open":"close"),onClick:t},[(0,l.createVNode)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},[(0,l.createVNode)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null)])]):null}});var $,H;function q(e){return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(e)}function ne(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function V(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"root",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0,f=a||{},y=f.key,C=f.index,d=f.type,k=d===void 0?"content":d,b=f.showComma,p=b!==void 0&&b,m=f.length,S=m===void 0?1:m,P=ne(e);if(P==="array"){var x=U(e.map(function(w,u,o){return V(w,"".concat(t,"[").concat(u,"]"),n+1,{index:u,showComma:u!==o.length-1,length:S,type:k})}));return[V("[",t,n,{showComma:!1,key:y,length:e.length,type:"arrayStart"})[0]].concat(x,V("]",t,n,{showComma:p,length:e.length,type:"arrayEnd"})[0])}if(P==="object"){var O=Object.keys(e),L=U(O.map(function(w,u,o){return V(e[w],/^[a-zA-Z_]\w*$/.test(w)?"".concat(t,".").concat(w):"".concat(t,'["').concat(w,'"]'),n+1,{key:w,showComma:u!==o.length-1,length:S,type:k})}));return[V("{",t,n,{showComma:!1,key:y,index:C,length:O.length,type:"objectStart"})[0]].concat(L,V("}",t,n,{showComma:p,length:O.length,type:"objectEnd"})[0])}return[{content:e,level:n,key:y,index:C,path:t,showComma:p,length:S,type:k}]}function U(e){if(typeof Array.prototype.flat=="function")return e.flat();for(var t=A(e),n=[];t.length;){var a=t.shift();Array.isArray(a)?t.unshift.apply(t,A(a)):n.push(a)}return n}function Y(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new WeakMap;if(e==null)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(q(e)!=="object")return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var n=e.map(function(y){return Y(y,t)});return t.set(e,n),n}var a={};for(var f in e)a[f]=Y(e[f],t);return t.set(e,a),a}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(f){return Object.getOwnPropertyDescriptor(e,f).enumerable})),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W(Object(n),!0).forEach(function(a){I(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var oe={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},renderNodeKey:Function,renderNodeValue:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},theme:{type:String,default:"light"},showKeyValueSpace:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"},onNodeClick:{type:Function},onBracketsClick:{type:Function},onIconClick:{type:Function},onValueChange:{type:Function}};const be=(0,l.defineComponent)({name:"TreeNode",props:G(G({},oe),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,style:Object,onSelectedChange:{type:Function}}),emits:["nodeClick","bracketsClick","iconClick","selectedChange","valueChange"],setup:function(e,t){var n=t.emit,a=(0,l.computed)(function(){return ne(e.node.content)}),f=(0,l.computed)(function(){return"vjs-value vjs-value-".concat(a.value)}),y=(0,l.computed)(function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key}),C=(0,l.computed)(function(){return e.selectableType==="multiple"}),d=(0,l.computed)(function(){return e.selectableType==="single"}),k=(0,l.computed)(function(){return e.nodeSelectable(e.node)&&(C.value||d.value)}),b=(0,l.reactive)({editing:!1}),p=function(u){var o,r,c=(r=(o=u.target)===null||o===void 0?void 0:o.value)==="null"?null:r==="undefined"?void 0:r==="true"||r!=="false"&&(r[0]+r[r.length-1]==='""'||r[0]+r[r.length-1]==="''"?r.slice(1,-1):typeof Number(r)=="number"&&!isNaN(Number(r))||r==="NaN"?Number(r):r);n("valueChange",c,e.node.path)},m=(0,l.computed)(function(){var u,o=(u=e.node)===null||u===void 0?void 0:u.content;return o===null?o="null":o===void 0&&(o="undefined"),a.value==="string"?'"'.concat(o,'"'):o+""}),S=function(){var u=e.renderNodeValue;return u?u({node:e.node,defaultValue:m.value}):m.value},P=function(){n("bracketsClick",!e.collapsed,e.node)},x=function(){n("iconClick",!e.collapsed,e.node)},O=function(){n("selectedChange",e.node)},L=function(){n("nodeClick",e.node),k.value&&e.selectOnClickNode&&n("selectedChange",e.node)},w=function(u){if(e.editable&&!b.editing){b.editing=!0;var o=function r(c){var i;c.target!==u.target&&((i=c.target)===null||i===void 0?void 0:i.parentElement)!==u.target&&(b.editing=!1,document.removeEventListener("click",r))};document.removeEventListener("click",o),document.addEventListener("click",o)}};return function(){var u,o=e.node;return(0,l.createVNode)("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked,dark:e.theme==="dark"},onClick:L,style:e.style},[e.showLineNumber&&(0,l.createVNode)("span",{class:"vjs-node-index"},[o.id+1]),e.showSelectController&&k.value&&o.type!=="objectEnd"&&o.type!=="arrayEnd"&&(0,l.createVNode)(ge,{isMultiple:C.value,checked:e.checked,onChange:O},null),(0,l.createVNode)("div",{class:"vjs-indent"},[Array.from(Array(o.level)).map(function(r,c){return(0,l.createVNode)("div",{key:c,class:{"vjs-indent-unit":!0,"has-line":e.showLine}},null)}),e.showIcon&&(0,l.createVNode)(ye,{nodeType:o.type,onClick:x},null)]),o.key&&(0,l.createVNode)("span",{class:"vjs-key"},[(u=e.renderNodeKey,u?u({node:e.node,defaultKey:y.value||""}):y.value),(0,l.createVNode)("span",{class:"vjs-colon"},[":".concat(e.showKeyValueSpace?" ":"")])]),(0,l.createVNode)("span",null,[o.type!=="content"&&o.content?(0,l.createVNode)(pe,{data:o.content.toString(),onClick:P},null):(0,l.createVNode)("span",{class:f.value,onClick:!e.editable||e.editableTrigger&&e.editableTrigger!=="click"?void 0:w,onDblclick:e.editable&&e.editableTrigger==="dblclick"?w:void 0},[e.editable&&b.editing?(0,l.createVNode)("input",{value:m.value,onChange:p,style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"}},null):S()]),o.showComma&&(0,l.createVNode)("span",null,[","]),e.showLength&&e.collapsed&&(0,l.createVNode)("span",{class:"vjs-comment"},[(0,l.createTextVNode)(" // "),o.length,(0,l.createTextVNode)(" items ")])])])}}});function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(f){return Object.getOwnPropertyDescriptor(e,f).enumerable})),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?X(Object(n),!0).forEach(function(a){I(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}const me=(0,l.defineComponent)({name:"Tree",props:v(v({},oe),{},{data:{type:[String,Number,Boolean,Array,Object],default:null},collapsedNodeLength:{type:Number,default:1/0},deep:{type:Number,default:1/0},pathCollapsible:{type:Function,default:function(){return!1}},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},selectedValue:{type:[String,Array],default:function(){return""}},collapsedOnClickBrackets:{type:Boolean,default:!0},style:Object,onSelectedChange:{type:Function},theme:{type:String,default:"light"}}),slots:["renderNodeKey","renderNodeValue"],emits:["nodeClick","bracketsClick","iconClick","selectedChange","update:selectedValue","update:data"],setup:function(e,t){var n=t.emit,a=t.slots,f=(0,l.ref)(),y=(0,l.computed)(function(){return V(e.data,e.rootPath)}),C=function(o,r){return y.value.reduce(function(c,i){var s,g=i.level>=o||i.length>=r,N=(s=e.pathCollapsible)===null||s===void 0?void 0:s.call(e,i);return i.type!=="objectStart"&&i.type!=="arrayStart"||!g&&!N?c:v(v({},c),{},I({},i.path,1))},{})},d=(0,l.reactive)({translateY:0,visibleData:null,hiddenPaths:C(e.deep,e.collapsedNodeLength)}),k=(0,l.computed)(function(){for(var o=null,r=[],c=y.value.length,i=0;i<c;i++){var s=v(v({},y.value[i]),{},{id:i}),g=d.hiddenPaths[s.path];if(o&&o.path===s.path){var N=o.type==="objectStart",D=v(v(v({},s),o),{},{showComma:s.showComma,content:N?"{...}":"[...]",type:N?"objectCollapsed":"arrayCollapsed"});o=null,r.push(D)}else{if(g&&!o){o=s;continue}if(o)continue;r.push(s)}}return r}),b=(0,l.computed)(function(){var o=e.selectedValue;return o&&e.selectableType==="multiple"&&Array.isArray(o)?o:[o]}),p=(0,l.computed)(function(){return!e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}),m=function(){var o=k.value;if(e.virtual){var r,c=e.height/e.itemHeight,i=((r=f.value)===null||r===void 0?void 0:r.scrollTop)||0,s=Math.floor(i/e.itemHeight),g=s<0?0:s+c>o.length?o.length-c:s;g<0&&(g=0);var N=g+c;d.translateY=g*e.itemHeight,d.visibleData=o.filter(function(D,B){return B>=g&&B<N})}else d.visibleData=o},S=function(){m()},P=function(o){var r,c,i=o.path,s=e.selectableType;if(s==="multiple"){var g=b.value.findIndex(function(j){return j===i}),N=A(b.value);g!==-1?N.splice(g,1):N.push(i),n("update:selectedValue",N),n("selectedChange",N,A(b.value))}else if(s==="single"&&b.value[0]!==i){var D=(r=b.value,c=1,function(j){if(Array.isArray(j))return j}(r)||function(j,z){var T=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(T!=null){var J,R,F=[],K=!0,Z=!1;try{for(T=T.call(j);!(K=(J=T.next()).done)&&(F.push(J.value),!z||F.length!==z);K=!0);}catch(le){Z=!0,R=le}finally{try{K||T.return==null||T.return()}finally{if(Z)throw R}}return F}}(r,c)||te(r,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())[0],B=i;n("update:selectedValue",B),n("selectedChange",B,D)}},x=function(o){n("nodeClick",o)},O=function(o,r){if(o)d.hiddenPaths=v(v({},d.hiddenPaths),{},I({},r,1));else{var c=v({},d.hiddenPaths);delete c[r],d.hiddenPaths=c}},L=function(o,r){e.collapsedOnClickBrackets&&O(o,r.path),n("bracketsClick",o,r)},w=function(o,r){O(o,r.path),n("iconClick",o,r)},u=function(o,r){var c=Y(e.data),i=e.rootPath;new Function("data","val","data".concat(r.slice(i.length),"=val"))(c,o),n("update:data",c)};return(0,l.watchEffect)(function(){p.value&&function(o){throw new Error("[VueJSONPretty] ".concat(o))}(p.value)}),(0,l.watchEffect)(function(){k.value&&m()}),(0,l.watch)(function(){return e.deep},function(o){o&&(d.hiddenPaths=C(o,e.collapsedNodeLength))}),(0,l.watch)(function(){return e.collapsedNodeLength},function(o){o&&(d.hiddenPaths=C(e.deep,o))}),function(){var o,r,c=(o=e.renderNodeKey)!==null&&o!==void 0?o:a.renderNodeKey,i=(r=e.renderNodeValue)!==null&&r!==void 0?r:a.renderNodeValue,s=d.visibleData&&d.visibleData.map(function(g){return(0,l.createVNode)(be,{key:g.id,node:g,collapsed:!!d.hiddenPaths[g.path],theme:e.theme,showDoubleQuotes:e.showDoubleQuotes,showLength:e.showLength,checked:b.value.includes(g.path),selectableType:e.selectableType,showLine:e.showLine,showLineNumber:e.showLineNumber,showSelectController:e.showSelectController,selectOnClickNode:e.selectOnClickNode,nodeSelectable:e.nodeSelectable,highlightSelectedNode:e.highlightSelectedNode,editable:e.editable,editableTrigger:e.editableTrigger,showIcon:e.showIcon,showKeyValueSpace:e.showKeyValueSpace,renderNodeKey:c,renderNodeValue:i,onNodeClick:x,onBracketsClick:L,onIconClick:w,onSelectedChange:P,onValueChange:u,style:e.itemHeight&&e.itemHeight!==20?{lineHeight:"".concat(e.itemHeight,"px")}:{}},null)});return(0,l.createVNode)("div",{ref:f,class:{"vjs-tree":!0,"is-virtual":e.virtual,dark:e.theme==="dark"},onScroll:e.virtual?S:void 0,style:e.showLineNumber?v({paddingLeft:"".concat(12*Number(y.value.length.toString().length),"px")},e.style):e.style},[e.virtual?(0,l.createVNode)("div",{class:"vjs-tree-list",style:{height:"".concat(e.height,"px")}},[(0,l.createVNode)("div",{class:"vjs-tree-list-holder",style:{height:"".concat(k.value.length*e.itemHeight,"px")}},[(0,l.createVNode)("div",{class:"vjs-tree-list-holder-inner",style:{transform:"translateY(".concat(d.translateY,"px)")}},[s])])]):s])}}});var ve=ee.Z;const Ce=_({__name:"JsonEditor",props:{modelValue:{type:Object,default:()=>({})},deep:h.number.def(5),showLength:h.bool.def(!0),showLineNumbers:h.bool.def(!0),showLineNumber:h.bool.def(!0),showIcon:h.bool.def(!0),showDoubleQuotes:h.bool.def(!0),virtual:h.bool.def(!1),height:h.number.def(400),itemHeight:h.number.def(20),rootPath:h.string.def("root"),nodeSelectable:h.func.def(),selectableType:h.oneOf(["multiple","single"]).def(),showSelectController:h.bool.def(!1),selectOnClickNode:h.bool.def(!0),highlightSelectedNode:h.bool.def(!0),collapsedOnClickBrackets:h.bool.def(!0),renderNodeKey:h.func.def(),renderNodeValue:h.func.def(),editable:h.bool.def(!0),editableTrigger:h.oneOf(["click","dblclick"]).def("click")},emits:["update:modelValue","node-click","brackets-click","icon-click","selected-value"],setup(e,{emit:t}){const n=t,a=e,f=M(()=>a.modelValue),y=M({get:()=>f.value,set:p=>{n("update:modelValue",p)}}),C=p=>{n("node-click",p)},d=p=>{n("brackets-click",p)},k=p=>{n("icon-click",p)},b=(p,m)=>{n("selected-value",p,m)};return(p,m)=>(fe(),se(he(ve),{data:y.value,"onUpdate:data":m[0]||(m[0]=S=>y.value=S),deep:e.deep,"show-length":e.showLength,"show-line-numbers":e.showLineNumbers,"show-line-number":e.showLineNumber,"show-icon":e.showIcon,"show-double-quotes":e.showDoubleQuotes,virtual:e.virtual,height:e.height,"item-height":e.itemHeight,"root-path":e.rootPath,"node-selectable":e.nodeSelectable,"selectable-type":e.selectableType,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"highlight-selected-node":e.highlightSelectedNode,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,"render-node-key":e.renderNodeKey,"render-node-value":e.renderNodeValue,editable:e.editable,"editable-trigger":e.editableTrigger,onNodeClick:C,onBracketsClick:d,onIconClick:k,onSelectedChange:b},null,8,["data","deep","show-length","show-line-numbers","show-line-number","show-icon","show-double-quotes","virtual","height","item-height","root-path","node-selectable","selectable-type","show-select-controller","select-on-click-node","highlight-selected-node","collapsed-on-click-brackets","render-node-key","render-node-value","editable","editable-trigger"]))}});export{Ce as _};
