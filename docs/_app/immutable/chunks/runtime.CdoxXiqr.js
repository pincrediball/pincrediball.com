var Pn=Array.isArray,zt=Array.prototype.indexOf,Fn=Array.from,qn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,Ln=Object.prototype,Mn=Array.prototype,Xt=Object.getPrototypeOf;const Yn=()=>{};function Hn(t){return t()}function Jt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,j=8,at=16,A=32,X=64,nt=128,O=256,K=512,d=1024,R=2048,B=4096,b=8192,P=16384,Qt=32768,wt=65536,jn=1<<17,tn=1<<19,Tt=1<<20,pt=Symbol("$state"),Bn=Symbol("legacy props"),Un=Symbol("");function mt(t){return t===this.v}function nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!nn(t,this.v)}function rn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function en(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function sn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Vn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Gn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Kn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $n(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Zn(){J=!0}const zn=1,Wn=2,Xn=4,Jn=8,Qn=16,tr=1,nr=2,rr=4,er=8,lr=16,sr=1,ar=2,on="[",fn="[!",_n="]",gt={},ur=Symbol();function ut(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function or(t){return xt(ut(t))}function cn(t,n=!1){var e;const r=ut(t);return n||(r.equals=At),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function ir(t,n=!1){return xt(cn(t,n))}function xt(t){return o!==null&&o.f&y&&(m===null?xn([t]):m.push(t)),t}function vn(t,n){return o!==null&&_t()&&o.f&(y|at)&&(m===null||!m.includes(t))&&un(),pn(t,n)}function pn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ut(),Dt(t,R),_t()&&u!==null&&u.f&d&&!(u.f&A)&&(h!==null&&h.includes(t)?(T(u,R),tt(u)):g===null?Dn([t]):g.push(t))),n}function Dt(t,n){var r=t.reactions;if(r!==null)for(var e=_t(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&R||!e&&a===u||(T(a,n),i&(d|O)&&(i&y?Dt(a,B):tt(a)))}}function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let S=!1;function fr(t){S=t}let w;function L(t){if(t===null)throw Rt(),gt;return w=t}function _r(){return L(k(w))}function cr(t){if(S){if(k(w)!==null)throw Rt(),gt;w=t}}function vr(t=1){if(S){for(var n=t,r=w;n--;)r=k(r);w=r}}function pr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===_n){if(t===0)return n;t-=1}else(r===on||r===fn)&&(t+=1)}var e=k(n);n.remove(),n=e}}var ht,St,It;function hr(){if(ht===void 0){ht=window;var t=Element.prototype,n=Node.prototype;St=vt(n,"firstChild").get,It=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return St.call(t)}function k(t){return It.call(t)}function dr(t,n){if(!S)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),L(e),e}return L(r),r}function Er(t,n){if(!S){var r=et(t);return r instanceof Comment&&r.data===""?k(r):r}return w}function yr(t,n=1,r=!1){let e=S?w:t;for(var l;n--;)l=e,e=k(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=rt();return e===null?l==null||l.after(a):e.before(a),L(a),a}return L(e),e}function wr(t){t.textContent=""}function hn(t){var n=y|R;u===null?n|=O:u.f|=Tt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Tr(t){const n=hn(t);return n.equals=At,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ot(e):I(e)}}}function dn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function kt(t){var n,r=u;z(dn(t));try{Ot(t),n=Vt(t)}finally{z(r)}return n}function Ct(t){var n=kt(t),r=(D||t.f&O)&&t.deps!==null?B:d;T(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function ot(t){Ot(t),H(t,0),T(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){u===null&&o===null&&ln(),o!==null&&o.f&O&&en(),ft&&rn()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=(t&X)!==0,s=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=C;try{dt(!0),U(a),a.f|=Qt}catch(c){throw I(a),c}finally{dt(i)}}else n!==null&&tt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&Tt)===0;if(!_&&!l&&e&&(s!==null&&En(a,s),o!==null&&o.f&y)){var p=o;(p.children??(p.children=[])).push(a)}return a}function mr(t){const n=F(j,null,!1);return T(n,d),n.teardown=t,n}function Ar(t){Nt();var n=u!==null&&(u.f&A)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=bt(t);return e}}function gr(t){return Nt(),it(t)}function xr(t){const n=F(X,t,!0);return(r={})=>new Promise(e=>{r.outro?Tn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function bt(t){return F(yt,t,!1)}function Dr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=it(()=>{t(),!e.ran&&(e.ran=!0,vn(r.l.r2,!0),Nn(n))})}function Rr(){var t=f;it(()=>{if(Cn(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&d&&T(r,B),q(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function it(t){return F(j,t,!0)}function Sr(t){return yn(t)}function yn(t,n=0){return F(j|at|n,t,!0)}function Ir(t,n=!0){return F(j|A,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ft,e=o;Et(!0),Z(null);try{n.call(null)}finally{Et(r),Z(e)}}}function Ft(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&tn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:k(e);e.remove(),e=s}r=!0}qt(t,n&&!r),Ft(t),H(t,0),T(t,P);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Pt(t);var i=t.parent;i!==null&&i.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tn(t,n){var r=[];Mt(t,r,!0),mn(r,()=>{I(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Mt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&wt)!==0||(e.f&A)!==0;Mt(e,n,s?r:!1),e=l}}}function Or(t){Yt(t,!0)}function Yt(t,n){if(t.f&b){q(t)&&U(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&wt)!==0||(r.f&A)!==0;Yt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let $=!1,lt=[];function Ht(){$=!1;const t=lt.slice();lt=[],Jt(t)}function kr(t){$||($=!0,queueMicrotask(Ht)),lt.push(t)}function An(){$&&Ht()}const jt=0,gn=1;let V=!1,G=jt,M=!1,Y=null,C=!1,ft=!1;function dt(t){C=t}function Et(t){ft=t}let x=[],N=0;let o=null;function Z(t){o=t}let u=null;function z(t){u=t}let m=null;function xn(t){m=t}let h=null,E=0,g=null;function Dn(t){g=t}let Bt=1,W=0,D=!1,f=null;function Ut(){return++Bt}function _t(){return!J||f!==null&&f.l===null}function q(t){var p;var n=t.f;if(n&R)return!0;if(n&B){var r=t.deps,e=(n&O)!==0;if(r!==null){var l,s,a=(n&K)!==0,i=e&&u!==null&&!D,_=r.length;if(a||i){for(l=0;l<_;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=K)}for(l=0;l<_;l++)if(s=r[l],q(s)&&Ct(s),s.wv>t.wv)return!0}(!e||u!==null&&!D)&&T(t,d)}return!1}function Rn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw V=!1,t}function Sn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&nt)===0)}function Q(t,n,r,e){if(V){if(r===null&&(V=!1),Sn(n))throw t;return}r!==null&&(V=!0);{Rn(t,n);return}}function Vt(t){var ct;var n=h,r=E,e=g,l=o,s=D,a=m,i=f,_=t.f;h=null,E=0,g=null,o=_&(A|X)?null:t,D=!C&&(_&O)!==0,m=null,f=t.ctx,W++;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(H(t,E),c!==null&&E>0)for(c.length=E+h.length,v=0;v<h.length;v++)c[E+v]=h[v];else t.deps=c=h;if(!D)for(v=E;v<c.length;v++)((ct=c[v]).reactions??(ct.reactions=[])).push(t)}else c!==null&&E<c.length&&(H(t,E),c.length=E);return l!==null&&W++,p}finally{h=n,E=r,g=e,o=l,D=s,m=a,f=i}}function In(t,n){let r=n.reactions;if(r!==null){var e=zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(T(n,B),n.f&(O|K)||(n.f^=K),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)In(t,r[e])}function U(t){var n=t.f;if(!(n&P)){T(t,d);var r=u,e=f;u=t;try{n&at?wn(t):qt(t),Ft(t),Pt(t);var l=Vt(t);t.teardown=typeof l=="function"?l:null,t.wv=Bt;var s=t.deps,a}catch(i){Q(i,t,r,e||t.ctx)}finally{u=r}}}function Gt(){if(N>1e3){N=0;try{sn()}catch(t){if(Y!==null)Q(t,Y,null);else throw t}}N++}function Kt(t){var n=t.length;if(n!==0){Gt();var r=C;C=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&d||(l.f^=d);var s=[];$t(l,s),On(s)}}finally{C=r}}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|b)))try{q(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(l){Q(l,e,null,e.ctx)}}}function kn(){if(M=!1,N>1001)return;const t=x;x=[],Kt(t),M||(N=0,Y=null)}function tt(t){G===jt&&(M||(M=!0,queueMicrotask(kn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(X|A)){if(!(r&d))return;n.f^=d}}x.push(n)}function $t(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&A)!==0,a=s&&(l&d)!==0,i=r.next;if(!a&&!(l&b))if(l&j){if(s)r.f^=d;else try{q(r)&&U(r)}catch(v){Q(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&yt&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),$t(_,n)}function Zt(t){var n=G,r=x;try{Gt();const l=[];G=gn,x=l,M=!1,Kt(r);var e=t==null?void 0:t();return An(),(x.length>0||l.length>0)&&Zt(),N=0,Y=null,e}finally{G=n,x=r}}async function Cr(){await Promise.resolve(),Zt()}function Cn(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=kt(t);return ot(t),e}if(o!==null){m!==null&&m.includes(t)&&an();var l=o.deps;t.rv<W&&(t.rv=W,h===null&&l!==null&&l[E]===t?E++:h===null?h=[t]:h.push(t),g!==null&&u!==null&&u.f&d&&!(u.f&A)&&g.includes(t)&&(T(u,R),tt(u)))}else if(r&&t.deps===null)for(var s=t,a=s.parent,i=s;a!==null;)if(a.f&y){var _=a;i=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(s=t,q(s)&&Ct(s)),t.v}function Nn(t){const n=o;try{return o=null,t()}finally{o=n}}const bn=-7169;function T(t,n){t.f=t.f&bn|n}function Nr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function br(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];z(s.effect),Z(s.reaction),bt(s.fn)}}finally{z(r),Z(e)}}f=n.p,n.m=!0}return{}}function Pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Jn as $,Xt as A,Wt as B,Zn as C,J as D,wt as E,Pn as F,Fn as G,fn as H,b as I,u as J,pn as K,Un as L,Mt as M,wr as N,mn as O,I as P,et as Q,rt as R,_n as S,o as T,ur as U,kr as V,zn as W,Wn as X,cn as Y,ut as Z,Xn as _,br as a,Qn as a0,k as a1,Rt as a2,gt as a3,pt as a4,Ln as a5,Mn as a6,Kn as a7,vn as a8,vt as a9,Rr as aA,ir as aB,bt as aC,it as aD,Zt as aE,Cr as aF,or as aG,nn as aH,$n as aa,Gn as ab,jn as ac,A as ad,X as ae,z as af,nr as ag,Bn as ah,Tr as ai,rr as aj,At as ak,tr as al,er as am,lr as an,Sr as ao,qn as ap,Z as aq,hr as ar,on as as,Vn as at,xr as au,sr as av,ar as aw,Yn as ax,mr as ay,Dr as az,yn as b,dr as c,_r as d,pr as e,Er as f,L as g,S as h,fr as i,Or as j,Ir as k,Tn as l,w as m,vr as n,Ar as o,Nr as p,f as q,cr as r,yr as s,Nn as t,gr as u,Jt as v,Cn as w,Hn as x,Pr as y,hn as z};