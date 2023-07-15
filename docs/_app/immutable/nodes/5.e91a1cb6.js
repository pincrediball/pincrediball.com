import{s as re}from"../chunks/scheduler.63274e7e.js";import{S as ne,i as oe,g as _,m as fe,s as H,h as g,j as p,n as ue,f as h,c as O,k as u,a as M,z as f,o as me,d as k,p as ie,t as I,b as ce,B as he,r as P,u as F,v as G,w as J,H as Z,A as de,C as ee}from"../chunks/index.4c66aeeb.js";import{e as te}from"../chunks/each.e59479a4.js";function le(o,l,r){const a=o.slice();return a[1]=l[r],a}function ae(o){let l,r,a=te(o[0].children),t=[];for(let s=0;s<a.length;s+=1)t[s]=se(le(o,a,s));const c=s=>I(t[s],1,1,()=>{t[s]=null});return{c(){l=_("ul");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){l=g(s,"UL",{class:!0});var n=p(l);for(let e=0;e<t.length;e+=1)t[e].l(n);n.forEach(h),this.h()},h(){u(l,"class","flex flex-col gap-2 ml-8 mt-2 list-disc")},m(s,n){M(s,l,n);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(l,null);r=!0},p(s,n){if(n&1){a=te(s[0].children);let e;for(e=0;e<a.length;e+=1){const v=le(s,a,e);t[e]?(t[e].p(v,n),k(t[e],1)):(t[e]=se(v),t[e].c(),k(t[e],1),t[e].m(l,null))}for(ie(),e=a.length;e<t.length;e+=1)c(e);ce()}},i(s){if(!r){for(let n=0;n<a.length;n+=1)k(t[n]);r=!0}},o(s){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)I(t[n]);r=!1},d(s){s&&h(l),he(t,s)}}}function se(o){let l,r;return l=new K({props:{entry:o[1]}}),{c(){P(l.$$.fragment)},l(a){F(l.$$.fragment,a)},m(a,t){G(l,a,t),r=!0},p(a,t){const c={};t&1&&(c.entry=a[1]),l.$set(c)},i(a){r||(k(l.$$.fragment,a),r=!0)},o(a){I(l.$$.fragment,a),r=!1},d(a){J(l,a)}}}function _e(o){var v;let l,r,a=o[0].text+"",t,c,s,n,e=((v=o[0].children)==null?void 0:v.length)&&ae(o);return{c(){l=_("li"),r=_("a"),t=fe(a),s=H(),e&&e.c(),this.h()},l(i){l=g(i,"LI",{});var d=p(l);r=g(d,"A",{class:!0,href:!0});var $=p(r);t=ue($,a),$.forEach(h),s=O(d),e&&e.l(d),d.forEach(h),this.h()},h(){u(r,"class","a-toc"),u(r,"href",c=`#${o[0].slug}`)},m(i,d){M(i,l,d),f(l,r),f(r,t),f(l,s),e&&e.m(l,null),n=!0},p(i,[d]){var $;(!n||d&1)&&a!==(a=i[0].text+"")&&me(t,a),(!n||d&1&&c!==(c=`#${i[0].slug}`))&&u(r,"href",c),($=i[0].children)!=null&&$.length?e?(e.p(i,d),d&1&&k(e,1)):(e=ae(i),e.c(),k(e,1),e.m(l,null)):e&&(ie(),I(e,1,1,()=>{e=null}),ce())},i(i){n||(k(e),n=!0)},o(i){I(e),n=!1},d(i){i&&h(l),e&&e.d()}}}function ge(o,l,r){let{entry:a}=l;return o.$$set=t=>{"entry"in t&&r(0,a=t.entry)},[a]}class K extends ne{constructor(l){super(),oe(this,l,ge,_e,re,{entry:0})}}function pe(o){let l,r,a,t,c,s,n="Table of Contents",e,v,i,d,$,E,S,b,x,T,R=o[0].bookmarks.html+"",j,U,q,C,z,B=o[0].glossary.html+"",D;return i=new K({props:{entry:o[0].bookmarks.tableOfContents}}),E=new K({props:{entry:o[0].glossary.tableOfContents}}),{c(){l=_("div"),r=_("div"),a=_("div"),t=_("div"),c=_("div"),s=_("h2"),s.textContent=n,e=H(),v=_("ul"),P(i.$$.fragment),d=H(),$=_("ul"),P(E.$$.fragment),S=H(),b=_("div"),x=_("article"),T=new Z(!1),j=H(),U=_("hr"),q=H(),C=_("article"),z=new Z(!1),this.h()},l(m){l=g(m,"DIV",{class:!0});var y=p(l);r=g(y,"DIV",{class:!0});var w=p(r);a=g(w,"DIV",{class:!0});var A=p(a);t=g(A,"DIV",{class:!0});var N=p(t);c=g(N,"DIV",{class:!0});var L=p(c);s=g(L,"H2",{class:!0,"data-svelte-h":!0}),de(s)!=="svelte-3ee51f"&&(s.textContent=n),e=O(L),v=g(L,"UL",{class:!0});var Q=p(v);F(i.$$.fragment,Q),Q.forEach(h),d=O(L),$=g(L,"UL",{class:!0});var W=p($);F(E.$$.fragment,W),W.forEach(h),L.forEach(h),N.forEach(h),A.forEach(h),S=O(w),b=g(w,"DIV",{});var V=p(b);x=g(V,"ARTICLE",{id:!0,class:!0});var X=p(x);T=ee(X,!1),X.forEach(h),j=O(V),U=g(V,"HR",{class:!0}),q=O(V),C=g(V,"ARTICLE",{id:!0,class:!0});var Y=p(C);z=ee(Y,!1),Y.forEach(h),V.forEach(h),w.forEach(h),y.forEach(h),this.h()},h(){u(s,"class","text-xl font-bold"),u(v,"class","flex flex-col gap-2 mt-2"),u($,"class","flex flex-col gap-2 mt-2"),u(c,"class","p-4 flex flex-col gap-2"),u(t,"class","rounded bg-gradient-to-r from-zinc-50 to-zinc-200 text-zinc-900 shadow-firm sticky top-24"),u(a,"class","order-first md:order-last mb-4"),T.a=null,u(x,"id","bookmarks"),u(x,"class","scroll-mt-24 prose prose-invert"),u(U,"class","my-8 border-t border-t-amber-400/50"),z.a=null,u(C,"id","glossary"),u(C,"class","scroll-mt-24 prose prose-invert mt-16"),u(r,"class","grid md:grid-cols-[2fr_1fr] grid-cols-1 w-full gap-4 lg:gap-16"),u(l,"class","w-[1200px] max-w-full mx-auto px-4 pt-8 md:pt-12 pb-16 page-container svelte-10a396g")},m(m,y){M(m,l,y),f(l,r),f(r,a),f(a,t),f(t,c),f(c,s),f(c,e),f(c,v),G(i,v,null),f(c,d),f(c,$),G(E,$,null),f(r,S),f(r,b),f(b,x),T.m(R,x),f(b,j),f(b,U),f(b,q),f(b,C),z.m(B,C),D=!0},p(m,[y]){const w={};y&1&&(w.entry=m[0].bookmarks.tableOfContents),i.$set(w);const A={};y&1&&(A.entry=m[0].glossary.tableOfContents),E.$set(A),(!D||y&1)&&R!==(R=m[0].bookmarks.html+"")&&T.p(R),(!D||y&1)&&B!==(B=m[0].glossary.html+"")&&z.p(B)},i(m){D||(k(i.$$.fragment,m),k(E.$$.fragment,m),D=!0)},o(m){I(i.$$.fragment,m),I(E.$$.fragment,m),D=!1},d(m){m&&h(l),J(i),J(E)}}}function ve(o,l,r){let{data:a}=l;return o.$$set=t=>{"data"in t&&r(0,a=t.data)},[a]}class ke extends ne{constructor(l){super(),oe(this,l,ve,pe,re,{data:0})}}export{ke as component};
