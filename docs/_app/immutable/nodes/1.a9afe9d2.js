import{s as _,n as d,e as v}from"../chunks/scheduler.63274e7e.js";import{S as y,i as C,g as p,h as u,j as b,f as r,k as f,a as c,s as m,A as h,c as x}from"../chunks/index.4c66aeeb.js";import{p as k}from"../chunks/stores.a7a171b1.js";function g(i){let t,l="Unexpected situation",n,e,a="An unexpected error occurred. Please try again later, or contact us if the issue persists.";return{c(){t=p("h1"),t.textContent=l,n=m(),e=p("p"),e.textContent=a,this.h()},l(s){t=u(s,"H1",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-af43tz"&&(t.textContent=l),n=x(s),e=u(s,"P",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-s9yfee"&&(e.textContent=a),this.h()},h(){f(t,"class","text-4xl font-bold"),f(e,"class","py-4 text-xl mt-4")},m(s,o){c(s,t,o),c(s,n,o),c(s,e,o)},d(s){s&&(r(t),r(n),r(e))}}}function D(i){let t,l="404: Drained!",n,e,a=`The page you are looking for is gone. Drained. Not saved Disappeared. Tilted and left for
      greener pastures. Or at the very least it was <em>Not Found</em>. Sorry!`;return{c(){t=p("h1"),t.textContent=l,n=m(),e=p("p"),e.innerHTML=a,this.h()},l(s){t=u(s,"H1",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-17pmpr8"&&(t.textContent=l),n=x(s),e=u(s,"P",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-ekh2oc"&&(e.innerHTML=a),this.h()},h(){f(t,"class","text-4xl font-bold"),f(e,"class","py-4 text-xl mt-4")},m(s,o){c(s,t,o),c(s,n,o),c(s,e,o)},d(s){s&&(r(t),r(n),r(e))}}}function H(i){let t;function l(a,s){return a[0].status===404?D:g}let n=l(i),e=n(i);return{c(){t=p("div"),e.c(),this.h()},l(a){t=u(a,"DIV",{class:!0});var s=b(t);e.l(s),s.forEach(r),this.h()},h(){f(t,"class","max-w-full mx-auto mb-32 px-4 py-8 sm:py-16 w-[1200px]")},m(a,s){c(a,t,s),e.m(t,null)},p(a,[s]){n!==(n=l(a))&&(e.d(1),e=n(a),e&&(e.c(),e.m(t,null)))},i:d,o:d,d(a){a&&r(t),e.d()}}}function T(i,t,l){let n;return v(i,k,e=>l(0,n=e)),[n]}class $ extends y{constructor(t){super(),C(this,t,T,H,_,{})}}export{$ as component};
