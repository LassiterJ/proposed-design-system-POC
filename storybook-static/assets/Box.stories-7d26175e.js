import{j as a}from"./jsx-runtime-29545a09.js";import{c as g,f as s,a as y,B as x}from"./Box-4095e2a1.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";const o=Object.keys(g).map(t=>t.replace(".","_")),e=o.map(t=>`-${t}`).filter(t=>t!=="-0"),n=Object.keys(y);console.log("fractionalUnitsCSSMap: ",s);const b={p:{control:"select",options:[...o]},px:{control:"select",options:[...o]},py:{control:"select",options:[...o]},pt:{control:"select",options:[...o]},pe:{control:"select",options:[...o]},pb:{control:"select",options:[...o]},ps:{control:"select",options:[...o]},position:{control:"select",options:["static","relative","absolute","fixed","sticky"]},inset:{control:"select",options:["auto",...o,...n],mapping:s},top:{control:"select",options:["auto",...o,...n],mapping:s},right:{control:"select",options:["auto",...o,...n],mapping:s},bottom:{control:"select",options:["auto",...o,...n],mapping:s},left:{control:"select",options:["auto",...o,...n],mapping:s},width:{control:"select",options:["auto","min-content","max-content","100%",...o]},height:{control:"select",options:["auto","min-content","max-content","100%",...o]},shrink:{control:"select",options:["0","1"]},grow:{control:"select",options:["0","1"]}},f={m:{control:"select",options:["auto",...o,...e]},mx:{control:"select",options:["auto",...o,...e]},my:{control:"select",options:["auto",...o,...e]},mt:{control:"select",options:["auto",...o,...e]},me:{control:"select",options:["auto",...o,...e]},mb:{control:"select",options:["auto",...o,...e]},ms:{control:"select",options:["auto",...o,...e]}},C={title:"Layout/Box",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...f,...b,display:{control:"select",options:["none","inline","inline-block","block"]}}},c={args:{}},r={decorators:[t=>a("div",{children:a(t,{})})]};var i,l,p;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(p=(l=c.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <div>
        <Story />
      </div>]
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const O=["Basic","InFlexContainer"];export{c as Basic,r as InFlexContainer,O as __namedExportsOrder,C as default};
