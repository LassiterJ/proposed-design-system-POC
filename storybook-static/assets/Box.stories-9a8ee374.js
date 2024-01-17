import{j as G}from"./jsx-runtime-29545a09.js";import{R as H}from"./index-76fb7be0.js";import{g as I}from"./_commonjsHelpers-de833af9.js";import{$ as q}from"./index-000e0488.js";import"./extends-98964cd2.js";const j={"compass-box":"_compass-box_1yk0c_1"};var _={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function o(){for(var t="",s=0;s<arguments.length;s++){var u=arguments[s];u&&(t=l(t,d(u)))}return t}function d(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var s="";for(var u in t)i.call(t,u)&&t[u]&&(s=l(s,u));return s}function l(t,s){return s?t?t+" "+s:t+s:t}e.exports?(o.default=o,e.exports=o):window.classNames=o})()})(_);var z=_.exports;const $=I(z),n=(e,i="",o=void 0)=>{var l;const d=[];if(typeof e=="object"){for(const t of Object.keys(e))if(t in e){const s=(l=e[t])==null?void 0:l.toString(),u=s==null?void 0:s.startsWith("-"),c=i===""?"":"-",p=u?`-${i}`:i,m=u?s==null?void 0:s.substring(1):s;if(m===void 0)continue;const f=(o==null?void 0:o[m])??m,h=t==="initial"?`${p}${c}${f}`:`${t}:${p}${c}${f}`;d.push(h)}}if(typeof e=="string"){const t=e.startsWith("-"),s=i===""?"":"-",u=t?`-${i}`:i,c=t?e.substring(1):e,p=(o==null?void 0:o[c])??c;d.push(`${u}${s}${p}`)}if(typeof e=="boolean"){const t=i===""?"":"-",s=e.toString(),u=(o==null?void 0:o[s])??s;d.push(`${i}${t}${u}`)}return d.join(" ")};function A(...e){let i={};for(const o of e)o&&(i={...o,...i});return Object.keys(i).length?i:void 0}const P={0:0,px:1,".5":2,1:4,"1.5":6,2:8,"2.5":10,3:12,"3.5":14,4:16,5:20,6:24,7:28,8:32,9:36,10:40,11:44,12:48,14:56,16:64,20:80,24:96,28:112,32:128,36:144,40:160,44:176,48:192,52:208,56:224,60:240,64:256,72:288,80:320,96:384},y=Object.keys(P),J={p:{type:"enum",values:y,default:void 0,responsive:!0},px:{type:"enum",values:y,default:void 0,responsive:!0},py:{type:"enum",values:y,default:void 0,responsive:!0},pt:{type:"enum",values:y,default:void 0,responsive:!0},pe:{type:"enum",values:y,default:void 0,responsive:!0},pb:{type:"enum",values:y,default:void 0,responsive:!0},ps:{type:"enum",values:y,default:void 0,responsive:!0}},K=e=>{const{p:i=r.p.default,px:o=r.px.default,py:d=r.py.default,pt:l=r.pt.default,pe:t=r.pe.default,pb:s=r.pb.default,ps:u=r.ps.default,...c}=e;return{p:i,px:o,py:d,pt:l,pe:t,pb:s,ps:u,rest:c}},Q=e=>[n(e.p,"compass-p"),n(e.px,"compass-px"),n(e.py,"compass-py"),n(e.pt,"compass-pt"),n(e.pe,"compass-pe"),n(e.pb,"compass-pb"),n(e.ps,"compass-ps")].filter(Boolean).join(" "),U=["static","relative","absolute","fixed","sticky"],x=["auto","0","50%","100%"],B=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],X=["0","1"],Y=["0","1"],r={...J,position:{type:"enum",values:U,default:void 0,responsive:!0},inset:{type:"enum",values:x,default:void 0,responsive:!0},top:{type:"enum",values:x,default:void 0,responsive:!0},end:{type:"enum",values:x,default:void 0,responsive:!0},bottom:{type:"enum",values:x,default:void 0,responsive:!0},start:{type:"enum",values:x,default:void 0,responsive:!0},width:{type:"enum",values:B,default:void 0,responsive:!0},height:{type:"enum",values:B,default:void 0,responsive:!0},shrink:{type:"enum",values:X,default:void 0,responsive:!0},grow:{type:"enum",values:Y,default:void 0,responsive:!0},gridColumn:{type:"string",default:void 0,responsive:!0},gridColumnStart:{type:"string",default:void 0,responsive:!0},gridColumnEnd:{type:"string",default:void 0,responsive:!0},gridRow:{type:"string",default:void 0,responsive:!0},gridRowStart:{type:"string",default:void 0,responsive:!0},gridRowEnd:{type:"string",default:void 0,responsive:!0}},Z=e=>{const{rest:i,...o}=K(e),{position:d=r.position.default,width:l=r.width.default,height:t=r.height.default,inset:s=r.inset.default,top:u=r.top.default,bottom:c=r.bottom.default,start:p=r.start.default,end:m=r.end.default,shrink:f=r.shrink.default,grow:h=r.grow.default,gridColumn:k=r.gridColumn.default,gridColumnStart:S=r.gridColumnStart.default,gridColumnEnd:C=r.gridColumnEnd.default,gridRow:L=r.gridRow.default,gridRowStart:T=r.gridRowStart.default,gridRowEnd:W=r.gridRowEnd.default,...F}=i;return{...o,position:d,width:l,height:t,inset:s,top:u,bottom:c,start:p,end:m,shrink:f,grow:h,gridColumn:k,gridColumnStart:S,gridColumnEnd:C,gridRow:L,gridRowStart:T,gridRowEnd:W,rest:F}},M=e=>{const i=$(Q(e),n(e.position,"compass-position"),n(e.shrink,"compass-fs"),n(e.grow,"compass-fg"),n(e.width,"compass-w"),n(e.height,"compass-h"),n(e.inset,"compass-inset"),n(e.top,"compass-top"),n(e.bottom,"compass-bottom"),n(e.start,"compass-start"),n(e.end,"compass-end"));return[$(i),A()]},g=[...Object.keys(P),"auto"],b={m:{type:"enum",values:g,default:void 0,responsive:!0},mx:{type:"enum",values:g,default:void 0,responsive:!0},my:{type:"enum",values:g,default:void 0,responsive:!0},mt:{type:"enum",values:g,default:void 0,responsive:!0},me:{type:"enum",values:g,default:void 0,responsive:!0},mb:{type:"enum",values:g,default:void 0,responsive:!0},ms:{type:"enum",values:g,default:void 0,responsive:!0}},ee=e=>{const{m:i=b.m.default,mx:o=b.mx.default,my:d=b.my.default,mt:l=b.mt.default,me:t=b.me.default,mb:s=b.mb.default,ms:u=b.ms.default,...c}=e;return{m:i,mx:o,my:d,mt:l,me:t,mb:s,ms:u,rest:c}},O=e=>[n(e.m,"compass-m"),n(e.mx,"compass-mx"),n(e.my,"compass-my"),n(e.mt,"compass-mt"),n(e.me,"compass-me"),n(e.mb,"compass-mb"),n(e.ms,"compass-ms")].filter(Boolean).join(" "),N={display:{default:"block",values:["block","inline-block","inline","none"]}},R=H.forwardRef((e,i)=>{const{rest:o,...d}=ee(e),{rest:l,...t}=Z(o),{className:s,asChild:u,style:c,display:p=N.display.default,...m}=l,f=N.display.values.includes(p)?p:N.display.default,[h,k]=M(t),S=u?q:"div",C={class:$(`${j["compass-box"]}`),passedClassName:s,classesWithBreakpoints:n(f,"compass-display"),withMarginProps:O(d),layoutClassNames:h};return console.log("finalBoxProps: ",C),G(S,{...m,ref:i,className:$(`${j["compass-box"]}`,s,n(f,"compass-display"),O(d),h),style:A(k,c)})});R.displayName="Box";R.__docgenInfo={description:"",methods:[],displayName:"Box"};const a=Object.keys(P),v=a.map(e=>`-${e}`).filter(e=>e!=="-0"),te={p:{control:"select",options:[...a]},px:{control:"select",options:[...a]},py:{control:"select",options:[...a]},pt:{control:"select",options:[...a]},pr:{control:"select",options:[...a]},pb:{control:"select",options:[...a]},pl:{control:"select",options:[...a]},position:{control:"select",options:["static","relative","absolute","fixed","sticky"]},inset:{control:"select",options:["auto","0","50%","100%"]},top:{control:"select",options:["auto","0","50%","100%"]},right:{control:"select",options:["auto","0","50%","100%"]},bottom:{control:"select",options:["auto","0","50%","100%"]},left:{control:"select",options:["auto","0","50%","100%"]},width:{control:"select",options:["auto","min-content","max-content","100%",...a]},height:{control:"select",options:["auto","min-content","max-content","100%",...a]},shrink:{control:"select",options:["0","1"]},grow:{control:"select",options:["0","1"]}},se={m:{control:"select",options:["auto",...a,...v]},mx:{control:"select",options:["auto",...a,...v]},my:{control:"select",options:["auto",...a,...v]},mt:{control:"select",options:["auto",...a,...v]},mr:{control:"select",options:["auto",...a,...v]},mb:{control:"select",options:["auto",...a,...v]},ml:{control:"select",options:["auto",...a,...v]}},ae={title:"Layout/Box",component:R,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...se,...te}},w={args:{}};var V,E,D;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {}
}`,...(D=(E=w.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const de=["Default"];export{w as Default,de as __namedExportsOrder,ae as default};