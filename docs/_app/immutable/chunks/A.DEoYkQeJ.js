import{a as p,t as h}from"./disclose-version.xGJWcNyR.js";import"./legacy.CXwMO4VO.js";import{h as l,d as v,ao as b,c,r as _,n as g}from"./runtime.CdoxXiqr.js";import{s as x}from"./attributes.BWNWuNWu.js";import{p as u}from"./props.C5q4xul7.js";function N(a,t,r,e,s){var f;l&&v();var n=(f=t.$$slots)==null?void 0:f[r],i=!1;n===!0&&(n=t.children,i=!0),n===void 0||n(a,i?()=>e:e)}function o(a){var t,r,e="";if(typeof a=="string"||typeof a=="number")e+=a;else if(typeof a=="object")if(Array.isArray(a)){var s=a.length;for(t=0;t<s;t++)a[t]&&(r=o(a[t]))&&(e&&(e+=" "),e+=r)}else for(r in a)a[r]&&(e&&(e+=" "),e+=r);return e}function y(){for(var a,t,r=0,e="",s=arguments.length;r<s;r++)(a=arguments[r])&&(t=o(a))&&(e&&(e+=" "),e+=t);return e}function A(a){return typeof a=="object"?y(a):a??""}function C(a,t,r){var e=a.__className,s=m(t);l&&a.getAttribute("class")===s?a.__className=s:(e!==s||l&&a.getAttribute("class")!==s)&&(s===""?a.removeAttribute("class"):a.setAttribute("class",s),a.__className=s)}function k(a,t,r){var e=a.__className,s=m(t);l&&a.className===s?a.__className=s:(e!==s||l&&a.className!==s)&&(t==null?a.removeAttribute("class"):a.className=s,a.__className=s)}function m(a,t){return(a??"")+""}var d=h('<a target="_blank" rel="noreferrer"><span class="underline"><!></span><sup class="text-xs no-underline">↗</sup></a>');function D(a,t){let r=u(t,"href",8),e=u(t,"dark",8,!1);var s=d(),n=c(s),i=c(n);N(i,t,"default",{}),_(n),g(),_(s),b(()=>{k(s,A(e()?"a-internal-dark":"a-internal")),x(s,"href",r())}),p(a,s)}export{D as A,k as a,C as b,A as c,N as s};