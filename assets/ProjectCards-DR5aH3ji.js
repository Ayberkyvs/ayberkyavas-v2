import{c,j as s,L as u,r as m}from"./index-CDcLxwCa.js";import{B as w}from"./BadgeElement-B7J_X0ME.js";import{b as g}from"./index-CnZumfS1.js";import{C as j,X as y}from"./x-ZYFIhMXq.js";import{m as k}from"./proxy-CbOkvWzX.js";import"./index-DMr4gurG.js";/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=c("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=c("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=c("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=c("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);function L({data:e,isResponsive:l=!0}){const r=e.badgeText.toLowerCase();return s.jsxs(u,{className:`flex items-center rounded-[16px] bg-transparent hover:bg-gradient-to-r from-[rgba(255,233,244,0.7)] to-[rgba(234,243,255,0.7)]
     dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 h-fit p-[12px]
      text-primary-text cursor-pointer ${l?"md:flex-col w-full md:w-[224px] md:min-h-[352px]":"w-[224px] flex-col md:min-h-[302px]"}`,to:e.link?e.link:void 0,children:[s.jsxs("div",{className:`relative ${l?"w-[100px] h-[100px] min-w-[100px] min-h-[100px] mr-[12px] md:mr-0":"w-[200px] h-[200px] min-w-[200px] min-h-[200px]"} rounded-xl md:w-[200px] md:h-[200px] mb-[8px]`,children:[s.jsx(w,{className:`absolute top-[8px] left-[8px] ${e.badgeText?"flex":"hidden"} justify-center items-center w-fit text-center text-xs md:text-sm uppercase text-white`,variant:e.badgeType,children:r=="completed"?s.jsx(j,{className:"w-[1.2em] h-[1.2em]"}):r=="now"?s.jsx(C,{className:"w-[1.2em] h-[1.2em]"}):r=="paused"?s.jsx(y,{className:"w-[1.2em] h-[1.2em]"}):e.badgeText}),s.jsx(g.LazyLoadImage,{src:e.image,alt:e.company+" logo",className:"w-full h-full rounded-xl",draggable:!1})]}),s.jsxs("div",{className:"flex flex-col w-fit h-fit place-self-start",children:[s.jsxs("h3",{className:"inline justify-start items-center text-base font-bold mr-2 leading-[1.5em]",children:[e.title," ",e!=null&&e.link&&(e==null?void 0:e.type)==="work"?s.jsx(v,{className:"inline text-link-blue w-[1.2em] h-[1.2em]"}):e!=null&&e.link&&(e==null?void 0:e.type)==="certificate"?s.jsx(b,{className:"inline text-link-blue w-[1.2em] h-[1.2em]"}):""]}),s.jsx("p",{className:"text-[13px] text-light-gray leading-[1.5em]",children:e.company}),s.jsx("p",{className:"text-sm text-primary-text-60 leading-[1.5em] line-clamp-3",children:e.paragraph})]})]})}function D({data:e,icon:l,showAll:r=!1}){const[o,d]=m.useState([]),[p,f]=m.useState(0),n=e.items.map((i,x)=>s.jsx(k.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:1},id:"card",className:"w-full md:w-fit h-fit",children:s.jsx(L,{data:i})},x));m.useEffect(()=>{a()},[]);const a=()=>{let i=[];const x=p,h=r?n.length:p+3;for(let t=x;t<h;t++)n[t]&&i.push(n[t]);f(h),d(t=>[...t,...i])};return s.jsxs("section",{className:"flex flex-col w-full h-fit mt-[56px]",children:[s.jsx("div",{className:"w-full h-fit mb-[14px]",children:s.jsxs("h2",{className:"flex items-center uppercase text-sm text-light-gray tracking-widest",children:[e.title," (",e.items.length,") ",l?s.jsx("span",{className:"ml-1",children:l}):""]})}),s.jsx("div",{className:"flex flex-wrap gap-[14px] mb-[14px]",children:o}),s.jsx("div",{className:"flex justify-center items-center",children:o.length===n.length?null:s.jsxs("span",{className:"flex text-link-blue text-[16px] cursor-pointer",onClick:()=>a(),children:["show more ",s.jsx(N,{})]})})]})}export{D as default};
