import{g as d,a as l}from"./dom.03f069d3.js";const r=[null,document,document.body,document.scrollingElement,document.documentElement];function s(o,t){let e=d(t);if(e===void 0){if(o==null)return window;e=o.closest(".scroll,.scroll-y,.overflow-auto")}return r.includes(e)?window:e}function u(o){return o===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:o.scrollTop}function f(o){return o===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:o.scrollLeft}let n;function w(){if(n!==void 0)return n;const o=document.createElement("p"),t=document.createElement("div");l(o,{width:"100%",height:"200px"}),l(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(o),document.body.appendChild(t);const e=o.offsetWidth;t.style.overflow="scroll";let i=o.offsetWidth;return e===i&&(i=t.clientWidth),t.remove(),n=e-i,n}export{u as a,f as b,w as c,s as g};
