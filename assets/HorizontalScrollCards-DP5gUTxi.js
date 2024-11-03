import{r as g,j as c}from"./index-CsuO1ICU.js";import{B as I}from"./BadgeElement-Babdr6uV.js";import{b as P}from"./index-Bz1VRe0A.js";import{S as Y}from"./Socials-BxLA_f3E.js";import{B as D}from"./badge-check-B0cI3rmg.js";import{u as S,a as m,M as X,i as M,b as T,c as R,f as x,d as b,p as G,v as $,g as F,h as _,w as q,m as H}from"./motion-CIAo-Tbj.js";import"./index-CLlgHQJX.js";function J(e){const t=S(()=>m(e)),{isStatic:r}=g.useContext(X);if(r){const[,s]=g.useState(e);g.useEffect(()=>t.on("change",s),[])}return t}const U=e=>e&&typeof e=="object"&&e.mix,K=e=>U(e)?e.mix:void 0;function Q(...e){const t=!Array.isArray(e[0]),r=t?0:-1,s=e[0+r],n=e[1+r],o=e[2+r],i=e[3+r],l=M(n,o,{mixer:K(o[0]),...i});return t?l(s):l}function V(e,t){const r=J(t()),s=()=>r.set(t());return s(),T(()=>{const n=()=>x.update(s,!1,!0),o=e.map(i=>i.on("change",n));return()=>{o.forEach(i=>i()),R(s)}}),r}function Z(e){b.current=[],e();const t=V(b.current,e);return b.current=void 0,t}function ee(e,t,r,s){if(typeof e=="function")return Z(e);const n=typeof t=="function"?t:Q(t,r,s);return Array.isArray(e)?N(e,n):N([e],([o])=>n(o))}function N(e,t){const r=S(()=>[]);return V(e,()=>{r.length=0;const s=e.length;for(let n=0;n<s;n++)r[n]=e[n].get();return t(r)})}function te(e,t,r){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const v=new WeakMap;let h;function se(e,t){if(t){const{inlineSize:r,blockSize:s}=t[0];return{width:r,height:s}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function ne({target:e,contentRect:t,borderBoxSize:r}){var s;(s=v.get(e))===null||s===void 0||s.forEach(n=>{n({target:e,contentSize:t,get size(){return se(e,r)}})})}function re(e){e.forEach(ne)}function oe(){typeof ResizeObserver>"u"||(h=new ResizeObserver(re))}function ie(e,t){h||oe();const r=te(e);return r.forEach(s=>{let n=v.get(s);n||(n=new Set,v.set(s,n)),n.add(t),h==null||h.observe(s)}),()=>{r.forEach(s=>{const n=v.get(s);n==null||n.delete(t),n!=null&&n.size||h==null||h.unobserve(s)})}}const w=new Set;let y;function le(){y=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};w.forEach(r=>r(t))},window.addEventListener("resize",y)}function ce(e){return w.add(e),y||le(),()=>{w.delete(e),!w.size&&y&&(y=void 0)}}function ae(e,t){return typeof e=="function"?ce(e):ie(e,t)}const fe=50,B=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),ue=()=>({time:0,x:B(),y:B()}),de={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function W(e,t,r,s){const n=r[t],{length:o,position:i}=de[t],l=n.current,u=r.time;n.current=e["scroll"+i],n.scrollLength=e["scroll"+o]-e["client"+o],n.offset.length=0,n.offset[0]=0,n.offset[1]=n.scrollLength,n.progress=G(0,n.scrollLength,n.current);const f=s-u;n.velocity=f>fe?0:$(n.current-l,f)}function he(e,t,r){W(e,"x",t,r),W(e,"y",t,r),t.time=r}function pe(e,t){const r={x:0,y:0};let s=e;for(;s&&s!==t;)if(s instanceof HTMLElement)r.x+=s.offsetLeft,r.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const n=s.getBoundingClientRect();s=s.parentElement;const o=s.getBoundingClientRect();r.x+=n.left-o.left,r.y+=n.top-o.top}else if(s instanceof SVGGraphicsElement){const{x:n,y:o}=s.getBBox();r.x+=n,r.y+=o;let i=null,l=s.parentNode;for(;!i;)l.tagName==="svg"&&(i=l),l=s.parentNode;s=i}else break;return r}const me={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},z={start:0,center:.5,end:1};function A(e,t,r=0){let s=0;if(z[e]!==void 0&&(e=z[e]),typeof e=="string"){const n=parseFloat(e);e.endsWith("px")?s=n:e.endsWith("%")?e=n/100:e.endsWith("vw")?s=n/100*document.documentElement.clientWidth:e.endsWith("vh")?s=n/100*document.documentElement.clientHeight:e=n}return typeof e=="number"&&(s=t*e),r+s}const xe=[0,0];function ge(e,t,r,s){let n=Array.isArray(e)?e:xe,o=0,i=0;return typeof e=="number"?n=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?n=e.split(" "):n=[e,z[e]?e:"0"]),o=A(n[0],r,s),i=A(n[1],t),o-i}const ye={x:0,y:0};function ve(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function we(e,t,r){const{offset:s=me.All}=r,{target:n=e,axis:o="y"}=r,i=o==="y"?"height":"width",l=n!==e?pe(n,e):ye,u=n===e?{width:e.scrollWidth,height:e.scrollHeight}:ve(n),f={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let d=!t[o].interpolate;const E=s.length;for(let a=0;a<E;a++){const j=ge(s[a],f[i],u[i],l[o]);!d&&j!==t[o].interpolatorOffsets[a]&&(d=!0),t[o].offset[a]=j}d&&(t[o].interpolate=M(t[o].offset,F(s)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function Ee(e,t=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let s=t;for(;s&&s!==e;)r.x.targetOffset+=s.offsetLeft,r.y.targetOffset+=s.offsetTop,s=s.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}function be(e,t,r,s={}){return{measure:()=>Ee(e,s.target,r),update:n=>{he(e,r,n),(s.offset||s.target)&&we(e,r,s)},notify:()=>t(r)}}const p=new WeakMap,O=new WeakMap,L=new WeakMap,C=e=>e===document.documentElement?window:e;function Le(e,{container:t=document.documentElement,...r}={}){let s=L.get(t);s||(s=new Set,L.set(t,s));const n=ue(),o=be(t,e,n,r);if(s.add(o),!p.has(t)){const l=()=>{for(const a of s)a.measure()},u=()=>{for(const a of s)a.update(_.timestamp)},f=()=>{for(const a of s)a.notify()},d=()=>{x.read(l,!1,!0),x.read(u,!1,!0),x.update(f,!1,!0)};p.set(t,d);const E=C(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&O.set(t,ae(t,d)),E.addEventListener("scroll",d,{passive:!0})}const i=p.get(t);return x.read(i,!1,!0),()=>{var l;R(i);const u=L.get(t);if(!u||(u.delete(o),u.size))return;const f=p.get(t);p.delete(t),f&&(C(t).removeEventListener("scroll",f),(l=O.get(t))===null||l===void 0||l(),window.removeEventListener("resize",f))}}function k(e,t){q(!!(!t||t.current))}const ze=()=>({scrollX:m(0),scrollY:m(0),scrollXProgress:m(0),scrollYProgress:m(0)});function Se({container:e,target:t,layoutEffect:r=!0,...s}={}){const n=S(ze);return(r?T:g.useEffect)(()=>(k("target",t),k("container",e),Le(({x:i,y:l})=>{n.scrollX.set(i.current),n.scrollXProgress.set(i.progress),n.scrollY.set(l.current),n.scrollYProgress.set(l.progress)},{...s,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(s.offset)]),n}function je({data:e,isResponsive:t=!1}){return c.jsxs("div",{className:`flex items-center rounded-[16px] bg-transparent hover:bg-gradient-to-r from-[rgba(255,233,244,0.4)] to-[rgba(234,243,255,0.6)]
    dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 h-fit p-[12px]
     text-primary-text cursor-pointer w-[224px] flex-col md:min-h-[302px]`,children:[c.jsxs("div",{className:`relative ${t?"w-[100px] h-[100px] min-w-[100px] min-h-[100px] mr-[12px] md:mr-0":"w-[200px] h-[200px] min-w-[200px] min-h-[200px]"} rounded-xl md:w-[200px] md:h-[200px] mb-[8px]`,children:[c.jsx(I,{className:`absolute top-[8px] left-[8px] ${e.badgeText?"flex":"hidden"} justify-center items-center w-fit h-[16px] px-[6px] py-[0px] text-[8px] md:text-[10px] uppercase text-white`,variant:e.badgeType,children:e.badgeText}),c.jsx(P.LazyLoadImage,{src:e.image,alt:e.company+" logo",className:"w-full h-full rounded-xl object-cover",draggable:!1})]}),c.jsxs("div",{className:"flex flex-col w-fit h-fit",children:[c.jsxs("h3",{className:"inline-flex justify-start items-center text-base font-bold mr-2",children:[e.title," ",c.jsx(D,{className:"ml-1 inline text-link-blue w-5 h-5"})]}),c.jsx("p",{className:"text-[13px] text-light-gray leading-[1.5em]",children:e.company}),c.jsx("p",{className:"text-sm text-primary-text-60 leading-[1.5em]",children:e.paragraph}),c.jsx(Y,{className:"flex gap-3 mt-3",data:e.socials})]})]})}function ke({data:e}){const t=g.useRef(null),{scrollYProgress:r}=Se({target:t}),s=ee(r,[0,1],["0%","-93%"]),n=e.items.map((o,i)=>c.jsx(H.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5},id:"card",className:"w-full md:w-fit h-fit",children:c.jsx(je,{data:o})},i));return c.jsx("section",{ref:t,className:"relative h-[300vh] bg-transparent",children:c.jsxs("div",{className:"sticky top-0 flex flex-col w-full h-screen justify-center items-start overflow-hidden",children:[c.jsx("div",{className:"w-full h-fit mb-[10px]",children:c.jsxs("h3",{className:"uppercase text-sm text-light-gray tracking-widest",children:[e.title," (",e.items.length,")"]})}),c.jsx(H.div,{style:{x:s},className:"flex gap-4",children:n})]})})}export{ke as default};