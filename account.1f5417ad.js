import{d as H,t as J,u as K,a as X,r as y,b as R,w as L,E as Z,c as ee,e as le,f as oe,g as Q,h as te,i as ue,o as g,j as Y,k as u,l as r,m as ne,n as m,p as W,F as q,q as T,s as z,v as k,x as ae,y as O,z as P,A as re,B as se,C as ie,D as j,G as de,H as N,I as ce,J as me,K as G}from"./assets/index.ec56810d.js";import{u as pe,a as fe}from"./use-form.14af79ae.js";const _e={class:"StockAdd"},ve={flex:"~ 1","justify-end":""},be=k(" \u53D6\u6D88 "),Ee=k(" \u63D0\u4EA4 "),De=H({__name:"AccountAdd",props:{onClose:null},emits:["on-submit"],setup(V,{emit:d}){const D=V,{uniqueBy:p,pickBy:v}=ae(),{g_stock:c}=J(K()),B=W("emitter"),$=X(),C=y(),e=R({id:"",price:"",color:"",size:"",note:""}),w=R({id:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D27\u53F7",trigger:"blur"}],price:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C",trigger:"blur"}],color:[{required:!0,message:"\u8BF7\u9009\u62E9\u989C\u8272",trigger:"blur"}],size:[{required:!0,message:"\u8BF7\u9009\u62E9\u5C3A\u7801",trigger:"blur"}]}),A=n=>({value:n,label:n}),_=y(["001","002","110","111"].map(A)),x=y(["\u7EA2","\u7C89","\u6A59","\u9EC4","\u7EFF","\u9752","\u84DD","\u7D2B","\u68D5","\u9ED1","\u767D","\u7070"].map(A)),h=y(["33","34","35","36","37","38","39","40","41","42","43","44","45"].map(A));B.off("onEdit"),B.on("onEdit",n=>{e.id=n.id,e.price=n.price,e.color=n.color,e.size=n.size,e.note=n.note}),L(()=>{var o;const n=l=>({value:`${l}`,label:`${l}`});_.value=p(c.value,"id").map(n),e.price=((o=c.value.find(l=>l.id===e.id))==null?void 0:o.price)||"",x.value=v(c.value.filter(l=>l.id===e.id),"color").map(l=>l.color).map(n),h.value=v(c.value.filter(l=>l.id===e.id).filter(l=>l.color===e.color),"size").map(l=>l.size).sort().map(n)});async function I(n){!n||await n.validate((o,l)=>{const{id:f,color:s,size:i}=e,b=c.value.find(E=>[E.id,E.color,E.size].join()===[f,s,i].join());if(o&&b){const E=c.value.findIndex(t=>[t.id,t.color,t.size].join()===[f,s,i].join());d("on-submit",b,E,e),S(),D.onClose(),O.success("\u63D0\u4EA4\u6210\u529F")}else console.log("\u63D0\u4EA4\u5931\u8D25",l),O.error("\u4ED3\u5E93\u91CC\u6CA1\u6709\u8FD9\u53CC\u978B")})}function M(n,o){!n||(S(),o())}function U(n){!n||(S(),D.onClose())}function S(){e.id="",e.price="",e.color="",e.size="",e.note=""}return(n,o)=>{const l=Z,f=ee,s=le,i=oe,b=Q,E=te,t=ue;return g(),Y("div",_e,[u(t,ne(m($),{"close-on-click-modal":!1,"before-close":a=>M(C.value,a)}),{default:r(()=>[u(E,{ref_key:"ruleFormRef",ref:C,model:e,rules:w,"label-width":52},{default:r(()=>[u(s,{label:"\u8D27\u53F7",prop:"id"},{default:r(()=>[u(f,{modelValue:e.id,"onUpdate:modelValue":o[0]||(o[0]=a=>e.id=a),filterable:"","allow-create":"",placeholder:"001"},{default:r(()=>[(g(!0),Y(q,null,T(_.value,({label:a,value:F})=>(g(),P(l,{key:F,label:a,value:F},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(s,{label:"\u4EF7\u683C",prop:"price"},{default:r(()=>[u(i,{modelValue:e.price,"onUpdate:modelValue":o[1]||(o[1]=a=>e.price=a),placeholder:"55"},null,8,["modelValue"])]),_:1}),u(s,{label:"\u989C\u8272",prop:"color"},{default:r(()=>[u(f,{modelValue:e.color,"onUpdate:modelValue":o[2]||(o[2]=a=>e.color=a),filterable:"","allow-create":"",placeholder:"\u7EA2"},{default:r(()=>[(g(!0),Y(q,null,T(x.value,({label:a,value:F})=>(g(),P(l,{key:F,label:a,value:F},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(s,{label:"\u5C3A\u7801",prop:"size"},{default:r(()=>[u(f,{modelValue:e.size,"onUpdate:modelValue":o[3]||(o[3]=a=>e.size=a),filterable:"","allow-create":"",placeholder:"35"},{default:r(()=>[(g(!0),Y(q,null,T(h.value,({label:a,value:F})=>(g(),P(l,{key:F,label:a,value:F},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(s,{label:"\u5907\u6CE8",prop:"note"},{default:r(()=>[u(i,{modelValue:e.note,"onUpdate:modelValue":o[4]||(o[4]=a=>e.note=a),type:"textarea",rows:2,placeholder:"\u672A\u4ED8\u6B3E"},null,8,["modelValue"])]),_:1}),u(s,{class:"!mb-0"},{default:r(()=>[z("div",ve,[u(b,{type:"primary",onClick:o[5]||(o[5]=a=>U(C.value))},{default:r(()=>[be]),_:1}),u(b,{type:"primary",onClick:o[6]||(o[6]=a=>I(C.value))},{default:r(()=>[Ee]),_:1})])]),_:1})]),_:1},8,["model","rules"])]),_:1},16,["before-close"])])}}});function Ce(V,d,D){const p=W("emitter"),v=y([]),c=y(0);function B(e,w){D("\u7F16\u8F91"),c.value=e,p.emit("onEdit",w)}function $(e){const w=V.value.filter((A,_)=>_===e);V.value=V.value.filter((A,_)=>_!==e),d.value=d.value.concat(w)}function C(e){v.value=e}return{tableData:v,currIndex:c,onEdit:B,onDelete:$,refresh:C}}const Fe={class:"Stock"},ge={flex:"","mb-4":"","content-center":""},ye={"font-bold":""},ke={"font-bold":"","ml-8":""},Be=z("div",{"flex-1":""},null,-1),we=k(" \u6DFB\u52A0 "),Ae=k(" \u4FDD\u5B58 "),Ve=k(" \u7F16\u8F91 "),xe=k(" \u5220\u9664 "),ze=H({__name:"account",setup(V){const{g_account:d,g_stock:D}=J(K()),p=y([]),{visible:v,title:c,onShow:B,onClose:$}=pe(d),{tableData:C,currIndex:e,onEdit:w,onDelete:A,refresh:_}=Ce(d,D,B),{isQuery:x,onSave:h}=fe(d,p,_),I=y(new Date),M=re(()=>p.value.reduce((o,l)=>o+Number(l.price),0));L(()=>{x.value?x.value=!1:U(d.value)});function U(o){p.value=o,_(p.value)}function S(o){x.value=!0,p.value=d.value.filter(l=>N(l.time).format("YYYYMMDD")===N(o).format("YYYYMMDD")),_(p.value)}function n(o,l,f){if(c.value==="\u7F16\u8F91"){const s=d.value.findIndex((i,b)=>b===e.value);d.value.splice(s,1,o)}else c.value==="\u65B0\u589E"&&o&&(D.value=D.value.filter((s,i)=>i!==l),d.value=d.value.concat({...o,price:f.price,note:f.note,time:Date.now()}))}return(o,l)=>{const f=ce,s=Q,i=se,b=ie,E=De;return g(),Y("div",Fe,[z("div",ge,[z("p",ye," \u603B\u91CF: "+j(p.value.length)+"\u53CC ",1),z("p",ke," \u603B\u4EF7: "+j(m(M))+"\u5143 ",1),Be,u(f,{modelValue:I.value,"onUpdate:modelValue":l[0]||(l[0]=t=>I.value=t),type:"date",placeholder:"Pick a day",onChange:S},null,8,["modelValue"]),u(s,{"ml-4":"",type:"primary",onClick:l[1]||(l[1]=t=>m(B)("\u65B0\u589E"))},{default:r(()=>[we]),_:1}),u(s,{type:"primary",onClick:l[2]||(l[2]=t=>m(h)(m(d),"account"))},{default:r(()=>[Ae]),_:1})]),u(b,{data:m(C),border:!0},{default:r(()=>[u(i,{label:"\u8D27\u53F7",prop:"id"}),u(i,{label:"\u5382\u5546",prop:"name"}),u(i,{label:"\u989C\u8272"},{default:r(t=>[z("i",{class:me({"bg-red":t.row.color==="\u7EA2","bg-pink":t.row.color==="\u7C89","bg-orange":t.row.color==="\u6A59","bg-yellow":t.row.color==="\u9EC4","bg-green":t.row.color==="\u7EFF","bg-cyan":t.row.color==="\u9752","bg-blue":t.row.color==="\u84DD","bg-purple":t.row.color==="\u7D2B","bg-stone":t.row.color==="\u68D5","bg-black":t.row.color==="\u9ED1","bg-gray-2":t.row.color==="\u767D","bg-gray":t.row.color==="\u7070"}),"i-mdi:shoe-sneaker":"","text-18px":""},null,2),k(" "+j(t.row.color),1)]),_:1}),u(i,{label:"\u5C3A\u7801",prop:"size"}),u(i,{label:"\u4EF7\u683C",prop:"price"}),u(i,{label:"\u65F6\u95F4"},{default:r(t=>[k(j(m(N)(t.row.time).format("YYYY-MM-DD")),1)]),_:1}),u(i,{label:"\u5907\u6CE8",prop:"note"}),u(i,{label:"\u64CD\u4F5C"},{default:r(t=>[u(s,{size:"small",onClick:a=>m(w)(t.$index,t.row)},{default:r(()=>[Ve]),_:2},1032,["onClick"]),u(s,{size:"small",type:"danger",onClick:a=>m(A)(t.$index)},{default:r(()=>[xe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),u(E,{modelValue:m(v),"onUpdate:modelValue":l[3]||(l[3]=t=>de(v)?v.value=t:null),title:m(c),"on-close":m($),onOnSubmit:n},null,8,["modelValue","title","on-close"])])}}});typeof G=="function"&&G(ze);export{ze as default};
