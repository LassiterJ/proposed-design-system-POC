import"./index-ab3fe526.js";import{j as o,a as m,F as H}from"./jsx-runtime-29545a09.js";import{r as s}from"./index-76fb7be0.js";import{$,B as N}from"./Box-4095e2a1.js";import{_ as p}from"./extends-98964cd2.js";import{R as L}from"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";const E=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],w=E.reduce((e,n)=>{const t=s.forwardRef((r,a)=>{const{asChild:i,...c}=r,l=i?$:n;return s.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),s.createElement(l,p({},c,{ref:a}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{}),S="_HeroSection_ucjmu_1",k="_HeroContainer_ucjmu_6",g={HeroSection:S,HeroContainer:k},P=(e,n)=>{let t;return function(...r){const a=this;clearTimeout(t),t=setTimeout(()=>{e.apply(a,r)},n)}},R=s.createContext({}),h=()=>s.useContext(R),f=()=>{var t;const{appData:e}=h(),n=(t=e==null?void 0:e.header)!=null&&t.height?{height:`calc(100vh - ${e.header.height}px)`}:{};return o("div",{className:g.HeroContainer,style:n,children:o(N,{m:"1"})})};f.__docgenInfo={description:"",methods:[],displayName:"HomePageHero"};const _=({children:e})=>m(H,{children:[o("section",{className:g.HeroSection,style:{backgroundColor:"yellowgreen"},children:o(f,{})}),o("section",{style:{height:"20rem",backgroundColor:"lightgray"}}),o("section",{style:{height:"20rem",backgroundColor:"mediumpurple"}}),o("section",{style:{height:"20rem",backgroundColor:"dimgray"}})]});_.__docgenInfo={description:"",methods:[],displayName:"HomePageTemplateLayoutExample"};const B="_headerLayoutExample_4iloa_1",T="_mainBar_4iloa_7",z="_linksAndLogosContainer_4iloa_14",A="_header_4iloa_1",d={headerLayoutExample:B,mainBar:T,linksAndLogosContainer:z,header:A},I=()=>{const[e,n]=s.useState(0),[t,r]=s.useState(0),a=s.useRef(null),i=s.useCallback(()=>{a.current&&(n(a.current.getBoundingClientRect().height),r(a.current.getBoundingClientRect().width))},[]);return s.useLayoutEffect(()=>{const c=P(i,100);c();const l=new ResizeObserver(c);return l.observe(a.current),()=>{l.disconnect()}},[i]),[{height:e,width:t},a]},j=e=>{const[n,t]=I(),{appData:r,updateAppDataByKey:a}=h();return s.useEffect(()=>{var i,c;!n||!r||(r[e]?(((i=r[e])==null?void 0:i.height)!==n.height||((c=r[e])==null?void 0:c.width)!==n.width)&&a(e,{...r[e],...n,elementRef:t}):a(e,{...n,elementRef:t}))},[n,e,a]),t},y=()=>o("footer",{style:{backgroundColor:"powderblue"},children:o("h1",{children:"Footer"})});y.__docgenInfo={description:"",methods:[],displayName:"Footer"};const D="_mainLayout_1eqcg_1",F="_mainContent_1eqcg_7",u={mainLayout:D,mainContent:F},C=()=>{const e=j("header");return o("header",{ref:e,className:d.headerLayoutExample,children:m("div",{className:d.mainBar,children:[m("div",{className:d.linksAndLogosContainer,children:[o("div",{className:d.logoContainer,style:{height:"2rem",width:"2rem",backgroundColor:"indianred"}}),o("div",{className:d.links,style:{height:"2rem",width:"100%",backgroundColor:"maroon"},children:" "})]}),o("div",{className:d.locationSearchContainer,style:{height:"2rem",width:"100%",backgroundColor:"aqua"}})]})})};C.__docgenInfo={description:"",methods:[],displayName:"HeaderLayoutExample"};const O={},b=()=>o("div",{className:O.weatherBanner,style:{height:"2rem",width:"100%",backgroundColor:"lightsalmon"}});b.__docgenInfo={description:"",methods:[],displayName:"WeatherBanner"};const q=s.forwardRef((e,n)=>{var t;const{container:r=globalThis==null||(t=globalThis.document)===null||t===void 0?void 0:t.body,...a}=e;return r?L.createPortal(s.createElement(w.div,p({},a,{ref:n})),r):null}),M=q,x=({children:e,displayHeader:n})=>{var a,i;const{appData:t}=h(),r=(i=(a=t==null?void 0:t.header)==null?void 0:a.elementRef)==null?void 0:i.current;return m("div",{className:u.mainLayout,children:[o(C,{}),o(M,{container:r,children:o(b,{})}),o("main",{className:u.mainContent,children:e}),o(y,{})]})};x.__docgenInfo={description:"",methods:[],displayName:"MainLayout"};const v=()=>{const e=h();return console.log("HomePage/appData: ",e),o(x,{children:o(_,{})})};v.__docgenInfo={description:"",methods:[],displayName:"HomePage"};const Y={title:"PageComponents/HomePage",component:v,parameters:{layout:"fullscreen"}},Z=[];export{Z as __namedExportsOrder,Y as default};
